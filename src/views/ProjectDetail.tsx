import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { ProjectRootStackParamList } from './Project';

import { mockProjectData } from '../mocks/projectData';

import { globalView } from '../components/ProjectDetail/styles';

import { ErrorDisplay } from '../components/ProjectDetail/ErrorDisplay';
import { Spacer } from '../components/atoms/Spacer/Spacer';
import { NavigationButton } from '../components/ProjectDetail/NavigationButton/NavigationButton';
import { TitleSection } from '../components/ProjectDetail/Title/TitleSection';
import { TaskSection } from '../components/ProjectDetail/TaskSection/TaskSection';

export const ProjectDetail = () => {
  const { params } = useRoute<RouteProp<ProjectRootStackParamList>>();

  if (!params) {
    return <ErrorDisplay />;
  }

  // Todo connect with repository
  const data = mockProjectData.find(project => project.id === params.id);

  if (!data) {
    return <ErrorDisplay />;
  }

  return (
    <View style={globalView.container}>
      <NavigationButton />
      <Spacer space={'m'} direction={'bottom'} />

      <TitleSection title={data.title} subtitle={data.subtitle} />
      <Spacer space={'xl'} direction={'bottom'} />

      <TaskSection tasks={data.tasks} />

      <ScrollView>
        <View>
          <Text>COUCOU</Text>
        </View>
      </ScrollView>
    </View>
  );
};
