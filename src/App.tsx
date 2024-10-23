import { useState } from "react";

import PokemonCard from "./components/PokemonCard";

import "./styles/App.css";

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);
	console.log(pokemonIndex);
	const handleClickPrevious = () => {
		setPokemonIndex(pokemonIndex - 1);
	};
	const handleClickNext = () => {
		setPokemonIndex(pokemonIndex + 1);
	};

	return (
		<div>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />
			{pokemonIndex > 0 ? (
				<button type="button" onClick={handleClickPrevious}>
					Précédent
				</button>
			) : (
				""
			)}
			{pokemonIndex < pokemonList.length - 1 ? (
				<button type="button" onClick={handleClickNext}>
					Suivant
				</button>
			) : (
				""
			)}
		</div>
	);
}

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "mew",
	},
];

export default App;
