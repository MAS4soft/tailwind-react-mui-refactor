//This file is to hold the context of the application
// context is a way to pass data through the component tree without having to pass props down manually at every level.
// In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application.

//example of how to use context
// const MyContext = React.createContext(defaultValue);
// <MyContext.Provider value={/* some value */}>
//   <MyComponent />
// </MyContext.Provider>

// function MyComponent() {
//   const value = useContext(MyContext);
//   // render something based on the value
// }

import { PropsWithChildren } from 'react'
import { themeOptions } from './theme'
import { ThemeProvider } from '@mui/material/styles'
//every component should have props types to ensure that the correct props are passed to the component
type AppWithContextProps = {}
//PropsWithChildren is a utility type that allows you to define a component that accepts children.
// by default all React components accept children, but its a neat thing to have in the type definition
export default function AppWithContext(props: PropsWithChildren<AppWithContextProps>) {
    return (
        <>
            <ThemeProvider theme={themeOptions}>
                {/* wrap other context you create later here so it wraps around children to all chidl componets have access to your context stores */}
                {props.children}
            </ThemeProvider>
        </>
    )
}
