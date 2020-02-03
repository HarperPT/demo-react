import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    // handleChange = () => {
    //     var val = 'someValue';
    //     this.setState({ btnTitle: val });
    // }

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    // createCount = () => {
    //     console.log(this.props.count);
    //     let child = [];
    //     for (let i = 0; i < this.props.count; i++) {
    //         child.push(<a className="dropdown-item" href="">i</a>)
    //     }
    //     if (this.props.count <= 0)
    //         child.push(<a className="dropdown-item" href="">i</a>)
 

    //     return child;
    // }

    render() {
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;


        return (

            <div className="col mb-4">
                {/* <div className="card" style={{ width: "18rem" }}> */}
                <div className="card h-100">
                    <img src={this.props.imgUrl} className="h-50 card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        {/* <h5 >{this.props.title}</h5> */}
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">Price : £ {this.props.price}</p>
                        <p className="card-text">Size : {this.props.size}</p>
                        {/* <DropdownButton bsStyle="default" title="YA" noCaret id="dropdown-no-caret" onChange={this.handleChange}>
                            <MenuItem eventKey="1">Action</MenuItem>
                            <MenuItem eventKey="2">Another action</MenuItem>
                            <MenuItem eventKey="3">Something else here</MenuItem>
                            <MenuItem eventKey="4">Separated link</MenuItem>
                        </DropdownButton> */}
                        <div className="dropdown" onClick={this.toggleOpen}>
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true">
                                Dropdown
                            </button>
                            <div className={menuClass} aria-labelledby="dropdownMenuButton">
                                {/* {this.createCount} */}
                                <a className="dropdown-item" href="#nogo">
                                    Item 1          </a>
                                <a className="dropdown-item" href="#nogo">
                                    Item 2          </a>
                                <a className="dropdown-item" href="#nogo">
                                    Item 3          </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Card;