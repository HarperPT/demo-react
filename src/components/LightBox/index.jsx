import React from 'react'

class LightBox extends React.Component {

    state = {
        isOpen: true,
        order: 1,
        orderPrice: -1,
        totalPrice: 0,
        onOpen: this.props.onOpenChange,
    };

    handleOrderPlus = () => {
        this.setState({ order: this.state.order + 1, totalPrice: this.state.orderPrice * (this.state.order + 1) });
    };

    handleOrderMinus = () => {
        if (this.state.order <= 1)
            return;
        this.setState({ order: this.state.order - 1, totalPrice: this.state.orderPrice * (this.state.order - 1) });
    };


    handleOrder = (e) => {
        this.setState({ order: e.target.value, totalPrice: this.state.orderPrice * this.state.order });
    }

    onSizeChange = (e) => {
        e.preventDefault();
        e.currentTarget.childNodes[0].checked = true
        this.setState({
            orderPrice: e.currentTarget.childNodes[0].value,
            totalPrice: e.currentTarget.childNodes[0].value * this.state.order
        });
    }

    handleLightboxOpen = (e) => {
        e.stopPropagation();
        if (e.currentTarget.className === "lightbox" || e.currentTarget.className === "lb-close")
            this.props.onOpenChange();
    }

    render() {
        return (
            <React.Fragment>
                <div className="lightbox"
                    ref={this.lightboxRef}
                    style={{ display: this.props.isOpen ? "block" : "none" }}
                    onClick={e => this.handleLightboxOpen(e)}>
                    <div id="" className="lb-container" onClick={e => this.handleLightboxOpen(e)}>
                        <div className="lb-close" onClick={e => this.handleLightboxOpen(e)}>
                            <div className="btn-cross"></div>
                        </div>
                        <div className="lb-info row">
                            <img src={require("../../assets/img/cakes/MC02.png")} className="col-md-6 lb-img" alt="" />
                            <div className="col-md-6">
                                <p className='lb-title'>Cake Roll</p>
                                <p>將法國進口的新鮮果泥逐漸融入蛋糕中，在夢幻的粉紅色澤下，給您繽紛的甜蜜滋味。</p>
                                <p>price:</p>

                            </div>
                        </div>
                        <div className="lb-spec">
                            <p>Choose Size</p>
                            <ul className="ul-spec">
                                <li className="li-spec" onClick={e => this.onSizeChange(e)}>
                                    <input type="radio" id="f-option" name="rdoCake" value="20" />
                                    <label htmlFor="f-option">6 inch<span>£20</span></label>
                                    <div className="rdo-spec"></div>
                                </li>
                                <li className="li-spec" onClick={e => this.onSizeChange(e)}>
                                    <input type="radio" id="s-option" name="rdoCake" value="25" />
                                    <label htmlFor="s-option">8 inch<span>£25</span></label>
                                    <div className="rdo-spec"></div>
                                </li>
                            </ul>
                        </div>

                        <div className="lb-footer">
                            <div className="lb-counter col-md-5">
                                <button className="btn-math" onClick={this.handleOrderMinus}>-</button>
                                <input type="text" value={this.state.order} onChange={this.handleOrder}></input>
                                <button className="btn-math" onClick={this.handleOrderPlus}>+</button>
                            </div>
                            <div className="lb-submit col-md-7">
                                <button className="btn-addcart">Add to Cart　 {this.state.order} £{this.state.totalPrice}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default LightBox;