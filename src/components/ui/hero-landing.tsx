'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, HTMLMotionProps } from 'framer-motion';

// Utils function
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Progressive Blur Component
export const GRADIENT_ANGLES = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
};

export type ProgressiveBlurProps = {
  direction?: keyof typeof GRADIENT_ANGLES;
  blurLayers?: number;
  className?: string;
  blurIntensity?: number;
} & HTMLMotionProps<'div'>;

export function ProgressiveBlur({
  direction = 'bottom',
  blurLayers = 8,
  className,
  blurIntensity = 0.25,
  ...props
}: ProgressiveBlurProps) {
  const layers = Math.max(blurLayers, 2);
  const segmentSize = 1 / (blurLayers + 1);

  return (
    <div className={cn('relative', className)}>
      {Array.from({ length: layers }).map((_, index) => {
        const angle = GRADIENT_ANGLES[direction];
        const gradientStops = [
          index * segmentSize,
          (index + 1) * segmentSize,
          (index + 2) * segmentSize,
          (index + 3) * segmentSize,
        ].map(
          (pos, posIndex) =>
            `rgba(255, 255, 255, ${posIndex === 1 || posIndex === 2 ? 1 : 0}) ${pos * 100}%`
        );

        const gradient = `linear-gradient(${angle}deg, ${gradientStops.join(
          ', '
        )})`;

        return (
          <motion.div
            key={index}
            className='pointer-events-none absolute inset-0 rounded-[inherit]'
            style={{
              maskImage: gradient,
              WebkitMaskImage: gradient,
              backdropFilter: `blur(${index * blurIntensity}px)`,
            }}
            {...props}
          />
        );
      })}
    </div>
  );
}

// Logo Component for JB Builders
const JBLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <img 
        src="https://xh9zcyg5ay.ufs.sh/f/YCJDCam3SQ2LjY3bL0h1briGPQquIt8B526mTLkyoUedfN3C"
        alt="JB Builders & Realty Logo"
        className="w-10 h-10 rounded-lg object-cover"
      />
      <div>
        <div className="font-bold text-slate-800 text-lg">JB Builders & Realty</div>
        <div className="text-xs text-slate-600">Since 2017</div>
      </div>
    </div>
  );
};

// Header Component
const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuState(false);
    }
  };

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="fixed z-20 w-full px-2 group">
        <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-white/90 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5 shadow-lg')}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                aria-label="home"
                className="flex items-center space-x-2">
                <JBLogo />
              </a>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(item.href.substring(1))}
                      className="text-slate-600 hover:text-slate-800 block duration-150 font-medium">
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(item.href.substring(1))}
                        className="text-slate-600 hover:text-slate-800 block duration-150 font-medium">
                        <span>{item.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  onClick={() => scrollToSection('contact')}
                  size="sm"
                  className="bg-slate-800 hover:bg-slate-900 text-white">
                  <span>Get Quote</span>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm">
                  <a href="tel:09323269930">
                    <span>Call Now</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Main Hero Component
interface HeroLandingProps {
  heading?: string;
  description?: string;
  announcement?: {
    text: string;
    href: string;
  };
  buttons?: {
    primary?: {
      text: string;
      href: string;
    };
    secondary?: {
      text: string;
      href: string;
    };
  };
}

const HeroLanding = ({
  heading = "Build Your Home The Way You Want",
  description = "Professional construction services with quality craftsmanship and flexible payment options in Quezon Province. From vision to reality since 2017.",
  announcement = {
    text: "Established 2017 - Tayabas City, Quezon",
    href: "#about"
  },
  buttons = {
    primary: {
      text: "Get Free Quote",
      href: "#contact"
    },
    secondary: {
      text: "View Our Projects",
      href: "#projects"
    }
  }
}: HeroLandingProps) => {
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden" id="home">
        <section>
          <div className="pb-24 pt-24 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              {/* Hero Content */}
              <div className="mx-auto max-w-4xl text-center">

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-8 max-w-4xl mx-auto text-balance text-5xl font-bold text-slate-800 md:text-6xl lg:mt-16 xl:text-7xl">
                  {heading}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg text-slate-600">
                  {description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  {buttons.primary && (
                    <div className="bg-gray-100 rounded-[14px] border border-gray-200 p-0.5">
                      <Button
                        onClick={() => scrollToSection('contact')}
                        size="lg"
                        className="rounded-xl px-8 text-base bg-slate-800 hover:bg-slate-900 text-white shadow-lg">
                        <span className="text-nowrap flex items-center space-x-2">
                          <span>{buttons.primary.text}</span>
                          <ArrowRight size={18} />
                        </span>
                      </Button>
                    </div>
                  )}
                  {buttons.secondary && (
                    <Button
                      onClick={() => scrollToSection('projects')}
                      size="lg"
                      variant="outline"
                      className="h-12 rounded-xl px-8 border-slate-300 hover:bg-slate-50">
                      <span className="text-nowrap">{buttons.secondary.text}</span>
                    </Button>
                  )}
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-800 mb-1">7+</div>
                    <div className="text-sm text-slate-500">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-800 mb-1">100%</div>
                    <div className="text-sm text-slate-500">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-800 mb-1">50+</div>
                    <div className="text-sm text-slate-500">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-800 mb-1">24/7</div>
                    <div className="text-sm text-slate-500">Support</div>
                  </div>
                </motion.div>
              </div>

              {/* Hero Image with Progressive Blur */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="relative mt-12 overflow-hidden px-1 sm:px-2 sm:mt-20 md:mt-24">
                <div className="relative mx-auto max-w-full sm:max-w-6xl overflow-hidden rounded-xl sm:rounded-2xl border bg-white p-1 sm:p-4 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-100">
                  <div className="relative">
                    <img
                      className="aspect-[3/2] sm:aspect-[16/10] w-full rounded-lg sm:rounded-2xl object-cover"
                      src="https://xh9zcyg5ay.ufs.sh/f/YCJDCam3SQ2LWFF9fH13ioV9r5Sm1zscIGO8FeupBQCZNWyj"
                      alt="Construction project showcase"
                      width="2070"
                      height="1380"
                    />
                    <ProgressiveBlur
                      className="pointer-events-none absolute bottom-0 left-0 h-[30%] w-full"
                      direction="bottom"
                      blurIntensity={3}
                      blurLayers={6}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HeroLanding;