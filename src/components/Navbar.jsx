import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById('sidebar');
      const menuButton = document.getElementById('menu-button');
      const target = event.target;
      if (sidebar && !sidebar.contains(target) && menuButton && !menuButton.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 sm:hidden
          ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Sidebar */}
      <div
        id="sidebar"
        className={`fixed top-0 left-0 h-full w-[60%] bg-gradient-to-br from-gray-900/95 via-gray-900/98 to-black/95 backdrop-blur-xl z-50 
          shadow-[0_0_40px_rgba(0,0,0,0.3)] border-r border-white/10
          transform transition-transform duration-300 ease-in-out sm:hidden
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full bg-gradient-to-b from-primary/10 to-transparent">
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                <img 
                  src="/qfact-logo.png" 
                  alt="Q FACT Logo" 
                  className="w-8 h-8 rounded-full"
                />
                <p className="font-bold text-lg bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Q - FACT</p>
              </Link>
            </div>
          </div>
          
          <nav className="flex-1 p-4 space-y-1">
            <Link 
              to="/" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-200 hover:bg-white/5 hover:text-white active:bg-white/10 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon icon="material-symbols:home" className="text-xl opacity-80" />
              <span className="font-medium">Home</span>
            </Link>
            <Link 
              to="/shop" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-200 hover:bg-white/5 hover:text-white active:bg-white/10 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon icon="material-symbols:shopping-bag" className="text-xl opacity-80" />
              <span className="font-medium">Shop</span>
            </Link>
            <Link 
              to="/support" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-200 hover:bg-white/5 hover:text-white active:bg-white/10 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon icon="material-symbols:help" className="text-xl opacity-80" />
              <span className="font-medium">Support</span>
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-200 hover:bg-white/5 hover:text-white active:bg-white/10 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon icon="material-symbols:mail" className="text-xl opacity-80" />
              <span className="font-medium">Contact</span>
            </Link>
            <Link 
              to="/privacy" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-200 hover:bg-white/5 hover:text-white active:bg-white/10 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon icon="material-symbols:privacy-tip" className="text-xl opacity-80" />
              <span className="font-medium">Privacy</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar>
        <NavbarContent>
          <Button
            id="menu-button"
            isIconOnly
            variant="light"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon icon="material-symbols:menu" className="text-2xl" />
          </Button>
          <NavbarBrand>
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/qfact-logo.png" 
                alt="Q FACT Logo" 
                className="w-8 h-8 rounded-full"
              />
              <p className="font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Q - FACT</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/shop" className="text-foreground hover:text-primary transition-colors">Shop</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/support" className="text-foreground hover:text-primary transition-colors">Support</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/privacy" className="text-foreground hover:text-primary transition-colors">Privacy</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link to="/products">
            <Button isIconOnly variant="light" aria-label="Our Products">
              <Icon icon="material-symbols:apps" className="text-xl" />
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </>
  );
};

export default NavbarComponent;


