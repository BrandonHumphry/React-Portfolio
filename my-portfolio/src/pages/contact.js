import React, {useEffect} from 'react';
import Navigation from "../components/navigation"

function Contact (){
    useEffect(() => {
        document.title = "BH | Contact"
     }, []);
    return (
        <div className="App">
            <Navigation></Navigation>
        </div>
      );
}

export default Contact;