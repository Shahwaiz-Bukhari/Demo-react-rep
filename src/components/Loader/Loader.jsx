import React from 'react';

export default function Loader() {
  return (
    <div id="loader" className="loader" aria-live="polite" aria-label="Loading content">
      <h1 style={{ animationDelay: '1s' }}>ENVIRONMENTS</h1>
      <h1 style={{ animationDelay: '2s' }}>EXPERIENCES</h1>
      <h1 style={{ animationDelay: '3s' }}>CONTENT</h1>
    </div>
  );
}

