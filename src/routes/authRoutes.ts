import Signin from '../screens/Auth/Signin';
import Signup from '../screens/Auth/Signup';

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
