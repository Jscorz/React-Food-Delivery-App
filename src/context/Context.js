import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/products_reducer';

const initialState = {
  isSidebarOpen: false,
};

const SidebarContext = React.createContext();

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <SidebarContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// make sure use
export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
