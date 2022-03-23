import React from 'react';
import Header from '../components/Header';
import JsonImage from '../assets/json-ocrp7.png';
import Screenshot from '../assets/screenshot-projet-ocr-p7.png'
import Footer from '../components/Footer';


const About = () => {
    return (
        <>
        <Header/>
        <section className='flex-center'>
        <div className="about__wrapper">
        <h1 className="pb-3">Objectif du projet</h1>
        <div className="title pb-1">Lancez votre propre site d'avis de restaurants</div>
        <p>Vous avez choisi de vous lancer dans le business des avis de restaurants. Votre objectif : créer un service simple et utile qui permet d'avoir des avis sur des restaurants autour de soi.</p>
        <p>Pour ce projet, vous allez devoir apprendre à utiliser des API externes, telles que celles de Google Maps et de Google Places (votre plus gros concurrent). Et ce n'est pas tout : vous allez devoir orchestrer toutes ces informations de manière cohérente dans votre application !</p>
        <h2 className='pt-1 pb-1'>Etape 1 : la carte des restaurants</h2>
        <p>Commencez par les fondations de votre application. Il y aura 2 sections principales :</p>
        <ul>
            <li>
            <p>Une carte Google Maps, chargée avec l'<a href="https://developers.google.com/maps/?hl=fr">API de Google Maps</a></p>
            </li>
            <li>
            <p>Une liste de restaurants correspondant à la zone affichée sur la carte Google Maps</p>
            </li>
        </ul>
        <p>La carte Google Maps sera centrée immédiatement sur la position de l'utilisateur. Vous utiliserez l'API de géolocalisation de JavaScript. Un marqueur de couleur spécifique sera placé à l'emplacement de l'utilisateur.</p>
        <p>Une liste de restaurants est fournie sous forme de données JSON présentées dans un fichier à part. En temps normal, ces données vous seraient renvoyés par un backend via une API, mais pour cet exercice il sera pour le moment suffisant de charger en mémoire tous les restaurants en mémoire directement.</p>
        <p>Voici un exemple de fichier JSON avec déjà 2 restaurants pré-remplis (vous devriez en ajouter un peu plus) :</p>
        <img className='pt-1 pb-1' src={JsonImage} alt="" />
        <p>Affichez ces restaurants grâce à leurs coordonnées GPS sur la carte. Les restaurants qui sont actuellement visibles sur la carte doivent être affichés sous forme de liste sur le côté de la carte. Vous afficherez la moyenne des commentaires de chaque restaurant (qui va de 1 à 5 étoiles).</p>
        <p>Lorsqu'on clique sur un restaurant, la liste des avis enregistrés s'affiche avec les commentaires. Affichez aussi la photo Google Street View grâce à l'API correspondante.</p>
        <p>Un outil de filtre permet d'afficher uniquement les restaurants ayant entre X et Y étoiles. La mise à jour de la carte s'effectue en temps réel.</p>
        <p className='pt-1 pb-1'><strong>Fichiers à fournir :</strong></p>
        <ul>
            <li>
                <p>Code HTML / CSS / JS du projet</p>
            </li>
        </ul>
        <h3 className='pt-1 pb-1'>Etape 2 : ajoutez des restaurants et des avis !</h3>
        <p>Vos visiteurs aimeraient eux aussi donner leur avis sur des restaurants !Proposez-leur :</p>
        <ul>
            <li>
                <p>D'ajouter un avis sur un restaurant existant</p>
            </li>
            <li>
                <p>D'ajouter un restaurant, en cliquant sur un lieu spécifique de la carte</p>
            </li>
        </ul>
        <p>Vous placerez ces éléments côte à côte.</p>
        <p>Une fois un avis ou un restaurant ajouté, il apparaît immédiatement sur la carte. Un nouveau marqueur apparaît pour indiquer la position du nouveau restaurant.</p>
        <p>Les informations ne seront pas sauvegardées si on quitte la page (elles restent juste en mémoire le temps de la visite).</p>
        <p className='pt-1 pb-1'><strong>Fichiers à fournir :</strong></p>
        <ul>
            <li>
                <p>Code HTML / CSS / JS du projet</p>
            </li>
        </ul>
        <h3 className='pt-1 pb-1'>Etape 3 : intégration avec l'API de Google Places</h3>
        <p className='pb-1'>Pour l'instant, il n'y a pas beaucoup de restaurants et pas beaucoup d'avis. Heureusement, Google Places propose une API pour récupérer des restaurants et des avis. Servez-vous en pour afficher des restaurants et avis supplémentaires sur votre carte ! Ici la documentation : <a href="https://developers.google.com/places/">https://developers.google.com/places/</a></p>
        <img className='pt-1 pb-1' src={Screenshot} alt="" />
        <p>Vous utiliserez la search api pour trouver des restaurants dans la zone affichée.</p>
        <p>Lisez bien la documentation pour savoir comment accéder aux données de Google Places et n'hésitez pas à faire autant de recherches Google que nécessaire quand vous butez sur un problème. </p>



        </div>
        </section>
        <Footer />
        </>
        )
    };
    
    export default About;