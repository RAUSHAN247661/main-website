import React from 'react';
import { Card, CardBody, CardFooter } from "@heroui/react";

const VideoSection = () => {
  const videos = [
    { id: 1, title: 'Introduction to Quantum Computing', views: '50K', videoId: 'sBRCwewA0H0' },
    { id: 2, title: 'Climate Change: What You Need to Know', views: '75K', videoId: 'siw0tI2GjMo' },
    { id: 3, title: 'The Future of Artificial Intelligence', views: '100K', videoId: '8k5Ur9NYn0s' },
  ];

  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-bold mb-4 px-4">Featured Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {videos.map((video) => (
          <Card key={video.id} className="w-full hover:shadow-lg transition-shadow">
            <CardBody className="p-0">
              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </CardBody>
            <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <p className="text-sm font-medium">{video.title}</p>
              <p className="text-xs sm:text-sm text-default-500">{video.views} views</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;


