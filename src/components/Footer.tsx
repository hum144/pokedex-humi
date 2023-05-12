import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./footer.module.css";
//import TopButton from "../components/TopButton";
///assets
import PokemonPic from '../assets/pikachu.png';
import LocationPic from '../assets/pointer.png';
import ItemsPic from '../assets/pokeball.png';
import {TopButton} from '../components/TopButton';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link className={styles.footerLink} to="/pokemons">
                <img className={styles.footerIcon} src={PokemonPic} alt="pokeball"/>
                Pokemons
            </Link>
            <Link className={styles.footerLink} to="/items">
                <img className={styles.footerIcon} src={ItemsPic} alt="items"/>
                Items
            </Link>
            <Link className={styles.footerLink} to="/pokemons">
                <img className={styles.footerIcon} src={LocationPic} alt="map"/>
                Mapa
            </Link>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ position: 'fixed', bottom: '20px', right: '20px', padding: '10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.354 4.646a.5.5 0 0 0-.708 0L1.646 10.293a.5.5 0 0 0 .708.708L8 6.707l5.646 5.646a.5.5 0 0 0 .708-.708L8.707 4.646a.5.5 0 0 0-.353-.146z"/>
                </svg>
            </button>
            <TopButton />
        </footer>
        
    );
}

export default Footer;