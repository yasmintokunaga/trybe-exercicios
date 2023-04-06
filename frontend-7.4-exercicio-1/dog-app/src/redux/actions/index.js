export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export function requestStarted() {
  return { type: REQUEST_STARTED };
}

export function requestedSuccessful(imageURL) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: imageURL,
  };
}

export function requestFailed(error) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export function fetchDogImage() {
  return () => {
    
  }
}
