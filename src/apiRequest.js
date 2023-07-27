const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if(!response.ok) {
      throw new Error(errMsg || response.statusText, 'Please reload the page');
    }
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
}

export default apiRequest