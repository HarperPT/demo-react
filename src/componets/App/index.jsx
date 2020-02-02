import React from 'react';
import Card from '../Card';
import Location from '../Location';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bakery: [
                { title: "Matcha Cake Roll", price: 12, describe: "", size: "2~3 people", img: "https://homebakefun.weebly.com/uploads/1/2/0/5/120551490/p402.png" },
                { title: "75% Chocolate Cake Roll", price: 10, describe: "", size: "2~3 people", img: "https://homebakefun.weebly.com/uploads/1/2/0/5/120551490/p396_orig.png" },
                { title: "Earl Grey Milk Tea Cream Roll ", price: 10, describe: "", size: "2~3 people", img: "https://homebakefun.weebly.com/uploads/1/2/0/5/120551490/p37_orig.png" },
                { title: "Milk Cream Roll ", price: 10, describe: "", size: "2~3 people", img: "https://homebakefun.weebly.com/uploads/1/2/0/5/120551490/editor/p823.png?1533156662" },
                { title: "Fruits Cake", price: "20/25", describe: "", size: "6 inch for 2~3 people", img: "https://homebakefun.weebly.com/uploads/1/2/0/5/120551490/p827_orig.png" }
            ]
        }
    }


    render() {
        return (
            // <p>HI</p>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3">
                    {/* {this.state.bakery.map(product => <div title={product.title}>{product.title}</div>)} */}
                    {this.state.bakery.map(product => <Card imgUrl={product.img} title={product.title} price={product.price} size={product.size}></Card>)}
                    <Location></Location>
                </div>
            </div>
        );
    }

}

export default App;
