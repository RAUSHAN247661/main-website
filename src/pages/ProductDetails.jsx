import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardBody, Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";

const ProductDetails = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewerCount, setViewerCount] = useState(Math.floor(10 + Math.random() * 15));
  const [dealEndsAt] = useState(() => {
    const now = new Date();
    const end = new Date(now.getTime());
    end.setHours(end.getHours() + 2);
    end.setMinutes(end.getMinutes() + Math.floor(Math.random() * 30));
    end.setSeconds(end.getSeconds() + Math.floor(Math.random() * 60));
    return end;
  });
  const [timeLeft, setTimeLeft] = useState("");

  const products = [
    { id: 1, name: 'Science Learning eBook Bundle', price: 999, category: 'ebook', description: 'Comprehensive collection of science learning eBooks with interactive content. Perfect for students, educators, and science enthusiasts looking to expand their knowledge.', features: ['10+ eBooks', 'Interactive diagrams', 'Lifetime access', 'Printable worksheets', 'Video explanations'], specifications: [{ label: 'Format', value: 'PDF + Interactive' }, { label: 'File Size', value: '500 MB' }, { label: 'Compatibility', value: 'All Devices' }, { label: 'Updates', value: 'Lifetime' }], images: ['https://img.heroui.chat/image/ai?w=600&h=400&u=2','https://img.heroui.chat/image/ai?w=600&h=400&u=12','https://img.heroui.chat/image/ai?w=600&h=400&u=22','https://img.heroui.chat/image/ai?w=600&h=400&u=32','https://img.heroui.chat/image/ai?w=600&h=400&u=42'], rating: 4.8, reviewCount: 156 },
    { id: 2, name: 'Educational PowerPoint Templates', price: 799, category: 'templates', description: 'Professional PowerPoint templates for educational content. Create engaging presentations with modern designs and customizable layouts.', features: ['50+ templates', 'Easy customization', 'Modern designs', 'Multiple themes', 'Animation effects'], specifications: [{ label: 'Format', value: 'PowerPoint (.pptx)' }, { label: 'File Size', value: '200 MB' }, { label: 'Compatibility', value: 'PowerPoint 2016+' }, { label: 'Updates', value: '1 Year' }], images: ['https://img.heroui.chat/image/ai?w=600&h=400&u=3','https://img.heroui.chat/image/ai?w=600&h=400&u=13','https://img.heroui.chat/image/ai?w=600&h=400&u=23','https://img.heroui.chat/image/ai?w=600&h=400&u=33','https://img.heroui.chat/image/ai?w=600&h=400&u=43'], rating: 4.6, reviewCount: 89 },
    { id: 3, name: 'Content Creator Toolkit', price: 1499, category: 'tools', description: 'Essential tools for content creation and management. Streamline your workflow with professional-grade tools and analytics.', features: ['SEO tools', 'Analytics dashboard', 'Content planner', 'Keyword research', 'Performance tracking'], specifications: [{ label: 'Format', value: 'Web Application' }, { label: 'Access', value: 'Cloud-based' }, { label: 'Compatibility', value: 'All Browsers' }, { label: 'Updates', value: 'Lifetime' }], images: ['https://img.heroui.chat/image/ai?w=600&h=400&u=4','https://img.heroui.chat/image/ai?w=600&h=400&u=14','https://img.heroui.chat/image/ai?w=600&h=400&u=24','https://img.heroui.chat/image/ai?w=600&h=400&u=34','https://img.heroui.chat/image/ai?w=600&h=400&u=44'], rating: 4.7, reviewCount: 203 },
    { id: 4, name: 'Video Editing Master Bundle', price: 2999, category: 'video-editing', description: 'Complete video editing package with templates and effects. Professional-grade tools for creating stunning video content.', features: ['Transition packs', 'Sound effects library', 'Tutorial access', '4K support', 'Custom animations'], specifications: [{ label: 'Format', value: 'Multiple Formats' }, { label: 'File Size', value: '5 GB' }, { label: 'Compatibility', value: 'Premiere Pro, Final Cut' }, { label: 'Updates', value: '2 Years' }], images: ['https://img.heroui.chat/image/ai?w=600&h=400&u=5','https://img.heroui.chat/image/ai?w=600&h=400&u=15','https://img.heroui.chat/image/ai?w=600&h=400&u=25','https://img.heroui.chat/image/ai?w=600&h=400&u=35','https://img.heroui.chat/image/ai?w=600&h=400&u=45'], rating: 4.9, reviewCount: 312 },
    { id: 5, name: 'Research Methods eBook', price: 499, category: 'ebook', description: 'Comprehensive guide to research methodologies and practices. Essential resource for students and researchers.', features: ['300+ pages', 'Case studies', 'Practice exercises', 'Research templates', 'Statistical guides'], specifications: [{ label: 'Format', value: 'PDF + EPUB' }, { label: 'File Size', value: '150 MB' }, { label: 'Compatibility', value: 'All Devices' }, { label: 'Updates', value: 'Lifetime' }], images: ['https://img.heroui.chat/image/ai?w=600&h=400&u=6','https://img.heroui.chat/image/ai?w=600&h=400&u=16','https://img.heroui.chat/image/ai?w=600&h=400&u=26','https://img.heroui.chat/image/ai?w=600&h=400&u=36','https://img.heroui.chat/image/ai?w=600&h=400&u=46'], rating: 4.5, reviewCount: 78 },
    { id: 6, name: 'Social Media Template Pack', price: 899, category: 'templates', description: 'Professional social media templates for multiple platforms. Create engaging content with ready-to-use designs.', features: ['Instagram ready', 'YouTube thumbnails', 'Facebook covers', 'Twitter posts', 'LinkedIn graphics'], specifications: [{ label: 'Format', value: 'PSD, AI, PNG' }, { label: 'File Size', value: '300 MB' }, { label: 'Compatibility', value: 'Photoshop, Illustrator' }, { label: 'Updates', value: '1 Year' }], images: ['https://img.heroui.chat/image/ai?w=600&h=400&u=7','https://img.heroui.chat/image/ai?w=600&h=400&u=17','https://img.heroui.chat/image/ai?w=600&h=400&u=27','https://img.heroui.chat/image/ai?w=600&h=400&u=37','https://img.heroui.chat/image/ai?w=600&h=400&u=47'], rating: 4.4, reviewCount: 95 },
    { id: 7, name: 'Video Effects Package', price: 1999, category: 'video-editing', description: 'Premium video effects and transitions bundle. Add professional polish to your video projects.', features: ['4K effects', 'Custom animations', 'Green screen pack', 'Motion graphics', 'Color grading'], specifications: [{ label: 'Format', value: 'Multiple Formats' }, { label: 'File Size', value: '3 GB' }, { label: 'Compatibility', value: 'After Effects, Premiere' }, { label: 'Updates', value: '2 Years' }], images: ['https://img.heroui.chat/image/ai?w=600&h=400&u=8','https://img.heroui.chat/image/ai?w=600&h=400&u=18','https://img.heroui.chat/image/ai?w=600&h=400&u=28','https://img.heroui.chat/image/ai?w=600&h=400&u=38','https://img.heroui.chat/image/ai?w=600&h=400&u=48'], rating: 4.8, reviewCount: 167 },
    { id: 8, name: 'Content Analytics Tool', price: 1299, category: 'tools', description: 'Advanced analytics and reporting tool for content creators. Track performance and optimize your content strategy.', features: ['Real-time tracking', 'Audience insights', 'Performance metrics', 'ROI analysis', 'Competitor tracking'], specifications: [{ label: 'Format', value: 'Web Application' }, { label: 'Access', value: 'Cloud-based' }, { label: 'Compatibility', value: 'All Browsers' }, { label: 'Updates', value: 'Lifetime' }], images: ['https://img.heroui.chat/image/ai?w=600&h=400&u=9','https://img.heroui.chat/image/ai?w=600&h=400&u=19','https://img.heroui.chat/image/ai?w=600&h=400&u=29','https://img.heroui.chat/image/ai?w=600&h=400&u=39','https://img.heroui.chat/image/ai?w=600&h=400&u=49'], rating: 4.6, reviewCount: 134 },
    { id: 9, name: 'Python Programming Course', price: 1499, category: 'coding', description: 'Comprehensive Python programming course from basics to advanced. Learn with practical projects and real-world applications.', features: ['100+ video lessons', 'Practice projects', 'Certificate', 'Code examples', 'Quizzes & tests'], specifications: [{ label: 'Format', value: 'Video + PDF' }, { label: 'Duration', value: '40+ Hours' }, { label: 'Compatibility', value: 'All Devices' }, { label: 'Updates', value: 'Lifetime' }], images: ['https://img.heroui.chat/image/ai?w=600&h=400&u=10','https://img.heroui.chat/image/ai?w=600&h=400&u=20','https://img.heroui.chat/image/ai?w=600&h=400&u=30','https://img.heroui.chat/image/ai?w=600&h=400&u=40','https://img.heroui.chat/image/ai?w=600&h=400&u=50'], rating: 4.9, reviewCount: 445 },
    { id: 10, name: 'Web Development Bundle', price: 2499, category: 'coding', description: 'Complete web development course covering HTML, CSS, JavaScript and React. Build modern websites from scratch.', features: ['Full-stack coverage', 'Real projects', 'Code examples', 'Deployment guide', 'Portfolio building'], specifications: [{ label: 'Format', value: 'Video + Code' }, { label: 'Duration', value: '60+ Hours' }, { label: 'Compatibility', value: 'All Devices' }, { label: 'Updates', value: 'Lifetime' }], images: ['https://img.heroui.chat/image/ai?w=600&h=400&h=400&u=11','https://img.heroui.chat/image/ai?w=600&h=400&u=21','https://img.heroui.chat/image/ai?w=600&h=400&u=31','https://img.heroui.chat/image/ai?w=600&h=400&u=41','https://img.heroui.chat/image/ai?w=600&h=400&u=51'], rating: 4.8, reviewCount: 289 },
    { id: 11, name: 'Data Structures & Algorithms', price: 1999, category: 'coding', description: 'Master DSA concepts with practical implementations. Essential for technical interviews and advanced programming.', features: ['Interview prep', 'Problem solving', 'Time complexity', 'Practice problems', 'Solution explanations'], specifications: [{ label: 'Format', value: 'Video + PDF' }, { label: 'Duration', value: '50+ Hours' }, { label: 'Compatibility', value: 'All Devices' }, { label: 'Updates', value: 'Lifetime' }], images: ['https://img.heroui.chat/image/ai?w=600&h=400&u=12','https://img.heroui.chat/image/ai?w=600&h=400&u=22','https://img.heroui.chat/image/ai?w=600&h=400&u=32','https://img.heroui.chat/image/ai?w=600&h=400&u=42','https://img.heroui.chat/image/ai?w=600&h=400&u=52'], rating: 4.7, reviewCount: 198 },
  ];

  const product = products.find((p) => p.id === parseInt(id || '0')) || products[0];

  const reviews = [
    { name: 'Aarav S.', rating: 5, date: '2 days ago', comment: 'Fantastic value. The resources are practical and immediately usable. My productivity jumped in the first week.' },
    { name: 'Neha K.', rating: 5, date: '1 week ago', comment: 'Clear explanations and great templates. Loved the instant download and lifetime updates promise!' },
    { name: 'Rohit P.', rating: 4, date: '3 weeks ago', comment: 'Exactly what I needed to get started. Worth the price and the support is responsive.' },
  ];

  const faqs = [
    { question: 'How do I access the product after purchase?', answer: 'You will receive an instant download link on the order confirmation page and via email. You can access it anytime on any device.' },
    { question: 'Do you offer a refund if I am not satisfied?', answer: 'Yes. We provide a 7-day money-back guarantee. If it is not a fit, just contact support and we will refund you.' },
    { question: 'Can I use the templates/resources for client work?', answer: 'Yes, your license covers personal and commercial projects. You cannot resell or redistribute the files as-is.' },
  ];

  function formatTimeLeft(endTime) {
    const totalMs = endTime.getTime() - Date.now();
    if (totalMs <= 0) return '00h : 00m : 00s';
    const totalSeconds = Math.floor(totalMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const pad = (n) => n.toString().padStart(2, '0');
    return `${pad(hours)}h : ${pad(minutes)}m : ${pad(seconds)}s`;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(formatTimeLeft(dealEndsAt));
    }, 1000);
    setTimeLeft(formatTimeLeft(dealEndsAt));
    return () => clearInterval(intervalId);
  }, [dealEndsAt]);

  useEffect(() => {
    const viewerIntervalId = setInterval(() => {
      setViewerCount((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return Math.min(28, Math.max(8, next));
      });
    }, 4000 + Math.random() * 4000);
    return () => clearInterval(viewerIntervalId);
  }, []);

  const DISCOUNT_PERCENT = 70;
  const originalPrice = Math.round(product.price / (1 - DISCOUNT_PERCENT / 100));

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  const goToImage = (index) => setCurrentImageIndex(index);

  return (
    <>
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Button as={Link} to="/shop" color="primary" variant="light" className="mb-6" startContent={<Icon icon="mdi:arrow-left" />}>Back to Shop</Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full">
          <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <Image src={product.images[currentImageIndex]} alt={`${product.name} - Image ${currentImageIndex + 1}`} className="w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 top-1/2 flex justify-between items-center px-4">
              <button onClick={prevImage} className="w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl group">
                <Icon icon="mdi:chevron-left" className="text-2xl text-gray-700 group-hover:text-gray-900" />
              </button>
              <button onClick={nextImage} className="w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl group">
                <Icon icon="mdi:chevron-right" className="text-2xl text-gray-700 group-hover:text-gray-900" />
              </button>
            </div>
            <div className="absolute top-4 right-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200">
                <span className="text-sm font-semibold text-gray-800">{currentImageIndex + 1} of {product.images.length}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex justify-center gap-3">
            {product.images.map((image, index) => (
              <button key={index} onClick={() => goToImage(index)} className={`relative overflow-hidden rounded-lg transition-all duration-300 ${index === currentImageIndex ? 'ring-2 ring-primary ring-offset-2 scale-105' : 'hover:scale-105 hover:ring-2 hover:ring-gray-300 hover:ring-offset-2'}`}>
                <Image src={image} alt={`Thumbnail ${index + 1}`} className="w-16 h-16 object-cover" />
                {index === currentImageIndex && (
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <Icon icon="mdi:check-circle" className="text-white text-lg" />
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="mt-8 hidden lg:block">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What customers are saying</h2>
            <div className="grid grid-cols-1 gap-4">
              {reviews.map((r, idx) => (
                <Card key={idx} className="border border-gray-100 shadow-sm">
                  <CardBody>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{r.name}</span>
                      <span className="text-xs text-gray-500">{r.date}</span>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[1,2,3,4,5].map((n) => (
                        <Icon key={n} icon="mdi:star" className={n <= r.rating ? 'text-yellow-400' : 'text-gray-300'} />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{r.comment}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-8 hidden lg:block">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Frequently asked questions</h2>
            <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
              {faqs.map((f, idx) => (
                <details key={idx} className="group p-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between">
                    <span className="font-medium text-gray-900">{f.question}</span>
                    <Icon icon="mdi:chevron-down" className="text-gray-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-2 text-gray-700">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} icon="mdi:star" className={star <= product.rating ? "text-yellow-400" : "text-gray-300"} />
                ))}
              </div>
              <span className="text-sm text-gray-600">({product.reviewCount} reviews)</span>
              <span className="text-sm text-green-600 font-medium">★ {product.rating} Rating</span>
              <span className="hidden sm:inline text-sm text-purple-700 bg-purple-50 px-2 py-1 rounded-full">Best Seller</span>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <p className="text-3xl font-bold text-primary">₹{product.price.toLocaleString('en-IN')}</p>
              <span className="text-lg text-gray-500 line-through">₹{originalPrice.toLocaleString('en-IN')}</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">{DISCOUNT_PERCENT}% OFF</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 px-3 py-1 rounded-full font-medium">
                <Icon icon="mdi:timer" />
                <span>Deal ends in {timeLeft}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Icon icon="mdi:fire" className="text-orange-500" />
                <span>{viewerCount} people are viewing</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Icon icon="mdi:download" className="text-blue-600" />
                <span>1,200+ downloads</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">What You'll Get</h2>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Key Benefits</h2>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon icon="mdi:check-circle" className="text-primary text-sm" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Product Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.specifications.map((spec, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <span className="text-sm text-gray-500 block mb-1">{spec.label}</span>
                  <span className="font-medium text-gray-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Why Choose Digital?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3"><Icon icon="mdi:download" className="text-blue-600 text-xl" /><span className="text-blue-800">Instant Download</span></div>
              <div className="flex items-center gap-3"><Icon icon="mdi:devices" className="text-blue-600 text-xl" /><span className="text-blue-800">All Devices</span></div>
              <div className="flex items-center gap-3"><Icon icon="mdi:update" className="text-blue-600 text-xl" /><span className="text-blue-800">Lifetime Updates</span></div>
              <div className="flex items-center gap-3"><Icon icon="mdi:security" className="text-blue-600 text-xl" /><span className="text-blue-800">Secure Access</span></div>
            </div>
          </div>

          <div className="space-y-3">
            <Button color="primary" size="lg" className="w-full shadow-lg text-lg font-semibold py-4" startContent={<Icon icon="mdi:shopping-cart" />}>Get Instant Access - ₹{product.price.toLocaleString('en-IN')}</Button>
            <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
              <div className="flex items-center gap-2"><Icon icon="mdi:shield-check" className="text-green-600" /><span>7-day money-back guarantee</span></div>
              <div className="hidden sm:flex items-center gap-2">
                <Icon icon="mdi:credit-card-outline" className="text-gray-700" />
                <Icon icon="mdi:paypal" className="text-blue-600" />
                <Icon icon="mdi:apple" className="text-gray-900" />
                <Icon icon="mdi:google" className="text-red-500" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-gray-500 border-t pt-4">
            <div className="flex items-center gap-2"><Icon icon="mdi:shield-check" className="text-green-600" /><span>Secure Payment</span></div>
            <div className="flex items-center gap-2"><Icon icon="mdi:refresh" className="text-blue-600" /><span>7-Day Refund</span></div>
            <div className="flex items-center gap-2"><Icon icon="mdi:headset" className="text-purple-600" /><span>24/7 Support</span></div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden space-y-8 mt-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What customers are saying</h2>
          <div className="grid grid-cols-1 gap-4">
            {reviews.map((r, idx) => (
              <Card key={idx} className="border border-gray-100 shadow-sm">
                <CardBody>
                  <div className="flex items-center justify-between mb-2"><span className="font-medium text-gray-900">{r.name}</span><span className="text-xs text-gray-500">{r.date}</span></div>
                  <div className="flex items-center gap-1 mb-2">{[1,2,3,4,5].map((n) => (<Icon key={n} icon="mdi:star" className={n <= r.rating ? 'text-yellow-400' : 'text-gray-300'} />))}</div>
                  <p className="text-gray-700 text-sm leading-relaxed">{r.comment}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Frequently asked questions</h2>
          <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
            {faqs.map((f, idx) => (
              <details key={idx} className="group p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between"><span className="font-medium text-gray-900">{f.question}</span><Icon icon="mdi:chevron-down" className="text-gray-500 transition-transform group-open:rotate-180" /></summary>
                <p className="mt-2 text-gray-700">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-t border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 line-clamp-1">{product.name}</p>
          <p className="text-lg font-semibold text-primary">₹{product.price.toLocaleString('en-IN')}</p>
        </div>
        <Button color="primary" startContent={<Icon icon="mdi:lightning-bolt" />}>Buy Now</Button>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;


