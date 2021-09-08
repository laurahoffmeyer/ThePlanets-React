import { useEffect, useState } from "react";
import axios from 'axios';

export const usePlanet = (planet) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPlanetData = async () =>
        {
            await axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`).then((response) => {
                setLoading(true);
                setError(null);
                setData(response.data);
                setLoading(false);
            }).catch((error) => {
                console.log('error', error);
                setLoading(false);
                setData(null);
                setError(error);
            })
        }
        getPlanetData();
    }, [planet, setData]);

    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    //     'Authorization': key,
    //     withCredentials: true,
    //     mode: 'no-cors',
    //   }

    return {data, loading, error};
}