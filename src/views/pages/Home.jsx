import React from 'react';
// * components
import PrologueSection from '../components/body/home/PrologueSection';
import FeatureSection from '../components/body/home/FeatureSection';
import ContactSection from '../components/body/home/ContactSection';
import useSetTitle from '../../hooks/useSetTitle';
// * custom hook

export default function Home() {
  useSetTitle();
  return (
    <>
      <PrologueSection />
      <FeatureSection />
      <ContactSection />
    </>
  );
}
