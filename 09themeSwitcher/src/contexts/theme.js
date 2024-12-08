import React, { useContext } from "react";

// 1) Initial state object > themeMode
export const ThemeContext = React.createContext({
    themeMode: "light",
    darTheme: () => {

    },
    ligthTheme : () => {

    }
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext);
}