import { TypeTheme } from '@Styles/global/theme';
import { createContext, Dispatch, SetStateAction } from 'react';

type ContextProps = {
  theme: TypeTheme;
  setTheme: Dispatch<SetStateAction<TypeTheme>>;
};

const ThemeContext = createContext({} as ContextProps);

export default ThemeContext;
