import React from 'react';
import Card from '../components/Card';


class Cakes extends React.Component {

    render() {
        console.log("debug");
        return (<React.Fragment>
            <div className="container">
                <div className="mt-5">
                    <div className="row row-cols-1 row-cols-md-3">
                        {this.props.bakery.map(product => (
                            <Card key={product.backeryId} imgUrl={product.backeryId} title={product.title} price={product.price} size={product.size} count={product.count}              ></Card>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>);
    }
}

export default Cakes;