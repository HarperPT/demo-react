import React, { useState, useEffect } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import Menu from '../Menu';
import Data from '../../data/test.json'



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: Data.menuList,
      cakes: Data.bakery
    }
  }


  render() {
    return (
      <React.Fragment>
        <div id="nav">
          <Menu listArarry={this.state.menuList} ></Menu>
        </div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {this.state.cakes.map((list,index)=><div className={(index==0)?"carousel-item active":"carousel-item"}  key={list.backeryId}><img src={require('../../assets/img/cakes/' + list.backeryId + '.png')} className="d-block w-100" alt="..."/> </div>)}
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default Home;
