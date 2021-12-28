const LoweReplace = (str: string) => {
  return str.toLocaleLowerCase().replace(/\s+/g, '');
};
export default LoweReplace;
