import { Link } from "react-router-dom";
import '../styles/fr.scss';

const TestFile1 = () => {
    let mediaTest = window.matchMedia("(hover: none)");
    return <>
        <Link className="frLinks" to={'/test'}>parcours</Link>
        <Link className="frLinks" to={mediaTest.matches ? '/error' : '/en/education'}>education</Link>
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