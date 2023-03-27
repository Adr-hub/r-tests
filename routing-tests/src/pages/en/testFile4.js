import { Link } from "react-router-dom";
import '../../styles/en.scss';

const TestFile4 = () => {
    return <>
        <Link className="enLinks" to={'/en/education'}>education</Link>
        <Link className="enLinks" to={'/parcours'}>parcours</Link>
    </>
}
export default TestFile4;