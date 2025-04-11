
export default function ActorCard({ children, name, image }) {

    return (
        <section>
            <h3>{name}</h3>
            <ul>
                {children}
            </ul>
        </section>
    )
}