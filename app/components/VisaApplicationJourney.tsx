'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Image from 'next/image';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const steps = [
  { name: 'Create Account' },
  { name: 'Apply' },
  { name: 'Upload Document' },
  { name: 'Appointment' },
  { name: 'Submit' },
];

export default function VisaApplicationJourney() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-progression every 5 seconds - synchronized with carousels
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#ffffff',
        py: { xs: 3, sm: 4, md: 5, lg: 6 },
      }}
    >
      <Container maxWidth="lg">
        {/* Timeline Header */}
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: { xs: 1, sm: 2, md: 4 },
              py: 3,
            }}
          >
            {/* Animated Airplane */}
            <Box
              sx={{
                position: 'absolute',
                top: -30,
                left: `${(activeStep / (steps.length - 1)) * 100}%`,
                transform: 'translateX(-50%)',
                transition: 'left 0.8s ease-in-out',
                zIndex: 10,
              }}
            >
              <FlightTakeoffIcon
                sx={{
                  fontSize: { xs: 32, sm: 40, md: 48 },
                  color: '#3b82f6',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                }}
              />
            </Box>

            {/* Timeline Line */}
            <Box
              sx={{
                position: 'absolute',
                top: 15,
                left: 0,
                right: 0,
                height: 2,
                backgroundColor: '#e2e8f0',
                zIndex: 0,
              }}
            />

            {/* Active Progress Line */}
            <Box
              sx={{
                position: 'absolute',
                top: 15,
                left: 0,
                height: 2,
                backgroundColor: '#3b82f6',
                transition: 'width 0.8s ease-in-out',
                width: `${(activeStep / (steps.length - 1)) * 100}%`,
                zIndex: 1,
              }}
            />

            {/* Step Indicators */}
            {steps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  zIndex: 5,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                  flex: 1,
                }}
              >
                {/* Circle */}
                <Box
                  sx={{
                    width: { xs: 24, sm: 32, md: 40 },
                    height: { xs: 24, sm: 32, md: 40 },
                    borderRadius: '50%',
                    backgroundColor: activeStep >= index ? '#3b82f6' : '#e2e8f0',
                    border: `2px solid ${activeStep === index ? '#3b82f6' : activeStep > index ? '#3b82f6' : '#cbd5e1'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Typography
                    sx={{
                      color: activeStep >= index ? '#ffffff' : '#94a3b8',
                      fontWeight: 'bold',
                      fontSize: { xs: '0.7rem', sm: '0.85rem' },
                    }}
                  >
                    {index + 1}
                  </Typography>
                </Box>

                {/* Step Name */}
                <Typography
                  sx={{
                    fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.85rem' },
                    fontWeight: activeStep === index ? 600 : 500,
                    color: activeStep === index ? '#3b82f6' : '#64748b',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {step.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Content Area */}
        <Box
          sx={{
            backgroundColor: '#f8fafc',
            borderRadius: '12px',
            overflow: 'hidden',
            p: { xs: 2.5, sm: 3, md: 4 },
            minHeight: { xs: 320, sm: 380, md: 450 },
          }}
        >
          {/* Step 0: Create Account */}
          {activeStep === 0 && (
            <Box sx={{ display: 'flex', gap: { xs: 3, md: 5 }, flexDirection: { xs: 'column', md: 'row' } }}>
              {/* Left: Image */}
              <Box sx={{ flex: 1, position: 'relative', height: { xs: 200, md: 300 } }}>
                <Image src="/t1.png" alt="Create Account" fill style={{ objectFit: 'contain' }} />
              </Box>

              {/* Right: Form */}
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  Get Started - Set Up Your Account With Us!
                </Typography>
                <Typography sx={{ color: '#64748b', fontSize: '0.9rem', mb: 2 }}>
                  Choose the type of account you need to create
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#1e293b',
                    color: '#ffffff',
                    textTransform: 'none',
                    mb: 3,
                    fontSize: '0.85rem',
                  }}
                >
                  Choose the type of account you need to create
                </Button>

                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Account Type</InputLabel>
                  <Select defaultValue="individual" label="Account Type">
                    <MenuItem value="individual">INDIVIDUAL (PRIVATE ACCOUNT)</MenuItem>
                    <MenuItem value="corporate">CORPORATE ACCOUNT</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth sx={{ mb: 3 }}>
                  <InputLabel>Account Subtype</InputLabel>
                  <Select defaultValue="subtype1" label="Account Subtype">
                    <MenuItem value="subtype1">INDIVIDUAL (PRIVATE ACCOUNT) Subtype</MenuItem>
                  </Select>
                </FormControl>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#cbd5e1',
                    color: '#64748b',
                    textTransform: 'none',
                  }}
                >
                  Select account type to continue
                </Button>
              </Box>
            </Box>
          )}

          {/* Step 1: Apply */}
          {activeStep === 1 && (
            <Box sx={{ display: 'flex', gap: { xs: 3, md: 5 }, flexDirection: { xs: 'column', md: 'row' } }}>
              {/* Left: Image */}
              <Box sx={{ flex: 1, position: 'relative', height: { xs: 200, md: 300 } }}>
                <Image src="/t1.png" alt="Apply" fill style={{ objectFit: 'contain' }} />
              </Box>

              {/* Right: Form */}
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#3b82f6', mb: 1 }}>
                  STEP 2: Apply
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Personal Information
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                  <TextField label="First Name" placeholder="Enter your first name" size="small" />
                  <TextField label="Last Name" placeholder="Enter your last name" size="small" />
                  <TextField label="Date of Birth" type="date" InputLabelProps={{ shrink: true }} size="small" />
                  <FormControl size="small">
                    <InputLabel>Gender</InputLabel>
                    <Select label="Gender">
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField label="Passport Number" placeholder="Enter passport number" size="small" />
                  <TextField label="Passport Expiry" type="date" InputLabelProps={{ shrink: true }} size="small" />
                </Box>

                <TextField
                  label="Email"
                  placeholder="Enter email"
                  fullWidth
                  size="small"
                  sx={{ mt: 2 }}
                />
                <TextField
                  label="Additional Notes"
                  placeholder="Enter any additional information"
                  fullWidth
                  multiline
                  rows={3}
                  size="small"
                />

                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                  <Button variant="outlined" sx={{ color: '#3b82f6', borderColor: '#3b82f6', textTransform: 'none' }}>
                    Back
                  </Button>
                  <Button variant="contained" sx={{ backgroundColor: '#3b82f6', textTransform: 'none', flex: 1 }}>
                    Next
                  </Button>
                </Box>
              </Box>
            </Box>
          )}

          {/* Step 2: Upload Document */}
          {activeStep === 2 && (
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                Upload Documents
              </Typography>
              <Typography sx={{ color: '#64748b', fontSize: '0.9rem', mb: 3 }}>
                Management · Documents · Upload Documents
              </Typography>

              <Box sx={{ backgroundColor: '#ffffff', p: 3, borderRadius: '8px', mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                  Document Details
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 2, mb: 3 }}>
                  <FormControl size="small">
                    <InputLabel>Document Type</InputLabel>
                    <Select label="Document Type">
                      <MenuItem value="passport">Passport</MenuItem>
                      <MenuItem value="visa">Visa</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl size="small">
                    <InputLabel>Select</InputLabel>
                    <Select label="Select">
                      <MenuItem value="option1">Option 1</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl size="small">
                    <InputLabel>Document Type</InputLabel>
                    <Select label="Document Type">
                      <MenuItem value="type1">Type 1</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <TextField
                  placeholder="Enter document details"
                  fullWidth
                  multiline
                  rows={3}
                  size="small"
                  sx={{ mb: 3 }}
                />

                <Box sx={{ mb: 3 }}>
                  <Typography sx={{ fontWeight: 600, mb: 2 }}>Upload Documents</Typography>
                  <Box
                    sx={{
                      border: '2px dashed #cbd5e1',
                      borderRadius: '8px',
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      backgroundColor: '#f1f5f9',
                    }}
                  >
                    <CloudUploadIcon sx={{ color: '#3b82f6', fontSize: 32 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>Passport.png</Typography>
                      <Typography sx={{ color: '#94a3b8', fontSize: '0.8rem' }}>Uploaded on Oct 10, 2024</Typography>
                    </Box>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ ml: 'auto', borderColor: '#ef4444', color: '#ef4444', textTransform: 'none' }}
                    >
                      Remove
                    </Button>
                  </Box>
                  <Button
                    variant="text"
                    sx={{ mt: 2, color: '#3b82f6', textTransform: 'none', fontSize: '0.85rem' }}
                  >
                    + Add Another Document
                  </Button>
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button variant="outlined" sx={{ color: '#3b82f6', borderColor: '#3b82f6', textTransform: 'none' }}>
                    Back
                  </Button>
                  <Button variant="contained" sx={{ backgroundColor: '#1e293b', color: '#ffffff', textTransform: 'none', flex: 1 }}>
                    Upload All Documents
                  </Button>
                </Box>
              </Box>
            </Box>
          )}

          {/* Step 3: Appointment */}
          {activeStep === 3 && (
            <Box sx={{ display: 'flex', gap: { xs: 3, md: 5 }, flexDirection: { xs: 'column', md: 'row' } }}>
              {/* Left: Info */}
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Schedule Your Appointment
                </Typography>
                <Typography sx={{ color: '#64748b' }}>Select a date and time that works best for you.</Typography>
              </Box>

              {/* Right: Calendar Image */}
              <Box sx={{ flex: 1, position: 'relative', height: { xs: 200, md: 300 } }}>
                <Image src="/t2.png" alt="Appointment Calendar" fill style={{ objectFit: 'contain' }} />
              </Box>
            </Box>
          )}

          {/* Step 4: Submit */}
          {activeStep === 4 && (
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                Application Summary
              </Typography>

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                {/* Left: Application Overview */}
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <CheckCircleIcon sx={{ color: '#3b82f6', fontSize: 28 }} />
                    <Typography sx={{ fontWeight: 600 }}>Application Overview</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, ml: 4 }}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <CheckCircleIcon sx={{ color: '#3b82f6', fontSize: 20 }} />
                      <Typography>Personal Information</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <CheckCircleIcon sx={{ color: '#3b82f6', fontSize: 20 }} />
                      <Typography>Documents Uploaded</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <CheckCircleIcon sx={{ color: '#3b82f6', fontSize: 20 }} />
                      <Typography>Appointment Scheduled</Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Right: Image */}
                <Box sx={{ position: 'relative', height: { xs: 200, md: 250 } }}>
                  <Image src="/t3.png" alt="Submit" fill style={{ objectFit: 'contain' }} />
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                <Button variant="outlined" sx={{ color: '#3b82f6', borderColor: '#3b82f6', textTransform: 'none' }}>
                  Review
                </Button>
                <Button variant="contained" sx={{ backgroundColor: '#3b82f6', textTransform: 'none', flex: 1 }}>
                  Submit Application
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
