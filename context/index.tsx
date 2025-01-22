'use client'
import { createContext, useContext, useState } from "react";
import React from "react";

const AppContext = createContext('Hello')

export const AppWrapper = ({children}: Readonly<{
    children: React.ReactNode;
  }>)  => {
     
    const [array, setArray] = useState('Hello')

    return (
        <AppContext.Provider value={array}>
        {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return (
        useContext(AppContext)
    )
}