import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const CharacterCard = props => {
	console.log("props", props.character);
	const { store, actions } = useContext(Context);
	return (
		<div className="col">
			<div className="card-group">
				<div className="card" style={{ width: "18rem" }}>
					<img className="card-img-top" src="https://www.dummyimage.com/400x200" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title text-left">{props.character.name}</h5>
						<p className="card-text">Gender: {props.character.gender}</p>
						<p className="card-text">Birthyear: {props.character.birth_year}</p>
						<Link to={`/characterdetails/${props.index}`}>
							<span href="#" className="btn btn-primary">
								Click for more
							</span>
						</Link>
						<a
							href="#"
							className="btn btn-outline-danger ml-5"
							onClick={() => actions.addFavorite(props.character.name)}>
							Fav
						</a>
					</div>
				</div>
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
