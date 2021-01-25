const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			planets: [],
			characters: [],
			starship: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			addFavorite: newItem => {
				var storeCopy = getStore();
				var updatedFavorites = storeCopy.favorites.concat(newItem);
				setStore({ favorites: updatedFavorites });
			},
			deleteItem: index => {
				var storeCopy = getStore();
				var updatedList = storeCopy.favorites.filter(index);
				setStore({ favorites: updatedList });
			},
			loadSomeData: () => {
				fetch("https://swapi.dev/api/people/")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ characters: responseAsJson.results });
						console.log(characters);
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
				fetch("https://swapi.dev/api/planets/")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ planets: responseAsJson.results });
						console.log(planets);
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});

				fetch("https://swapi.dev/api/starships/")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ starship: responseAsJson.results });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
