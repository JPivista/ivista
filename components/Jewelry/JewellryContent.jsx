import Link from 'next/link';
import React from 'react'
import { Col, Container } from 'react-bootstrap';
import CaseStudiesCategoriesComponents from '../PropsShared/CaseStudiesCategoriesComponents';
import ScrollAnimation from '../SharedComponents/ScrollAnimationServices';

const JewellryContent = () => {

    const categoryId = 15;


    return (
        <>

            <ScrollAnimation />
            <Container fluid className='bg-black p-0'>
                <article>
                    <Col className='timeline1 pt-1'>
                        <div className='position-relative '>
                            <div className='timeline-badge1 mt-4'></div>
                            <Container className="pt-4 w-80 pb-4 ps-7" >
                                <p className="text-white para-text pe-lg-2 pe-3">The Indian jewellery industry is a celebrated sector that exhibits a remarkable ability to adapt to evolving trends in response to the ever-changing needs and preferences of its customers. We will help your business keep up with this dynamic industry.</p>
                            </Container>
                        </div>

                        <div className='position-relative '>
                            <div className='timeline-badge1 mt-5'></div>
                            <Container className="iv-bg w-80 banner pt-5 pe-5 pb-5 ps-7">
                                <p className="text-white para-text">Creating and improving the connection between online visitors and sales, through end-to-end services, in order to boost online conversions and sales both in-store and online.</p>
                                <p className="text-white para-text">Develop compelling and personalized online experiences that will strengthen customers’ loyalty to your brand, thus creating a more curated online experience.</p>
                                <p className="text-white para-text">Curate keywords that will ensure a lower cost of acquisition.</p>
                                <Container className="text-center">
                                    <Col className='d-flex flex-column align-items-center'>
                                        <Link className="btn-14 z-0" href="/contact-us">Contact us</Link>
                                    </Col>
                                </Container>
                            </Container>
                        </div>

                        <Container className="mt-5 mb-5 w-80 ps-7 ">
                            <p className="fs-2 text-white">Here’s how we have helped appliance brands to win in the e-commerce channel:</p>
                        </Container>
                    </Col>

                    {/* case studies Props */}
                    <Container className="w-80 pb-5">
                        <CaseStudiesCategoriesComponents categoryId={categoryId} />
                    </Container>
                </article>
            </Container>
        </>
    )
}

export default JewellryContent
