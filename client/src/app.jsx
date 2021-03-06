import React, { useState } from "react";

import { Route, Switch } from "react-router-dom";
import {
    AboutUsPage,
    CreatePage,
    HomePage,
    JoinPage,
    LoginPage,
    OptionPage,
} from "./Pages";

import { Header } from "./Componets";

import { lightTheme, darkTheme } from "./Stylings/themes";

import { ThemeProvider, CssBaseline } from "@material-ui/core";

const App = () => {
    const randomTheme = Boolean(Math.round(Math.random()));

    const [darkMode, setDarkMode] = useState(randomTheme);
    const [userName, setUserName] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const routes = [
        { to: "/", page: <HomePage /> },
        {
            to: "/login",
            page: <LoginPage userName={userName} setUserName={setUserName} />,
        },
        { to: "/create-test", page: <CreatePage /> },
        { to: "/join-test", page: <JoinPage /> },
        { to: "/option", page: <OptionPage /> },
        { to: "/about-us", page: <AboutUsPage /> },
    ];

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Header
                userName={userName}
                setUserName={setUserName}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
            <Switch>
                {routes.map((route, key) => (
                    <Route key={key} exact path={route.to}>
                        {route.page}
                    </Route>
                ))}
            </Switch>
        </ThemeProvider>
    );
};

export default App;
