import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content: 'GetMyBima has been our insurance partner for over 10 years. Their expertise and personalized service have given us complete peace of mind for our business and family.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Marketing Professional',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    content: 'The team at GetMyBima helped me find the perfect health insurance plan that fit my budget and provided comprehensive coverage. Highly recommended!',
    rating: 5
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    content: 'Quick claim settlement and excellent customer support. They made the entire process seamless when I needed it most. True professionals!',
    rating: 5
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    role: 'Doctor',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80',
    content: 'Their expertise in health insurance is unmatched. They understood my requirements perfectly and provided customized solutions for my family.',
    rating: 5
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Entrepreneur',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    content: 'From business insurance to personal coverage, GetMyBima has it all. Their 35 years of experience truly shows in their service quality.',
    rating: 5
  },
  {
    id: 6,
    name: 'Meera Iyer',
    role: 'Teacher',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&auto=format&fit=crop&q=80',
    content: 'Very transparent and honest in their dealings. They helped me understand all policy details clearly before making a decision. Excellent service!',
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            What Our{' '}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our valued clients have to say about their experience with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="glass hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary opacity-50" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;