"use client"
import React from 'react'
import { Container } from 'react-bootstrap'
import HeroBanner from '../../../../components/Hospitality/HomeBanner'
import Header from '../../../../components/HeaderBlack'
import Footer from '../../../../components/Footer'

import HospitalityComponent from '../../../../components/Hospitality'

function page() {
  return (
    // <Container fluid className="bg-black pb-5">
    //   <Header />
    //   <HeroBanner />
    //   <Footer />
    // </Container>

    <>
      <HospitalityComponent />
    </>
  )
}

export default page
