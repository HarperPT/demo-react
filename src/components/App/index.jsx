import React, { useState, useEffect } from 'react';
import Card from '../Card';
import Location from '../Location';
import Home from '../Home';
import Menu from '../Menu';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [{ sort: 0, title: 'HOME', url: '/home' },
            { sort: 1, title: 'CAKES', url: '/cakes' },
            { sort: 2, title: 'CONTACT', url: '/contact' }],
            bakery: [
                { backeryId: "MC02", title: "Matcha Cake Roll", price: "£12", describe: "", size: "2~3 people", img: "https://homebakefun.weebly.com/uploads/1/2/0/5/120551490/p402.png", count: 2 },
                { backeryId: "CC01", title: "75% Chocolate Cake Roll", price: "£10", describe: "", size: "2~3 people", img: "https://homebakefun.weebly.com/uploads/1/2/0/5/120551490/p396_orig.png", count: 0 },
                { backeryId: "BC03", title: "Earl Grey Milk Tea Cream Roll ", price: "£10", describe: "", size: "2~3 people", img: "https://homebakefun.weebly.com/uploads/1/2/0/5/120551490/p37_orig.png", count: 6 },
                { backeryId: "MC04", title: "Milk Cream Roll ", price: "£10", describe: "", size: "2~3 people", img: "https://homebakefun.weebly.com/uploads/1/2/0/5/120551490/editor/p823.png?1533156662", count: 5 },
                { backeryId: "FC05", title: "Fruits Cake", price: "£20 - £25", describe: "", size: "6 inch for 2~3 people", img: "https://homebakefun.weebly.com/uploads/1/2/0/5/120551490/p827_orig.png", count: 1 }
            ],
            currentPage: "cakes",
            homeElements: [{ title: "Natural ♥ Healthy" }, {
                describe: `自認還是少女的媽來到英國之後，為了要提供吃貨鵝女們源源不絕的能量來源，又不希望他們只能選擇外面的甜食並把食品添加物及糖霜吃飽吃滿，再加上在這寒冷的異鄉生活，更加深了對從小到大在臺灣吃的蛋糕、甜點的思念，也是帶著這樣的思鄉情懷下而開始走向烘培之路！ 在家人及友人的鼓勵之下，也決定創立FUN HOME BAKERY，希望能夠透過我手的溫度，將蛋糕最天然的味道帶給不管是在異鄉的你們還是本地的居民。
            FUN HOME BAKERY拒絕使用人工香精、人工色素、及植物性鮮奶油，FUN HOME BAKERY的食材100%選用天然原料：
            從麵粉、雞蛋、各式水果的選用到打入動物性鮮奶油時所會用上的五顏六色毫無食品添加物也不含防腐劑。
            FUN HOME BAKERY的各式蛋糕，讓您的節慶與眾不同！`}]
        }
    }


    // renderSwitch(param) {
    //     switch (param) {
    //         case 'home':
    //             console.log("render : home");
    //             return <React.Fragment>{this.state.homeElements.map(detail => <Home key={"home"} title={detail.title} describe={detail.describe}></Home>)};{this.state.homeElements.map(detail => <Home></Home>)};</React.Fragment>
    //         case 'cakes':
    //             console.log("render : cakes");
    //             console.log(this.state.bakery);
    //             return <div className="row row-cols-1 row-cols-md-3">{this.state.bakery.map(product => <Card key={product.backeryId} imgUrl={product.backeryId} title={product.title} price={product.price} size={product.size} count={product.count}></Card>)}<Location></Location></div>;
    //         default:
    //             console.log("render : default");
    //             return '';
    //     }
    // }

    sortMenu(ar) {
        return ar.sort(function (a, b) { return a.sort - b.sort });
    }

    render() {
        this.state.menuList.sort(function (a, b) { return a.sort - b.sort })

        return (
            <React.Fragment>
                <div id="nav">
                    <Menu listArarry={this.state.menuList} switchHandler={this.renderSwitch}></Menu>
                    {/* <Menu listArarry={this.state.menuList}></Menu> */}
                    {/* <Navbar>
                        <Navbar.Brand href="#home">FUN HOME BAKERY</Navbar.Brand>
                        {this.state.menuList.map(list => <Menu sort={list.sort} title={list.title} url={list.url} changeContent={this.renderSwitch()}></Menu>)}
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="primary">Search</Button>
                        </Form>
                    </Navbar> */}
                </div>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3">{this.state.bakery.map(product => <Card key={product.backeryId} imgUrl={product.backeryId} title={product.title} price={product.price} size={product.size} count={product.count}></Card>)}
                        <Location></Location>
                    </div>;
                    {/* {this.renderSwitch(this.state.currentPage)} */}
                    {//} <div className="row row-cols-1 row-cols-md-3">
                        //    {/* {this.state.bakery.map(product => <div title={product.title}>{product.title}</div>)} */}
                        //   {this.state.bakery.map(product => <Card key={product.backeryId} imgUrl={product.img} title={product.title} price={product.price} size={product.size} count={product.count}></Card>)}
                        //   <Location></Location>
                        // </div>}
                    }</div>
            </React.Fragment>
        );
    }

}

export default App;
