import React from 'react';
import { Play } from 'lucide-react';

interface VideoSectionProps {
  videoUrl: string;
  videoTitle: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoUrl, videoTitle }) => {
  return (
    <div className="w-full max-w-md mx-auto mb-8 rounded-xl overflow-hidden shadow-lg bg-white/30 backdrop-blur-sm">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
          <Play size={20} className="mr-2 text-pink-400" />
          {videoTitle}
        </h2>
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src={videoUrl}
            frameBorder="0"
            title={videoTitle}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;