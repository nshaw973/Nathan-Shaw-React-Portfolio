import React, { useState } from 'react';

export default function MainPage() {
    // Defaults the page on refresh and opening to About
    const [currentPage, setCurrentPage] = useState('About');
    // Handles the page changes based on the button clicked on the navbar

    return (
      <div className='fullpage'>
        <h1>Hello and Welcome to my Personal portfolio!</h1>
      </div>
    );
  }