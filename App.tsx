import React from 'react';
import ProfileSection from './components/ProfileSection';
import VideoSection from './components/VideoSection';
import BonusBanner from './components/BonusBanner';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  // You can customize these values
  const profile = {
    name: "Jeudesmaison🍀",
    bio: "si tu veux gagner ne sois juste pas gourmand suis bien ma vidéo!",
  };

  const tutorialVideo = {
    title: "Avant, regarde cette astuce 100% gagnante ! 🎰",
    url: "https://www.youtube.com/embed/gZ4qKZPgsxw",
  };

  const primaryBonus = {
    title: "OFFRE DE BIENVENUE 🎁",
    description: "Votre argent est automatiquement doublé dès votre inscription !",
    link: "https://track.ftdgallery.com/visit/?bta=35528&nci=5390&afp10=Tiktok&subid=jeudesmaison&utm_campaign=jeudesmaison",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-200 to-pink-200 flex flex-col items-center">
      <div className="w-full max-w-lg mx-auto py-10 px-4 flex flex-col items-center">
        <ProfileSection name={profile.name} bio={profile.bio} />
        
        <VideoSection 
          videoUrl={tutorialVideo.url} 
          videoTitle={tutorialVideo.title} 
        />
        
        <BonusBanner 
          title={primaryBonus.title}
          description={primaryBonus.description}
          link={primaryBonus.link}
          isPrimary={true}
        />

        <Testimonials />
        <FAQ />
        
        <Footer />
      </div>
    </div>
  );
}

export default App;