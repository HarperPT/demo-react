import React from 'react';
import axios from 'axios';

class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postcode: '',
            data: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.getInformation = this.getInformation.bind(this);
    }

    
    getInformation() {
        const { postcode } = this.state;

        // used to make the http requests
        axios.get('https://api.postcodes.io/postcodes/' + postcode).then(res => {

            // updates the state which causes the component to re render (i.e call render again)
            this.setState({
                data: res.data.result
            });

        }).catch(err => {

        })
    }

    handleChange(event) {
        // when someone types, set the state and change this.state.postcode to event.target.value (which is the value in the input field)
        this.setState({
            postcode: event.target.value
        });
    }
    render() {
        return (
            <div>
                <input type='text' value={this.state.postcode} onChange={this.handleChange} />
                <button onClick={() => this.getInformation()}>Search</button>
                {this.state.data ? <React.Fragment><h1>{this.state.data.country}</h1><h2>{this.state.data.parliamentary_constituency}</h2></React.Fragment> : 'sorry, nothing here'}
            </div>
        )
    }


}

export default Location
