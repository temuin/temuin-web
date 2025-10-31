import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { pricingData } from '../data/mock';

const Pricing = ({ darkMode }) => {
  const [currency, setCurrency] = useState('IDR');

  const formatPrice = (priceData, curr) => {
    const price = curr === 'IDR' ? priceData.priceIDR : priceData.priceUSD;
    const symbol = curr === 'IDR' ? 'Rp ' : '$';
    
    const formatNumber = (num) => {
      if (curr === 'IDR') {
        return num.toLocaleString('id-ID');
      } else {
        return num.toLocaleString('en-US');
      }
    };

    if (price.max === null || price.max === undefined) {
      return `${symbol}${formatNumber(price.min)}+`;
    }
    
    if (price.min === price.max) {
      return `${symbol}${formatNumber(price.min)}`;
    }
    
    return `${symbol}${formatNumber(price.min)} - ${symbol}${formatNumber(price.max)}`;
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const PricingCard = ({ tier, popular }) => (
    <Card
      className={`relative p-8 transition-all duration-300 hover:-translate-y-2 ${
        popular
          ? darkMode
            ? 'bg-gray-900 border-cyan-400 shadow-lg shadow-cyan-400/20'
            : 'bg-white border-cyan-400 shadow-lg shadow-cyan-400/20'
          : darkMode
          ? 'bg-gray-900 border-gray-800 hover:border-gray-700'
          : 'bg-white border-gray-200 hover:border-gray-300'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      <div className="space-y-6">
        <div>
          <h3
            className={`text-2xl font-bold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {tier.tier}
          </h3>
          <p
            className={`text-sm mb-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {tier.description}
          </p>
          <div
            className={`text-3xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {formatPrice(tier, currency)}
          </div>
        </div>

        <div className="space-y-3">
          {tier.features.map((feature, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <div className="p-1 rounded-full bg-cyan-400/10">
                  <Check className="h-4 w-4 text-cyan-400" />
                </div>
              </div>
              <span
                className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        <Button
          onClick={scrollToContact}
          className={`w-full rounded-full py-6 transition-all duration-300 ${
            popular
              ? 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg hover:shadow-cyan-500/50'
              : darkMode
              ? 'bg-gray-800 hover:bg-gray-700 text-white'
              : 'bg-gray-900 hover:bg-gray-800 text-white'
          }`}
        >
          Request Quote
        </Button>
      </div>
    </Card>
  );

  return (
    <section
      id="pricing"
      className={`py-20 lg:py-32 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2
            className={`text-4xl lg:text-5xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Transparent <span className="text-cyan-400">Pricing</span>
          </h2>
          <p
            className={`text-lg lg:text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Flexible packages tailored to your project needs
          </p>

          {/* Currency Toggle */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setCurrency('IDR')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currency === 'IDR'
                  ? 'bg-cyan-400 text-white shadow-lg'
                  : darkMode
                  ? 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              IDR (Rp)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currency === 'USD'
                  ? 'bg-cyan-400 text-white shadow-lg'
                  : darkMode
                  ? 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Tabs for Web and App */}
        <Tabs defaultValue="web" className="w-full">
          <TabsList
            className={`grid w-full max-w-md mx-auto grid-cols-2 mb-12 ${
              darkMode ? 'bg-gray-800' : 'bg-gray-100'
            }`}
          >
            <TabsTrigger
              value="web"
              className="data-[state=active]:bg-cyan-400 data-[state=active]:text-white"
            >
              Web Development
            </TabsTrigger>
            <TabsTrigger
              value="app"
              className="data-[state=active]:bg-cyan-400 data-[state=active]:text-white"
            >
              App Development
            </TabsTrigger>
          </TabsList>

          <TabsContent value="web">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingData.web.map((tier, index) => (
                <PricingCard key={index} tier={tier} popular={tier.popular} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="app">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingData.app.map((tier, index) => (
                <PricingCard key={index} tier={tier} popular={tier.popular} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Pricing;
