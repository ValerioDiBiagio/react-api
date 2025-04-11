import { useEffect, useState } from 'react'
import axios from "axios"
import ActorCard from '../assets/Main-components/actorCard'


const endpoint = 'https://www.freetestapi.com/api/v1/actors';

export default function Main() {
    const [actorsList, setActorsList] = useState([]);

    function fetchActors() {
        axios.get(endpoint)
            .then((res) => setActorsList(res.data));
    }

    useEffect(fetchActors, [])

    return (
        <main>
            <div className="container">
                <div className='raw'>
                    {actorsList.map(actors => <ActorCard key={actors.id} name={actors.name} onChange={e => setActorsList(e.target.value)}>
                        <div>
                            <img src={actors.image} alt={actors.name} />
                        </div>
                        <li>Year of Birth: {actors.birth_year}</li>
                        <li>Nationality: {actors.nationality}</li>
                        <li>Biography: {actors.biography}</li>
                        <li>Awards: {actors.awards}</li>
                    </ActorCard>
                    )}
                </div>
            </div>
        </main>
    )
}