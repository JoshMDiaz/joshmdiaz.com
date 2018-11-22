import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/Banner/Banner'
import About from '../components/About/About'
import Work from '../components/Work/Work'
import Contact from '../components/Contact/Contact'

const IndexPage = () => (
  <Layout>
    <Banner />
    <About />
    <Work />
    <Contact />
  </Layout>
)

export default IndexPage
