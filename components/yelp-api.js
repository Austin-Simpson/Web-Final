const YelpAPI = {
    async search(term, location) {
      const response = await fetch(`/api/search?term=${term}&location=${location}`);
      const data = await response.json();
      console.log(data);
      return data;
    },
  
    async getCityFromCoordinates(lat, lon) {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10`);
      const data = await response.json();
      return {
        city: data.address.city || data.address.town,
        state: data.address.state
      };
    },
  };
  
  export default YelpAPI;
  