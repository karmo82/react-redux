import React from 'react';

const OrderDetailsPage = (props) => {
    return (
        <section className="jumbotron text-center">
            <div className="container">
                <h1 className="jumbotron-heading">Order Details</h1>
                <p className="lead text-muted">id: {props.match.params.id}</p>
            </div>
        </section>
    );
};

export default OrderDetailsPage;