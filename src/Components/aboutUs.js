import React, { Component } from 'react';
import Navbar from "./navbar";
import Footer from "./footer";
import { Container } from "react-bootstrap"

export class aboutUs extends Component {
    render() {
        return (
            <div className="App" id="about-page">
                <Navbar />
                <div style={{ padding: "50px", color: "white" }}>
                    <h1>World of Movies </h1>
                </div>
                <Container style={{color:'white'}}>
                    <p align="left">WORLD OF MOVIES est un service de vidéo à la demande sur abonnement (SVOD) qui vous propose une multitude de films Hollywoodiens, de shows télé, de documentaires, de divertissements pour enfants, de séries diffusées en exclusivité en même temps qu’aux États-Unis, ainsi qu’une sélection de productions arabes ou de Bollywood, accessibles dans 19 pays du Moyen-Orient et d’Afrique du Nord.</p>
                    <p align="left" >WORLD OF MOVIES fait appel à une technologie de pointe pour vous offrir une expérience exceptionnelle avec des programmes en qualité full HD et 4K, issus des plus prestigieux studios de cinéma tels que 20th Century Fox, CBS, Disney, Lionsgate, Paramount, Showtime, Sony, Starz, Universal, ou Warner Bros. Pour un tarif mensuel ultra-compétitif, l’abonnement WORLD OF MOVIES vous donne accès à un vaste choix de programmes en illimité et sans publicité. Développés spécifiquement pour la région Moyen Orient et Afrique du Nord, STARZ PLAY propose des fonctionnalités de sous-titres en arabe et doublages en arabe ou français, disponibles en un simple clic.</p>
                    <p align="left" >WORLD OF MOVIES vous permet de tout regarder n’importe où et n’importe quand, sur terminal iOS ou Android, sur le navigateur de votre ordinateur Mac ou Windows, en streaming avec l’Apple TV, Chromecast, avec une console PS4 ou encore depuis une smart TV Samsung. Notre service est aussi disponible au sein de bouquets IPTV locaux et s’enrichit régulièrement de nouveaux supports (consoles de jeux, tablettes et autres smartphones). Enfin il autorise le téléchargement afin de pouvoir profiter de vos programmes hors-connexion.</p>
                    <p align="left" >Pour un confort total, WORLD OF MOVIES propose également à ses nouveaux abonnés une offre d’essai gratuit ainsi qu’un large choix de moyen de paiement, y compris par carte de crédit ou par facturation sur votre forfait mobile, avec une disposition ‘sans contrat – résilier à tout moment’.</p>
                    <p align="left" >WORLD OF MOVIES est une émanation de STARZ, maison-mère et l’un des principaux investisseurs, filiale de Lionsgate (NYSE: LGF.A, LGF.B). L’entreprise est aussi financée par State Street Global Advisors (SSGA), troisième plus importante firme de gestion d’actifs au monde, ainsi que SEQ Capital Partners et Delta Partners, sociétés de placements spécialisées en média et technologie.</p>
                          
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default aboutUs;