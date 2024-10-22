import PokemonCard from "./components/PokemonCard";

import "./styles/App.css";

function App() {
	return (
		<div>
			<PokemonCard pokemon={pokemonList[0]} />
		</div>
	);
}

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "mew",
	},
];

export default App;
