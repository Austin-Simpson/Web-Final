const YelpAPI = {
    async search(term, location) {
      const response = await fetch(`/api/search?term=${term}&location=${location}`);
      const data = await response.json();
      return data;
    },
  
    async getCity() {
      const response = await fetch(`https://ipapi.co/json/`);
      const data = await response.json();
      return data.city;
    },
  };
  
  export default YelpAPI;
  