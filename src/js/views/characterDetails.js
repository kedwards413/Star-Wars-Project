//use props, show details of all the characters
import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CharacterDetails = props => {
	return (
		<div className="card" style={{ width: "18rem;" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title" />
				<p className="card-text">Gender:</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
CharacterDetails.propTypes = {
	character: PropTypes.object,
	imageURL: PropTypes.string,
	description: PropTypes.string
};
