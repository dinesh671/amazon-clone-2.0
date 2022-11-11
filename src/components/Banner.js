import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
       <div className=' relative '>
            <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
            <Carousel
                 autoPlay
                 infiniteLoop
                 showStatus={false}
                 showIndicators={false}
                 showThumbs={false}
                 interval={6000}
            >
               <div>
                    <img src="https://links.papareact.com/gi1" alt="pic 1" loading='lazy' />
               </div>
               <div>
                    <img loading='lazy' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/launch/gateway/TheUndergroundRailroad/UGRR_S1_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB669781769_.jpg" alt="" />
               </div>
               <div>
                    <img loading='lazy' src="https://links.papareact.com/7ma" alt="" />
               </div>
            </Carousel>
    </div>
  )
}

export default Banner