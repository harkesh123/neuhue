"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "animate.css";
import Grid from "@mui/material/Grid2";
import { Button, TextField, Typography } from "@mui/material";
import styles from "./page.module.css";
import ElevateAppBar from "./components/ElevateAppBar";

import "swiper/css";

export default function Home() {
  const Slider = [
    {
      imageURL: "/assets/NeuhueSlide1.png",
      title: "Creative & Branding",
      description:
        "From Concepts to Completion, Logo Designing to Campaigns,Posters to Brochures.Everything, anything.",
      styleWidth: "75%",
      imgWidth: 650,
    },
    {
      imageURL: "/assets/NeuhueSlide2.png",
      title: "Digital Marketing",
      description:
        "From websites to web promos Emailers to Google Ads, SEO to SMM. All that matters.",
      styleWidth: "80%",
      imgWidth: 650,
    },
    {
      imageURL: "/assets/NeuhueSlide3.png",
      title: "Media Release",
      description:
        "From Local to National Newspapers, Signboards to Standees, Stalls to Kiosks, Indoor to outdoor, all covered.",
      styleWidth: "95%",
      imgWidth: 800,
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
            modules={[Autoplay]}
          >
            {Slider.map((slide, index) => (
              <SwiperSlide key={index}>
                <Grid
                  container
                  style={{ height: "calc(100vh - 4rem)" }}
                  alignItems="center"
                >
                  <Grid size={6} className={styles.text}>
                    <Typography
                      variant="h3"
                      align="center"
                      className=" animate__animated animate__fadeInDown"
                    >
                      {slide.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      className=" animate__animated animate__fadeInDown"
                      align="center"
                    >
                      {slide.description}
                    </Typography>
                  </Grid>
                  <Grid size={6} className={styles.image}>
                    <Image
                      className=" animate__animated animate__fadeInDown"
                      src={slide.imageURL}
                      style={{
                        height: "auto",
                        width: slide.styleWidth,
                      }}
                      alt={`Slide ${index + 1} Image`}
                      width={slide.imgWidth}
                      height={600}
                    />
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        <Grid size={12} id="about">
          <Grid container className={styles.aboutUs}>
            <Grid size={8}  className={styles.text}>
              <Typography variant="h2" align="center">
              About Us
              </Typography>
              <br />
              <Typography  align="center"  variant="subtitle1" justifyContent="center">
              We are Neuhue Communications, an advertising agency based in
              Bengaluru, striving to go the extra mile for our clients and
              make a difference in their journey. We are client-centric, keen
              on adding an edge in the highly competitive market.
              </Typography>
              <br />
              <Typography  align="center"  variant="subtitle1" justifyContent="center">
              Our team is a fusion of youth and experienced, who bring passion
              and purpose to the table.
              </Typography>
              <br />
              <Typography variant="subtitle1"  align="center"  justifyContent="center">
              Our services include: Creative & branding, Digital marketing,
              Media release, Print & outdoor.
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
        <Grid size={12} id="contact" className={styles.contactUs}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid size={12} className={styles.logo}>
              <Image
                src="/assets/Neuhuelogo.png"
                alt="Logo"
                width={110}
                height={42}
              />
            </Grid>
            <Grid size={6}>
              <Typography variant="h2" align="center">
                Contact Us
              </Typography>
              <TextField
                label="Name"
                variant="filled"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                variant="filled"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Message"
                variant="filled"
                fullWidth
                margin="normal"
                multiline
                rows={4}
              />
              <Button variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
