import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row, Image } from 'react-bootstrap';
import ConfigData from '../../config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CaseStudiesFetchData = () => {
    return (
        <Container className="w-80 custom-container">
            <h1 className="fs-80 fw-bold text-white">CASE STUDIES</h1>
            <h3 className="fs-19 text-white fw-semibold poppins">Performance you'll love. Can we replicate it for you?</h3>
            <Row className='py-lg-5'>
                {/* Column 1*/}
                <Col md={4} className="d-flex py-2">
                    <Link href={'/case-studies/global-tech-company-seo-success'} className='text-line'>
                        <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
                            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                                <div className='card-title d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="fs-23 mb-0 red para-text fw-bold ps-3">201%</p>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src="/images/search.svg" className='w-50 ms-auto' width={100} height={100} alt='' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-grow-1'>
                                    <div>
                                        <p className="card-text text-dark fs-4 p-3 mb-0">Increase in Keyword Ranking with 275+ Keywords on Page One</p>
                                        <p className="card-text text-dark fs-4 px-3">SEO Victory for a Global Financial Services Giant</p>
                                    </div>
                                </div>
                                <div className='py-5 pb-0'>
                                    <button type="button" className="btn btn-16 z-0 rounded-4">Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>

                {/* Column 2 */}
                <Col md={4} className="d-flex py-2">
                    <Link href={'case-studies/leading-jewellery-and-accessories-brand-case-studystrategic-insights'} className='text-line'>
                        <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
                            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                                <div className='card-title d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="fs-23 mb-0 red para-text fw-bold ps-3">2x</p>
                                    </div>
                                    <div className='pe-0 d-flex'>
                                        <Image src="/images/shoping.svg" className='w-50 ms-auto' width={100} height={100} alt='' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-grow-1'>
                                    <div>
                                        <p className="card-text text-dark fs-4 p-3">Revenue Growth Every 3 <br /> Years  </p>
                                        <p className="card-text text-dark fs-4 px-3 py-3">A Strategic Success Story for a Leading Jewelry Brand</p>
                                    </div>
                                </div>
                                <div className='py-5 pb-0'>
                                    <button type="button" className="btn btn-16 z-0 rounded-4">Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>

                {/* Column 3 */}
                <Col md={4} className="d-flex py-2">
                    <Link href={'/case-studies/luxury-automobile-lead-generation-case-study-optimising-dealerships'} className='text-line'>
                        <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
                            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                                <div className='card-title d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="fs-23 mb-0 red para-text fw-bold ps-3">1 <span className='fs-3 red'>in 14</span></p>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src="/images/magnet.svg" className='w-50 ms-auto' width={100} height={100} alt='' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-grow-1'>
                                    <div>
                                        <p className="card-text text-dark fs-4 p-3">
                                            Lead Conversion and Cost per Lead Reduced (CPL) to Rs.1,292 </p>
                                        <p className="card-text text-dark fs-4 px-3">Cost optimization for a Luxury Automobile Dealership
                                        </p>
                                    </div>
                                </div>
                                <div className='py-5 pb-0'>
                                    <button type="button" className="btn btn-16 z-0 rounded-4">Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>

            <Row className=''>
                {/* Column 4*/}
                <Col md={4} className="d-flex py-2">
                    <Link href={'case-studies/top-beauty-brand-case-study-optimising-ecommerce-conversion-and-mobile-engagement'} className='text-line'>
                        <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
                            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                                <div className='card-title d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="fs-23 mb-0 red para-text fw-bold ps-3">2.8%</p>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src="/images/message.svg" className='w-50 ms-auto' width={100} height={100} alt='' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-grow-1'>
                                    <div>
                                        <p className="card-text text-dark fs-4 p-3">Conversion Rate from 0.8% in 3 Months</p>
                                        <p className="card-text text-dark fs-4 px-3"> E-commerce and Mobile Engagement Success
                                            For a Top Beauty Brand</p>
                                    </div>
                                </div>
                                <div className='py-5 pb-0'>
                                    <button type="button" className="btn btn-16 z-0 rounded-4">Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>

                {/* Column 5 */}
                <Col md={4} className="d-flex py-2">
                    <Link href={'/case-studies/b2b-email-marketing-case-study-generating-qualified-leads-with-strategic-campaigns'} className='text-line'>
                        <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
                            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                                <div className='card-title d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="fs-23 mb-0 red para-text fw-bold ps-3">10.8%</p>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src="/images/message.svg" className='w-50 ms-auto' width={100} height={100} alt='' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-grow-1'>
                                    <div>
                                        <p className="card-text text-dark fs-4 p-3 mb-5">Lead Conversion Rate </p>

                                        <p className="card-text text-dark fs-4 px-3">   B2B Email Marketing Success for a Conslutling Orginaztion in the Social Impact Space </p>
                                    </div>
                                </div>
                                <div className='py-5 pb-0'>
                                    <button type="button" className="btn btn-16 z-0 rounded-4">Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>

                {/* Column 6 */}
                <Col md={4} className="d-flex py-2">
                    <Link href={'/case-studies/multinational-retail-corporation-case-study-enhancing-online-presence-and-traffic-for-ngos'} className='text-line'>
                        <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
                            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                                <div className='card-title d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="fs-23 mb-0 red para-text fw-bold ps-3">93,345</p>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src="/images/scale.svg" className='w-50 ms-auto' width={100} height={100} alt='' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-grow-1'>
                                    <div>
                                        <p className="card-text text-dark fs-4 p-3 mb-5">Unique Leads in 12 Months </p>
                                        <p className="card-text text-dark fs-4 px-3"> For a Global Retail Corporation's MSME CSR Project</p>
                                    </div>
                                </div>
                                <div className='py-5 pb-0'>
                                    <button type="button" className="btn btn-16 z-0 rounded-4">Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>

            <Row className='py-lg-5 pb-3'>
                {/* Column 7*/}
                <Col md={4} className="d-flex py-2">
                    <Link href={'/case-studies/premier-hotel-chain-case-studyelevating-direct-online-bookings-and-global-reach-with-digital-strategy'} className='text-line'>
                        <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
                            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                                <div className='card-title d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="fs-23 mb-0 red para-text fw-bold ps-3">7%</p>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src="/images/shoping.svg" className='w-50 ms-auto' width={100} height={100} alt='' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-grow-1'>
                                    <div>
                                        <p className="card-text text-dark fs-4 p-3">Increase in Direct Online Bookings and 30% Higher Revenue</p>
                                        <p className="card-text text-dark fs-4 px-3">Digital Strategy Success for a Luxury Hotel Chain</p>
                                    </div>
                                </div>
                                <div className='py-5 pb-0'>
                                    <button type="button" className="btn btn-16 z-0 rounded-4">Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>

                {/* Column 8 */}
                <Col md={4} className="d-flex py-2">
                    <Link href={'/case-studies/top-hotel-chain-case-study-boosting-direct-online-bookings-and-revenue-with-strategic-digital-marketing'} className='text-line'>
                        <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
                            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                                <div className='card-title d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="fs-23 mb-0 red para-text fw-bold ps-3">14%</p>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src="/images/message.svg" className='w-50 ms-auto' width={100} height={100} alt='' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-grow-1'>
                                    <div>
                                        <p className="card-text text-dark fs-4 p-3">Direct Online Bookings and Doubled Average Rate of Return</p>
                                        <p className="card-text text-dark fs-4 px-3"> Strategic Digital Marketing Success for a Top Hotel Chain</p>
                                    </div>
                                </div>
                                <div className='py-5 pb-0'>
                                    <button type="button" className="btn btn-16 z-0 rounded-4">Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>

                {/* Column 9 */}
                <Col md={4} className="d-flex py-2">
                    <Link href={'/case-studies/digital-marketing-case-study-increasing-website-traffic-and-online-revenue-for-a-major-hotel-chain'} className='text-line'>
                        <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
                            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                                <div className='card-title d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="fs-23 mb-0 red para-text fw-bold">8%</p>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src="/images/scale.svg" className='w-50 ms-auto' width={100} height={100} alt='' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-grow-1'>
                                    <div>
                                        <p className="card-text text-dark fs-4 p-3">Direct Online Bookings and 32% Boost in Wedding and MICE Leads</p>
                                        <p className="card-text text-dark fs-4 px-3"> Hotel Chain Digital Marketing Success</p>
                                    </div>
                                </div>
                                <div className='py-5 pb-0'>
                                    <button type="button" className="btn btn-16 z-0 rounded-4">Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>



            {/* <Col className='text-center'>
                {data.length > visibleItems && (
                    <button type="button" className="btn btn-15 my-5" onClick={handleLoadMore}>Load More</button>
                )}
            </Col> */}
        </Container>
    );
};

export default CaseStudiesFetchData;
