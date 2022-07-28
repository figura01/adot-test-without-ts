import React, {createContext, useReducer, useEffect } from 'react';
import { destReducer, initialState } from '../reducers/destReducer';

export const DestContext = createContext()

const DestContextProvider = (props) => {

  const [dests, dispatch] = useReducer(destReducer, [], () => {
    const localData = localStorage.getItem('dests')
    return localData ? JSON.parse(localData) : []
  });

  useEffect(() => {
    const localData = localStorage.getItem('dests')
    localData ? JSON.parse(localData) : localStorage.setItem('dests', JSON.stringify(initialState))
  }, [])

  useEffect(() => {
    const localData = localStorage.getItem('dests')
    if(JSON.parse(localData).length !== dests.length) {
      localStorage.setItem('dests', JSON.stringify(dests))
    } else {
      localStorage.setItem('dests', JSON.stringify(initialState))
    }
    
  }, [dests])

  return (
    <DestContext.Provider value={{dests, dispatch}}>
      {props.children}
    </DestContext.Provider>
  )
}

export default DestContextProvider