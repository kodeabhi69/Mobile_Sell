// import { useState } from "react";


// const Contact = ()=>{
//     const [contact,setContact] = useState({
//         username:"",
//         email:"",
//         message:"",
//     });

//     const handleInput = (e)=>{
//         const name = e.target.name;
//         const value = e.target.value;

//         setContact({...contact,[name]:value,})

//     };

//     return (
//     <>
//     <section className="section-contact">
    
//     <div className="contact-content container">
    
//     <h1 className="main-heading">contact us</h1>
    
//     </div>
    
//     {/* contact page */}
//     <div className="container grid grid-two-cols">
//         <div className="contact-img">
//             <img src="./images/support.jpeg" alt="we are always ready to help" />
// </div>

// {/* contact form content actual */}

// <section className="section-form">

// <form >
// <div>
//     <label htmlFor="usernamr">Username :</label>
//     <input type="text" name="username" id="username" autoComplete="off" value={contact.username} onChange={handleInput} required/>
// </div>
// <div>
//     <label htmlFor="usernamr">Email :</label>
//     <input type="email" name="email" id="email" autoComplete="off" value={contact.email} onChange={handleInput} required/>
// </div>
// <div>
//     <label htmlFor="message">Message</label>
//     <textarea name="message" id="message" autoComplete="off" value={contact.message} onChange={handleInput} cols={30} rows={10}></textarea>
// </div>
// <div>
//     <button>Submit</button>
// </div>
// </form>
//     </section>
//     </div>
//     </section>

//     </>
//     );
// };

// export default Contact;

import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../services/appApi";

function Contact() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { isError, isLoading, error }] = useLoginMutation();
    function handleLogin(e) {
        e.preventDefault();
        login({ email, password });
    }
    return (
        <Container>
            <Row>
                <Col md={6} className="login__form--container">
                    <Form style={{ width: "100%" }} onSubmit={handleLogin}>
                        <h1>Contact Us</h1>
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <br></br>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" value={password} required onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <br></br>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone no.</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone no." value={password} required onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Message : </Form.Label>
                        <textarea><Form.Control type="textbox" value={password} required onChange={(e) => setPassword(e.target.value)}/></textarea> 
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" disabled={isLoading}>
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={6} className="login__image--container"></Col>
            </Row>
        </Container>
    );
}

export default Contact;

