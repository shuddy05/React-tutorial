import { createContext, useState } from "react";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [age, setAge] = useState(50);
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <AppContext.Provider value={{ user, setUser, handleLogout, age, setAge }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
