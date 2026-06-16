import React from 'react';
import { ExternalLink } from 'lucide-react';

const VideoTutorial = ({ exercise }) => {
  return (
    <a
      href={exercise.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-500 hover:text-primary-600 transition-colors"
    >
      <ExternalLink size={12} />
      Watch Tutorial
    </a>
  );
};

export default VideoTutorial;
