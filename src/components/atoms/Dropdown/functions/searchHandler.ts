export const searchHandler = (
  keyword: string,
  labelValue: string,
  buttonName: string,
) => {
  if (labelValue === buttonName) {
    return true;
  }

  return labelValue.includes(keyword.toLowerCase());
};
