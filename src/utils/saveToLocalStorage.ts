const saveToLocalStorage = (name: string, value: string): void => {
  localStorage.setItem(name, value);
};

export default saveToLocalStorage;
