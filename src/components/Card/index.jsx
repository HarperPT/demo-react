import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            count: this.props.count
        };
        this.createDropList = this.createDropList.bind(this)
        this.dropchange = this.dropchange.bind(this)
    }

    // handleChange = () => {
    //     var val = 'someValue';
    //     this.setState({ btnTitle: val });
    // }


    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    createDropList = () => {
        let el = [];
        for (let i = 0; i <= this.state.count; i++) {
            el.push(<div className="dropdown-item" key={i} onClick={((e) => this.dropchange(e))}>{i}</div>);
        }
        return el
    }

    dropchange = (e) => {
        // console.log( e.currentTarget.textContent );
        let selectVal = e.currentTarget.textContent;
        let selectBtn = e.currentTarget.parentElement.parentElement.childNodes[0];
        selectBtn.textContent = selectVal;
    }


    render() {
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;

        return (

            <div className="col mb-4">
                {/* <div className="card" style={{ width: "18rem" }}> */}
                <div className="card h-100">
                    <img src={require('../../assets/img/cakes/'+this.props.imgUrl +'.png')} className="h-50 card-img-top img-fluid" alt="..." />
                    <div className="card-body" style={{ textAlign: "center" }}>
                        {/* <h5 >{this.props.title}</h5> */}
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text"> {this.props.price}</p>
                        <p className="card-text">Size : {this.props.size}</p>
                        <div className="row  justify-content-around">
                            <button type="button" className="btn btn-outline-success">info</button>
                            {/*drop down list for counting cake in stock */}
                            <div className="dropdown" onClick={this.toggleOpen}>
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true">0</button>
                                <div className={menuClass} aria-labelledby="dropdownMenuButton">
                                    {this.createDropList()}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default Card;