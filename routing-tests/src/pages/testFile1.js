import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/fr.scss';

const TestFile1 = () => {
    const [media, findMedia] = useState(undefined);
    useEffect(() => {
        let mediaTest = window.matchMedia("(hover: none)");

        if (mediaTest.matches) {
            findMedia(true);
        }

    }, []);

    return <>
        <Link className="frLinks" to={'/test'}>parcours</Link>
        <Link className="frLinks" to={media ? '/error' : '/en/education'}>education</Link>
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