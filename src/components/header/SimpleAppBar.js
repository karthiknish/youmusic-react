import React, { useContext, useCallback, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { GlobalContext } from "../GlobalState";
import SearchBox from "./SearchBox";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Slide,
} from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Menu, Search } from "@material-ui/icons";
const styles = {
  root: {
    flexGrow: 1,
  },
  title: {
    textAlign: "center",
    width: "calc(100%-95px)",
    color: "white",
    fontSize: "14px",
    fontWeight: "bold",
  },
  input: {
    color: "#fff",
  },
};
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
function SimpleAppBar(props) {
  const [{ searchState }, dispatch] = useContext(GlobalContext);
  const setMenuOpen = (data) => {
    dispatch({ type: "setMenuOpen", snippet: data });
  };
  const setSearchState = useCallback(
    (data) => {
      dispatch({ type: "setSearchState", snippet: data });
    },
    [dispatch]
  );
  useEffect(() => {
    const changeAppBar = () => {
      const path = props.history.location.pathname;
      if (path === "/search") {
        setSearchState("searching");
      } else {
        setSearchState("home");
      }
    };
    changeAppBar();
  }, [setSearchState, props.history]);
  const toggleSearch = () => {
    if (searchState === "home") {
      return (
        <>
          <IconButton
            color="secondary"
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" color="inherit" style={styles.title}>
            YouMusic
          </Typography>
          <IconButton
            color="secondary"
            aria-label="Search"
            onClick={() => setSearchState("clicked")}
          >
            <Search />
          </IconButton>
        </>
      );
    } else {
      return <SearchBox />;
    }
  };
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar id="navbar" position="sticky">
          <Toolbar>{toggleSearch()}</Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
}

export default withRouter(SimpleAppBar);
