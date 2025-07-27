import PokeList from "../components/pokelist/PokeList";
import Container from "../components/panels/Container";

const Pokedex = () => {
    return (
        <Container>
            <h1 className="text-3xl font-bold text-center text-indigo-700 dark:text-indigo-300 mb-6">Pokédex</h1>
            <PokeList />
        </Container>
    )
}

export default Pokedex;
