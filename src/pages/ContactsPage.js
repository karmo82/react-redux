import React from 'react';
import CurrentUser from '../components/CurrentUser';

const ContactsPage = () => {

    return (
        <section className="jumbotron text-center">
            <div className="container">
                <h1 className="jumbotron-heading">Pagina di Contatti</h1>
                <p className="lead text-muted">test body.</p>
           
                <CurrentUser class={"nav-link"} style={{color: 'black'}} currentUser={"pippo"} ></CurrentUser>
              
            </div>
        </section>
    );
};

export default ContactsPage;