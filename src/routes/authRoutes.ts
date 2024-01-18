import Signin from '../screens/Signin';
import Signup from '../screens/Signup';

export const authRoutes = [
  {
    name: 'Signin',
    component: Signin,
    headerShown: false,
  },
  {
    name: 'Signup',
    component: Signup,
    headerShown: false,
  },
];
