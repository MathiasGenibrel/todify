import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Spacer } from '../../atoms/Spacer/Spacer';
import { Card } from '../Card/Card';

import { ProjectRootStackParamList } from '../../../views/Project';
import { spacings } from '../../../styles/theme';
import { useProjects } from '../../../hooks/useProjects';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacings.xl,
  },
});

export const ListProject = () => {
  const navigation = useNavigation<NavigationProp<ProjectRootStackParamList>>();
  const { projects } = useProjects();

  // TODO use a real error display
  if (!projects.length) {
    return <Text>NO PROJECTS</Text>;
  }

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
