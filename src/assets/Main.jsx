import { useEffect, useState } from 'react'
import axios from "axios"

const endpoint = 'https://www.freetestapi.com/api/v1/actors';

export default function Main() {
    const [actorsList, setActorsList] = useState([]);

    function fetchActors() {
        axios.get(endpoint)
            .then((res) => console.log(res.data))
    }

    useEffect(fetchActors, [])

    return (
        <main>

        </main>
    )
}