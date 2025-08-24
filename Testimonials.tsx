import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialProps {
  image: string;
  gain: string;
  date: string;
  isActive: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ image, gain, date, isActive }) => (
  <div className={`absolute w-full transition-all duration-300 transform ${
    isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
  }`}>
    <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4">
      <div className="relative pb-[180%] mb-3">
        <img 
          src={image} 
          alt={`Gain de ${gain}`}
          className="absolute inset-0 w-full h-full object-cover rounded-[32px]"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="text-green-600 font-bold text-xl">+{gain}</div>
        <div className="text-sm text-gray-500">{date}</div>
      </div>
    </div>
  </div>
);

const NavigationDot: React.FC<{ active: boolean; onClick: () => void }> = ({ active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
      active ? 'bg-gray-800 w-4' : 'bg-gray-400'
    }`}
  />
);

const NavigationButton: React.FC<{ direction: 'prev' | 'next'; onClick: () => void }> = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2
    hover:bg-white/40 transition-all duration-300"
    style={{ [direction === 'prev' ? 'left' : 'right']: '-12px' }}
  >
    {direction === 'prev' ? (
      <ChevronLeft size={20} className="text-gray-800" />
    ) : (
      <ChevronRight size={20} className="text-gray-800" />
    )}
  </button>
);

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const testimonials = [
    {
      image: "https://i.ibb.co/V0j0BbF9/IMG-5914.jpg",
      gain: "140€ ✨",
      date: "Il y a 46min"
    },
    {
      image: "https://i.ibb.co/bMVY3TPk/IMG-5935.png",
      gain: "200€ ✨",
      date: "Il y a 2h"
    },
    {
      image: "https://i.ibb.co/qYWJC0LT/IMG-5936.png",
      gain: "184€ ✨",
      date: "Il y a 35min"
    },
    {
      image: "https://i.ibb.co/LhpnVkB9/IMG-5902.png",
      gain: "85€ ✨",
      date: "Il y a 1h"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Gains Récents 💸
      </h2>
      
      <div className="relative h-[680px]">
        <NavigationButton direction="prev" onClick={prevSlide} />
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            {...testimonial}
            isActive={index === currentIndex}
          />
        ))}
        <NavigationButton direction="next" onClick={nextSlide} />
      </div>
      <div className="flex justify-center items-center">
        {testimonials.map((_, index) => (
          <NavigationDot
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;