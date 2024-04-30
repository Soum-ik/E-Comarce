// Creating a promise that resolves after 2000 milliseconds
export const waitTwoSeconds = ({ duration }) => {
console.log(duration, "durations");
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
