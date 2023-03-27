import { Link } from "react-router-dom";
import '../styles/fr.scss';

const TestFile2 = () => {
    return <>
        <Link className="frLinks" to={'/projets'}>projets</Link>
        <Link className="frLinks" to={'/en/projects'}>projects</Link>
    </>
}
export default TestFile2;