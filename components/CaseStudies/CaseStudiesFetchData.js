import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
import ConfigData from "../../config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiCircleChevRight } from "react-icons/ci";

const CaseStudiesFetchData = () => {
  return (
    <Container className="w-80 custom-container">
      {/* Bread-crumb */}
      <div className="d-flex flex-row align-items-center mb-3 flex-nowrap ">
        <p>
          <Link href="/welcome" className="text-decoration-none ">
            <span className="fs-6 text-white mb-0 px-1">Home</span>
          </Link>
          <span className="px-1">
            <CiCircleChevRight fill="white" />
          </span>
          <Link href="/performance" className="text-decoration-none ">
            <span className="fs-6 text-white mb-0 px-1">Performance</span>
          </Link>
          <span className="px-1">
            <CiCircleChevRight fill="white" />
          </span>
          <Link href="/case-studies" className="text-decoration-none px-1">
            <span className="fs-6 text-decoration-none text-white mb-0">
              Case Studies
            </span>
          </Link>
        </p>
      </div>

      <h1 className="fs-80 fw-bold text-white">CASE STUDIES</h1>
      <h3 className="fs-19 text-white fw-semibold poppins pt-lg-0 pt-3">
        Performance you'll love. Can we replicate it for you?
      </h3>
      <Row className="py-lg-5">
        {/* Card 01 */}
        <Col md={4} className="d-flex py-2">
          <Link
            href={
              "/case-studies/leading-water-purifier-brand-boosted-monthly-online-sales-from-1-5-cr-to-12-cr"
            }
            className="text-decoration-none"
          >
            <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
              <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <div>
                    <p className="fs-23 mb-0 red para-text fw-bold ps-3">
                      700%
                    </p>
                  </div>
                  <div className="">
                    <Image
                      src="/images/shoping.svg"
                      className="w-60 d-flex ms-auto"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-grow-1">
                  <div>
                    <p className="card-text text-dark fs-4 p-3">
                      Increase in Online Sales
                    </p>
                    <p className="card-text text-dark fs-4 px-3">
                      For India’s Leading Water Purifier Brand
                    </p>
                  </div>
                </div>
                <div className="py-5 pb-0">
                  <button type="button" className="btn btn-16 z-0 rounded-4">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </Col>
        {/* Card 02 */}
        <Col md={4} className="d-flex py-2">
          <Link
            href={
              "/case-studies/online-sales-success-for-a-leading-kitchen-appliance-brand"
            }
            className="text-decoration-none"
          >
            <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
              <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <div>
                    <p className="fs-23 mb-0 red para-text fw-bold ps-3">8x</p>
                  </div>
                  <div className="">
                    <Image
                      src="/images/shoping.svg"
                      className="w-60 d-flex ms-auto"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-grow-1">
                  <div>
                    <p className="card-text text-dark fs-4 p-3">
                      Increase in online sales
                    </p>
                    <p className="card-text text-dark fs-4 px-3">
                      E-commerce Success Story for a Leading Appliance Brand
                    </p>
                  </div>
                </div>
                <div className="py-5 pb-0">
                  <button type="button" className="btn btn-16 z-0 rounded-4">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </Col>

        {/* Card 03*/}
        <Col md={4} className="d-flex py-2">
          <Link
            href={
              "/case-studies/premier-hotel-chain-case-study-increased-direct-online-bookings-and-global-reach"
            }
            className="text-decoration-none"
          >
            <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
              <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <div>
                    <p className="fs-23 mb-0 red para-text fw-bold ps-3">7%</p>
                  </div>
                  <div className="">
                    <Image
                      src="/images/shoping.svg"
                      className="w-60 d-flex ms-auto"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-grow-1">
                  <div>
                    <p className="card-text text-dark fs-4 p-3">
                      Increase in Direct Online Bookings and 30% Higher Revenue
                    </p>
                    <p className="card-text text-dark fs-4 px-3">
                      Digital Strategy Success for a Luxury Hotel Chain
                    </p>
                  </div>
                </div>
                <div className="py-5 pb-0">
                  <button type="button" className="btn btn-16 z-0 rounded-4">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </Col>
      </Row>

      <Row className="py-lg-3">
        {/* Card 04 */}
        <Col md={4} className="d-flex py-2">
          <Link
            href={
              "/case-studies/top-hotel-chain-case-study-boosting-direct-online-bookings-and-revenue"
            }
            className="text-decoration-none"
          >
            <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
              <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <div>
                    <p className="fs-23 mb-0 red para-text fw-bold ps-3">14%</p>
                  </div>
                  <div className="">
                    <Image
                      src="/images/shoping.svg"
                      className="w-60 d-flex ms-auto"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-grow-1">
                  <div>
                    <p className="card-text text-dark fs-4 p-3">
                      Direct Online Bookings and Doubled Average Rate of Return
                    </p>
                    <p className="card-text text-dark fs-4 px-3">
                      {" "}
                      Strategic Digital Marketing Success for a Top Hotel Chain
                    </p>
                    <br />
                  </div>
                </div>
                <div className="py-5 pb-0">
                  <button type="button" className="btn btn-16 z-0 rounded-4">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </Col>
        {/* Card 05 */}
        <Col md={4} className="d-flex py-2">
          <Link
            href={
              "/case-studies/digital-marketing-case-study-increasing-website-traffic-and-online-revenue-for-a-major-hotel-chain"
            }
            className="text-decoration-none"
          >
            <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
              <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <div>
                    <p className="fs-23 mb-0 red para-text fw-bold ps-3">8%</p>
                  </div>
                  <div className="">
                    <Image
                      src="/images/shoping.svg"
                      className="w-60 d-flex ms-auto"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-grow-1">
                  <div>
                    <p className="card-text text-dark fs-4 p-3">
                      Direct Online Bookings and 32% Boost in Wedding and MICE
                      Leads
                    </p>
                    <p className="card-text text-dark fs-4 px-3">
                      {" "}
                      Hotel Chain Digital Marketing Success
                    </p>
                  </div>
                </div>
                <div className="py-5 pb-0">
                  <button type="button" className="btn btn-16 z-0 rounded-4">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </Col>

        {/* Card 06 new landing page*/}
        <Col md={4} className="d-flex py-2">
          <Link
            href={
              "/case-studies/digital-marketing-strategy-case-study-boosting-audio-equipment-sales-with-seo-and-amazon-marketing-2"
            }
            className="text-decoration-none"
          >
            <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
              <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <div>
                    <p className="fs-23 mb-0 red para-text fw-bold ps-3">
                      53%{" "}
                    </p>
                  </div>
                  <div className="">
                    <Image
                      src="/images/search.svg"
                      className="w-60 d-flex ms-auto p-1"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-grow-1">
                  <div>
                    <p className="card-text text-dark fs-4 p-3 mb-5">
                      Boost in Website Traffic and 66% Social Media Conversions
                    </p>
                    <p className="card-text text-dark fs-4 px-4">
                      Digital Marketing Triumph for Indian Audio Equipment Brand
                    </p>
                  </div>
                </div>
                <div className="py-5 pb-0">
                  <button type="button" className="btn btn-16 z-0 rounded-4">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
      <Row className="py-lg-5">
        {/* Card 07 */}
        <Col md={4} className="d-flex py-2">
          <Link
            href={
              "/case-studies/b2b-lead-gen-case-study-delivering-outcomes-with-paid-marketing-for-a-global-retail-giants-csr-project"
            }
            className="text-decoration-none"
          >
            <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
              <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <div>
                    <p className="fs-23 mb-0 red para-text fw-bold ps-3">
                      93,345
                    </p>
                  </div>
                  <div className="">
                    <Image
                      src="/images/magnet.svg"
                      className="w-60 d-flex ms-auto"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-grow-1">
                  <div>
                    <p className="card-text text-dark fs-4 p-3 mb-5">
                      Unique Leads in 12 Months{" "}
                    </p>
                    <p className="card-text text-dark fs-4 px-3">
                      {" "}
                      For a Global Retail Corporation's MSME CSR Project
                    </p>
                  </div>
                </div>
                <div className="py-5 pb-0">
                  <button type="button" className="btn btn-16 z-0 rounded-4">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </Col>

        {/* Card 08 */}
        <Col md={4} className="d-flex py-2">
          <Link
            href={
              "/case-studies/b2b-email-marketing-case-study-delivering-qualified-leads-to-generate-interest-to-invest-in-the-clients-social-impact-projects"
            }
            className="text-decoration-none"
          >
            <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
              <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <div>
                    <p className="fs-23 mb-0 red para-text fw-bold ps-3">
                      10.8%
                    </p>
                  </div>
                  <div className="">
                    <Image
                      src="/images/magnet.svg"
                      className="w-60 d-flex ms-auto"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-grow-1">
                  <div>
                    <p className="card-text text-dark fs-4 p-3 mb-5">
                      Lead Conversion Rate
                    </p>

                    <p className="card-text text-dark fs-4 px-3">
                      {" "}
                      B2B Email Marketing Success for a Consulting Organization
                      in the Social Impact Space{" "}
                    </p>
                  </div>
                </div>
                <div className="py-5 pb-0">
                  <button type="button" className="btn btn-16 z-0 rounded-4">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </Col>

        {/* Card 09 */}
        <Col md={4} className="d-flex py-2">
          <Link
            href={
              "case-studies/leading-jewelry-and-accessories-brand-case-study-increased-traffic-revenues-and-social-media-engagement"
            }
            className="text-decoration-none"
          >
            <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
              <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <div>
                    <p className="fs-23 mb-0 red para-text fw-bold ps-3">2x</p>
                  </div>
                  <div className="pe-0">
                    <Image
                      src="/images/shoping.svg"
                      className="w-60 d-flex ms-auto"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-grow-1">
                  <div>
                    <p className="card-text text-dark fs-4 p-3">
                      Revenue Growth Every 3 <br /> Years{" "}
                    </p>
                    <p className="card-text text-dark fs-4 px-3 py-3">
                      A Strategic Success Story for a Leading Jewelry Brand
                    </p>
                  </div>
                </div>
                <div className="py-5 pb-0">
                  <button type="button" className="btn btn-16 z-0 rounded-4">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </Col>
      </Row>

      <Row className="py-lg-3">
        {/* Card 10*/}
        <Col md={4} className="d-flex py-2">
          <Link
            href={
              "case-studies/top-beauty-brand-case-study-optimising-ecommerce-conversion-and-mobile-engagement"
            }
            className="text-decoration-none"
          >
            <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
              <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <div>
                    <p className="fs-23 mb-0 red para-text fw-bold ps-3">
                      2.8%
                    </p>
                  </div>
                  <div className="">
                    <Image
                      src="/images/message.svg"
                      className="w-60 d-flex ms-auto"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-grow-1">
                  <div>
                    <p className="card-text text-dark fs-4 p-3">
                      Conversion Rate from 0.8% in 3 Months
                    </p>
                    <p className="card-text text-dark fs-4 px-3">
                      {" "}
                      E-commerce and Mobile Engagement Success For a Top Beauty
                      Brand
                    </p>
                  </div>
                </div>
                <div className="py-5 pb-0">
                  <button type="button" className="btn btn-16 z-0 rounded-4">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </Col>

        {/* Card 11*/}
        <Col md={4} className="d-flex py-2">
          <Link
            href={
              
              "/case-studies/luxury-automobile-dealership-case-study-cost-optimization-and-sales-conversion"
            }
            className="text-decoration-none"
          >
            <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
              <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <div>
                    <p className="fs-23 mb-0 red para-text fw-bold ps-3">
                      1 <span className="fs-3 red">in 14</span>
                    </p>
                  </div>
                  <div className="">
                    <Image
                      src="/images/magnet.svg"
                      className="w-60 d-flex ms-auto"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-grow-1">
                  <div>
                    <p className="card-text text-dark fs-4 p-3">
                      Lead Conversion and Cost per Lead Reduced (CPL) to
                      Rs.1,292{" "}
                    </p>
                    <p className="card-text text-dark fs-4 px-3">
                      Cost optimization for a Luxury Automobile Dealership
                    </p>
                  </div>
                </div>
                <div className="py-5 pb-0">
                  <button type="button" className="btn btn-16 z-0 rounded-4">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </Col>

        {/* Card 12*/}
        <Col md={4} className="d-flex py-2">
          <Link
            href={
              "/case-studies/seo-case-study-for-a-global-technology-company-increased-visibility-with-organic-search-results"
            }
            className="text-decoration-none"
          >
            <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
              <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <div>
                    <p className="fs-23 mb-0 red para-text fw-bold ps-3">
                      201%
                    </p>
                  </div>
                  <div className="">
                    <Image
                      src="/images/search.svg"
                      className="w-60 d-flex ms-auto p-1"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-grow-1">
                  <div>
                    <p className="card-text text-dark fs-4 p-3 mb-0">
                      Increase in Keyword Ranking with 275+ Keywords on Page One
                    </p>
                    <p className="card-text text-dark fs-4 px-3">
                      SEO Victory for a Global Financial Services Giant
                    </p>
                  </div>
                </div>
                <div className="py-5 pb-0">
                  <button type="button" className="btn btn-16 z-0 rounded-4">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </Col>
        
      </Row>
      <Row className="pb-5">
        {/* Dummy red card */}
        <Col md={4} className="d-flex py-lg-5 py-2 p-0">
          <Link href="/contact-us" className="text-decoration-none">
            <div className="container d-flex flex-column">
              <div
                className="card iv-bg text-white rounded-5"
                style={{ height: "500px" }}
              >
                <div className="card-body d-flex flex-column justify-content-center">
                  {/* <!-- Empty card body --> */}
                  <br />
                  <p className="card-text text-white text-center fs-3 p-3">
                    If you want this to be your digital success story, contact
                    us here
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </Link>
        </Col>

        <style jsx>{`
          @media (max-width: 768px) {
            .card {
              height: auto;
            }
          }
        `}</style>
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
