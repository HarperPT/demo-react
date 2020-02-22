import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Navbar, FormControl, Button, Form } from 'react-bootstrap';


class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    // toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    sortMenu(ar) {
        return ar.sort(function (a, b) { return a.sort - b.sort });
    }

    render() {
        return (
            // <React.Fragment>
            //     <Link key={this.props.sort} to={this.props.url} className="nav-link" onClick={()=>this.handleClick(this.props.title)}>{this.props.title}</Link>
            //     {/* {this.state.menuList.map(list => <Link key={list.sort} to={list.url} className="nav-link">{list.title}</Link>)} */}
            // </React.Fragment>

            <React.Fragment>
                <div id="nav">
                <Navbar>
                    <Navbar.Brand href="#home">FUN HOME BAKERY</Navbar.Brand>
                    {/* {this.props.listArarry.map(list => <Link key={list.sort} to={list.url} className="nav-link" onClick={()=>this.handleClick("cakes")}>{list.title}</Link>)} */}
                    {this.props.listArarry.map(list => <Link key={list.sort} to={list.url} className="nav-link" >{list.title}</Link>)}
                    {/* <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end" >
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse> */}
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="primary">Search</Button>
                    </Form>
                </Navbar>
                </div>
            </React.Fragment>
        )
    }
}

export default Menu;