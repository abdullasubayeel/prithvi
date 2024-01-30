import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import {Product} from '../enums/Product';

interface AuthContextProps {
  auth: any;
  setAuth: Dispatch<SetStateAction<any>>;
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  lng: string;
  setLng: Dispatch<SetStateAction<string>>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [auth, setAuth] = useState<any>({});
  const [lng, setLng] = useState<string>('en');
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <AuthContext.Provider
      value={{auth, setAuth, products, setProducts, lng, setLng}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
