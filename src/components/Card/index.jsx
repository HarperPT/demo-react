import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      count: this.props.count,
      order: 0
    };
  }

  handleOrderPlus = () => {
    this.setState({ order: this.state.order + 1 });
  };

  handleOrderMinus = () => {
    this.setState({ order: this.state.order - 1 });
  };

  render() {
    return (
      <React.Fragment>
        <div className="card-col">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img className="card-photo " src={require("../../assets/img/cakes/" + this.props.imgUrl + ".png")} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{this.props.title}</h5>
                  <p className="card-text"> {this.props.price}</p>
                  <p className="card-text"><small className="text-muted">Size : {this.props.size}</small></p>
                  <a href="#" className="btn-cart" onClick={() => this.props.onOpenChange()}>Add to cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col mb-4">
          <div className="card h-100">
            <img src={require("../../assets/img/cakes/" + this.props.imgUrl + ".png")} className="h-50 card-img-top img-fluid" alt="..." />
            <div className="card-body" style={{ textAlign: "center" }}>
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text"> {this.props.price}</p>
              <p className="card-text">Size : {this.props.size}</p>
              <button className="btn btn-primary">Add To Blanket</button> */}
        {/* <div className="row  justify-content-around">
                <button type="button" className="btn btn-outline-secondary" onClick={this.handleOrderMinus}            >
                  -
                </button>
                <p>{this.state.order}</p>
                <button type="button" className="btn btn-outline-primary" onClick={this.handleOrderPlus}              >
                  +
                </button>
              </div> */}
        {/* </div>
          </div>
        </div> */}


      </React.Fragment>
    );
  }
}

export default Card;
