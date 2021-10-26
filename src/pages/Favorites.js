import { useContext } from 'react';
import { Link } from "react-router-dom";


import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/layout/meetups/MeetupList';

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);


    let content;

    if(favoritesCtx.totalFavorites === 0) {
        content = <p><Link to='/' className="link">You got no favorites yet, <br /> do you want to add some?</Link> </p>
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }

    return <section>
        <h1>My Favorites</h1>
        {content}
    </section>;
}

export default FavoritesPage;