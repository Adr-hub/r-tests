import { Link } from "react-router-dom";
import '../styles/fr.scss';

const TestFile3 = () => {
    return <>
        <Link className="frLinks" to={'/portfolio'}>accueil</Link>
        <Link className="frLinks" to={'/en/portfolio'}>homepage</Link>
    </>
}
export default TestFile3;