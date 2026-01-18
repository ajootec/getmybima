import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Settings, Clock, Shield, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '35 Years of Expertise',
    description: 'We have 35 years of experience in the field of Insurance. We have the knowledge and expertise to provide you with the best insurance solutions for your unique needs.',
    gradient: 'from-primary to-primary-light'
  },
  {
    icon: Users,
    title: 'Exceptional Customer Service',
    description: 'We have been servicing our customers for past 35 years. Our team is highly effective and always available to answer your questions and help you navigate the insurance process.',
    gradient: 'from-secondary to-secondary-light'
  },
  {
    icon: Settings,
    title: 'Customized Solutions',
    description: 'We understand that every client has unique insurance needs. That\'s why we offer customized insurance solutions tailored to your specific situation.',
    gradient: 'from-accent to-accent-light'
  },
  {
    icon: Clock,
    title: 'Quick Processing',
    description: 'Fast and efficient policy issuance and claims processing. We value your time and ensure smooth operations at every step.',
    gradient: 'from-primary to-accent'
  },
  {
    icon: Shield,
    title: 'Trusted Partnerships',
    description: 'We work with leading insurance providers to offer you the best coverage options and competitive rates in the market.',
    gradient: 'from-secondary to-primary'
  },
  {
    icon: TrendingUp,
    title: 'Best Value',
    description: 'Maximum coverage at optimal prices. We help you find the perfect balance between comprehensive protection and affordability.',
    gradient: 'from-accent to-secondary'
  }
];

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Why Choose{' '}
            <span className="gradient-text">GetMyBima</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Decades of expertise, personalized service, and unwavering commitment to your protection.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="glass hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Icon with Gradient */}
                  <div className="mb-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-display font-bold gradient-text mb-2">10,000+</div>
            <div className="text-muted-foreground">Policies Issued</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold gradient-text mb-2">98%</div>
            <div className="text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold gradient-text mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;