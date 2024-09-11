import { Link } from '../components/Link'

export default function Home() {
    return (
        <>
            <h1> Home </h1>
            <p> Esta es una pagina para crear un React Router desde cero. </p>
            <Link to={'/about'}> Ir a sobre nosotros </Link>
        </>
    )
}