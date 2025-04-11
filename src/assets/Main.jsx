import { useEffect, useState } from 'react'
import axios from "axios"
import Card from './Main-components/Card'


const endpointActors = 'https://www.freetestapi.com/api/v1/actors';

const endpointActresses = 'https://www.freetestapi.com/api/v1/actresses';

export default function Main() {
    const [actorsList, setActorsList] = useState([]);
    const [actressesList, setActressesList] = useState([]);


    function fetchActors() {
        axios.get(endpointActors)
            .then((res) => setActorsList(res.data));
    }

    useEffect(fetchActors, [])

    function fetchActresses() {
        axios.get(endpointActresses)
            .then((res) => setActressesList(res.data));
    }

    useEffect(fetchActresses, [])

    return (
        <main>
            <div className="container">
                <h2>Men</h2>
                <div className='raw'>
                    {actorsList.map(actors => <Card key={actors.id} name={actors.name} onChange={e => setActorsList(e.target.value)}>
                        <div className='img'>
                            <img src={actors.image} alt={actors.name} />
                        </div>
                        <li><span>Year of Birth:</span> {actors.birth_year}</li>
                        <li><span>Nationality:</span> {actors.nationality}</li>
                        <li><span>Biography:</span> {actors.biography}</li>
                        <li><span>Awards:</span> {actors.awards}</li>
                    </Card>
                    )}
                </div>
                <h2>Women</h2>
                <div className='raw'>
                    {actressesList.map(actress => <section key={actress.id} name={actress.name} onChange={e => setActressesList(e.target.value)}>
                        <div className='img'>
                            <img src={actress.image} alt={actress.name} />
                        </div>
                        <li><span>Year of Birth:</span> {actress.birth_year}</li>
                        <li><span>Nationality:</span> {actress.nationality}</li>
                        <li><span>Biography:</span> {actress.biography}</li>
                        <li><span>Awards:</span> {actress.awards}</li>
                    </section>)}
                </div>
            </div>
        </main>
    )
}