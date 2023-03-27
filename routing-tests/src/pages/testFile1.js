import { Link } from "react-router-dom";
import '../styles/fr.scss';

const TestFile1 = () => {
    return <>
        <Link className="frLinks" to={'/test'}>parcours</Link>
        <Link className="frLinks" to={'/en/education'}>education</Link>
    </>
}
export default TestFile1;