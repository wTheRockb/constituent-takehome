import * as React from "react";
import "./style.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams
} from "react-router-dom";
import { ConstituentList } from "../constituentList";
import { ConstituentSearch } from "../constituentSearch";

const Navbar = () => {
  return (
    <Router>
      <div className="navbar__root">
        <div className="navbar__inner">
          <ul className="navbar__list">
            <li>
              <NavLink
                to="/home"
                activeClassName="navbar__active-link"
                className="navbar__nav-link"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/constituents"
                activeClassName="navbar__active-link"
                className="navbar__nav-link"
              >
                Constituents
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/search"
                activeClassName="navbar__active-link"
                className="navbar__nav-link"
              >
                Search
              </NavLink>
            </li>
          </ul>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/constituents">
            <ConstituentList />
          </Route>
          <Route path="/search">
            <ConstituentSearch />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => {
  return<h2 style={{color: "black"}}>Welcome to Woody's world of constituents! Browse by all constituents or search by name or email.</h2>;
};

const Search = () => {
  return <h2 style={{color: "black"}}>In Construction</h2>;
};

export default Navbar;
