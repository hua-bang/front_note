export function request(url, data = null, options = {}) {
  return new Promise((resolve, reject) => {
    const { method = "GET" } = options;
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.withCredentials = false;
    Object.keys(options).forEach(key => {
      xhr.setRequestHeader(key, options[key]);
    });
    xhr.onload = () => {
      const response = JSON.parse(xhr.response);
      resolve(response);
    }

    xhr.onerror = (err) => {
      reject(err);
    }
    xhr.send(data);
  });
}
