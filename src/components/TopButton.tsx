import React from 'react';
import { useState, useEffect } from 'react';
//import styles from "./topButton.module.css";

export function TopButton() {
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const offsetHeight = document.documentElement.offsetHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop > (offsetHeight - clientHeight) / 2) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      {/* Renderiza tu contenido aquí */}
      {showButton && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ position: 'fixed', bottom: '20px', right: '20px', padding: '10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.354 4.646a.5.5 0 0 0-.708 0L1.646 10.293a.5.5 0 0 0 .708.708L8 6.707l5.646 5.646a.5.5 0 0 0 .708-.708L8.707 4.646a.5.5 0 0 0-.353-.146z"/>
          </svg>
        </button>
      )}
    </div>
  );
}