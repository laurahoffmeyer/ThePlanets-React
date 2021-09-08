import { useEffect, useState } from "react";
import axios from 'axios';

export const useWikiData = (planet) => {

    if(planet === 'mercury') {
        planet = 'Mercury_(Planet)';
    }

    const [overview, setOverview] = useState({});
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    let myPage = '';
    let myID = '';
    let pageURL = `https://en.wikipedia.org/wiki/${planet}`;

    useEffect(() => {
        const getWiki = async () => {
            await axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&exsentences=3&redirects=1&titles=${planet}&origin=*`)
            .then((response) => {
                setLoading(true);
                setError(null);
                myPage = response.data.query.pages;
                myID = myPage[Object.keys(myPage)[0]].extract;
                setOverview(myID)
                setLoading(false);
            }).catch((error) => { 
                console.log('error', error);
                setLoading(false);
                setOverview(null);
                setError(error);
            })
        }
        getWiki();
    }, [planet, setOverview])

    return {overview, pageURL, loading, error}
}