import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Heart, TrendingUp, CheckCircle } from 'lucide-react';

export const HeroSection = () => {
  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">35+ Years of Trust</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Protecting What{' '}
              <span className="gradient-text">Matters Most</span>,
              <br />
              Today and Tomorrow
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Comprehensive insurance solutions tailored to your unique needs. With over 35 years of expertise, 
              we provide the coverage you need and the service you deserve.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Expert Guidance</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Best Rates</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Quick Claims</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToQuote}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow text-base"
              >
                Get Your Quote Now
              </Button>
              <Button
                onClick={() => window.open('https://wa.me/919619900955', '_blank')}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 text-base"
              >
                WhatsApp Us
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-3xl font-display font-bold text-primary">35+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-secondary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-accent">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&auto=format&fit=crop&q=80"
                alt="Happy family protected by insurance"
                className="w-full h-auto object-cover"
              />
              
              {/* Glass Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <Heart className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Complete Protection</div>
                    <div className="text-sm text-muted-foreground">For you and your family</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-lg animate-float">
              <TrendingUp className="h-8 w-8 text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;