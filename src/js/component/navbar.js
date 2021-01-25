import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-dark bg-black mb-3">
			<Link className="navbar-brand" to="/">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
					width="70"
					height="30"
					alt="Star Wars"
				/>
			</Link>
			<div className="dropdown show ml-auto">
				<button
					className="btn btn-dark dropdown-toggle"
					href="#"
					role="button"
					id="dropdownMenuLink"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
					<span className="badge badge-secondary">{store.favorites.length}</span>
				</button>
				<div
					className={store.favorites.length > 0 ? "dropdown-menu show dropdown-menu-right" : "d-none"}
					aria-labelledby="dropdownMenuLink">
					<ul className="w-25 pl-0">
						{store.favorites &&
							store.favorites.map((item, index) => {
								return (
									<li className="dropdown-item" href="#" key={index}>
										{item}
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
