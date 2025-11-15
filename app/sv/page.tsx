'use client';

import { useEffect } from 'react';
import Home from '../components/Home';
import i18n from '../../i18n';

export default function SvHomePage() {
  useEffect(() => {
    // Switch global i18n language to Swedish when visiting /sv
    i18n.changeLanguage('sv').catch((err) => {
      console.error('Failed to change language to sv', err);
    });
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Home />
    </main>
  );
}
