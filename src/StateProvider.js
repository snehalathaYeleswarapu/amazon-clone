import React, { createContext, useContext, useReducer } from 'react';

/**
 * This file is for setting up React Context API similar to  Redux
 * Bolier plate code- similar to all projects
 */

//prepares the Data Layer
export const StateContext = createContext();

//Wrap our app and provide the  Data Layer
export const StateProvider = ({
  reducer,
  initialState,
  children,
}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
