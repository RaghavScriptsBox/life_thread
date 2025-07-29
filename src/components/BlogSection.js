import React from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  Link,
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';

const BlogCard = ({ category, title, description, small }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      gap: 1,
      mb: 4,
      width: small ? '100%' : '100%',
      alignContent: "center",
      alignItems: "center"
    }}
  >
    <Box
      sx={{
        bgcolor: '#ddd',
        height: small ? 250 : 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: small ? 250 : 500,
      }}
    >
      <ImageIcon fontSize="large" />
    </Box>
    <Box sx={{ width: "300px", bgcolor: "red" }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Chip label={category} size="small" />
        <Typography variant="caption">5 min read</Typography>
      </Box>
      <Typography variant="subtitle1" fontWeight="bold">
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      )}
      <Link href="#" underline="hover" sx={{ mt: 1, fontSize: 14 }}>
        Read more →
      </Link>
    </Box>
  </Box>
);

const BlogSection = () => {
  return (
    <Box sx={{ px: 6, py: 8 }}>
      <Typography variant="body2" fontWeight="bold" color="text.secondary">
        Blog
      </Typography>
      <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
        Insights from Industry Experts
      </Typography>
      <Typography sx={{ mt: 1, mb: 4 }} color="text.secondary">
        Stay updated with the latest in cleanroom standards.
      </Typography>

      <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
        Featured blog posts
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
        }}
      >
        {/* Left big blog card */}
        <Box sx={{ flex: 2 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              mb: 4,
              width: '100%',
              alignContent: "flex-start",
              alignItems: "flex-start"
            }}
          >
            <Box
              sx={{
                bgcolor: '#ddd',
                height: {
                  xs: 200,
                  md: 400,
                  lg: 416,
                  xl: 416,
                },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: {
                  xs: '100%',
                  md: 500,
                  lg: 624,
                  xl: 624,
                },
              }}
            >
              <ImageIcon fontSize="large" />
            </Box>
            <Box sx={{ width: "300px", bgcolor: "red" }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Chip label="ESD" size="small" />
                <Typography variant="caption">5 min read</Typography>
              </Box>
              <Typography variant="subtitle1" fontWeight="bold">
                Understanding ESD Compliance in Cleanrooms
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn how ESD compliance can protect your sensitive equipment and enhance safety.
              </Typography>
              <Link href="#" underline="hover" sx={{ mt: 1, fontSize: 14 }}>
                Read more →
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Right side smaller blog list */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <BlogCard
            small
            category="Cleanroom"
            title="Best Practices for Cleanroom Maintenance"
          />
          <BlogCard
            small
            category="Safety"
            title="Choosing the Right Protective Apparel"
          />
          <BlogCard
            small
            category="Technology"
            title="Innovations in ESD Garment Design"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BlogSection;
