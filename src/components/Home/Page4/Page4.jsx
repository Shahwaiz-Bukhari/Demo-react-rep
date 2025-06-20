import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Page4.css';

import tayyabsLogo from '/images/img1.png';
import ozLogo from '/images/img2.png';
import beamLogo from '/images/img3.png';
import sothebysLogo from '/images/img4.png';
import outpostLogo from '/images/img5.png';

const clients = [
  {
    logo: tayyabsLogo,
    name: "Tayyabs",
    description: `As their technology partner, we help ensure their online presence matches the rich heritage and 
                  vibrant atmosphere they offer in person. From website design to performance optimization, we 
                  support their digital journey while they continue serving generations of happy customers.`,
  },
  {
    logo: ozLogo,
    name: 'OZ SPORTS',
    description: `We collaborate with OZ Sports to enhance their digital footprint through tailored web solutions 
                  that reflect their innovative approach to sports broadcasting.Our partnership ensures their 
                  online presence keeps pace with the high-performance, forward-thinking technology they deliver on 
                  the field.`,
  },
  {
    logo: beamLogo,
    name: 'BEAM',
    description: `BEAM is a leading manufacturer and distributor of innovative, recyclable finishing building materials.
                  With a strong footprint across the Middle East and North Africa, their group includes ASK Gypsum Factory
                  (KSA), ECOBAT (Egypt), and SINOBAT (Egypt).`,
  },
  {
    logo: sothebysLogo,
    name: "Sotheby's",
    description: `As a premier real estate brokerage in California’s high-end market since 1991, Golden Gate Sotheby’s 
                 International Realty offers a curated portfolio of luxury homes and estates. Backed by a global 
                 network, they blend local expertise with international reach.`,
  },
  {
    logo: outpostLogo,
    name: "OUTPOST",
    description: `As a premier real estate brokerage in California’s high-end market since 1991, Golden Gate Sotheby’s 
                 International Realty offers a curated portfolio of luxury homes and estates. Backed by a global 
                 network, they blend local expertise with international reach.`,
  },
];

export default function Page4() {
  return (
    <section id="page4" data-scroll-section>
      <Swiper
        slidesPerView="auto"
        centeredSlides={false}
        spaceBetween={100}
        className="mySwiper"
      >
        {clients.map((client, idx) => (
          <SwiperSlide key={idx} className="swiper-slide">
            <div className="logo-wrapper">
              <img src={client.logo} alt={client.name} />
            </div>
            <p>{client.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

