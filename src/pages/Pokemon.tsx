import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PokeballImg from "../assets/pokeball.png";
import BulbasaurImg from "../assets/bulbasaur.gif";
import Footer from "../components/Footer";
import styles from "./pokemon.module.css";
import { PokemonDetails } from "../types/types";
import { fetchPokemon } from "../api/fetchPokemon";
import { waitfor } from "../utils/utils";
import LoadingScreen from "../components/LoadingScreen";

const Pokemon = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [pokemon, setPokemon] = useState<PokemonDetails>();
    const { name } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        async function getPokemon() {
            setIsLoading(true);
            await waitfor(300);
            const fetchedPokemon = await fetchPokemon(name as string);
            setPokemon(fetchedPokemon);
            setIsLoading(false);
        }
        getPokemon();
    }, [name])

    if (isLoading || !pokemon) {
        return <LoadingScreen />
    }

    return (
        <>
            <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
                <img className={styles.pokeballImg} src={PokeballImg} alt="Pokeball" /> 
                Go Back
            </button>
            <div className={styles.pokemon}>
                <main className={styles.pokemonInfo}>
                    <div className={styles.pokemonTitle}>{name?.toUpperCase()}</div>
                    <div>N° {pokemon?.id}</div>
                    <div>
                        <img className={styles.pokemonInfoImg} src={pokemon?.imgSrc} alt={pokemon?.name} />
                    </div>
                    <div>HP: {pokemon?.hp}</div>
                    <div>Attack: {pokemon?.attack}</div>
                    <div>Defense: {pokemon?.defense}</div>
                    <div>Special Attack: {pokemon?.specialAttack}</div>
                    <div>Special Defense: {pokemon?.specialDefense}</div>
                    <div>Speed: {pokemon?.speed}</div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Pokemon;