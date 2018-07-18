const DataUtil = {
  logDupes: data => {
    function getDupeCitiesAndCountries(dupesArr) {
      const dupeCitiesAndCountries = [];
      data.forEach(network => {
        if (dupesArr.includes(network.location.city)) {
          dupeCitiesAndCountries.push({
            city: network.location.city,
            country: network.location.country
          });
        }
      });
      const sorted = dupeCitiesAndCountries.sort(compareCitiesInDupe);
      return sorted;
    }

    function getDupes(list) {
      const uniqueCities = [];
      const dupes = [];
      list.forEach(network => {
        if (!uniqueCities.includes(network.location.city)) {
          uniqueCities.push(network.location.city);
        } else {
          dupes.push(network.location.city);
        }
      });
      return dupes;
    }

    function compareCitiesInDupe(a, b) {
      if (a.city < b.city) return -1;
      if (a.city > b.city) return 1;
      return 0;
    }
    return getDupeCitiesAndCountries(getDupes(data));
  },

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

  calculateCenter: (country, city, data) => {
    const lats = [];
    const lngs = [];
    let mapInfo = {};
    if (data) {
      data.map(network => {
        if (
          (network.location.city === city &&
            network.location.country === country) ||
          (city === 'all' && network.location.country === country)
        ) {
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
