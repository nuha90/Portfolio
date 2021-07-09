import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Collapse } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  educationSection: {
    margin: '7rem auto',
  },
  timeLine: {
    position: 'relative',
    margin: '0 auto',
    padding: '1rem',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid tan',
      right: '40px',
      top: 0,
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      paddin: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto',
      },
    },
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid tan',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'clac(50% - 5px)',
      borderStyle: 'solid',
      borderColor: 'tomato tomato transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: 'tan',
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent tomato tomato',
      },
    },
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    background: 'tomato',
    color: 'white',

    lineHeight: 1,
    padding: '0.5rem 0 1rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto',
      },
      '&:nth-of-type(2n):before': {
        display: 'none',
      },
    },
  },
  heading: {
    color: 'tomato',
    padding: '3rem 0',
    textTransform: 'uppercase',
  },
  subHeading: {
    padding: 0,
    color: 'white',
    textTransform: 'uppercase',
  },
}));

const Resume = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <>
      <Navbar />
      <Collapse in={checked} {...(checked ? { timeout: 5000 } : {})} collapsedHeight={50}>
        <Box component="header" className={classes.workSection} style={{ background: 'black' }}>
          <Typography variant="h4" align="center" className={classes.heading}>
            Where I've Studied and Worked
          </Typography>
          <Box component="div" className={classes.timeLine}>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
              2021
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography variant="h5" className={classes.subHeading}>
                Frontend Developer
              </Typography>
              <Typography variant="h6" style={{ color: 'white' }}>
                Konsus ApS, Copenhagen
              </Typography>
            </Box>

            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
              2021
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography variant="h5" className={classes.subHeading}>
                Frontend Developer
              </Typography>
              <Typography variant="h6" style={{ color: 'white' }}>
                Monta, Copenhagen
              </Typography>
            </Box>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
              2020-2021
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography variant="h5" className={classes.subHeading}>
                Full-Stack Web Developer
              </Typography>
              <Typography variant="h6" style={{ color: 'white' }}>
                HackYourFuture WebDevelopment School, Copenhagen
              </Typography>
            </Box>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
              2020
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography variant="h5" className={classes.subHeading}>
                Web editor
              </Typography>
              <Typography variant="h6" style={{ color: 'white' }}>
                Nørex, Copenhagen
              </Typography>
              <Typography variant="subtitle2" style={{ color: 'white' }}>
                <ul>
                  <li>Editing and formatting Web content using 'Elementor' .</li>
                  <li>Checking and Testing Web content</li>
                </ul>
              </Typography>
            </Box>

            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
              2015-2017
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography variant="h5" className={classes.subHeading}>
                IT helpdesk, software engineer
              </Typography>
              <Typography variant="h6" style={{ color: 'white' }}>
                National Islamic bank, Iraq
              </Typography>
              <Typography variant="subtitle2" style={{ color: 'white' }}>
                <ul>
                  <li>Design data sheet for employees that contain their daily activities and analysis status for each employ.</li>
                  <li>Checking all department requirement for software and hardware.</li>
                  <li>Checking all PCS, Printers, Camera are working fine and connected to the local network. and checking with internet service provider (ISP) about internet quality and make trouble shoot with them if needed .</li>
                </ul>
              </Typography>
            </Box>

            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
              2014-2015
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography variant="h5" className={classes.subHeading}>
                Letter of credit team coordinator
              </Typography>
              <Typography variant="h6" style={{ color: 'white' }}>
                National Islamic bank, Iraq
              </Typography>
              <Typography variant="subtitle2" style={{ color: 'white' }}>
                <ul>
                  <li>Senior officer responsible for issuance , settlement , examination of docs for the issued letter of credits .</li>
                  <li> Design data sheet for employees that contain their daily activities and analysis status for each employ, it help the department director to evaluate the employees.</li>
                </ul>
              </Typography>
            </Box>

            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
              2008-2012
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography variant="h5" className={classes.subHeading}>
                Bachelor of Information engineering- networks
              </Typography>
              <Typography variant="h6" style={{ color: 'white' }}>
                Al-Nahrain University, Iraq
              </Typography>
            </Box>
          </Box>
        </Box>
      </Collapse>
    </>
  );
};

export default Resume;
