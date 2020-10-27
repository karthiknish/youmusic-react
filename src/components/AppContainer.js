import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./GlobalState";
import SimpleAppBar from "./header/SimpleAppBar";
import { useCheckDarkmode } from "./sections/SettingsPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CurrentSection from "./CurrentSection";
import SwipeMenu from "./SwipeMenu";
import purple from "@material-ui/core/colors/purple";
const body = document.querySelector("body");
const defaultTheme = {
  palette: {
    primary: { main: purple[200] },
    secondary: {
      main: purple[50],
    },
  },
  typography: {
    useNextVariants: true,
  },
};
const darkTheme = {
  palette: {
    type: "dark",
    primary: { main: purple[200] },
    secondary: {
      main: purple[50],
    },
  },
  typography: {
    useNextVariants: true,
  },
};
const muiDarkTheme = createMuiTheme(darkTheme);
const muiDefaultTheme = createMuiTheme(defaultTheme);
function AppContainer() {
  const [{ themeSelectValue }, dispatch] = useContext(GlobalContext);
  const { checkDarkMode } = useCheckDarkmode();
  useEffect(() => {
    checkDarkMode();
    if (navigator.userAgent.match(/Android/i)) {
      body.style.overscrollBehavior = "none";
    }
  }, []);
  useEffect(() => {
    if (themeSelectValue === "Dark") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [themeSelectValue]);
  return (
    <MuiThemeProvider
      theme={themeSelectValue === "Dark" ? muiDarkTheme : muiDefaultTheme}
    >
      <Router>
        <SimpleAppBar />
        <Route component={CurrentSection} />
        <SwipeMenu />
      </Router>
    </MuiThemeProvider>
  );
}

export default AppContainer;
