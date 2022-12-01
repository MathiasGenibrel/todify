import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Spacer } from '../../atoms/Spacer/Spacer';
import { Card } from '../Card/Card';

import { ProjectRootStackParamList } from '../../../views/Project';
import { spacings } from '../../../styles/theme';
import { LocalRealtimeDatabaseRepository } from '../../../repository/realtimeDatabase/localRealtimeDatabaseRepository';
import { useAuth } from '../../../store/auth/useAuth';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacings.xl,
  },
});

const database = new LocalRealtimeDatabaseRepository();

export const ListProject = () => {
  const navigation = useNavigation<NavigationProp<ProjectRootStackParamList>>();
  const { user } = useAuth();

  // TODO use a real error display
  if (!user) {
    return <Text>NO USER</Text>;
  }

  const projects = database.getAllUserProjects(user.id);

  const clickHandler = (id: string) => {
    navigation.navigate('detail', { id });
  };

  return (
    <ScrollView style={styles.container}>
      <Spacer space={'xl'} direction={'bottom'} />
      {projects.map(project => (
        <React.Fragment key={project.id}>
          <Card {...project} pressHandler={() => clickHandler(project.id)} />
          <Spacer space={'l'} direction={'bottom'} />
        </React.Fragment>
      ))}
      <Spacer space={'xl'} direction={'all'} />
    </ScrollView>
  );
};
