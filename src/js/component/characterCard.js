import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const CharacterCard = props => {
	return (
		<div className="card m-3" style={{ width: "18rem;" }}>
			<img src="." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.character.name}</h5>
				<p className="card-text">Gender: {props.character.gender}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

CharacterCard.propTypes = {
	character: PropTypes.object
};
