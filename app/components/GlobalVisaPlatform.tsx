'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

export function GlobalVisaPlatform() {
  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, lg: 12, xl: 14 },
        backgroundColor: '#f8fafc',
      }}
    >
      <Box
        sx={{
          maxWidth: { lg: '1400px', '2xl': '1600px', '4k': '2400px' },
          mx: 'auto',
          px: { xs: 4, sm: 6, lg: 8, xl: 12, '4k': 24 },
          width: '100%',
        }}
      >
        {/* Header - Centered Title Section */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 6, sm: 8, lg: 10 },
          }}
        >
          {/* Blue subtitle */}
          <Typography
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem', '4k': '1.25rem' },
              color: '#3b82f6',
              fontWeight: 600,
              mb: 2,
            }}
          >
            You can apply from anywhere in the world
          </Typography>

          {/* Main title */}
          <Typography
            sx={{
              fontSize: { xs: '2rem', sm: '2.75rem', md: '3rem', lg: '3.5rem', '4k': '5rem' },
              fontWeight: 800,
              color: '#3b82f6',
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            All-in-One Global Visa Platform
          </Typography>

          {/* Subheading */}
          <Typography
            sx={{
              fontSize: { xs: '1.125rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', '4k': '2.5rem' },
              fontWeight: 700,
              color: '#1e293b',
              lineHeight: 1.3,
            }}
          >
            One unified application for all visas you need
          </Typography>
        </Box>

        {/* Main Content Grid - Two Columns */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' },
            gap: { xs: 6, sm: 8, lg: 10, xl: 12, '4k': 16 },
            alignItems: 'center',
          }}
        >
          {/* Left - Content Card */}
          <Card
            sx={{
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              p: { xs: 5, sm: 6, md: 7, lg: 8, '4k': 10 },
              backgroundColor: '#ffffff',
            }}
          >
            {/* Card Content */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Title in Card */}
              <Typography
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', '4k': '3rem' },
                  fontWeight: 800,
                  color: '#1e293b',
                  lineHeight: 1.3,
                }}
              >
                All-in-One Global Visa Platform
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' },
                  color: '#64748b',
                  lineHeight: 1.6,
                }}
              >
                You could be anywhere in the world, if you're here and reading this, you can sign up on our portal or app and apply for visas globally. With our Universal Visa Application Form, you apply once, your details are securely stored, and you can reuse them for multiple destinations including Schengen, the UK, US, Canada, Australia, New Zealand, Japan, and more.
              </Typography>

              {/* Description 2 */}
              <Typography
                sx={{
                  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', '4k': '1.25rem' },
                  color: '#64748b',
                  lineHeight: 1.6,
                }}
              >
                We manage every step for you: application preparation, expert consultation, appointment scheduling, hotel bookings, health insurance, and travel reservations, so you save time, reduce costs, and keep everything organized in one secure platform. For embassy submissions, you can simply download your complete file from the portal or have it securely delivered by DHL.
              </Typography>

              {/* Button */}
              <Box sx={{ pt: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    py: { xs: 1, sm: 1.25, md: 1.5, '4k': 2 },
                    px: { xs: 2.5, sm: 3, md: 4, '4k': 6 },
                    fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem', '4k': '1.125rem' },
                    fontWeight: 600,
                    textTransform: 'none',
                    backgroundColor: '#1e293b',
                    color: 'white',
                    borderRadius: '6px',
                    width: 'fit-content',
                    '&:hover': {
                      backgroundColor: '#0f172a',
                    },
                  }}
                >
                  Send Via DHL
                </Button>
              </Box>
            </Box>
          </Card>

          {/* Right - Image */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src="/c1.png"
              alt="Global Visa Platform Illustration"
              sx={{
                width: '100%',
                maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '500px', xl: '550px', '4k': '700px' },
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
