import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProjectDetail } from './ProjectDetail';
import { ListProject } from '../components/Project/ListProject/ListProject';

export type ProjectRootStackParamList = {
  projects: undefined;
  detail: { id: string };
};

const Stack = createNativeStackNavigator<ProjectRootStackParamList>();

export const Project = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'projects'}
        component={ListProject}
        options={{ header: () => null }} // used to hide header
      />
      <Stack.Screen
        name={'detail'}
        component={ProjectDetail}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};
