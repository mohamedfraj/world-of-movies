import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";


export class footer extends Component {
    render() {
        return (
            <Container className="footer">
                <div className='mediaquery'>
                    <div className='logo-footer'>
                        <a style={{ textDecoration: 'none', color: 'grey' }} href='https://www.facebook.com'><i class="fab fa-facebook"></i></a>
                        <a style={{ textDecoration: 'none', color: 'grey' }} href='https://www.youtube.com'><i class="fab fa-youtube"></i></a>
                        <a style={{ textDecoration: 'none', color: 'grey' }} href='https://www.instagram.com'><i class="fab fa-instagram"></i></a>
                        <a style={{ textDecoration: 'none', color: 'grey' }} href='https://www.twitter.com'><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
                <div className='container-parag'>
                    <div className='parag-footer parag1'>
                        <p>Audio et Sous-Titre</p>
                        <p>press</p>
                        <p>Confidentialité</p>
                        <p>Nous contacter</p>
                    </div>
                    <div className='parag-footer parag2 ' >
                        <p>Audiodescription</p>
                        <p>Relations Investisseurs</p>
                        <p>Information légales</p>
                    </div>
                    <div className='parag-footer parag2 '>
                        <p>Centre d'aide</p>
                        <p>Recrutement</p>
                        <p>Préférences de cookies</p>
                    </div>
                    <div className='parag-footer parag2 '>
                        <p>Cartes cadeaux</p>
                        <p>Conditions d'utilisation</p>
                        <p>Mentions légales</p>
                    </div>
                </div>
                <h5>© 2019 Copyright:<Link style={{ textDecoration: 'none', color: '#343a40', paddingBottom: '15px' }} to='/'>Worldofmovies.com</Link></h5>
            </Container>
        );
    }
}

export default footer;
