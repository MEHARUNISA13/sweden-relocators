'use client';

import React from 'react';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  hasBackground?: boolean;
}

const slideUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedCard = styled(Card)(({ theme }) => ({
  animation: `${slideUpAnimation} 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
  opacity: 0,
  '&:nth-of-type(1)': { animationDelay: '0.05s' },
  '&:nth-of-type(2)': { animationDelay: '0.1s' },
  '&:nth-of-type(3)': { animationDelay: '0.15s' },
  '&:nth-of-type(4)': { animationDelay: '0.2s' },
  '&:nth-of-type(5)': { animationDelay: '0.25s' },
  '&:nth-of-type(6)': { animationDelay: '0.3s' },
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    boxShadow: '0 16px 32px rgba(59, 130, 246, 0.15)',
    transform: 'translateY(-6px)',
  },
}));

const services: Service[] = [
  {
    id: 'family',
    title: 'Relocating for Family Reunification',
    description:
      "Under Directive 2004/38/EC and Swedish national laws, EU citizens and their family members have the right to reunite and reside together in Sweden. We provide guidance throughout the reunification process to ensure compliance and a smooth relocation.",
    icon: '',
    image: '/image1.png',
  },
  {
    id: 'business',
    title: 'Relocate for Business',
    description:
      "We help you establish a business or franchise in Sweden with full support, including residence permit guidance. To qualify, you'll need a solid business plan, investment capital, and sufficient funds for two years.",
    icon: '',
    image: '/image2.png',
  },
  {
    id: 'work',
    title: 'Relocating with a Work Permit',
    description:
      "We assist you in securing a work permit in Sweden, guiding both employers and employees through every step of the process. To qualify, you'll need a valid job offer, employment contract, and compliance with salary and insurance requirements.",
    icon: '',
    image: '/image3.png',
    hasBackground: false,
  },
  {
    id: 'parents',
    title: 'Dependent Parents Relocation',
    description:
      "We know the importance of having your parents close. Through family reunification, we help bring dependent parents to Sweden or other Nordic countries, ensuring they receive the care and support they need.",
    icon: '',
    image: '/image4.png',
  },
  {
    id: 'study',
    title: 'Relocating for Study in Sweden',
    description:
      "We support you in applying for a residence permit to pursue studies in Sweden. To qualify, you'll need admission to a recognized program, proof of financial means, and valid health insurance.",
    icon: '',
    image: '/image5.png',
  },
  {
    id: 'ltr',
    title: 'Relocating with LTR Permits',
    description:
      "If you hold a long-term residence permit in another EU country, you may have the right to move to Sweden with your family. Family reunification rules allow eligible relatives to join you.",
    icon: '',
    image: '/image6.png',
  },
];

export default function Services() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, sm: 8, lg: 10, xl: 12 },
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
        {/* Header */}
        <Box sx={{ mb: { xs: 6, sm: 8, lg: 10 } }}>
          <Typography
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.875rem', lg: '1rem', '4k': '1.25rem' },
              color: '#3b82f6',
              fontWeight: 600,
              mb: 1,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              textAlign: 'center',
            }}
          >
            Empowering your skills for relocation and success in Scandinavian countries
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', lg: '2.25rem', '4k': '3.5rem' },
              fontWeight: 800,
              mb: 1,
              color: '#000000',
              textAlign: 'center',
              lineHeight: 1.2,
            }}
          >
            Reliable legal solutions for relocation for individuals
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.75rem', lg: '2rem', '4k': '3rem' },
              fontWeight: 700,
              color: '#3b82f6',
              textAlign: 'center',
            }}
          >
            Relocation to & from Sweden
          </Typography>
        </Box>

        {/* Services Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7, '4k': 10 },
            px: { xs: 0, sm: 0, md: 0 },
          }}
        >
          {services.map((service) => (
            <AnimatedCard
              key={service.id}
              sx={{
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                backgroundColor: '#ffffff',
                overflow: 'hidden',
                '&:hover': {
                  border: '1px solid #cbd5e1',
                },
              }}
            >
              <CardContent
                sx={{
                  p: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', '4k': '3.5rem' },
                  display: 'flex',
                  flexDirection: 'column',
                  gap: { xs: 1.5, md: 2, lg: 2.5 },
                  height: '100%',
                }}
              >
                {/* Icon + Title */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: { xs: 2, md: 2.5 },
                    mb: { xs: 1, md: 1.5 },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem', '4k': '5rem' },
                      height: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem', '4k': '5rem' },
                      borderRadius: '12px',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'transparent',
                      flexShrink: 0,
                      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        transform: 'scale(1.08) rotate(5deg)',
                      },
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        padding: '8px',
                      }}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem', lg: '1.15rem', '4k': '1.5rem' },
                        fontWeight: 700,
                        color: '#1e293b',
                        lineHeight: 1.3,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                </Box>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem', lg: '1.025rem', '4k': '1.25rem' },
                    color: '#64748b',
                    lineHeight: 1.65,
                    mb: { xs: 2, md: 3 },
                    flex: 1,
                    fontWeight: 500,
                  }}
                >
                  {service.description}
                </Typography>

                {/* View Details Button */}
                <Button
                  sx={{
                    px: { xs: '1.5rem', sm: '2rem', md: '2.25rem', lg: '2.5rem', '4k': '3rem' },
                    py: { xs: '0.75rem', sm: '0.875rem', md: '1rem', lg: '1.125rem', '4k': '1.5rem' },
                    fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem', lg: '1.025rem', '4k': '1.25rem' },
                    fontWeight: 600,
                    textTransform: 'none',
                    backgroundColor: '#1e293b',
                    color: '#ffffff',
                    borderRadius: '8px',
                    alignSelf: 'flex-start',
                    border: '2px solid #1e293b',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    '&:hover': {
                      backgroundColor: '#0f172a',
                      borderColor: '#0f172a',
                      transform: 'translateX(2px)',
                      boxShadow: '0 4px 12px rgba(30, 41, 59, 0.2)',
                    },
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </AnimatedCard>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
