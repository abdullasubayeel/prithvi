import Home from '../screens/Home';
import Subscribe from '../screens/Subscribe';
import Settings from '../screens/Settings';
import Products from '../screens/Products';
import Tabs from '../screens/Tabs';
import ChatScreen from '../screens/Messaging/helpers/ChatScreen';
import FarmerList from '../screens/Farmer/FarmerList';
import FarmerDetails from '../screens/Farmer/helpers/FarmerDetails';

export const mainRoutes = [
  {
    name: 'Home',
    component: Home,
    headerShown: true,
  },
  {
    name: 'Settings',
    component: Settings,
    headerShown: true,
  },
  {
    name: 'Subscribe',
    component: Subscribe,
    headerShown: true,
  },
  {
    name: 'Products',
    component: Products,
    headerShown: true,
  },
  {
    name: 'Messages',
    component: Tabs,
    headerShown: true,
  },
  {
    name: 'Chat Screen',
    component: ChatScreen,
    headerShown: false,
  },
  {
    name: 'Farmers',
    component: FarmerList,
    headerShown: true,
  },
  {
    name: 'Farmer Details',
    component: FarmerDetails,
    headerShown: true,
  },
];
