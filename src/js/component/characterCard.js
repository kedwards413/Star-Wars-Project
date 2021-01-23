import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const CharacterCard = props => {
	console.log("props", props.character);
	return (
		<div className="card m-3" style={{ width: "18rem;" }}>
			<img src="." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.character.name}</h5>
				<p className="card-text">Gender: {props.character.gender}</p>

				{/* <a href="#" className="btn btn-primary">
					Go somewhere
				</a> */}
				<Link to={`/characterdetails/${props.index}`}>
					<span href="#" className="btn btn-primary">
						Click for more
					</span>
				</Link>
			</div>
		</div>
	);
};

CharacterCard.propTypes = {
	character: PropTypes.object
};
CharacterCard.propTypes = {
	index: PropTypes.number
};
