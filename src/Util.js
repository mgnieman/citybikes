function Util() {}

Util.fetchData = function() {
  return new Promise((resolve, reject) => {
    fetch('http://api.citybik.es/v2/networks/').then(response => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject('failure');
      }
    });
  });
};

export default Util;
