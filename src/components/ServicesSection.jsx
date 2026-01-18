import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car, Home, Heart, Plane, Building2, Shield, Users } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Car,
    title: 'Car & Bike Insurance',
    description: 'Protects your vehicle and you from financial losses due to accidents, theft, or damage, ensuring peace of mind on the road.',
    image: 'https://images.unsplash.com/photo-1560009320-c01920eef9f8?w=400&auto=format&fit=crop&q=80',
    color: 'primary'
  },
  {
    id: 2,
    icon: Heart,
    title: 'Health Insurance',
    description: 'Maximize your coverage, minimize your costs. We focus on securing you higher sum insured and maximum benefits from your health policy.',
    image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&auto=format&fit=crop&q=80',
    color: 'secondary'
  },
  {
    id: 3,
    icon: Home,
    title: 'Property (Home) Insurance',
    description: 'Protect your most valuable asset. Get comprehensive home insurance coverage and safeguard your cherished abode against fire, floods, and earthquakes.',
    image: 'https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?w=400&auto=format&fit=crop&q=80',
    color: 'accent'
  },
  {
    id: 4,
    icon: Plane,
    title: 'Travel Insurance',
    description: 'Travel with absolute peace of mind. Wide range of travel insurance to cover you against unexpected events during your trip.',
    image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=400&auto=format&fit=crop&q=80',
    color: 'primary'
  },
  {
    id: 5,
    icon: Building2,
    title: 'Business Insurance',
    description: 'Protect your business from unexpected events. Customized insurance solutions to cover your business against risks and liabilities.',
    image: 'https://images.unsplash.com/photo-1462556791646-c201b8241a94?w=400&auto=format&fit=crop&q=80',
    color: 'secondary'
  },
  {
    id: 6,
    icon: Shield,
    title: 'Cyber Liability Insurance',
    description: 'Cyber threats are real for everyone. Cyber insurance protects your finances and reputation. Stay secure in today\'s digital world.',
    image: 'https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?w=400&auto=format&fit=crop&q=80',
    color: 'accent'
  },
  {
    id: 7,
    icon: Users,
    title: 'Life Insurance',
    description: 'Protect your loved ones\' future. Curated plans made only for you that provide financial security and help you reach your financial objectives.',
    image: 'https://images.unsplash.com/photo-1605455447870-74140e959c8e?w=400&auto=format&fit=crop&q=80',
    color: 'primary'
  }
];

export const ServicesSection = () => {
  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Protect Your Assets with{' '}
            <span className="gradient-text">GetMyBima</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive insurance solutions for every aspect of your life. Choose the protection that fits your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="glass hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                  <div className={`absolute bottom-4 left-4 bg-${service.color} p-3 rounded-lg shadow-lg`}>
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6 flex flex-col">
                  <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  <Button
                    onClick={scrollToQuote}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all mt-auto w-full"
                  >
                    Get a Quote
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;