import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuCate: props.menu
    };
  }



  sortMenu = ar => {
    return ar.sort(function (a, b) {
      return a.sort - b.sort;
    });
  }

  render() {
    this.sortMenu(this.state.menuCate);
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ "backgroundColor": "#fff" }}>
          test
          <a className="navbar-brand" href="">
            FUN HOME BAKERY
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {this.state.menuCate.map(cate =>
                <li key={cate.sort} className="nav-item" >
                  <Link className="nav-link" to={cate.url}>{cate.title}</Link>
                </li>)}
            </ul>
          </div>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Login
            </button>
        </nav>

      </React.Fragment>
    );
  }
}

export default Menu;
