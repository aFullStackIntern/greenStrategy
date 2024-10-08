"use client";

import img1 from "@/public/assets/tempBanner.jpg";
import img2 from "@/public/assets/image.png";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Stack, Typography } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import banner1 from "@/public/assets/12.jpg";
import banner2 from "@/public/assets/23.jpg";
import banner3 from "@/public/assets/34.jpg";
import baby from "@/public/assets/baby.png";
import skin from "@/public/assets/skin-care.jpg";
import hair from "@/public/assets/Hair.webp";
// import banner from "@/public/assets/3.png";

export default function Banner() {
  const bannerRef = useRef();
  const sliderRef = useRef(); // Reference to the slider
  const [currentSlide, setCurrentSlide] = useState(0);

  useGSAP(() => {
    const innerWidth = window.innerWidth;

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline();

    tl.from(bannerRef.current, {
      x: innerWidth,
      duration: 1,
      ease: "Power1.inOut",
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top 80%",
        end: "center bottom",
        scrub: true,
        markers: false,
      },
    });
  });

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    fade: true,
    speed: 2000,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    draggable: true,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const Images = [
    {
      id: 1,
      head: "#1 Data Analysis and Strategy Firm in the USA",
      content:
        "We deliver the bullet proof strategy for your business success, driven by invalueable data and in depth research tailored specifically for your brand.",
      src: banner1,
    },
    {
      id: 2,
      head: "Market Research",
      content:
        "Campaign Creation, Lead Generation, Market Trends, AI Integration ,Competitor Analysis, Customer Experience, Customer Satisfaction, Product Testing, ROI Optimization ",
      src: banner2,
    },
    {
      id: 3,
      head: "Our Vision",
      content:
        "Our vision is to become the UAE's most trusted advisor, delivering top-tier Data Analysis and Strategic Insights through cutting-edge market research tools.",
      src: banner3,
    },
  ];

  // Function to handle slide change when a progress bar is clicked
  const handleProgressBarClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index); // Change the slide using sliderRef
  };

  return (
    <Box width={"100vw"} margin={"70px 70px"} backgroundColor={"black"}>
      <Slider {...settings} ref={sliderRef}>
        {Images.map((d) => (
          <Card d={d} />
        ))}
      </Slider>
      <ProgressBar
        currentSlide={currentSlide}
        totalSlides={Images.length}
        onProgressBarClick={handleProgressBarClick} // Pass the click handler
      />
    </Box>
  );
}

function Card({ d }) {
  return (
    <Stack
      sx={{ display: "flex", flexWrap: "wrap" }}
      direction={"row"}
      key={d.id}
      height={"57vh"}
    >
      <Box
        position={"relative"}
        height={"53vh"}
        width={"40%"}
        borderRadius={"100px 0 0 0"}
        overflow={"hidden"}
        sx={{ backgroundImage: `url(${d.src.src})` }}
      ></Box>
      <Box width={"50%"} height={"100%"} color={"#ddd"} padding={"50px"}>
        <Typography fontSize={"2.5rem"} fontFamily={"Lora"}>
          {d.head}
        </Typography>
        <Box
          marginTop={"50px"}
          sx={{
            content: "''",
            width: "400px",
            height: "1px",
            bgcolor: "#655d5d",
          }}
        />
        <Typography fontSize={"1.4rem"} fontFamily={"Lora"} marginTop={"50px"}>
          {d.content}
        </Typography>
      </Box>
    </Stack>
  );
}

function ProgressBar({ currentSlide, totalSlides, onProgressBarClick }) {
  const progressBars = useRef([]);

  useEffect(() => {
    progressBars.current.forEach((bar, index) => {
      bar.style.width = "0%";
      bar.style.transition = "none";
      if (index === currentSlide) {
        setTimeout(() => {
          bar.style.transition = "width 5s linear";
          bar.style.width = "100%";
        }, 50);
      }
    });
  }, [currentSlide]);

  return (
    <Stack
      height={"100px"}
      width={"100%"}
      direction={"row"}
      gap={"20px"}
      backgroundColor={"black"}
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      {[...Array(totalSlides)].map((_, index) => (
        <Stack
          key={index}
          direction={"row"}
          sx={{ justifyContent: "start", cursor: "pointer" }} // Add cursor pointer
          backgroundColor={"#333"}
          borderRadius={2}
          width={`${180 / totalSlides}px`}
          height={"4px"}
          onClick={() => onProgressBarClick(index)} // Handle click event
        >
          <Stack
            ref={(el) => (progressBars.current[index] = el)}
            className="progress-bar"
          ></Stack>
        </Stack>
      ))}
    </Stack>
  );
}
