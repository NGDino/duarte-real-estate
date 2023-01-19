import React, { useState } from 'react'
import Head from '../components/head';
import Header from '../components/header';
import Footer from '../components/footer';
import { navigate } from "gatsby-link"
import { Box, Heading, Section, Text } from '../components/ui';
import { contactContainer, inputStyle, textAreaStyle } from '../components/ui.css';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join('&');
}

const Contact = () => {

    const [formState, setFormState] = useState({});

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...formState,
            }),
        })
            .then(() => navigate(form.getAttribute("action")))
            .catch((error) => alert(error));
    };
    return (
      <>
      <Header />

      <Section padding={4}>
        <Box width='full'  className = {contactContainer}>
        <Heading center>
          Contact us
        </Heading>
        
          <form onSubmit={handleSubmit}>
            
          <label>
            <Text variant='subhead'>
            Name: 
            </Text>
            <input type='text' className={inputStyle}/>
            </label>
            
            
            <label>
            <Text variant='subhead'>
            Email: 
            </Text>
           
            <input type='email' className={inputStyle}/>
            </label>
            
          
            <label>
            <Text variant='subhead'>
            How can we help you: 
            </Text>
           
            <textarea className={textAreaStyle} />
            </label>
         
          </form>
        </Box>
        <Footer/>
      </Section>
      </>
      
    )
}


export default Contact;
