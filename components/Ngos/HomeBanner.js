import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, Button, Image, CloseButton } from 'react-bootstrap'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import BannerAllPage from '../PropsShared/BannerAllPage';

import ConfigData from '../../config'

function HeroBanner() {

  const backgroundImage = {
    url: '/industrie/ngos_banner.jpg'
  };

  const mobileBackgroundImage = {
    url: '/industrie/mobile_industries_banner/NGOs_mob_banner.jpg'
  }

  const bannerHeading = 'NOT-FOR-PROFITS/ NGOS'

  const [data, setData] = useState(null);

  const categoryId = 16;

  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${siteUrl}/posts?categories=${categoryId}&per_page=3&production_mode[]=${serverUrl}`);
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [siteUrl, serverUrl, categoryId]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Add event listener to prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto'; // Enable scrolling when component unmounts
    };
  }, [isOpen]);

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };


  return (
    <>
      <Container className="w-80 custom-container">
        <Row className="d-flex align-items-center">
          <BannerAllPage backgroundImage={backgroundImage} bannerHeading={bannerHeading} mobileBackgroundImage={mobileBackgroundImage} />
        </Row>
      </Container>

      <Container className="pt-4 w-80 pb-4 pt-4">
        <p className="text-white para-text">As social developments produce both new possibilities and fresh challenges, active attempts to establish a better future for monitoring, assessment, and learning will become increasingly more crucial in the coming years. These changes in the philanthropic landscape—and the world around it—are profoundly altering the backdrop for decision-making inside social sector organisations as well as the larger practise of monitoring, evaluation, and learning.</p>
      </Container>
      <Container className="iv-bg w-80 banner p-5">
        <p className="fw-bold text-white fs-3">Our services will help your audience understand your niche and help create awareness it by:</p>
        <p className="text-white para-text">Providing end-to-end services that will bring in more attention from the identified target group.</p>
        <p className="text-white para-text">For value creation, evaluate or reframe the current positioning, message, and narrative.</p>
        <p className="text-white para-text">With captivating content and SEO, generate traction for your website and offerings.</p>
        <p className="text-white para-text">Using email marketing, generate Marketing Qualified Leads (MQLs).</p>
        <Container className="text-center">
          <Col className='d-flex flex-column align-items-center'>
            <Link className="btn-14 z-0" href="/contact-us">Contact us</Link>
          </Col>
        </Container>
      </Container>
      <Container className="mt-5 mb-5 w-80">
        <p className="fs-2 text-white">Explore how we have partnered with organizations to create meaningful change, amplify their reach, and drive impactful outcomes:</p>
      </Container>

      <Container className="w-80">
        <Col className='d-flex flex-lg-row flex-column justify-content-center'>
          {data ? ( // Check if data is available
            data.map((items) => (
              <div className='iv-cards col-lg-4' key={items.id}>
                <Image
                  src={items.acf.thumbnail_image.url}
                  alt={items.title.rendered}
                  className='w-100 img-fluid' height={240}
                  width={200}
                />
                <div class="card-body d-flex flex-column justify-content-between mb-0">
                  <div>
                    <div class="card-title" dangerouslySetInnerHTML={{ __html: items.title.rendered }} />
                    <p class="card-text three-line-show" dangerouslySetInnerHTML={{ __html: items.excerpt.rendered }} />
                  </div>
                  <div className='mt-3'>
                    <div class="iv-link cursor-pointer d-inline-block" onClick={() => handleShowModal(items)}>
                      Read more
                      <FaArrowRight className="icons" />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='text-white'>
              <div class="spinner-border text-danger" role="status">
              </div>
              <span class=" text-white">Loading...</span>
            </div>
            // Render loading message while data is being fetched
          )}
        </Col>
        <Col>
          {isOpen && (
            <div className='position-fixed top-0 start-0 end-0 bottom-0 z-index-100 d-flex flex-column justify-content-center align-items-center bg-black bg-opacity-75'>
              <span className='position-absolute top-0 bottom-0 end-0 start-0 z-3' onClick={handleCloseModal}></span>
              <div className='position-relative p-5 bg-white h-80vh w-50 rounded-3 overflow-auto z-index-100'>
                <div className='position-absolute end-0 p-4 pe-5 top-0' onClick={handleCloseModal}>
                  <div className='position-fixed'>
                    <CloseButton />
                  </div>
                </div>
                <div className='text-black'>
                  {selectedItem && (
                    <>
                      <div className='d-flex flex-column justify-content-between'>
                        <div>
                          <h2 className='text-red'>{selectedItem.title.rendered}</h2>
                          <div className='case-text text-whitethree-line-show' dangerouslySetInnerHTML={{ __html: selectedItem.content.rendered }} />
                        </div>
                        <div>
                          <Col className='d-flex flex-column justify-content-center align-items-center'>
                            <Link className="btn-14 z-0" href="/contact-us">Contact us</Link>
                          </Col>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </Col>
      </Container>

      <Container className="w-80 mt-5 d-flex justify-content-center mb-5">
        <Link href="/case-studies" className="btn-13 z-0">View All Case Studies</Link>
      </Container>
    </>
  )
}

export default HeroBanner
