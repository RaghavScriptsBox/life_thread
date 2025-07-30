import React from 'react';
import {
  Box,
  Typography,
  Link,
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

const ContactSection = () => {
  const contactItems = [
    {
      icon: <EmailOutlinedIcon sx={{ fontSize: 40 }} />,
      label: 'Email',
      value: 'email@example.com',
      href: 'mailto:email@example.com',
    },
    {
      icon: <PhoneOutlinedIcon sx={{ fontSize: 40 }} />,
      label: 'Phone',
      value: '+1 (555) 000-0000',
      href: 'tel:+15550000000',
    },
    {
      icon: <RoomOutlinedIcon sx={{ fontSize: 40 }} />,
      label: 'Office',
      value: '123 Sample St, Sydney NSW 2000 AU',
      href: 'https://maps.google.com/?q=123+Sample+St,+Sydney+NSW+2000+AU',
    },
  ];

  return (
    <Box sx={{ py: 10, px: 4, textAlign: 'center', minHeight: "60vh" }}>
      <Typography sx={{
        fontSize: {
          xs: '1.5rem',
          md: '2rem',
          lg: '2.5rem',
          xl: '3rem',
        },
        fontWeight: '600',
        color: '#005b66',
        fontFamily: 'Figtree, Inter, Lato, Roboto',
      }}>
        Contact us
      </Typography>
      <Typography sx={{ mt: 1, mb: 6, fontFamily: "Roboto", fontWeight: "400" }}>
        Let’s connect about clean, compliant workwear solutions.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: { xs: 6, md: 10 },
          flexWrap: 'wrap',
          mx: 'auto',
          width: {
            xs: '90%',
            md: '70%',
          }
        }}
      >
        {contactItems.map((item, index) => (
          <Box key={index} sx={{ textAlign: 'center', maxWidth: 300 }}>
            <Box>{item.icon}</Box>
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
              {item.label}
            </Typography>
            <Link
              href={item.href}
              underline="always"
              target="_blank"
              rel="noopener"
              sx={{ mt: 1, display: 'inline-block', fontSize: 16, color: 'black' }}
            >
              {item.value}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ContactSection;
