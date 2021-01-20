import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import PropTypes from "prop-types";

//main fetches and hardcoding here

export const Home = () => {
	const [characters, setCharacters] = useState([{ name: "Luke SkyWalker" }, { name: "Darth Vader" }]);
	const [planets, setPlanets] = useState([{ name: "The Republic" }, { name: "Death Star" }]);

	return (
		<div className="container-fluid mt-5">
			<div>
				<h1>Characters</h1>
				<div className="d-flex">
					{characters.map((value, index) => {
						return <CharacterCard key={index} character={value} />;
					})}
				</div>
			</div>
			<div>
				<h1>Planets</h1>
				<div className="d-flex">
					{planets.map((value, index) => {
						return <PlanetCard key={index} character={value} />;
					})}
				</div>
			</div>
		</div>
	);
};
