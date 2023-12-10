import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import { selectTheme } from '@redux/slices/authSlice';

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const theme = useSelector(selectTheme);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  return useContext(ThemeContext);
};
