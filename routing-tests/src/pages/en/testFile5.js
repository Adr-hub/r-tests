import { Link } from "react-router-dom";
import '../../styles/en.scss';

const TestFile5 = () => {
    return <>
        <Link className="enLinks" to={'/en/projects'}>projects</Link>
        <Link className="enLinks" to={'/projets'}>projets</Link>
    </>
}
export default TestFile5;