import { useEffect, useState } from "react";

import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

import "./styles/App.css";

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);
	useEffect(() => {
		alert("Hello pokemon trainer 😊");
	}, []);

	return (
		<section>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />
			<NavBar pokemonList={pokemonList} pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} />
		</section>
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
