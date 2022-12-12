import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Spacer } from '../../atoms/Spacer/Spacer';
import { Card } from '../Card/Card';

import { ProjectRootStackParamList, RootName } from '../../../views/Project';
import { spacings } from '../../../styles/theme';
import { useProjectsStore } from '../../../store/project/useProjectsStore';
import { Button, EButton } from '../../atoms/Button/Button';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacings.xl,
  },
});

export const ListProject = () => {
  const navigation = useNavigation<NavigationProp<ProjectRootStackParamList>>();
  const { projects, projectHandler } = useProjectsStore();
  const Project = projectHandler();

  // TODO use a real error display
  if (!projects.length) {
    return (
      <>
        <Text>NO PROJECTS</Text>
        <Button
          pressHandler={() => navigation.navigate(RootName.PROJECT_HANDLER, {})}
          text={'Create a Project'}
          type={EButton.PRIMARY}
        />
      </>
    );
  }

  const clickHandler = (id: string) => {
    navigation.navigate(RootName.DETAIL, { id });
  };

  return (
    <ScrollView style={styles.container}>
      <Spacer space={'xl'} direction={'bottom'} />
      {projects.map(project => (
        <React.Fragment key={project.id}>
          <Card
            {...project}
            pressHandler={() => clickHandler(project.id)}
            longPressDeleteAction={() => Project.delete(project.id)}
          />
          <Spacer space={'l'} direction={'bottom'} />
        </React.Fragment>
      ))}
      <Spacer space={'xl'} direction={'all'} />

      <Button
        pressHandler={() => navigation.navigate(RootName.PROJECT_HANDLER, {})}
        text={'Create a Project'}
        type={EButton.PRIMARY}
      />
      <Spacer space={'4xl'} direction={'all'} />
    </ScrollView>
  );
};
