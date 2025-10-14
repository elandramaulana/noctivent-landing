import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { ParallaxSection } from "@/components/ParallaxSection";
import { Thermometer, Gauge, Smartphone, TrendingDown, Wind, CloudSun, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import logoImage from "@/assets/logo.png";
import problemImage from "@/assets/problem-ac.jpg";
import solutionImage from "@/assets/solution-smart.jpg";
import sensorImage from "@/assets/feature-sensors.jpg";
import dashboardImage from "@/assets/feature-dashboard.jpg";
import ventImage from "@/assets/feature-vents.jpg";
import outdoorCoolingImage from "@/assets/outdoor-cooling.jpg";
import sensorDetailImage from "@/assets/sensor-detail.jpg";
import ventSystemImage from "@/assets/vent-system.jpg";
import appInterfaceImage from "@/assets/app-interface.jpg";
import livingRoomImage from "@/assets/living-room.jpg";
import energySavingsImage from "@/assets/energy-savings.jpg";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
     <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        ref={heroRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/40 to-white z-0" />

      {/* 🟡 Logo — posisikan di atas */}
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 z-20">
        <img
          src={logoImage}
          alt="Logo"
          className="w-32 md:w-40 h-auto mx-auto rounded-2xl"
        />
      </div>

      {/* Konten utama */}
      <div className="container mx-auto px-6 relative z-10 text-center mt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-foreground leading-snug">
            The Smart Way to <span className="text-gradient-gold">Breathe Better</span> Indoors
          </h1>

          <Button
            variant="default"
            size="lg"
            className="gradient-gold text-white text-base md:text-lg px-10 py-5 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0"
          >
            Get Early Access
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Fitur cards */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <GlassCard className="text-center animate-fade-in" hover={false}>
            <Wind className="h-12 w-12 mx-auto mb-4 text-gold" />
            <h3 className="text-xl font-semibold mb-2">Smart Airflow</h3>
            <p className="text-muted-foreground">Automatic vent and window control</p>
          </GlassCard>

          <GlassCard className="text-center animate-fade-in delay-100" hover={false}>
            <TrendingDown className="h-12 w-12 mx-auto mb-4 text-gold" />
            <h3 className="text-xl font-semibold mb-2">Energy Savings</h3>
            <p className="text-muted-foreground">Reduce AC usage up to 40%</p>
          </GlassCard>

          <GlassCard className="text-center animate-fade-in delay-200" hover={false}>
            <Smartphone className="h-12 w-12 mx-auto mb-4 text-gold" />
            <h3 className="text-xl font-semibold mb-2">IoT Dashboard</h3>
            <p className="text-muted-foreground">Monitor and control remotely</p>
          </GlassCard>
        </div>
      </div>
    </section>


      {/* Problem & Solution Section */}
      <section className="py-32 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto px-6">
          <ParallaxSection speed={0.2}>
            <h2 className="text-5xl font-bold text-center mb-20 text-foreground">
              Why <span className="text-gradient-gold">Noctivent</span>?
            </h2>
          </ParallaxSection>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 md:order-1 animate-slide-in-right">
              <div className="glass-card-dark rounded-3xl p-2">
                <img
                  src={problemImage}
                  alt="High AC energy consumption"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-semibold mb-4">
                The Problem
              </div>
              <h3 className="text-4xl font-bold text-foreground">
                Over-reliance on Air Conditioning
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Traditional climate control systems run continuously, consuming massive amounts of energy even when outdoor temperatures are cooler than indoors. This leads to unnecessarily high electricity bills and environmental impact.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-gold mr-3 mt-1">•</span>
                  High energy costs from constant AC usage
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 mt-1">•</span>
                  Missed opportunities for natural cooling
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 mt-1">•</span>
                  Environmental impact from excessive energy consumption
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-semibold mb-4">
                The Solution
              </div>
              <h3 className="text-4xl font-bold text-foreground">
                Intelligent, Natural Ventilation
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Noctivent continuously monitors indoor and outdoor temperatures, automatically opening vents and windows when outside air is cooler. This natural airflow reduces your cooling load while maintaining perfect comfort.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-gold mr-3 mt-1">✓</span>
                  Automatic temperature-driven ventilation
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 mt-1">✓</span>
                  Significant reduction in AC runtime
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 mt-1">✓</span>
                  Eco-friendly and energy-efficient living
                </li>
              </ul>
            </div>
            <div className="animate-slide-in-right">
              <div className="glass-card-dark rounded-3xl p-2">
                <img
                  src={solutionImage}
                  alt="Smart home natural ventilation"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <ParallaxSection speed={0.3}>
            <h2 className="text-5xl font-bold text-center mb-8 text-foreground">
              Smart Features, <span className="text-gradient-gold">Seamless Control</span>
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-20 max-w-2xl mx-auto">
              Noctivent combines cutting-edge IoT technology with intuitive design to deliver exceptional comfort and efficiency.
            </p>
          </ParallaxSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <GlassCard className="group">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img
                  src={sensorImage}
                  alt="Temperature sensors"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <Thermometer className="h-10 w-10 text-gold mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-foreground">Real-Time Monitoring</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced sensors continuously track indoor and outdoor temperatures with precision, ensuring optimal decision-making for airflow control.
              </p>
            </GlassCard>

            <GlassCard className="group">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img
                  src={ventImage}
                  alt="Smart vents"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <Gauge className="h-10 w-10 text-gold mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-foreground">Automatic Vent Control</h3>
              <p className="text-muted-foreground leading-relaxed">
                Motorized vents and window actuators respond instantly to temperature changes, opening and closing to maximize natural cooling efficiency.
              </p>
            </GlassCard>

            <GlassCard className="group">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img
                  src={dashboardImage}
                  alt="Mobile dashboard"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <Smartphone className="h-10 w-10 text-gold mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-foreground">IoT Dashboard</h3>
              <p className="text-muted-foreground leading-relaxed">
                Monitor your home's airflow, view energy analytics, and control settings from anywhere with our elegant mobile and web interface.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 bg-gradient-to-b from-secondary/30 to-white">
        <div className="container mx-auto px-6">
          <ParallaxSection speed={0.2}>
            <h2 className="text-5xl font-bold text-center mb-8 text-foreground">
              How <span className="text-gradient-gold">It Works</span>
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-20 max-w-2xl mx-auto">
              Three simple steps to effortless, energy-efficient comfort
            </p>
          </ParallaxSection>

          <div className="max-w-4xl mx-auto space-y-16">
            <div className="animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3 text-foreground flex items-center">
                    <Thermometer className="mr-3 h-8 w-8 text-gold" />
                    Sensors Detect Temperature
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our IoT sensors continuously monitor both indoor and outdoor temperatures, comparing them in real-time to identify cooling opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3 text-foreground flex items-center">
                    <CloudSun className="mr-3 h-8 w-8 text-gold" />
                    Smart Analysis
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    When outdoor temperature is lower than indoors, Noctivent's intelligent system determines the optimal ventilation strategy to maximize natural cooling.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3 text-foreground flex items-center">
                    <Wind className="mr-3 h-8 w-8 text-gold" />
                    Automatic Actuation
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Smart vents and window actuators open to bring in fresh, cool air. When conditions change, they close automatically to maintain comfort and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={energySavingsImage}
            alt="Energy efficiency background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <ParallaxSection speed={0.4}>
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Ready to Transform Your Home?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join the waitlist to be among the first to experience intelligent airflow control. Limited beta spots available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button variant="default" size="lg" className="gradient-gold text-white text-lg px-12 py-7 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0">
                  Get Early Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-12 py-7 rounded-full border-2 border-gold text-gold hover:bg-gold/5">
                  Learn More
                </Button>
              </div>
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-lg border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gradient-gold mb-4">Noctivent</h3>
              <p className="text-muted-foreground">
                The future of smart home airflow management
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-gold transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-gold transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Noctivent. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
