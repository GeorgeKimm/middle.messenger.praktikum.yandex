export const setUrl = (event: MouseEvent, path: string): void => {
  event.preventDefault();
  window.location.href = path;
};
