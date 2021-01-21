import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//main fetches and hardcoding here

export const Home = () => {
	const [characters, setCharacters] = useState([{ name: "Luke SkyWalker" }, { name: "Darth Vader" }]);
	const [planets, setPlanets] = useState([{ name: "The Republic" }, { name: "Death Star" }]);
	useEffect(() => {
		fetch("https://swapi.dev/api/people/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				setCharacters(responseAsJson.results);
				console.log(characters);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);
	useEffect(() => {
		fetch("https://swapi.dev/api/planets/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				setPlanets(responseAsJson.results);
				console.log(planets);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);
	return (
		<div className="container-fluid mt-5">
			<div className="characterList">
				<h1>Characters</h1>
				<div className="d-flex">
					{characters.map((value, index) => {
						return <CharacterCard key={index} character={value} />;
					})}
				</div>
			</div>
			<div className="planetList">
				<h1>Planets</h1>
				<div className="d-flex">
					{planets.map((value, index) => {
						return <PlanetCard key={index} planet={value} />;
					})}
				</div>
			</div>
		</div>
	);
};
