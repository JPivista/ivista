"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, CloseButton, Image } from 'react-bootstrap'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import BannerAllPage from '../../PropsShared/BannerAllPage';
import ConfigData from '../../../config'
import SeoComponents from '../../../components/SeoComponents/Seo'
import { usePathname } from 'next/navigation'



function HeroBanner() {

  const pathname = usePathname();
  const [domainName, setDomainName] = useState('');

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  const title = " Boost Online Sales for Jewelry Brands | Expert Digital Marketing Solutions";
  const description = "Enhance your jewelry brand's online presence and drive sales with our specialized digital marketing services. From SEO and social media marketing to personalized online experiences, we help jewelry brands connect with their audience and increase conversions both in-store and online.";
  const path = `${domainName}${pathname}`;
  const metaImage = "";

  const backgroundImage = {
    url: '/industrie/jewelry_banner.jpg'
  };

  const mobileBackgroundImage = {
    url: '/industrie/mobile_industries_banner/jewelry_mob_banner.jpg'
  }

  const bannerHeading = 'JEWELLRY'

  return (
    <>
     <SeoComponents title={title} description={description} path={path} metaImage={metaImage} />

      <Container fluid className='bg-black p-0 position-relative z-3'>
        <Container className="w-80 custom-container">
          <Row className="d-flex align-items-center">
            <BannerAllPage backgroundImage={backgroundImage} bannerHeading={bannerHeading} mobileBackgroundImage={mobileBackgroundImage} />
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default HeroBanner
