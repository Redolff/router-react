import { Link } from "../components/Link"  

const i18n = {
    es: {
        title: 'Sobre Mi',
        photo: 'Foto de Redolfo',
        button: 'Ir a la home',
        description: 'Hola, me llamo Federico Redolfo y soy Programador. Tengo conocimientos en el FrontEnd como en el BackEnd'
    },
    en: {
        title: 'About us',
        photo: 'Photo the Redolfo',
        button: 'Go to home',
        description: 'Hi, my name is Federico Redolfo and I am Developer. I have knowledge in the FrontEnd as well the BackEnd'
    }
}

const useI18n = (lang) => {
    return i18n[lang] || i18n.en 
}

export default function About({ routeParams }) {
    const i18n = useI18n(routeParams.lang ?? 'es')
    return (
        <>
            <h1> {i18n.title} </h1>
            <img src="" alt={i18n.photo} />
            <p> {i18n.description} </p>
            <Link to={'/'}> {i18n.button} </Link>
        </>
    )
}