const YelpAPI = {
  async search(term, location) {
    const response = await fetch(`/api/search?term=${term}&location=${location}`);
    if (!response || !response.ok) {
      throw new Error('Failed to get city from coordinates');
    }
    try {
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Invalid or empty JSON received. Location may not be valid.");
      return { error: "Location not found" };
    }
  },
  
    async getCityFromCoordinates(lat, lon) {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10`);
      if (!response.ok) {
        throw new Error('Failed to get city from coordinates');
      }
      const data = await response.json();

      return {
        city: data.address.city || data.address.town,
        state: data.address.state
      };
    },
  };
  
  export default YelpAPI;
  