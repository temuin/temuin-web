import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = ({ darkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = darkMode ? 'rgba(0, 255, 255, 0.5)' : 'rgba(10, 37, 64, 0.3)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = darkMode
              ? `rgba(0, 255, 255, ${0.2 - distance / 750})`
              : `rgba(10, 37, 64, ${0.15 - distance / 1000})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [darkMode]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        darkMode ? 'bg-black' : 'bg-gray-50'
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="space-y-8">
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Connecting Ideas to{' '}
            <span className="text-cyan-400">Innovation</span>
          </h1>

          <p
            className={`text-xl sm:text-2xl max-w-3xl mx-auto animate-fade-in-delay ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            We build web and app experiences that elevate businesses into the
            digital future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 group"
            >
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection('portfolio')}
              size="lg"
              variant="outline"
              className={`rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                  : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
              }`}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative image */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
