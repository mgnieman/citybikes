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
  }
};
export default DataUtil;
