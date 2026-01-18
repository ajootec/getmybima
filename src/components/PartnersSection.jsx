import React from 'react';

const partners = [
  { name: 'ICICI Lombard', logo: 'ICICI' },
  { name: 'HDFC ERGO', logo: 'HDFC' },
  { name: 'Bajaj Allianz', logo: 'BAJAJ' },
  { name: 'Star Health', logo: 'STAR' },
  { name: 'Tata AIG', logo: 'TATA' },
  { name: 'LIC', logo: 'LIC' },
  { name: 'SBI General', logo: 'SBI' },
  { name: 'Reliance General', logo: 'RGL' }
];

export const PartnersSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3">
            Our Trusted{' '}
            <span className="gradient-text">Insurance Partners</span>
          </h2>
          <p className="text-muted-foreground">
            We work with leading insurance providers to bring you the best coverage options
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="glass rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-primary mb-1">
                  {partner.logo}
                </div>
                <div className="text-xs text-muted-foreground">{partner.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8 italic">
          * Services are offered by authorized insurance agents. Insurance is subject to solicitation.
        </p>
      </div>
    </section>
  );
};

export default PartnersSection;