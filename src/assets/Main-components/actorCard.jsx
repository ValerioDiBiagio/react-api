
export default function ActorCard({ children, name, image }) {

    return (
        <section>
            <h4>{name}</h4>
            <ul>
                {children}
            </ul>
        </section>
    )
}