// routes.js
import Home from '../screens/Home';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
import Settings from '../screens/Settings';
import Subscribe from '../screens/Subscribe';
import Products from '../screens/Products';
import Tabs from '../screens/Tabs';
import ChatScreen from '../screens/Messaging/helpers/ChatScreen';

export const routes = [
  {
    name: 'Signin',
    component: Signin,
    headerShown: false,
  },
  {
    name: 'Signup',
    component: Signup,
    headerShown: true,
  },
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
];
