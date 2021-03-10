import React, { Component } from 'react';
import CardList from '../componets/CardList';
import SearchBox from '../componets/SearchBox';
import Scroll from '../componets/Scroll';
// import {robots} from './robots';
// import { render } from '@testing-library/react';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        console.log('1')
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({ robots: users })})
        // this.setState({ robots: robots })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }) 
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            
        })

        if(this.state.robots.length === 0 ) {
            return (<h1>Loading</h1>);
        }
        else {
            return  (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
            );
        }
    }
}

export default App;