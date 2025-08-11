import React from 'react';
import { Card, CardBody, CardHeader, Image, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';
import VideoSection from '../components/VideoSection';

const Home = () => {
  const scrollToCommunity = () => {
    const communitySection = document.getElementById('community-section');
    if (communitySection) {
      communitySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialMediaStats = [
    { platform: 'YouTube', icon: 'logos:youtube-icon', link: 'https://www.youtube.com/@q-fact2024', description: 'Subscribe to our channel for educational content', followers: '1.2K', label: 'Subscribers' },
    { platform: 'Facebook', icon: 'logos:facebook', link: 'https://www.facebook.com/profile.php?id=61554199612938', description: 'Follow us on Facebook for daily updates', followers: '500+', label: 'Followers' },
    { platform: 'Instagram', icon: 'logos:instagram-icon', link: 'https://www.instagram.com/qfact_2025/', description: 'Join our Instagram community', followers: '800+', label: 'Followers' },
  ];

  return (
    <div className="space-y-12 bg-gray-50">
      <section className="relative h-[500px] sm:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-primary/85 to-secondary/80 z-10 backdrop-blur-sm"></div>
        <Image src="/images/profile-banner.jpg" alt="Content Creator Banner" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 h-[70%] flex flex-col justify-center items-center text-white px-2">
          <div className="mb-6 relative animate-fade-in">
            <Image src="/images/profile.jpg" alt="Profile" className="w-24 h-24 rounded-full border-4 border-white shadow-lg animate-bounce-slow" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-center opacity-0 animate-slide-up">
            Welcome to <span> Q - FACT </span> <br /> 
            <span className='text-2xl sm:text-5xl md:text-5xl font-bold bg-gradient-to-r from-red-300 via-blue-300 to-yellow-300 bg-clip-text text-transparent animate-shine'> 
              Watch, Learn, and Grow 
            </span> <br /> 
          </h1>
          <p className="text-sm sm:text-xl md:text-xl mb-8 text-center max-w-2xl px-4 opacity-0 animate-slide-up-delay-1 font-light text-white-700">
            I’m Raushan, the creator behind Q FACT . Whether you're here for videos, exclusive content, or tools to help you grow, you’re in the right place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-up-delay-2">
            <Button size="lg" color="secondary" className="text-base sm:text-lg px-6 sm:px-8" onClick={scrollToCommunity}>
              Explore Now
            </Button>
            <Link to="/shop">
              <Button size="lg" color="primary" className="text-base sm:text-lg px-6 sm:px-8">Shop Now</Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="community-section" className="container mx-auto px-4 py-12 bg-white rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Join Our Community</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">Connect with us on social media to stay updated with our latest content, educational resources, and community discussions.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {socialMediaStats.map((stat) => (
          <Card key={stat.platform} className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex gap-3">
              <Icon icon={stat.icon} className="text-3xl" />
              <div>
                <p className="text-lg font-semibold">{stat.platform}</p>
                <p className="text-sm text-gray-500">{stat.followers} {stat.label}</p>
              </div>
            </CardHeader>
            <CardBody className="space-y-4">
              <p className="text-gray-600">{stat.description}</p>
              <a href={stat.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
                Visit our {stat.platform}
                <Icon icon="material-symbols:arrow-outward" className="text-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </CardBody>
          </Card>
        ))}
        </div>
      </section>

      {/* <section className="container mx-auto px-4">
        <VideoSection />
      </section> */}
    </div>
  );
};

export default Home;


