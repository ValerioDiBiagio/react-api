
export default function Card({ children, name, image }) {

    return (
        <section>
            <h3>{name}</h3>
            <ul>
                {children}
            </ul>
        </section>
    )
}