import React, { createContext, useContext, useReducer } from "react"
import { disasterReducer, initialState } from "./disasterReducer"

const DisasterContext = createContext()

export const DisasterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(disasterReducer, initialState)

  return <DisasterContext.Provider value={{ state, dispatch }}>{children}</DisasterContext.Provider>
}

export const useDisasterContext = () => {
  const context = useContext(DisasterContext)
  if (context === undefined) {
    throw new Error("useDisasterContext must be used within a DisasterProvider")
  }
  return context
}

