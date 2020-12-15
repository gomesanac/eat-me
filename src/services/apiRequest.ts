const apiRequest = (api: string): Promise<void> => fetch(api).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export default apiRequest;
