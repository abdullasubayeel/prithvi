export const dummyFarms = [
  {
    id: 'farm1',
    size: '20 acres',
    cropsGrown: ['Corn', 'Wheat', 'Soybeans'],
    googlePlaceId: 'your_google_place_id_1',
    soilType: 'Loam',
    irrigation: true,
    livestock: ['Cattle', 'Sheep'],
    organic: false,
    certifications: ['GAP Certified'],
    equipment: ['Tractor', 'Harvester'],
  },
  {
    id: 'farm2',
    size: '20 acres',
    cropsGrown: ['Corn', 'Wheat', 'Soybeans'],
    googlePlaceId: 'your_google_place_id_1',
    soilType: 'Loam',
    irrigation: true,
    livestock: ['Cattle', 'Sheep'],
    organic: false,
    certifications: ['GAP Certified'],
    equipment: ['Tractor', 'Harvester'],
  },
];
export const dummyFarmers = [
  {
    id: 1,
    name: 'John Doe',
    age: 35,
    farmingExperience: '10 years',
    farmerDetails: 'I have been farming for more than 10 years',
    contactDetails: {
      email: 'john@example.com',
      phone: '123-456-7890',
    },
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    farmsOwned: ['farm1'],
  },
  {
    id: 2,
    name: 'Maria Rodriguez',
    age: 35,
    farmingExperience: '7 years',
    contactDetails: {
      email: 'john@example.com',
      phone: '123-456-7890',
    },
    farmerDetails:
      "Hi there! I'm Maria Rodriguez, a proud farmer with a deep-rooted connection to the land. Nestled in the picturesque valleys of California, my family and I manage a flourishing farm that has been passed down through generations. With a warm smile and dirt-streaked hands, I embrace the daily challenges and joys that come with cultivating the earth.Having spent my entire life surrounded by the rhythm of seasons, I've developed a profound respect for sustainable agriculture. Our farm, spanning 30 acres, is a haven for a variety of crops like vine-ripened tomatoes, bell peppers, and rows of vibrant sunflowers. It's not just about growing food; it's about nurturing the soil that sustains us.I'm an advocate for responsible farming practices, incorporating natural fertilizers and eco-friendly pest control methods. The farm is more than a workplace; it's a sanctuary where the harmony of nature guides our daily decisions. Whether it's tending to the fields or sharing insights with fellow farmers, I find joy in being a steward of this land and fostering a community that values the beauty of sustainable agriculture.",
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    farmsOwned: ['farm1'],
  },
  {
    id: 3,
    name: 'John Doe',
    age: 35,
    farmerDetails: 'Lets connect and grow more trees together.',
    farmingExperience: '3 years',
    contactDetails: {
      email: 'john@example.com',
      phone: '123-456-7890',
    },
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    farmsOwned: ['farm1'],
  },
];
