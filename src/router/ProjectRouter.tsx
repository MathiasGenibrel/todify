import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ListProject } from '../components/Project/ListProject/ListProject';
import { ProjectDetail } from '../views/ProjectDetail';
import { TaskForm } from '../components/ProjectDetail/CreateTaskForm/TaskForm';
import { CreateStatusForm } from '../components/ProjectDetail/CreateStatusForm/CreateStatusForm';

import { ProjectRootStackParamList, RootName } from '../views/Project';

const Stack = createNativeStackNavigator<ProjectRootStackParamList>();

export const ProjectRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name={RootName.PROJECTS}
          component={ListProject}
          options={{ header: () => null }} // used to hide header
        />
        <Stack.Screen
          name={RootName.DETAIL}
          component={ProjectDetail}
          options={{ header: () => null }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name={RootName.CREATE_TASK}
          component={TaskForm}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name={RootName.CREATE_STATUS}
          component={CreateStatusForm}
          options={{ header: () => null }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
