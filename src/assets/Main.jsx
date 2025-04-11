import { useEffect, useState } from 'react'
import axios from "axios"
import Card from './Main-components/Card'


const endpointActors = 'https://www.freetestapi.com/api/v1/actors';

const endpointActresses = 'https://www.freetestapi.com/api/v1/actresses';

export default function Main() {

    const [actorsActressesList, setActorsActressesList] = useState([]);

    function fetchActorsActressesList() {
        axios.get(endpointActors)
            .then((resActors) => {
                axios.get(endpointActresses)
                    .then((resActresses) => {

                        const actors = resActors.data;
                        const actresses = resActresses.data;

                        setActorsActressesList([...actors, ...actresses]);
                    })
            })
    }

    useEffect(fetchActorsActressesList, []);


    return (
        <main>
            <div className="container">
                <h2>Actors and Actresses</h2>
                <div className='raw'>
                    {actorsActressesList.map(actors => <Card key={actors.name} name={actors.name} onChange={e => setActorsActressesList(e.target.value)}>
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
            </div>
        </main>
    )
}