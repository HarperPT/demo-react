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
        <Menu listArarry={this.state.menuList} ></Menu>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {this.state.cakes.map((list, index) => <div className={(index == 0) ? "carousel-item active" : "carousel-item"} key={list.backeryId}><img src={require('../../assets/img/cakes/' + list.backeryId + '.png')} className="d-block w-100" alt="..." /> </div>)}
          </div>
        </div>

        <h1>純天然 · 安心 · 健康 · 不含防腐劑 · 無食品添加物</h1>

      </React.Fragment>
    )
  }
}

export default Home;
