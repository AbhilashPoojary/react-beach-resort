import React from 'react';
import Hero from "../components/Hero.js"
import Banner from "../components/Banner.js"
import {Link} from "react-router-dom"
import Services from "../components/Services.js"
import FeaturedRooms from "../components/FeaturedRooms"


function Home(props) {
    return (
        <React.Fragment>
        <Hero hero="defaultHero">
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        </React.Fragment>
    );
}
Hero.defaultProps = {
    hero: "defaultHero"
}

export default Home;