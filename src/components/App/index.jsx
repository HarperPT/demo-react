import React from "react";
// import Card from "../Card";
import Menu from "../Menu";
import Cakes from "../../layouts/Cakes";
import Home from "../../layouts/Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [
        { sort: 0, title: "HOME", url: "/home" },
        { sort: 1, title: "CAKES", url: "/cakes" },
        { sort: 2, title: "CONTACT", url: "/contact" }
      ],
      bakery: [
        { backeryId: "MC02", title: "Matcha Cake Roll", price: "£12", describe: "", size: "2~3 people", img: "https://homebakefun.weebly.com/uploads/1/2/0/5/120551490/p402.png", count: 2 },
        { backeryId: "CC01", title: "75% Chocolate Cake Roll", price: "£10", describe: "", size: "2~3 people", img: "https://homebakefun.weebly.com/uploads/1/2/0/5/120551490/p396_orig.png", count: 0 },
        { backeryId: "BC03", title: "Earl Grey Milk Tea Cream Roll ", price: "£10", describe: "", size: "2~3 people", img: "https://homebakefun.weebly.com/uploads/1/2/0/5/120551490/p37_orig.png", count: 6 },
        { backeryId: "MC04", title: "Milk Cream Roll ", price: "£10", describe: "", size: "2~3 people", img: "https://homebakefun.weebly.com/uploads/1/2/0/5/120551490/editor/p823.png?1533156662", count: 5 },
        { backeryId: "FC05", title: "Fruits Cake", price: "£20 - £25", describe: "", size: "6 inch for 2~3 people", img: "https://homebakefun.weebly.com/uploads/1/2/0/5/120551490/p827_orig.png", count: 1 }
      ],
      currentPage: "CAKES",
      homeElements: [
        { title: "Natural ♥ Healthy" },
        { describe: `自認還是少女的媽來到英國之後，為了要提供吃貨鵝女們源源不絕的能量來源，又不希望他們只能選擇外面的甜食並把食品添加物及糖霜吃飽吃滿，再加上在這寒冷的異鄉生活，更加深了對從小到大在臺灣吃的蛋糕、甜點的思念，也是帶著這樣的思鄉情懷下而開始走向烘培之路！ 在家人及友人的鼓勵之下，也決定創立FUN HOME BAKERY，希望能夠透過我手的溫度，將蛋糕最天然的味道帶給不管是在異鄉的你們還是本地的居民。            FUN HOME BAKERY拒絕使用人工香精、人工色素、及植物性鮮奶油，FUN HOME BAKERY的食材100%選用天然原料：            從麵粉、雞蛋、各式水果的選用到打入動物性鮮奶油時所會用上的五顏六色毫無食品添加物也不含防腐劑。            FUN HOME BAKERY的各式蛋糕，讓您的節慶與眾不同！` }
      ],
    };

  }

  render() {
    console.log("process.env.PUBLIC_URL", process.env.PUBLIC_URL);

    return (
      <React.Fragment>
        <Router basename={process.env.PUBLIC_URL}>
          <Menu menu={this.state.menuList} ></Menu>
          <Switch>
            {/* Page Home */}
            <Route exact path="/home" component={() => <Home bakery={this.state.bakery}></Home>} />

            {/* Page Cakes */}
            <Route exact path="/cakes" component={() => <Cakes bakery={this.state.bakery} ></Cakes>} ></Route>
            {/* <Route exact path="/" component={() => <Cakes bakery={this.state.bakery} ></Cakes>} ></Route> */}
            {/* <Route exact path="/cakes" component={() =>
              <div className="row row-cols-1 row-cols-md-3">
                {this.state.bakery.map(product => (
                  <Card
                    key={product.backeryId}
                    imgUrl={product.backeryId}
                    title={product.title}
                    price={product.price}
                    size={product.size}
                    count={product.count}>
                  </Card>))}
              </div>} /> */}

            <Route component={() => (<div>404 Not found </div>)} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
