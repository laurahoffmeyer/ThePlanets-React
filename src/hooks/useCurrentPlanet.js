import { useEffect, useState } from "react";

export const useCurrentPlanet = () => {

    const [planet, setPlanet] = useState(() => localStorage.getItem('planet') ?? 'mercury');

    useEffect(() => {
        localStorage.setItem('planet', planet)
    }, [planet])

  return {planet, setPlanet};
}