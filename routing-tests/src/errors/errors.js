import { useRouteError, Link } from "react-router-dom";
import '../styles/errors/errors.scss';
const Errors = () => {
    let errorHandler = useRouteError();
    console.error('Error ' + errorHandler.status + '. ' + errorHandler.error.message);
    return <>
        <p className="status">{errorHandler.statusText}</p>
        <p className="fr-notification">Ce site peut avoir des défauts. Si ce message apparait vous pouvez rejoindre la <Link to={'/'}>page d'accueil</Link> du site.
        </p>
        <p className="en-notification">Bugs exist. If you see this message you may go back to the website's <Link to={'/en/portfolio'}>homepage</Link>.</p></>
};
export default Errors;
