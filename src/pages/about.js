import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <Layout>
      <Seo title="about" />
      <section>git 
        <div className="about-me">
          <div className="about-me-wrapper">
            <div style={{}}>
              <h1 className="about-me-title">About me :</h1>
              <p className="about-me-subtitle">
                Hello there, my name is Zakariae Belkasmi, I'm a self taught
                frontend web developer based in Meknes Morocco, I use frontend
                technologies like Html/css/Javascript and frameworks like react
                and gatsby to build projects.{" "}
              </p>
              <p className="about-me-subtitle">
                I Studied at the higher school of technologie where I learned
                basic programming and developement, then I graduated with a DUT
                diploma.{" "}
              </p>
              <p className="about-me-subtitle">
                {" "}
                Currently Working at a marketing company and i'm looking for an
                opportunity as a frontend developer where I can use my expertise
                and bring value.{" "}
              </p>
              <p className="about-me-subtitle">
                I'm always eager to learn and prosper within a productive
                environment that i can be proud to be part of.{" "}
              </p>
            </div>

            {/*  <div>
              <StaticImage
                        className="hero-profile_photo"
                        src="C:/Users/zack/Desktop/Myportfolio-gatsby/src/assets/images/profile_photo.png"
                        alt="A dinosaur"
                        placeholder="blurred"
                        layout="fixed"
                        width={250}
                        height={250}
                      />
        
            </div>*/}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
