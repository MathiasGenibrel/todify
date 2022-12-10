/**
 * Remove duplicate from Array Object List
 * @param list - Array with duplicate
 */
export const removeDuplicate = <T>(list: T[]): T[] => {
  return list.filter((value: any, index: number) => {
    const _value = JSON.stringify(value);
    return (
      index ===
      list.findIndex(element => {
        return JSON.stringify(element) === _value;
      })
    );
  });
};
