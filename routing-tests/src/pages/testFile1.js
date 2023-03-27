import { Link, useHref, useLinkClickHandler } from "react-router-dom";
import '../styles/fr.scss';

const TestFile1 = () => {
    let url = useHref('/en/education');

    let linkEvent = useLinkClickHandler('/en/education', { replace: true });

    return <>
        <Link className="frLinks" to={'/test'}>parcours</Link>
        <Link className="frLinks" to={url} onClick={(ev) => {

            ev.preventDefault();
            linkEvent(ev);
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