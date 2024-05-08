'use client';

import { Directory } from './components/directory';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function IndexPage() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const styles = {
    position: 'fixed' as 'fixed',
    bottom: '20px',
    right: '10px',
    cursor: 'pointer',
    zIndex: '1000',
    borderRadius: '50%',
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <section>
        <Directory />
      </section>
      {isVisible && (
        <div onClick={scrollToTop} style={styles} className="bg-blue-500 p-1">
          <ArrowUp color="white" size={32} />
        </div>
      )}
    </>
  );
}
