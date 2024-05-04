import {  Link,Outlet } from 'react-router-dom';

function Contact() {
    return (
        <>
        <h1>Contact Page</h1>
        <p>Hello, Tis is contact page</p>
        <p>We Are Group Of Devloper</p>
        <Link to="channel">Channel</Link>&nbsp;&nbsp;&nbsp;
        <Link to="company">Company</Link>&nbsp;&nbsp;&nbsp;
        <Link to="other">Other</Link>
        <Outlet />
        </>
        
    )
}

export default Contact;