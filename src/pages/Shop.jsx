import React, { useState } from 'react';
import { Card, CardBody, Button, Input, Badge, Image } from "@heroui/react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    { id: 1, name: 'Science Learning eBook Bundle', price: 999, category: 'ebook', description: 'Comprehensive collection of science learning eBooks with interactive content', image: 'https://img.heroui.chat/image/ai?w=400&h=300&u=2', features: ['10+ eBooks', 'Interactive diagrams', 'Lifetime access'] },
    { id: 2, name: 'Educational PowerPoint Templates', price: 799, category: 'templates', description: 'Professional PowerPoint templates for educational content', image: 'https://img.heroui.chat/image/ai?w=400&h=300&u=3', features: ['50+ templates', 'Easy customization', 'Modern designs'] },
    { id: 3, name: 'Content Creator Toolkit', price: 1499, category: 'tools', description: 'Essential tools for content creation and management', image: 'https://img.heroui.chat/image/ai?w=400&h=300&u=4', features: ['SEO tools', 'Analytics dashboard', 'Content planner'] },
    { id: 4, name: 'Video Editing Master Bundle', price: 2999, category: 'video-editing', description: 'Complete video editing package with templates and effects', image: 'https://img.heroui.chat/image/ai?w=400&h=300&u=5', features: ['Transition packs', 'Sound effects library', 'Tutorial access'] },
    { id: 5, name: 'Research Methods eBook', price: 499, category: 'ebook', description: 'Comprehensive guide to research methodologies and practices', image: 'https://img.heroui.chat/image/ai?w=400&h=300&u=6', features: ['300+ pages', 'Case studies', 'Practice exercises'] },
    { id: 6, name: 'Social Media Template Pack', price: 899, category: 'templates', description: 'Professional social media templates for multiple platforms', image: 'https://img.heroui.chat/image/ai?w=400&h=300&u=7', features: ['Instagram ready', 'YouTube thumbnails', 'Facebook covers'] },
    { id: 7, name: 'Video Effects Package', price: 1999, category: 'video-editing', description: 'Premium video effects and transitions bundle', image: 'https://img.heroui.chat/image/ai?w=400&h=300&u=8', features: ['4K effects', 'Custom animations', 'Green screen pack'] },
    { id: 8, name: 'Content Analytics Tool', price: 1299, category: 'tools', description: 'Advanced analytics and reporting tool for content creators', image: 'https://img.heroui.chat/image/ai?w=400&h=300&u=9', features: ['Real-time tracking', 'Audience insights', 'Performance metrics'] },
    { id: 9, name: 'Python Programming Course', price: 1499, category: 'coding', description: 'Comprehensive Python programming course from basics to advanced', image: 'https://img.heroui.chat/image/ai?w=400&h=300&u=10', features: ['100+ video lessons', 'Practice projects', 'Certificate'] },
    { id: 10, name: 'Web Development Bundle', price: 2499, category: 'coding', description: 'Complete web development course covering HTML, CSS, JavaScript and React', image: 'https://img.heroui.chat/image/ai?w=400&h=300&u=11', features: ['Full-stack coverage', 'Real projects', 'Code examples'] },
    { id: 11, name: 'Data Structures & Algorithms', price: 1999, category: 'coding', description: 'Master DSA concepts with practical implementations', image: 'https://img.heroui.chat/image/ai?w=400&h=300&u=12', features: ['Interview prep', 'Problem solving', 'Time complexity'] },
  ];

  const filteredProducts = products.filter((product) =>
    (searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedCategory === 'all' || product.category === selectedCategory)
  );

  return (
    <div className="space-y-8 mt-8 px-4">
      <div className="text-center max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Our Products</h1>
        <div className="max-w-md mx-auto space-y-4">
          <Input type="text" placeholder="Search products..." onChange={(e) => setSearchQuery(e.target.value)} className="w-full" startContent={<Icon icon="mdi:search" className="text-gray-400" />} />
          <div className="flex flex-wrap justify-center gap-2">
            <Button size="sm" color={selectedCategory === 'all' ? 'primary' : 'default'} variant={selectedCategory === 'all' ? 'solid' : 'bordered'} onClick={() => setSelectedCategory('all')}>All</Button>
            <Button size="sm" color={selectedCategory === 'ebook' ? 'primary' : 'default'} variant={selectedCategory === 'ebook' ? 'solid' : 'bordered'} onClick={() => setSelectedCategory('ebook')}>eBooks</Button>
            <Button size="sm" color={selectedCategory === 'templates' ? 'primary' : 'default'} variant={selectedCategory === 'templates' ? 'solid' : 'bordered'} onClick={() => setSelectedCategory('templates')}>Templates</Button>
            <Button size="sm" color={selectedCategory === 'tools' ? 'primary' : 'default'} variant={selectedCategory === 'tools' ? 'solid' : 'bordered'} onClick={() => setSelectedCategory('tools')}>Tools</Button>
            <Button size="sm" color={selectedCategory === 'video-editing' ? 'primary' : 'default'} variant={selectedCategory === 'video-editing' ? 'solid' : 'bordered'} onClick={() => setSelectedCategory('video-editing')}>Video Editing</Button>
            <Button size="sm" color={selectedCategory === 'coding' ? 'primary' : 'default'} variant={selectedCategory === 'coding' ? 'solid' : 'bordered'} onClick={() => setSelectedCategory('coding')}>Coding</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 xl:gap-6 max-w-7xl mx-auto">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="w-full hover:shadow-lg transition-shadow">
            <div className="relative aspect-[4/3] bg-default-100">
              <Image src={product.image} alt={product.name} className="w-full h-full object-cover object-center" radius="none" />
              <div className="absolute inset-0 bg-gradient-to-t from-default-100/80 to-transparent" />
            </div>
            <CardBody className="space-y-3">
              <Link to={`/product/${product.id}`} className="block">
                <h3 className="text-base sm:text-lg font-semibold hover:text-primary transition-colors line-clamp-2">{product.name}</h3>
              </Link>
              <div className="flex items-center gap-1 flex-wrap">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} icon="mdi:star" className={`text-sm sm:text-base ${star <= 4.5 ? "text-yellow-400" : "text-gray-300"}`} />
                ))}
                <span className="text-xs sm:text-sm text-gray-600 ml-1">(24 reviews)</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-primary">₹{product.price.toLocaleString('en-IN')}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {product.features.map((feature, index) => (
                  <Badge key={index} variant="flat" className="max-w-full truncate">{feature}</Badge>
                ))}
              </div>
              <div className="pt-2">
                <Link to={`/product/${product.id}`} className="w-full">
                  <Button color="primary" className="w-full text-sm sm:text-base">View Details</Button>
                </Link>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;


