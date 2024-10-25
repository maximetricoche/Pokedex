interface pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: pokemon[];
}

function NavBar({ pokemonList, setPokemonIndex }: NavBarProps) {
	const handleClick = (index: number) => setPokemonIndex(index);
	return (
		<nav>
			{pokemonList.map((pokemon, index) => {
				return (
					<button key={pokemon.name} type="button" onClick={() => handleClick(index)}>
						{pokemon.name}
					</button>
				);
			})}
		</nav>
	);
}

export default NavBar;
