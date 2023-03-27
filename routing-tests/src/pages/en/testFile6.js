import { Link } from "react-router-dom";
import '../../styles/en.scss';

const TestFile6 = () => {
    return <>
        <Link className="enLinks" to={'/en/portfolio'}>homepage</Link>
        <Link className="enLinks" to={'/test'}>accueil</Link>
    </>
}
export default TestFile6;