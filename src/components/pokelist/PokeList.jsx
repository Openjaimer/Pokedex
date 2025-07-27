import { useState } from "react";
import usePokemonFetch from "./usePokemonFetch";
import Card from "../cards/Card";
import { useNavigate } from "react-router";
import "./Pokelist.css";

function getPokemonIdFromUrl(url) {
    const parts = url.split('/');
    return parts[parts.length - 2];
}

const PokeList = () => {
    const [offset, setOffset] = useState(0);
    const [limit] = useState(20);
    const navigateTo = useNavigate();

    const {
        pokemonJsonObject,
        isLoading,
        hasError,
        error
    } = usePokemonFetch(offset, limit);

    return (
        <div className="poke-list">
            <h2 className="text-2xl font-bold mb-4">Pokémon List</h2>

            {!isLoading && !hasError && pokemonJsonObject?.results && (
                <>
                    <section className="card-holder">
                        {pokemonJsonObject.results.map(p => {
                            const id = getPokemonIdFromUrl(p.url);
                            const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

                            return (
                                <Card
                                    key={id}
                                    imgUrl={imgUrl}
                                    title={p.name}
                                    description=""
                                    actionLabel="Go to Details"
                                    action={() => navigateTo(`/pokelist/${id}`)}
                                />
                            );
                        })}
                    </section>

                    <div className="flex justify-center mt-4">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setOffset(offset + 20);
                            }}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}

            {hasError && (
                <strong className="text-red-500">NDEAH pero no se puede cargar</strong>
            )}
        </div>
    );
};

export default PokeList;
