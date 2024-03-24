export const getError = (error) => {
  // Passing error object to log different error message
  console.info(`Whole Error: ${error}`);
  console.info(`Error.message: ${error.message}`);
  console.info(
    `Custom error msg from server.js: ${error.response.data.message}`
  );

  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};
