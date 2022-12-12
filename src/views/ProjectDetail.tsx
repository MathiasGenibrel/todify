import React from 'react';
import { ScrollView, View } from 'react-native';

import { globalView } from '../components/ProjectDetail/styles';

import { ErrorDisplay } from '../components/ProjectDetail/ErrorDisplay';
import { Spacer } from '../components/atoms/Spacer/Spacer';
import { NavigationButton } from '../components/ProjectDetail/NavigationButton/NavigationButton';
import { TitleSection } from '../components/ProjectDetail/Title/TitleSection';
import { TaskSection } from '../components/ProjectDetail/TaskSection/TaskSection';
import { Card, CardType } from '../components/Project/Card/Card';
import { useProjectsStore } from '../store/project/useProjectsStore';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { ProjectRootStackParamList, RootName } from './Project';

export const ProjectDetail = () => {
  const { params } =
    useRoute<RouteProp<ProjectRootStackParamList, RootName.DETAIL>>();
  const navigation = useNavigation<NavigationProp<ProjectRootStackParamList>>();

  const { projects, taskHandler } = useProjectsStore();

  const Task = taskHandler(params.id);

  const project = projects.find(
    currentProject => currentProject.id === params.id,
  );

  if (!project) {
    return <ErrorDisplay />;
  }

  return (
    <View style={globalView.container}>
      <NavigationButton />
      <Spacer space={'m'} direction={'bottom'} />

      <TitleSection title={project.title} subtitle={project.subtitle} />
      <Spacer space={'xl'} direction={'bottom'} />

      <TaskSection projectId={params.id} tasks={project.tasks} />

      <ScrollView>
        <Spacer space={'ml'} />
        {project.tasks?.map(task => (
          <React.Fragment key={task.id}>
            <Card
              pressHandler={() =>
                navigation.navigate(RootName.TASK_HANDLER, {
                  projectId: params.id,
                  isUpdate: true,
                  task: task,
                })
              }
              longPressDeleteAction={() => Task.delete(task.id)}
              title={task.name}
              subtitle={task.description}
              date={task.dateTarget}
              status={task.status}
              currentProgression={task.isDone ? 100 : 0}
              cardType={CardType.TASK}
            />
            <Spacer space={'ml'} />
          </React.Fragment>
        ))}
        <Spacer space={'l'} />
      </ScrollView>
    </View>
  );
};
