"use client";
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
// import './styles.css'; // Import the CSS file

function Performance() {
  const [isActive, setIsActive] = useState(false);
  const performanceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);
          } else {
            setIsActive(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (performanceRef.current) {
      observer.observe(performanceRef.current);
    }

    return () => {
      if (performanceRef.current) {
        observer.unobserve(performanceRef.current);
      }
    };
  }, []);

  return (
    <Container className="w-80 pt-4 mb-5" ref={performanceRef} id="performance">
      <Container className='p-0'>
        <h1 className="fs-80 fw-bold ps-6 custom-performance-text">Performance</h1>
      </Container>
      <Container className='p-0'>
        <p className={`fs-20 fw-bold ps-6 custom-performance-text line_space ${isActive ? 'active-text_performance' : ''}`}>
          Over the years, iVistaz has excelled by partnering with clients to craft unforgettable digital journeys. As a revenue-driven digital marketing agency, we consistently strive to surpass expectations with every performance.
        </p>
      </Container>
      <Container className='ps-6'>
        <Link className="btn btn-11 z-0" href="/mastery">Know More</Link>
      </Container>
    </Container>
  );
}

export default Performance;
