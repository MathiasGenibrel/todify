import React from 'react';

import { Project } from '../views/Project';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Spacer } from '../components/atoms/Spacer/Spacer';
import { Task } from '../views/Task';
import { Activity } from '../views/Activity';

export type RootStackParamList = {
  project: undefined;
  task: undefined;
  activity: undefined;
};

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

export const AppRouter = () => {
  return (
    <>
      <Spacer space={'xl'} />
      <Tab.Navigator initialRouteName={'task'} tabBarPosition={'top'}>
        <Tab.Screen
          name="project"
          component={Project}
          options={{ tabBarLabelStyle: { textTransform: 'capitalize' } }}
        />
        <Tab.Screen
          name="task"
          component={Task}
          options={{
            title: "Today's Task",
            tabBarLabelStyle: { textTransform: 'capitalize' },
          }}
        />
        <Tab.Screen
          name="activity"
          component={Activity}
          options={{
            title: 'Last Activity',
            tabBarLabelStyle: { textTransform: 'capitalize' },
          }}
        />
      </Tab.Navigator>
    </>
  );
};
