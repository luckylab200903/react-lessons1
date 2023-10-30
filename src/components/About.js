import Header from "./Header";
import { useContext } from "react";
import {CONTACT_US_IMAGE} from "../utils/constant"
const About=()=>{
    
    return (<div>
    {/* <Header /> */}
        <div className="Main-body">

        <div className="Main-content">
        <img className="contact-us-image" src={CONTACT_US_IMAGE}/>
        <h1>ABOUT US</h1>
        <p className="para-content">Character entity names for unusual characters such as ó which are included using SGML entity definitions: &name; as in "the dream of &oacute;engus" which is displayed as: "the dream of óengus". The full list of standard entity names recognised by most browsers is given in Appendix II.
        <br></br>
Character emphasis using logical and presentational markup. The set of logical character emphasis can be extended, and HTML+ provides the means for browsers to determine how to render such extensions
Simple footnotes or margin notes, which can be rendered as pop-up overlays
<br></br>
<br></br>
<br></br>
Images which act as single characters and which can be vertically aligned relative to the text line in which they are embedded
Hypertext Links based on the URL or URN notations
<br></br>
<br></br>
Markup signifying the start and end of change bars. You can also mark text as being removed or added, as is common in legal documents
<br></br>
<br></br>
Conditional text which appears only on-line or only when printed
Input fields when the paragraph is part of a form
Explicit line breaks</p>
            </div>
        </div>
        <footer />
    </div>)
}

export default About;