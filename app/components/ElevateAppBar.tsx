"use client";

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Image from 'next/image';

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const ElevateAppBar: React.FC = () => {
  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar position="static" style={{ background: 'linear-gradient(to right, white 45%, transparent 50%)',paddingInline:"3%",boxShadow:"none"}}>
          <Toolbar>
            <Box display="flex" alignItems="center" flexGrow={1}>
              <Image src="/assets/Neuhuelogo.png" alt="Logo" width={110} height={42} />
            </Box>
            <Box display="flex" alignItems="center">
              <Link href="/" style={{ margin: '0 30px',textDecoration: 'none', }}>
                Home
              </Link>
              <Link href="/#about" style={{ margin: '0 30px',textDecoration: 'none', }}>
                About Us
              </Link>
              <Link href="/#contact" style={{ margin: '0 30px',textDecoration: 'none', }}>
                Contact
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
};

export default ElevateAppBar;