import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image';
import Link from 'next/link'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Svg from './Automobiles/svg'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { FaArrowRight } from "react-icons/fa";
import ScrollAnimationPerformance from '../SharedComponents/ScrollAnimationPerformance';
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);


function HeroBanner() {

  return (
    <>
      <ScrollAnimationPerformance />
      <Container className="bg-white banner w-80 pb-5 container-height" >
        <article>
          <Row className="d-flex align-items-start ">
            <Col lg={12} className="mt-5 position-relative  ps-6">
              <div className='timeline-badge5 mt-4'></div>
              <h1 className="fs-19 fw-bold">
                Industries
              </h1>
              <p className="para-text pe-lg-2 ">Client expectations have taken a quantum leap, compelling individuals to adapt like never before. Brands have relentlessly pursued growth by embracing innovative solutions in Ecommerce development & growth strategies. That’s where we step in. With a passion for creating exceptional experiences and staying ahead of the curve, we’ve mastered our art. And today, we don’t just perform, we outperform.</p>
            </Col>

            <Col lg={12} className="mt-4 position-relative ps-6">
              <div className='timeline-badge5 mt-2'></div>
              <Link className="fs-3 i-link fw-semibold" href="/industries/automobiles">Automobiles</Link></Col>

            <Col lg={12} className="mt-4 position-relative ps-6">
              <div className='timeline-badge5 mt-2'></div>
              <Link className="fs-3 i-link fw-semibold" href="/industries/technology-IT">Tech/IT</Link></Col>

            <Col lg={12} className="mt-4 position-relative ps-6">
              <div className='timeline-badge5 mt-2'></div>
              <Link className="fs-3 i-link fw-semibold" href="/industries/hospitality">Hospitality</Link></Col>

            <Col lg={12} className="mt-4 position-relative ps-6">
              <div className='timeline-badge5 mt-2'></div>
              <Link className="fs-3 i-link fw-semibold" href="/industries/appliances">Appliances</Link></Col>

            <Col lg={12} className="mt-4 position-relative ps-6">
              <div className='timeline-badge5 mt-2'></div>
              <Link className="fs-3 i-link fw-semibold" href="/industries/ngos">Not-for-Profits/NGOs</Link></Col>

            <Col lg={12} className="mt-4 position-relative ps-6">
              <div className='timeline-badge5 mt-2'></div>
              <Link className="fs-3 i-link fw-semibold" href="/industries/jewellery">Jewellery</Link></Col>

            <Col lg={12} className="mt-4 position-relative ps-6">
              <div className='timeline-badge5 mt-2'></div>
              <Link className="fs-3 i-link fw-semibold" href="/industries/beauty-wellness">Beauty & Wellness</Link></Col>

            <Col lg={12} className="mt-4 position-relative ps-6">
              <div className='timeline-badge5 mt-2'></div>
              <Link className="fs-3 i-link fw-semibold" href="/industries/fashion-accessories">Fashion & Accessories</Link></Col>
          </Row>
        </article>
      </Container>

    </>
  )
}

export default HeroBanner
