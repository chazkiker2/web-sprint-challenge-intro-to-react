import React, { useState, useEffect } from 'react';
import './App.css';

import axios from "axios";
import { BASE_URL, ENDPOINTS, getQueryString } from "./constants/index";

import Character from "./components/Character";
// console.log(BASE_URL, ENDPOINTS);

// console.log(axios);

const App = () => {
	/**
	 * Try to think through what state you'll need for this app before starting. Then build out
	 * the state properties here.
	 */
	const [data, setData] = useState({});
	const [characters, setCharacters] = useState([]);


	/**
	 * Fetch characters from the API in an effect hook. Remember, anytime you have a
	 * side effect in a component, you want to think about which state and/or props it should
	 * sync up with, if any.
	 */
	useEffect(() => {
		const queryString = getQueryString("characters", null, null);
		const fetchCount = () => {
			axios.get(queryString)
				.then(res => {
					console.log(res.data);
					console.log(res.data.results);
					setData(res.data);
					setCharacters(res.data.results);
				})
				.catch(err => {
					console.log(err);
					debugger;
				});
		};
		if (queryString) {
			console.log(queryString);
			fetchCount();
		}
	}, []);

	return (
		<div className="App">
			<h1 className="Header">Characters</h1>
			<ul>
			{
				characters.map(char => {
					return <li key={char.id}><Character character={char} /></li> 
				})
			}

			</ul>
		</div>
	);
}

export default App;
