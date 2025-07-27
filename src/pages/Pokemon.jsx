import { useState, useEffect } from 'react';
import { useParams } from "react-router";

const Pokemon = () => {
    const { pokemonId } = useParams();
    const [pokemonData, setPokemonData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then(resp => resp.json())
            .then(data => {
                setPokemonData(data);
                setIsLoading(false);
                setHasError(false);
            })
            .catch(() => {
                setHasError(true);
                setIsLoading(false);
                setPokemonData(null);
            });
    }, [pokemonId]);

    return (
        <section className="p-6 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
            {isLoading && (
                <div className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Loading...
                </div>
            )}

            {pokemonData && (
                <>
                    <h1 className="text-3xl font-bold mb-4 text-center capitalize">{pokemonData.name}</h1>
                    <hr className="border-gray-500 mb-6" />
                    <div className="flex justify-center gap-8 mb-6">
                        <img src={pokemonData.sprites.front_default} alt={`${pokemonData.name} front`} />
                        <img src={pokemonData.sprites.back_default} alt={`${pokemonData.name} back`} />
                    </div>
                </>
            )}

            {hasError && (
                <div className="text-red-500 text-center font-semibold">
                    Ocurrió un error al cargar el Pokémon, NO QUIERE VERTE.
                </div>
            )}
        </section>
    );
}

export default Pokemon;
