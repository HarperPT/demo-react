import React from 'react';
import Card from '../Card';
import Location from '../Location';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bakery: [
                { backeryId: "MC02", title: "Matcha Cake Roll", price: 12, describe: "", size: "2~3 people", img: "https://homebakefun.weebly.com/uploads/1/2/0/5/120551490/p402.png", count: 2 },
                { backeryId: "CC01", title: "75% Chocolate Cake Roll", price: 10, describe: "", size: "2~3 people", img: "https://homebakefun.weebly.com/uploads/1/2/0/5/120551490/p396_orig.png", count: 0 },
                { backeryId: "BC03", title: "Earl Grey Milk Tea Cream Roll ", price: 10, describe: "", size: "2~3 people", img: "https://homebakefun.weebly.com/uploads/1/2/0/5/120551490/p37_orig.png", count: 6 },
                { backeryId: "MC04", title: "Milk Cream Roll ", price: 10, describe: "", size: "2~3 people", img: "https://homebakefun.weebly.com/uploads/1/2/0/5/120551490/editor/p823.png?1533156662", count: 5 },
                { backeryId: "FC05", title: "Fruits Cake", price: "20/25", describe: "", size: "6 inch for 2~3 people", img: "https://homebakefun.weebly.com/uploads/1/2/0/5/120551490/p827_orig.png", count: 1 }
            ],
        }
    }


    render() {
        return (
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3">
                    {/* {this.state.bakery.map(product => <div title={product.title}>{product.title}</div>)} */}
                    {this.state.bakery.map(product => <Card key={product.backeryId} imgUrl={product.img} title={product.title} price={product.price} size={product.size} count={product.count}></Card>)}
                    <Location></Location>
                </div>
            </div>
        );
    }

}

export default App;
