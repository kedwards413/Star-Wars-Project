import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const PlanetDetails = props => {
	return (
		<div className="card" style={{ width: "18rem;" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title" />
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the card content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

PlanetDetails.propTypes = {
	character: PropTypes.object,
	imageURL: PropTypes.string,
	description: PropTypes.string
};
