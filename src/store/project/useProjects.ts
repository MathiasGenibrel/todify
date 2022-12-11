import { useEffect, useReducer } from 'react';

import { useRequiredAuth } from '../../hooks/useRequiredAuth';

import { ActionType, reducerProject } from './reducer';
import { LocalRealtimeDatabaseRepository } from '../../repository/realtimeDatabase/localRealtimeDatabaseRepository';
import { ProjectsUserData } from '../../repository/realtimeDatabase/realtimeDatabaseRepository';
import { TaskContent } from '../../types/firebaseDB.types';
import { CreateOrUpdateTask, DeleteTask } from './projectStore';

const projectDB = new LocalRealtimeDatabaseRepository();

export const useProjects = () => {
  const [projects, dispatch] = useReducer(reducerProject, []);
  const user = useRequiredAuth();

  useEffect(() => {
    projectDB.getAllUserProjects(user.id).then(projectsList =>
      dispatch({
        type: ActionType.INIT,
        payload: { projectsList },
      }),
    );
  }, [user.id]);

  const createProject = (userProject: ProjectsUserData) =>
    dispatch({ type: ActionType.CREATE, payload: { project: userProject } });

  const updateProject = (projectId: string, projectData: ProjectsUserData) => {
    dispatch({
      type: ActionType.UPDATE,
      payload: { id: projectId, project: projectData },
    });
  };

  const deleteProject = (projectId: string) => {
    dispatch({
      type: ActionType.DELETE,
      payload: { id: projectId },
    });
  };

  const getProjectById = (id: string) => {
    const projectToUpdate = projects.find(project => project.id === id);

    if (!projectToUpdate) {
      throw new Error('Bad id');
    }

    return { ...projectToUpdate };
  };

  const createTask: CreateOrUpdateTask = (
    id: string,
    taskContent: TaskContent,
  ) => {
    const project = getProjectById(id);

    project.tasks = project.tasks
      ? [...project.tasks, taskContent]
      : [taskContent];

    dispatch({
      type: ActionType.UPDATE,
      payload: { id, projectUpdated: project },
    });
  };

  const updateTask: CreateOrUpdateTask = (id, taskContent: TaskContent) => {
    const project = getProjectById(id);

    if (!project.tasks) {
      throw new Error('Cannot update a task, if there is none');
    }

    project.tasks = [
      ...project.tasks.filter(task => task.id !== taskContent.id),
      taskContent,
    ];

    dispatch({
      type: ActionType.UPDATE,
      payload: { id, projectUpdated: project },
    });
  };

  const deleteTask: DeleteTask = (id: string, taskId: string) => {
    const project = getProjectById(id);

    if (!project.tasks) {
      throw new Error('Cannot delete a task, if there is none');
    }

    project.tasks = project.tasks.filter(task => task.id !== taskId);
    project.totalTasks = project.tasks.length;

    dispatch({
      type: ActionType.UPDATE,
      payload: { id, projectUpdated: project },
    });
  };

  return {
    projects,
    getProjectById,
    // Project handler
    createProject,
    updateProject,
    deleteProject,

    // Task Handler
    createTask,
    updateTask,
    deleteTask,
  };
};
