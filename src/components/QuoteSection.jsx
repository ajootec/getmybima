import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export const QuoteSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.insuranceType) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Mock submission - In real app, this would send to backend
    toast.success('Quote request submitted successfully! We will contact you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      insuranceType: '',
      message: ''
    });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="quote" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
                Get a Quick{' '}
                <span className="gradient-text">Quote</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form and our team will get back to you with the best insurance options tailored to your needs.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="glass border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-primary p-3 rounded-lg">
                      <Phone className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Phone</div>
                      <a href="tel:+919619900955" className="text-primary hover:underline">
                        +91 96199 00955
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-secondary p-3 rounded-lg">
                      <Mail className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Email</div>
                      <a href="mailto:info@getmybima.com" className="text-primary hover:underline">
                        info@getmybima.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-accent to-accent-light p-3 rounded-lg">
                      <MapPin className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Address</div>
                      <p className="text-muted-foreground text-sm">
                        B/601, Samajdeep C.H.S Ltd, Bata Junction<br />
                        Kandivali West, Mumbai, Maharashtra 400067
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp CTA */}
            <div className="glass rounded-xl p-6">
              <h3 className="font-display font-semibold text-lg mb-3">Prefer to chat?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get instant assistance on WhatsApp. Our team is ready to help!
              </p>
              <Button
                onClick={() => window.open('https://wa.me/919619900955', '_blank')}
                className="bg-gradient-secondary hover:opacity-90 transition-opacity w-full"
              >
                Message on WhatsApp
              </Button>
            </div>
          </div>

          {/* Right - Quote Form */}
          <Card className="glass border-border/50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="insuranceType" className="text-foreground">Insurance Type *</Label>
                  <Select
                    value={formData.insuranceType}
                    onValueChange={(value) => handleChange('insuranceType', value)}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select insurance type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="car">Car & Bike Insurance</SelectItem>
                      <SelectItem value="health">Health Insurance</SelectItem>
                      <SelectItem value="home">Property (Home) Insurance</SelectItem>
                      <SelectItem value="travel">Travel Insurance</SelectItem>
                      <SelectItem value="business">Business Insurance</SelectItem>
                      <SelectItem value="cyber">Cyber Liability Insurance</SelectItem>
                      <SelectItem value="life">Life Insurance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Additional Information</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your insurance needs..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={4}
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-gradient-primary hover:opacity-90 transition-opacity w-full shadow-glow"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Get Your Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;