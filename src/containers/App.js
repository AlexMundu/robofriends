import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField } from '../actions';

const mapStateToProps = (state) => ({
	searchField: state.searchField	
})

const mapDispatchToProps = dispatch => ({
	onSearchChange: (event) => dispatch(setSearchField(event.target.value))
}) 

class App extends Component {

	constructor() {
		super();
		this.state = {
			robots: []
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
		
	}

	render() {
		const { robots } = this.state;
		const { searchField, onSearchChange } = this.props;
		const filteredRobots = robots.filter( robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		return !robots.length ?
		/**	
		** Loading message if the server is taking to long to respond with the JSON info
		**/
		<h1>Loading</h1> :
		(
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox onSearchChange={ onSearchChange }/>
			<Scroll>
				<CardList robots={ filteredRobots }/>
			</Scroll>
		</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
