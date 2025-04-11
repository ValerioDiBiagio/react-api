import { useEffect, useState } from 'react'
import axios from "axios"
import ActorCard from './Main-components/ActorCard'


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
                        <div className='img'>
                            <img src={actors.image} alt={actors.name} />
                        </div>
                        <li><span>Year of Birth:</span> {actors.birth_year}</li>
                        <li><span>Nationality:</span> {actors.nationality}</li>
                        <li><span>Biography:</span> {actors.biography}</li>
                        <li><span>Awards:</span> {actors.awards}</li>
                    </ActorCard>
                    )}
                </div>
            </div>
        </main>
    )
}