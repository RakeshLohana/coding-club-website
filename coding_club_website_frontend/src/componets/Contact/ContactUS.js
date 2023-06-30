import React, { useState } from 'react';
import axios from 'axios';
import './Css/style.css'
import mail from './images/mail.png'
import location from './images/location.png'

const ContactUS = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = { name, email, subject, message };

        try {
            const response = await axios.post('http://localhost:4000/email', formData);
            if (response.status === 200) {
                alert('Email sent successfully');
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                throw new Error('An error occurred while sending the email');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while sending the email');
        }
    };


    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column' }} >
                <section>
                    <div className="contact-hd container">
                        <div>
                            <h1 >Contact <color className="contact-hd"> us </color></h1>
                            <p>
                                Thank you for your interest in our website! We welcome your comments, feedback, and questions <br/> Please fill out the form below to contact us. Our team will get back to you as soon as possible.
                            </p>
                        </div>

                    </div>
                </section>
            </div>
            <section>
                <div className="contact-form container">
                    <div className="row">
                        <div className="info col-sm-12 col-md-5 col-lg-5 col-xl-5">
                            <span>
                                <img className="callme" src={location} alt="" />
                                <h4>Location:</h4>
                                <p>
                                    NED University of Engineering and Technology University Road,
                                    Karachi 75270
                                </p>
                            </span>
                            <span
                            ><img className="callme" src={mail} alt="" />
                                <h4>Email:</h4>
                                <p>studentcoding@gmail.com</p>
                                <p></p
                                ></span>


                        </div>
                        <div className="inputs col-sm-12 col-md-7 col-lg-7 col-xl-7">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    className="name-inp"
                                    placeholder="Your Name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    className="email-inp"
                                    placeholder="Your Email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <br />
                                <input
                                    type="text"
                                    name="subject"
                                    className="email-inp"
                                    placeholder="Subject"
                                    required
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                                <br />
                                <textarea
                                    name="message"
                                    cols="30"
                                    rows="5"
                                    className="textarea-inp"
                                    placeholder="Message"
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                <div>
                                <input type="submit" class="submitBtn" value="Submit" title="Submit" />

                                    {/* <input type="submit" className="submitBtn btn btn-primary text-center" title="Submit" /> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUS
