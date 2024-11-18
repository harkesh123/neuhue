"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation } from "swiper/modules";
import "swiper/css";
import "animate.css";
import Grid from "@mui/material/Grid2";
import { Button, TextField, Typography } from "@mui/material";
import styles from "./page.module.css";
import ElevateAppBar from "./components/ElevateAppBar";

import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  const Slider = [
    {
      imageURL: "/assets/NeuhueSlide1.png",
      title: "Slide 1 Title",
      description: "Slide 1 description goes here.",
    },
    {
      imageURL: "/assets/NeuhueSlide2.png",
      title: "Slide 2 Title",
      description: "Slide 2 description goes here.",
    },
    {
      imageURL: "/assets/NeuhueSlide3.png",
      title: "Slide 3 Title",
      description: "Slide 3 description goes here.",
    },
  ];
  return (
    <>
      <Grid container id="Home">
        <Grid size={12} className={styles.backgroundImage}>
          <ElevateAppBar />
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            navigation={true}
            modules={[Autoplay,Navigation]}
          >
            {Slider.map((slide, index) => (
              <SwiperSlide key={index}>
                <Grid
                  container
                  style={{ height: "calc(100vh - 4rem)" }}
                  alignItems="center"
                >
                  <Grid size={4} className={styles.text}>
                    <Typography variant="h2" align="center" className=" animate__animated animate__fadeInDown">
                      {slide.title}
                    </Typography>
                    <Typography variant="body1"  className=" animate__animated animate__fadeInDown"  align="center">
                      {slide.description}
                    </Typography>
                  </Grid>
                  <Grid size={8} className={styles.image}>
                    <Image
                     className=" animate__animated animate__fadeInDown"
                      src={slide.imageURL}
                      style={{
                        height: "auto",
                        width: index === 2 ? "100%" : "80%",
                      }}
                      alt={`Slide ${index + 1} Image`}
                      width={500}
                      height={800}
                    />
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        <Grid size={12} id="about">
          <Grid container className={styles.aboutUs} alignItems="center">
            <Grid size={8} className={styles.text}>
              <Typography variant="h2" align="center">About Us</Typography>
              <Typography variant="body1" align="center">
                This is the About Us section. Add your content here.
              </Typography>
            </Grid>
            <Grid size={4} className={styles.image}>
              <Image
              className=" animate__animated animate__fadeInRight"
                src={"/assets/NeuhueAbout.png"}
                style={{ height: "auto", width: "80%" }}
                alt={`About Us Image`}
                width={500}
                height={800}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12} id="contact"  className={styles.contactUs}>
            <Grid container alignItems="center" justifyContent="center">
              <Grid size={12} className={styles.logo}>
                <Image src="/assets/Neuhuelogo.png" alt="Logo" width={110} height={42}/>
              </Grid>
              <Grid size={6} >
                  <Typography variant="h2" align="center">Contact Us</Typography>
                  <TextField label="Name" variant="filled" fullWidth margin="normal" />
                  <TextField label="Email" variant="filled" fullWidth margin="normal" />
                  <TextField label="Message" variant="filled" fullWidth margin="normal" multiline rows={4} />
                  <Button variant="contained" color="primary" fullWidth>Submit</Button>
              </Grid>
            </Grid>
          </Grid>
      </Grid>
    </>
  );
}
