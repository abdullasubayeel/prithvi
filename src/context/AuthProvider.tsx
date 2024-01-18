import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import {Product} from '../enums/Product';

interface AuthContextProps {
  auth: any; // Replace 'any' with the appropriate type for your auth state
  setAuth: Dispatch<SetStateAction<any>>; // Replace 'any' with the appropriate type for setAuth function
  products: Product[]; // Replace 'any' with the appropriate type for your products state
  setProducts: Dispatch<SetStateAction<Product[]>>; // Replace 'any' with the appropriate type for setProducts function
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [auth, setAuth] = useState<any>({}); // Replace 'any' with the appropriate type for your auth state
  const [products, setProducts] = useState<Product[]>([]); // Replace 'any' with the appropriate type for your products state

  return (
    <AuthContext.Provider value={{auth, setAuth, products, setProducts}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
