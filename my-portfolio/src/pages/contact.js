import React, {useEffect, useState} from 'react';
// import React from "react";
import Navigation from "../components/navigation";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from '@material-ui/lab/Alert';



const Contact = () => {

  useEffect(() => {
    document.title = "BH | Contact"
 }, []);

  const [email, setEmail] = useState({
    sent: false,
    success: false
  })
  const [disabled, setDisabled] = useState(true)
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = ({target:{name,value}}) => {
    setInput({...input, [name]:value});
    if(input.name.trim() && input.email.trim() && input.message.trim()){
      setDisabled(false);
    }else{
      setDisabled(true)
    }
    console.log(input)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

    return (
      <div className="App">
        <Navigation></Navigation>

    {/* blocking this space for possible div class for styling the form here */}

        <form onSubmit={handleSubmit} style={{padding: "5%", width: "60vw", margin:"auto", backgroundColor:"aliceblue", borderRadius:""}} noValidate autoComplete="off">
          <TextField onChange={handleChange} fullWidth name="name" label="Name" type="text"/>
          <TextField onChange={handleChange} fullWidth name="email" label="E-mail" type="text"/>
          <TextField onChange={handleChange} fullWidth name="message" label="Message" as="text"  multiline rows="3"/>
        

        <Button className="d-inline-block" variant="primary" type="submit" disabled={disabled}>
            Send Message
        </Button>
        </form>
        {(email.sent && email.success) ? <Alert severity="success">E-mail sent</Alert> :
        (email.sent && !email.success) ? <Alert severity="error">E-mail not sent</Alert> : ""}

      </div>
    )
}

export default Contact;
