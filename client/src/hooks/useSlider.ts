import { useState, useEffect, useCallback } from "react";

export default function useSlider(
  slideCount: number,
  autoSlideInterval: number = 5000
) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  // Function to advance to next slide
  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  // Function to go to previous slide
  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  // Set up auto-sliding
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoSliding) {
      interval = setInterval(goToNextSlide, autoSlideInterval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoSliding, goToNextSlide, autoSlideInterval]);

  // Pause auto-sliding temporarily when user interacts with slider
  const pauseAutoSliding = useCallback(() => {
    setIsAutoSliding(false);
    
    // Resume auto sliding after a delay
    setTimeout(() => {
      setIsAutoSliding(true);
    }, autoSlideInterval * 2);
  }, [autoSlideInterval]);

  // Manual slide change with pause
  const handleManualSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);
    pauseAutoSliding();
  }, [pauseAutoSliding]);

  return {
    currentSlide,
    setCurrentSlide: handleManualSlideChange,
    goToNextSlide,
    goToPrevSlide,
    isAutoSliding
  };
}
