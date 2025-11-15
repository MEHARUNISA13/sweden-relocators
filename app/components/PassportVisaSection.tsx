'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Image from 'next/image';

const visaDestinations = [
  {
    code: 'se',
    country: 'Sweden',
    title: 'Residence & Work Permits',
    description:
      'Complete support for long-stay residence, work permits, and family reunification in Sweden.',
  },
  {
    code: 'dk',
    country: 'Denmark',
    title: 'Nordic Employment Visas',
    description:
      'Specialized guidance for Danish work visas, intra-company transfer and Nordic mobility.',
  },
  {
    code: 'de',
    country: 'Germany',
    title: 'EU & Schengen Visas',
    description:
      'Short- and long-stay Schengen visas with complete file preparation and appointment support.',
  },
  {
    code: 'gb',
    country: 'United Kingdom',
    title: 'Study & Skilled Worker',
    description:
      'From student visas to skilled worker routes, get a compliant UK-ready application file.',
  },
];

export default function PassportVisaSection() {
  return (
    <Box
      sx={{
        py: { xs: '4rem', sm: '5rem', lg: '6rem', '3xl': '7rem', '4k': '8rem' },
        backgroundColor: '#0b1120',
      }}
    >
      {/* EXACT same container as Hero section */}
      <Box
        sx={{
          maxWidth: { lg: '87.5rem', '2xl': '100rem', '4k': '150rem' },
          mx: 'auto',
          px: { xs: '1rem', sm: '1.5rem', lg: '2rem', xl: '3rem', '4k': '6rem' },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, minmax(0, 1fr))' },
            gap: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem', xl: '4rem', '2xl': '5rem', '3xl': '6rem', '4k': '8rem' },
            alignItems: 'center',
          }}
        >
          {/* LEFT SIDE - Same structure as Hero */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', '3xl': '3rem', '4k': '4rem' }
          }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 1.5,
                py: 0.75,
                borderRadius: '999px',
                background: 'rgba(37, 99, 235, 0.12)',
                border: '1px solid rgba(59,130,246,0.35)',
                width: 'fit-content',
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '999px',
                  backgroundColor: '#22c55e',
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: '0.75rem', sm: '0.85rem', '4k': '1rem' },
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#93c5fd',
                  fontWeight: 600,
                }}
              >
                Visa-ready passports, globally
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '2.75rem', lg: '3.25rem', xl: '3.5rem', '2xl': '3.75rem', '3xl': '4.5rem', '4k': '7rem' },
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#e5e7eb',
              }}
            >
              Turn your passport into a
              <Box component="span" sx={{ color: '#38bdf8' }}>
                {' '}
                relocation ticket
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem', lg: '1.0625rem', xl: '1.125rem', '3xl': '1.25rem', '4k': '2rem' },
                color: '#9ca3af',
                maxWidth: { xs: '40rem', '3xl': '50rem', '4k': '80rem' },
                lineHeight: 1.7,
              }}
            >
              We prepare embassy-ready visa files, appointments, and supporting documents for your move to Sweden,
              the Nordics, and other major destinations – all from a single secure portal.
            </Typography>

            {/* Enlarged passport image - increased height */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: { xs: '100%', sm: '90%', lg: '100%' },
                mt: { xs: 2, md: 3 },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  boxShadow: '0 25px 60px rgba(15,23,42,0.75)',
                  border: '1px solid rgba(148,163,184,0.4)',
                  background: 'radial-gradient(circle at top left, rgba(56,189,248,0.25), transparent 55%)',
                  // Increased aspect ratio for more height
                  aspectRatio: '4/3',
                }}
              >
                <Image
                  src="/passport1.svg"
                  alt="Passport and visa documents"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </Box>
            </Box>
          </Box>

          {/* RIGHT SIDE - Enlarged cards with same alignment as Hero */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: { xs: '100%', lg: '50rem', '3xl': '60rem', '4k': '96rem' },
              mx: { xs: 'auto', lg: 0 },
              ml: { lg: 'auto' },
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', '3xl': '2.25rem', '4k': '3rem' },
              }}
            >
              {visaDestinations.map((item) => (
                <Card
                  key={item.code}
                  sx={{
                    background: 'linear-gradient(145deg, rgba(15,23,42,0.95), rgba(15,23,42,0.85))',
                    borderRadius: '1.25rem',
                    border: '1px solid rgba(148,163,184,0.4)',
                    boxShadow: '0 18px 45px rgba(15,23,42,0.75)',
                    position: 'relative',
                    overflow: 'hidden',
                    // Increased minimum height for cards
                    minHeight: { xs: '220px', sm: '240px', md: '260px', lg: '280px', '3xl': '320px', '4k': '420px' },
                    display: 'flex',
                    flexDirection: 'column',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      background:
                        'radial-gradient(circle at top left, rgba(59,130,246,0.25), transparent 60%)',
                      opacity: 0.9,
                      pointerEvents: 'none',
                    },
                  }}
                >
                  <CardContent 
                    sx={{ 
                      position: 'relative', 
                      zIndex: 1, 
                      p: { xs: '1.5rem', sm: '1.75rem', md: '2rem', '3xl': '2.5rem', '4k': '3.5rem' },
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, '3xl': 3, '4k': 4 }, gap: { xs: 1.25, '4k': 2 } }}>
                      <Box
                        component="img"
                        src={`https://flagcdn.com/w80/${item.code}.png`}
                        alt={`${item.country} flag`}
                        sx={{
                          width: { xs: 40, '3xl': 50, '4k': 70 },
                          height: { xs: 40, '3xl': 50, '4k': 70 },
                          borderRadius: '999px',
                          objectFit: 'cover',
                          boxShadow: '0 8px 20px rgba(15,23,42,0.7)',
                          border: '2px solid rgba(241,245,249,0.8)',
                          backgroundColor: '#020617',
                        }}
                      />
                      <Box>
                        <Typography
                          sx={{
                            fontSize: { xs: '0.85rem', sm: '0.9rem', '3xl': '1rem', '4k': '1.3rem' },
                            textTransform: 'uppercase',
                            letterSpacing: '0.12em',
                            color: '#93c5fd',
                            fontWeight: 600,
                          }}
                        >
                          {item.country}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.2rem', '3xl': '1.4rem', '4k': '1.9rem' },
                            fontWeight: 700,
                            color: '#e5e7eb',
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      sx={{
                        fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem', '3xl': '1.125rem', '4k': '1.5rem' },
                        color: '#cbd5f5',
                        lineHeight: 1.6,
                        mb: 'auto',
                        flex: 1,
                      }}
                    >
                      {item.description}
                    </Typography>

                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        textTransform: 'none',
                        borderColor: 'rgba(96,165,250,0.9)',
                        color: '#bfdbfe',
                        fontSize: { xs: '0.8rem', sm: '0.85rem', '3xl': '0.95rem', '4k': '1.3rem' },
                        fontWeight: 500,
                        px: { xs: 1.75, '4k': 3 },
                        py: { xs: 0.5, '4k': 1 },
                        borderRadius: '999px',
                        mt: { xs: 2, '3xl': 2.5, '4k': 3 },
                        alignSelf: 'flex-start',
                        '&:hover': {
                          borderColor: '#60a5fa',
                          backgroundColor: 'rgba(37,99,235,0.12)',
                        },
                      }}
                    >
                      Explore visa options
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}