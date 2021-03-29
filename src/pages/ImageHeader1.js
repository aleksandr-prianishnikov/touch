import React, { useRef } from 'react';
import header2 from './assets/header2.png';
import bg2 from './assets/bg2.png';
import styled from 'styled-components';

import { useIntersection } from 'react-use';
import gsap from 'gsap';

const Container = styled.div`
  margin: 0;
  position: relative;
  height: auto;
`;

const Header = styled.img`
  position: absolute;
  width: 100%;
`;

const Bg = styled.img`
  margin: 0;
  width: 100%;
`;

// const Header2 = styled.img`
//   position: absolute;
//   width: 100%;
//   max-width: 725px;
// `;
//
// const Bg2 = styled.img`
//   margin: 0;
//   width: 100%;
//   max-width: 725px;
// `;

export default function ImageHeader1() {
  // Ref for our element
  const sectionRef = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  });

  // Animation for fading in
  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 10,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    });
  };
  // Animation for fading out
  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out"
    });
  };

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio < 0.2
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");


  return (
    <Container ref={sectionRef}>

      {/*<MediaQuery minWidth={723}>*/}

      <Header src={header2} className='fadeIn' />
      <Bg src={bg2} />

      {/*</MediaQuery>*/}
      {/*  <MediaQuery maxWidth={723}>*/}
      {/*    <Header2 src={header2}/>*/}
      {/*    <Bg2 src={bg2}/>*/}
      {/*</MediaQuery>*/}
    </Container>
  );
}
