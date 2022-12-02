// import React, { createContext, FC, useReducer } from 'react';
// import { ProjectsUserData } from '../../repository/realtimeDatabase/realtimeDatabaseRepository';
//
// const ProjectContext = createContext<ProjectsUserData | null>(null);
//
// type ProjectStoreProviderProps = {
//   children: JSX.Element | JSX.Element[];
// };
//
// type StateContent = {
//   listProjects: ProjectsUserData[] | undefined;
// };
//
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'k':
//       return state;
//
//     default:
//       return state;
//   }
// };
//
// export const ProjectStoreProvider: FC<ProjectStoreProviderProps> = ({
//   children,
// }) => {
//   const [state, dispatch] = useReducer(reducer, null);
//
//   return (
//     <ProjectContext.Provider value={null}>{children}</ProjectContext.Provider>
//   );
// };
