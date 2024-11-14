import React from 'react'

export const createContext = <T extends object>() => {
  const Context = React.createContext<T | undefined>(undefined)
  const useContext = () => {
    const appContext = React.useContext(Context)
    if (appContext === undefined) {
      throw new Error('A value must be provided to the useContext')
    }
    return appContext
  }
  return [useContext, Context.Provider] as const
}


