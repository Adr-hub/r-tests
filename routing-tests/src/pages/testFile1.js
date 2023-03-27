import { Link, useLinkClickHandler } from "react-router-dom";
import '../styles/fr.scss';

const TestFile1 = () => {

    let linkEvent = useLinkClickHandler('/en/education', { replace: true });

    return <>
        <Link className="frLinks" to={'/test'}>parcours</Link>
        <Link className="frLinks" to={'/en/education'} onClick={(ev) => {

            ev.preventDefault();
            linkEvent();
        }}>education</Link>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p style={{ visibility: "hidden" }}>test</p>
        <p id="test">test</p>
    </>
}
export default TestFile1;