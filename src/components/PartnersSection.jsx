import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "ICICI Prudential", logo: "https://img1.wsimg.com/isteam/ip/718ecd12-9ae0-4ab6-a8e4-31a1c8db06a3/icici-prudential-1024x243.jpg/:/rs=h:100,cg:true,m" },
  { name: "Star Health", logo: "https://img1.wsimg.com/isteam/ip/718ecd12-9ae0-4ab6-a8e4-31a1c8db06a3/starhealthinsurance.png/:/rs=h:100,cg:true,m" },
  { name: "HDFC ERGO", logo: "https://img1.wsimg.com/isteam/ip/718ecd12-9ae0-4ab6-a8e4-31a1c8db06a3/HDCERGO-generalinsurance.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true" },
  { name: "Generic", logo: "https://img1.wsimg.com/isteam/ip/718ecd12-9ae0-4ab6-a8e4-31a1c8db06a3/blob-79ed203.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true" },
  { name: "Care Health Insurance", logo: "https://img1.wsimg.com/isteam/ip/718ecd12-9ae0-4ab6-a8e4-31a1c8db06a3/Care-healthinsurance.png/:/rs=h:100,cg:true,m" },
  { name: "ICICI Lombard", logo: "https://img1.wsimg.com/isteam/ip/718ecd12-9ae0-4ab6-a8e4-31a1c8db06a3/ICICIlombard.png/:/rs=h:100,cg:true,m" },
  { name: "Nive Bupa", logo: "https://img1.wsimg.com/isteam/ip/718ecd12-9ae0-4ab6-a8e4-31a1c8db06a3/Nive-bupa-1024x768.webp/:/rs=h:100,cg:true,m" },
  { name: "New India Assurance", logo: "https://img1.wsimg.com/isteam/ip/718ecd12-9ae0-4ab6-a8e4-31a1c8db06a3/New-India-Asurance.jpeg.jpg/:/rs=h:100,cg:true,m" }
];

export default function PartnersMarquee() {
  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Our Trusted <span className="text-primary">Insurance Partners</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with India’s top insurance providers to give you reliable and affordable coverage
          </p>
        </div>

        {/* Horizontal Marquee */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll whitespace-nowrap">
            {partners.concat(partners).map((partner, index) => (
              <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center px-10 mx-4 bg-background/20 backdrop-blur border border-border rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 object-contain transition duration-300"
              />
            </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-muted-foreground mt-10 italic">
          * Insurance products are offered through licensed insurance partners. Insurance is subject to solicitation.
        </p>
      </div>

      {/* Scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
