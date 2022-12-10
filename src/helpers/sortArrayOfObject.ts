export const sortArrayOfObject = <T>(list: T[], property: keyof T) => {
  return list.sort((a, b) =>
    (a[property] as string).localeCompare(b[property] as string),
  );
};
