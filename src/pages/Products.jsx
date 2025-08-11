import React from 'react';
import { Card, CardBody, CardHeader, Button, Badge, Image } from "@heroui/react";
import { Icon } from "@iconify/react";

const Products = () => {
  const launchedProducts = [
    { id: 1, name: 'E-Commerce Platform', description: 'Modern e-commerce solution with advanced features, payment integration, and admin dashboard.', image: 'https://picsum.photos/400/250?random=1', category: 'Web Application', status: 'Live', features: ['Payment Gateway', 'Admin Panel', 'Mobile Responsive', 'SEO Optimized'], tech: ['React', 'Node.js', 'MongoDB', 'Stripe'], demoUrl: '#', githubUrl: '#' },
    { id: 2, name: 'Learning Management System', description: 'Comprehensive LMS platform for educational institutions with course management and student tracking.', image: 'https://picsum.photos/400/250?random=2', category: 'Educational Platform', status: 'Live', features: ['Course Creation', 'Student Dashboard', 'Progress Tracking', 'Video Streaming'], tech: ['Vue.js', 'Python', 'PostgreSQL', 'AWS'], demoUrl: '#', githubUrl: '#' },
    { id: 3, name: 'Real Estate Portal', description: 'Property listing and management platform with advanced search and virtual tour capabilities.', image: 'https://picsum.photos/400/250?random=3', category: 'Real Estate', status: 'Live', features: ['Property Search', 'Virtual Tours', 'Agent Portal', 'Lead Management'], tech: ['Angular', 'Java', 'MySQL', 'Google Maps API'], demoUrl: '#', githubUrl: '#' },
    { id: 4, name: 'Healthcare Management System', description: 'Complete healthcare solution for hospitals with patient management and appointment scheduling.', image: 'https://picsum.photos/400/250?random=4', category: 'Healthcare', status: 'Live', features: ['Patient Records', 'Appointments', 'Billing System', 'Reports'], tech: ['React', 'PHP', 'MySQL', 'Chart.js'], demoUrl: '#', githubUrl: '#' },
    { id: 5, name: 'Restaurant Ordering System', description: 'Online food ordering platform with menu management and delivery tracking.', image: 'https://picsum.photos/400/250?random=5', category: 'Food & Beverage', status: 'Live', features: ['Menu Management', 'Order Tracking', 'Payment Processing', 'Analytics'], tech: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io'], demoUrl: '#', githubUrl: '#' },
    { id: 6, name: 'Social Media Dashboard', description: 'Analytics and management dashboard for social media marketing campaigns.', image: 'https://picsum.photos/400/250?random=6', category: 'Marketing Tool', status: 'Live', features: ['Analytics', 'Scheduling', 'Content Calendar', 'Performance Reports'], tech: ['React', 'Python', 'PostgreSQL', 'Social APIs'], demoUrl: '#', githubUrl: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Launched Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover our portfolio of successful web applications and digital solutions that are making a difference in various industries.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {launchedProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="p-0">
                <div className="relative">
                  <Image src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-3 right-3">
                    <Badge color="success" variant="flat" className="font-semibold">{product.status}</Badge>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge color="primary" variant="flat" className="font-semibold">{product.category}</Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">About this Website:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.id === 1 && "A comprehensive e-commerce solution designed for modern businesses. Features include secure payment processing, inventory management, customer analytics, and a responsive design that works seamlessly across all devices. Built with scalability in mind to handle growing business needs."}
                    {product.id === 2 && "An advanced learning platform that revolutionizes how educational institutions deliver content. Provides tools for course creation, student progress tracking, interactive assessments, and seamless video streaming. Designed to enhance the learning experience for both educators and students."}
                    {product.id === 3 && "A sophisticated real estate platform that connects buyers, sellers, and agents. Features include advanced property search with filters, virtual tour capabilities, lead management systems, and comprehensive agent portals. Streamlines the entire property transaction process."}
                    {product.id === 4 && "A complete healthcare management solution that digitizes hospital operations. Includes patient record management, appointment scheduling, billing systems, and comprehensive reporting tools. Designed to improve patient care and operational efficiency."}
                    {product.id === 5 && "A modern food ordering platform that transforms restaurant operations. Features include menu management, real-time order tracking, payment processing, and detailed analytics. Provides a seamless experience for both customers and restaurant staff."}
                    {product.id === 6 && "A powerful social media management tool that helps businesses optimize their online presence. Includes content scheduling, performance analytics, campaign management, and comprehensive reporting. Designed to maximize social media ROI and engagement."}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button color="primary" variant="flat" className="w-full" startContent={<Icon icon="mdi:eye" />}>Go to Website</Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-xl mb-6 opacity-90">Let's discuss your project and bring your vision to life with cutting-edge technology.</p>
            <Button color="primary" variant="flat" size="lg" className="text-primary font-semibold" startContent={<Icon icon="mdi:rocket-launch" />}>Start Your Project</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;


