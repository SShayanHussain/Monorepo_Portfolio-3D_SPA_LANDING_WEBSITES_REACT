import { useState, useRef, MouseEvent, TouchEvent } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

  const startDragging = () => setIsDragging(true);
  const stopDragging = () => setIsDragging(false);

  return (
    <div 
      className="slider-container w-full aspect-[4/3] md:aspect-video bg-surface-200 relative group cursor-ew-resize rounded-lg overflow-hidden"
      ref={containerRef}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      onTouchEnd={stopDragging}
      onMouseDown={startDragging}
      onTouchStart={startDragging}
    >
      {/* After Image (Full Width Background) */}
      <div className="absolute inset-0">
        <img src={afterImage} alt="After" className="w-full h-full object-cover pointer-events-none select-none" />
        <div className="absolute bottom-4 right-4 bg-cream/80 text-surface px-3 py-1 rounded-sm text-sm font-bold tracking-widest uppercase pointer-events-none">
          After
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none select-none" 
          style={{ width: '100vw', minWidth: '100%' }} // Ensure image doesn't scale with container width
        />
        {/* We need the image to stay full width of the container, even when parent div shrinks.
            A cleaner way: set the img width to the exact pixel width of the container if possible, 
            or just use object-cover on an absolutely positioned img that matches the outer container width. */}
        <div className="absolute top-0 left-0 h-full w-screen">
            <img src={beforeImage} className="absolute inset-0 h-full object-cover pointer-events-none select-none" style={{width: '100%'}}/>
        </div>
        <div className="absolute bottom-4 left-4 bg-brand-500/90 text-surface px-3 py-1 rounded-sm text-sm font-bold tracking-widest uppercase pointer-events-none">
          Before
        </div>
      </div>
      
      {/* This is the better way to do the Before image to ensure it doesn't squish */}
      <div className="absolute inset-0 w-full h-full" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <img src={beforeImage} alt="Before" className="w-full h-full object-cover pointer-events-none select-none" />
        <div className="absolute bottom-4 left-4 bg-brand-500 text-surface px-3 py-1 rounded-sm text-sm font-bold tracking-widest uppercase pointer-events-none">
          Before
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="slider-handle"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle visual is in CSS */}
      </div>
    </div>
  );
}
