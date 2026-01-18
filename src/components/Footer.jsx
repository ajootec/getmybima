import React from 'react';
import { Shield, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-display font-bold">GetMyBima</span>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Your trusted insurance partner for over 35 years. Protecting what matters most to you and your family.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/20 hover:text-primary transition-colors"
                onClick={() => window.open('https://facebook.com', '_blank')}
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/20 hover:text-primary transition-colors"
                onClick={() => window.open('https://twitter.com', '_blank')}
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/20 hover:text-primary transition-colors"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/20 hover:text-primary transition-colors"
                onClick={() => window.open('https://instagram.com', '_blank')}
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-us')}
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('quote')}
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  Get a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-background/70">Car & Bike Insurance</li>
              <li className="text-sm text-background/70">Health Insurance</li>
              <li className="text-sm text-background/70">Property Insurance</li>
              <li className="text-sm text-background/70">Travel Insurance</li>
              <li className="text-sm text-background/70">Business Insurance</li>
              <li className="text-sm text-background/70">Cyber Insurance</li>
              <li className="text-sm text-background/70">Life Insurance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-background/70">
                  B/601, Samajdeep C.H.S Ltd<br />
                  Bata Junction, Kandivali West<br />
                  Mumbai, Maharashtra 400067
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919619900955"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  +91 96199 00955
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@getmybima.com"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  info@getmybima.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/60 text-center md:text-left">
              <p>© {currentYear} GetMyBima. All rights reserved.</p>
              <p className="mt-1 text-xs">
                GetMyBima is a trade name for Insurance Aarambh Risk Consultants
              </p>
            </div>
            <div className="flex space-x-6">
              <button className="text-sm text-background/60 hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button className="text-sm text-background/60 hover:text-primary transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
          <p className="text-xs text-background/50 text-center mt-6">
            Services are offered by authorized insurance agents. Insurance is subject to solicitation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;