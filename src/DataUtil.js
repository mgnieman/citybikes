const DataUtil = {
  getCities: (data, country) => {
    const cities = [];
    data.forEach(shop => {
      const matchingCityIndex = cities.indexOf(
        cities.find(city => shop.location.city === city.city)
      );

      if (matchingCityIndex === -1) {
        cities.push({
          city: shop.location.city,
          shopNames: [shop.name]
        });
      } else {
        cities[matchingCityIndex].shopNames.push(shop.name);
      }
    });
    return cities;
  },

  calculateCenter: (city, data) => {
    const lats = [];
    const lngs = [];
    let mapInfo = {};
    if (data) {
      data.map(network => {
        if (network.location.city === city) {
          lats.push(parseFloat(network.location.latitude));
          lngs.push(parseFloat(network.location.longitude));
        }
        return mapInfo;
      });

      mapInfo = {
        center: {
          lat: lats.reduce((a, b) => a + b, 0) / lats.length,
          lng: lngs.reduce((a, b) => a + b, 0) / lngs.length
        }
      };
    }
    return mapInfo;
  }
};
export default DataUtil;
