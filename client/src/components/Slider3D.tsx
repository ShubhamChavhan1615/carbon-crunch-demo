import { useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import useSlider from "@/hooks/useSlider";

interface SlideImage {
  url: string;
  alt: string;
}

const slides: SlideImage[] = [
  {
    url: "https://images.unsplash.com/photo-1580982327559-c1202864eb05?auto=format&fit=crop&q=80&w=800&h=400",
    alt: "Carbon footprint tracking dashboard"
  },
  {
    url: "https://images.unsplash.com/photo-1623050803570-2b2fc66aa150?auto=format&fit=crop&q=80&w=800&h=400",
    alt: "Carbon reduction analytics"
  },
  {
    url: "https://images.unsplash.com/photo-1497435979456-58dee7b40230?auto=format&fit=crop&q=80&w=800&h=400",
    alt: "Sustainable living tips"
  }
];

export default function Slider3D() {
  const { currentSlide, setCurrentSlide } = useSlider(slides.length, 5000);
  const controls = useAnimation();
  const sliderRef = useRef<HTMLDivElement>(null);

  // Update slider position based on currentSlide
  useEffect(() => {
    controls.start((i) => getSlideStyles(i));
  }, [currentSlide, controls]);

  const getSlideStyles = (index: number) => {
    const positions = [
      {
        zIndex: 30,
        x: "0%",
        y: 0,
        rotateY: 0,
        z: 0,
        opacity: 1,
        scale: 1
      },
      {
        zIndex: 20,
        x: "10%",
        y: 0,
        rotateY: 15,
        z: -100,
        opacity: 0.7,
        scale: 0.95
      },
      {
        zIndex: 10,
        x: "20%",
        y: 0,
        rotateY: 30,
        z: -200,
        opacity: 0.4,
        scale: 0.9
      }
    ];

    // Calculate relative position (0, 1, or 2)
    const relativePos = (index - currentSlide + slides.length) % slides.length;
    
    // For slides beyond the first 3
    if (relativePos >= 3) {
      return {
        zIndex: 5,
        x: "30%",
        y: 0,
        rotateY: 45,
        z: -300,
        opacity: 0.1,
        scale: 0.85
      };
    }

    return positions[relativePos];
  };

  return (
    <div className="slider-container mt-16 md:mt-20 overflow-hidden" style={{ perspective: "1000px" }}>
      <div 
        ref={sliderRef}
        className="slider relative h-[300px] md:h-[400px] w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            custom={index}
            animate={controls}
            initial={getSlideStyles(index)}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 1
            }}
            className="slider-item absolute h-full shadow-lg rounded-xl overflow-hidden"
            style={{
              width: "70%",
              left: "15%",
              top: 0,
              cursor: "pointer",
              backfaceVisibility: "hidden"
            }}
            onClick={() => setCurrentSlide(index)}
          >
            <LazyLoadImage
              src={slide.url}
              alt={slide.alt}
              effect="blur"
              className="w-full h-full object-cover"
              width="100%"
              height="100%"
            />
          </motion.div>
        ))}
      </div>
      
      <div className="slider-controls mt-8 flex justify-center gap-4">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className={`slider-dot w-[10px] h-[10px] rounded-full cursor-pointer ${
              currentSlide === index ? "bg-[#0EA5E9]" : "bg-[#CBD5E1]"
            }`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}
