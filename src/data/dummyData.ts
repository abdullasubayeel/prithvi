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

export const dummyStatus = [
  {id: 1, name: 'Thameez', time: '2024-01-18T02:29:17.304Z'},
  {id: 2, name: 'Jaya SHop', time: '2024-01-18T11:29:17.304Z'},
  {id: 3, name: 'Dhanalaxmi Lulu Suppkier', time: '2024-01-18T04:29:17.304Z'},
  {id: 4, name: 'Syed Alavi', time: '2024-01-18T01:29:17.304Z'},
];

export const dummyCalls = [
  {
    id: 1,
    name: 'Areeb Kazia',
    frequency: 1,
    status: 'Missed',
    time: '2024-01-18T01:29:17.304Z',
  },
  {
    id: 2,
    name: 'Simaan',
    frequency: 1,
    status: 'Outgoing',
    time: '2024-01-18T01:29:17.304Z',
  },
  {
    id: 3,
    name: 'Ammi',
    frequency: 3,
    status: 'Incoming',
    time: '2024-01-18T01:29:17.304Z',
  },
  {
    id: 4,
    name: 'Nayil Ahmed',
    frequency: 1,
    status: 'Outgoing',
    time: '2023-01-18T01:29:17.304Z',
  },
  {
    id: 5,
    name: 'Areeb Kazia',
    frequency: 3,
    status: 'Missed',
    time: '2024-01-18T01:29:17.304Z',
  },
  {
    id: 6,
    name: 'Areeb Kazia',
    frequency: 1,
    status: 'Outgoing',
    time: '2022-01-18T01:29:17.304Z',
  },
];

export const dummyChatData = [
  {
    userId: '1',
    name: 'John Doe',
    recentMessage: 'Hello there!',
    recentMessageCount: 3,
    newMessage: true,
    lastMessageTime: new Date('2024-01-12T10:30:00'),
  },
  {
    userId: '2',
    name: 'Alice Smith',
    recentMessage: 'How are you?',
    recentMessageCount: 1,
    newMessage: false,
    lastMessageTime: new Date('2024-01-11T15:45:00'),
  },
  {
    userId: '3',
    name: 'Bob Johnson',
    recentMessage: "I'll be there soon.",
    recentMessageCount: 0,
    newMessage: false,
    lastMessageTime: new Date('2024-01-10T08:20:00'),
  },
];
