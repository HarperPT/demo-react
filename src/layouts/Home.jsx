import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";

class Home extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        console.log(this.props.bakery);

        return (
            <React.Fragment>
                <Carousel>
                    {this.props.bakery.map((cake, index) => (index < 3) ?
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require("../assets/img/cakes/" + cake.backeryId + ".png")}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{cake.title}</h3>
                                {/* <p>{cake.size}</p> */}
                            </Carousel.Caption>
                        </Carousel.Item> : null)}
                </Carousel>

                <div className="container homeInfo">
                    <h1>純天然 · 安心 · 健康 · 不含防腐劑 · 無食品添加物</h1>
                    <button type="button" class="btn btn-info m-3 p-3"> <Link className="nav-link" to="/cakes" style={{ color: "#fff" }}>看看有哪些蛋糕》》</Link></button>

                    <h5>自認還是少女的媽來到英國之後，為了要提供吃貨鵝女們源源不絕的能量來源，又不希望他們只能選擇外面的甜食並把食品添加物及糖霜吃飽吃滿，再加上在這寒冷的異鄉生活，更加深了對從小到大在臺灣吃的蛋糕、甜點的思念，也是帶著這樣的思鄉情懷下而開始走向烘培之路！ 在家人及友人的鼓勵之下，也決定創立FUN HOME BAKERY，希望能夠透過我手的溫度，將蛋糕最天然的味道帶給不管是在異鄉的你們還是本地的居民。
                        <br />
                        <br />
                        FUN HOME BAKERY拒絕使用人工香精、人工色素、及植物性鮮奶油，FUN HOME BAKERY的食材100%選用天然原料：
                        從麵粉、雞蛋、各式水果的選用到打入動物性鮮奶油時所會用上的五顏六色毫無食品添加物也不含防腐劑。
                        <br />
                        <br />
                        FUN HOME BAKERY的各式蛋糕，讓您的節慶與眾不同！</h5>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;