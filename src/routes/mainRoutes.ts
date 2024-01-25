import Home from '../screens/Home';
import Subscribe from '../screens/Auth/Subscribe';
import Settings from '../screens/Settings';
import Products from '../screens/Products';
import Tabs from '../screens/Messaging/Tabs';
import ChatScreen from '../screens/Messaging/helpers/ChatScreen';
import FarmerList from '../screens/Farmer/FarmerList';
import FarmerDetails from '../screens/Farmer/helpers/FarmerDetails';
import ContactsList from '../screens/Messaging/Contacts/ContactsList';
import CarbonDashboard from '../screens/CarbonEmission/CarbonDashboard';
import CarbonForm from '../screens/CarbonEmission/CarbonForm';

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
    name: 'Contacts',
    component: ContactsList,
    headerShown: true,
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
  {
    name: 'Carbon',
    component: CarbonDashboard,
    headerShown: false,
  },
  {
    name: 'Carbon Emission',
    component: CarbonForm,
    headerShown: true,
  },
];
