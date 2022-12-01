import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { ProjectRootStackParamList } from './Project';

import { globalView } from '../components/ProjectDetail/styles';

import { ErrorDisplay } from '../components/ProjectDetail/ErrorDisplay';
import { Spacer } from '../components/atoms/Spacer/Spacer';
import { NavigationButton } from '../components/ProjectDetail/NavigationButton/NavigationButton';
import { TitleSection } from '../components/ProjectDetail/Title/TitleSection';
import { TaskSection } from '../components/ProjectDetail/TaskSection/TaskSection';
import { LocalRealtimeDatabaseRepository } from '../repository/realtimeDatabase/localRealtimeDatabaseRepository';
import { useAuth } from '../store/auth/useAuth';

const database = new LocalRealtimeDatabaseRepository();

export const ProjectDetail = () => {
  const { params } = useRoute<RouteProp<ProjectRootStackParamList>>();
  const { user } = useAuth();

  if (!params || !user) {
    return <ErrorDisplay />;
  }

  const data = database.getUserProject(user.id, params.id);

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
