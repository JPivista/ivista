"use client"
import React from 'react'
import { Container } from 'react-bootstrap'
import HeroBanner from '../../../../components/Ngos/HomeBanner'
import Header from '../../../../components/HeaderBlack'
import Footer from '../../../../components/Footer'

import NgoComponents from '../../../../components/Ngos'

function page() {
  return (
    // <Container fluid className="bg-black pb-5">
    //   <Header />
    //   <HeroBanner />
    //   <Footer />
    // </Container>

    <>
      <NgoComponents />
    </>
  )
}

export default page
