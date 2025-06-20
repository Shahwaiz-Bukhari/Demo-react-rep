import React from 'react';
import "../../Index.css";


const NotFound = () => {
  return (
    <section style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#121212', color: 'white' }}>
      <h1>404 Error</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      
      <img src="/images/404error.png" alt="404 Not Found" style={{ maxWidth: '100%', height: 'auto' }} />
    </section>
  );
};

export default NotFound;