const url = "http://178.63.13.157:8090/mock-api/api";

export function getProjects() {
  return fetch(url + "/projects")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong :(");
      }
      return res.json();
    })
    .catch(errorHandler);
}

export function getGateways() {
  return fetch(url + "/gateways")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong :(");
      }
      return res.json();
    })
    .catch(errorHandler);
}

function errorHandler(err) {
  alert(err);
}
