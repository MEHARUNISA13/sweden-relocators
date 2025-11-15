import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Iconify } from 'src/components/iconify';
import { HousingSolutionCard } from 'src/components/housing-list';

// Shared housing solutions snippet (3 cards) without image usage
// Can be imported and used in any Next.js page
// Example usage:
//   import { HousingSolutionShared } from 'public/snippet/housingSolutionShared';
//   ...
//   <HousingSolutionShared />

export function HousingSolutionShared(props) {
  const housingServices = [
    {
      id: 'short-rental',
      title: 'Short Term Rental',
      badge: '221 Views',
      rating: '4.9',
      postedDate: new Date('2022-08-11T01:00:00'),
      // icon intentionally omitted to avoid image usage in shared snippet
      info: [
        {
          icon: <Iconify icon="mingcute:location-fill" sx={{ color: 'error.main', fontSize: 16 }} />,
          label: 'Short Stays, Long Comfort',
        },
      ],
      primaryAction: {
        label: 'Reserve Now',
        href: '/relocation-services/housing/short-rental/book-now',
      },
      secondaryAction: {
        label: 'Become A Host',
        href: '/relocation-services/housing/short-rental/become-a-host',
      },
    },
    {
      id: 'long-rental',
      title: 'Long Term Rental',
      badge: '153 Interested',
      postedDate: new Date('2022-08-11T01:00:00'),
      // icon intentionally omitted
      info: [
        {
          icon: <Iconify icon="mingcute:location-fill" sx={{ color: 'error.main', fontSize: 16 }} />,
          label: 'Long-Term Housing Made Effortless',
        },
      ],
      primaryAction: {
        label: 'Rent Now',
        href: '/relocation-services/housing/long-rental',
      },
      secondaryAction: {
        label: 'Sublet Your Property',
        href: '/relocation-services/housing/list-property',
      },
    },
    {
      id: 'buy-property',
      title: 'Buy - Sell Property',
      badge: '202 Visitors',
      postedDate: new Date('2022-08-11T01:00:00'),
      // icon intentionally omitted
      info: [
        {
          icon: <Iconify icon="mingcute:location-fill" sx={{ color: 'error.main', fontSize: 16 }} />,
          label: 'Buy-Sell & Mortgage Support',
        },
      ],
      primaryAction: {
        label: 'Buy Now',
        href: '/relocation-services/housing/buy-property',
      },
      secondaryAction: {
        label: 'Sell Your Property',
        href: '/relocation-services/housing/sell-property',
      },
    },
  ];

  return (
    <Container maxWidth={false} sx={{ py: 3, px: 0, maxWidth: '1400px', mx: 'auto' }} {...props}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
            md: 'repeat(3, minmax(0, 1fr))',
          },
          gap: { xs: 2, md: 3 },
          alignItems: 'stretch',
          width: '100%',
        }}
      >
        {housingServices.map((service) => (
          <HousingSolutionCard
            key={service.id}
            service={service}
            primaryAction={service.primaryAction}
            secondaryAction={service.secondaryAction}
          />
        ))}
      </Box>
    </Container>
  );
}

export default HousingSolutionShared;
