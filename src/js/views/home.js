import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { StarshipCard } from "../component/starshipCard";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

//main fetches and hardcoding here

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container mt-5">
			<div className="characterList">
				<h1>Characters</h1>
				<div className="container horizontal-scrollable">
					<div className="row row-horizon flex-nowrap py-3">
						{store.characters.map((value, index) => {
							return <CharacterCard key={index} character={value} index={index} />;
						})}
					</div>
				</div>
			</div>
			<div className="planetList">
				<h1>Planets</h1>
				<div className="container horizontal-scrollable">
					<div className="row row-horizon flex-nowrap py-3">
						{store.planets.map((value, index) => {
							return <PlanetCard key={index} planet={value} index={index} />;
						})}
					</div>
				</div>
			</div>
			<div className="starshipList">
				<h1>Starships</h1>
				<div className="container horizontal-scrollable">
					<div className="row row-horizon flex-nowrap py-3">
						{store.starship.map((value, index) => {
							return <StarshipCard key={index} starship={value} index={index} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
