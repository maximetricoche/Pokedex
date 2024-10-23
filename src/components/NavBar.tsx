interface pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: pokemon[];
}

function NavBar({ pokemonIndex, pokemonList, setPokemonIndex }: NavBarProps) {
	const handleClickPrevious = () => {
		setPokemonIndex(pokemonIndex - 1);
	};
	const handleClickNext = () => {
		setPokemonIndex(pokemonIndex + 1);
	};

	return (
		<nav>
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
		</nav>
	);
}

export default NavBar;
