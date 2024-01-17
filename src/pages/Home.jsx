import {React, useEffect, useState}from 'react'
import Loader from "../components/Loader/Loader";
import '../App.css'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Feature from '../components/Features/Feature'
import Featuretone from '../components/Featuretwo/Featuretone/Featuretone'
import Featurettwo from '../components/Featuretwo/Featurettwo'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const fakeDataFetch = () => {
          setTimeout(() => {
              setIsLoading(false);
          }, 4000);
      };

      fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader />
) : (
    <>
    <Navbar />
    <div className="container">
    <Hero />
    <Feature />
    <Featuretone />
    <Featurettwo />
    <About />
    </div>
    <Footer />
    </>
  )
}

export default Home