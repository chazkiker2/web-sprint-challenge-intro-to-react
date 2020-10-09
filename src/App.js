// DEPENDENCIES
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import styled from "styled-components";

// CONSTANTS
import { getQueryString } from "./constants/index";

// COMPONENTS
import Character from "./components/Character";

// STYLE
import './App.css';

const StyledContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
`;

const App = () => {
	/**
	 * Try to think through what state you'll need for this app before starting. Then build out
	 * the state properties here.
	 */
	// const [data, setData] = useState({});
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
					// console.log(res.data);
					console.log(res.data.results);
					// setData(res.data);
					setCharacters(res.data.results);
				})
				.catch(err => {
					// console.log(err);
					debugger;
				});
		};
		if (queryString) {
			// console.log(queryString);
			fetchCount();
		}
	}, []);

	return (
		<div className="App">
			<h1 className="Header">Characters</h1>
			<StyledContainer>
			{
				characters.map(char => {
					return <Character key={char.id} character={char} />
				})
			}
			</StyledContainer>
		</div>
	);
}

export default App;
