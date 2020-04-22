import React from 'react';
import Card from '../components/Card';
import LightBox from '../components/LightBox'


class Cakes extends React.Component {
    state = {
        lightboxOpen: false
    }

    onOpenChange = () => {
        this.setState({ lightboxOpen: !this.state.lightboxOpen });
        console.log(this.state.lightboxOpen);

        // this.setState({ lightboxOpen: false });
        // console.log(this.lightboxRef.current.style);
    }

    // handleLightboxOpen = (e) => {
    //     // e.stopPropagation();
    //     // if (e.currentTarget.className === "lightbox" || e.currentTarget.className === "lb-close")
    //     //     this.setState({ lightboxOpen: !this.state.lightboxOpen });
    // }


    render() {
        return (<React.Fragment>
            <div className="container">
                <div className="card-container">
                    <div className="row row-cols-md-2">
                        {this.props.bakery.map(product => (
                            <Card key={product.backeryId} imgUrl={product.backeryId} title={product.title} price={product.price} size={product.size} count={product.count} onOpenChange={this.onOpenChange}></Card>
                        ))}
                    </div>
                </div>
            </div>
            <LightBox isOpen={this.state.lightboxOpen} onOpenChange={this.onOpenChange}></LightBox>
            {/* <LightBox></LightBox> */}
        </React.Fragment>);
    }
}

export default Cakes;