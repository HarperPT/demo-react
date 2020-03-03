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
        <div className="col mb-4">
          <div className="card h-100">
            <img src={require("../../assets/img/cakes/" + this.props.imgUrl + ".png")} className="h-50 card-img-top img-fluid" alt="..." />
            <div className="card-body" style={{ textAlign: "center" }}>
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text"> {this.props.price}</p>
              <p className="card-text">Size : {this.props.size}</p>
              <div className="row  justify-content-around">
                <button type="button" className="btn btn-outline-secondary" onClick={this.handleOrderMinus}            >
                  -
                </button>
                <p>{this.state.order}</p>
                <button type="button" className="btn btn-outline-primary" onClick={this.handleOrderPlus}              >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Card;
