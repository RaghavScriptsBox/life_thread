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
    <Box sx={{ py: 10, px: 4, textAlign: 'center' }}>
      <Typography variant="h4" fontWeight="bold" color="#005b66">
        Contact us
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, mb: 6 }}>
        Let’s connect about clean, compliant workwear solutions.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 6, md: 10 },
          flexWrap: 'wrap',
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
