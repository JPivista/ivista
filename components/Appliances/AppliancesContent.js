import React from 'react'
import { Col, Container } from 'react-bootstrap'
import CaseStudiesCategoriesComponents from '../PropsShared/CaseStudiesCategoriesComponents'
import ScrollAnimation from '../SharedComponents/ScrollAnimationServices'
import Link from 'next/link'

const AppliancesContent = () => {

    const categoryId = 11;

    return (
        <>

            <ScrollAnimation />
            <Container fluid className="bg-black p-0">
                <article>
                    <Col className='timeline1'>
                        <div className='position-relative'>
                            <div className='timeline-badge1 mt-4'></div>
                            <Container className="pt-4 w-80 pb-4 pt-4 ps-7" >
                                <p className="text-white para-text pe-3">
                                    The Indian Appliances and Consumer Electronics industry is expected to double to Rs.1.48 lac crore by 2025 <Link href="https://retail.economictimes.indiatimes.com/news/consumer-durables-and-information-technology/consumer-electronics/indian-appliances-consumer-electronic-industry-to-double-to-rs-1-48-crore-by-2025/95568165" target='_blank' className='hyper-link-red'>according to CEAMA</Link>.  A <Link href="https://yourstory.com/2022/10/indian-online-shoppers-migh-outnumber-us-shoppers-ecommerce" target='_blank' className='hyper-link-red'>recent report</Link> by Flipkart and Bain & Co says the number of online shoppers in India is likely to <span className='fw-bold'>grow to 400 million-450 million by 2027</span> from 180 million-190 million in 2021 <span className='fw-bold'>and appliances</span> (along with mobiles and electronics) <span className='fw-bold'> will have among the highest market shares at 25-30%</span>.
                                </p>
                            </Container>
                        </div>

                        <div className='position-relative'>
                            <div className='timeline-badge1 mt-5'> </div>
                            <Container className="iv-bg w-80 banner ps-7 pt-5 pe-5 pb-5">
                                <p className="text-white para-text">The size of customers doing research online and buying offline is rapidly shrinking. More and more buyers are now comfortable buying even large appliances online. Undoubtedly, you would be looking to capitalize on this opportunity.</p>
                                <p className="text-white para-text"> Our carefully tailored digital marketing strategies will help<span className='fw-bold'> to increase online sales both on your brand e-store as well as on marketplaces</span>.</p>
                                <Container className="text-center">
                                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                                        <Link className="btn-14 z-0" href="/contact-us">Contact us</Link>
                                    </Col>
                                </Container>
                            </Container>
                        </div>

                        <Container className="mt-5 mb-5 w-80 ps-7">
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

export default AppliancesContent

