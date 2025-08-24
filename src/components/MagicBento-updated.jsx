import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const DEFAULT_GLOW_COLOR = "132, 0, 255";

const BentoCardGrid = ({ children }) => (
  <div
    className="bento-section select-none relative overflow-visible grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    style={{ fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.5rem)" }}
  >
    {children}
  </div>
);

const BentoCard = ({
  color,
  title,
  description,
  label,
  enableTilt,
  enableSpotlight,
  enableBorderGlow,
  glowColor = DEFAULT_GLOW_COLOR,
  onClick
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    if (!cardRef.current || !enableTilt) return;

    const card = cardRef.current;
    const handleMouseMove = (e) => {
      if (!isHovered) return;
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      gsap.to(card, {
        duration: 0.5,
        rotateX: rotateX,
        rotateY: rotateY,
        ease: "power2.out",
      });
    };
    
    const handleMouseLeave = () => {
      gsap.to(card, {
        duration: 0.5,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        ease: "power2.out",
      });
    };
    
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovered, enableTilt]);

  return (
    <div
      ref={cardRef}
      className="bento-card group relative rounded-3xl bg-gray-900/50 backdrop-blur-xl border border-gray-800 cursor-pointer overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/50"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: "2em",
        fontSize: "inherit",
        backgroundColor: color || "#060010",
        transform: "perspective(1000px)",
        transformStyle: "preserve-3d"
      }}
    >
      <div className="relative z-10">
        <span className="text-xs font-medium text-purple-300 bg-purple-900/20 px-2 py-1 rounded-full">
          {label}
        </span>
        <h3 className="text-xl font-semibold text-white mt-4 mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>

      {enableSpotlight && (
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(${glowColor}, 0.15), transparent 60%)`
          }}
        />
      )}

      {enableBorderGlow && (
        <div 
          className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(${glowColor}, 0.3), transparent 70%)`
          }}
        />
      )}
    </div>
  );
};

const MagicBento = ({
  cardData,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = true,
  glowColor = DEFAULT_GLOW_COLOR,
  onCardClick
}) => {
  return (
    <BentoCardGrid>
        {cardData.map((card, index) => (
          <BentoCard
            key={card.id || index}
            {...card}
            enableSpotlight={enableSpotlight}
            enableBorderGlow={enableBorderGlow}
            enableTilt={enableTilt}
            glowColor={glowColor}
            onClick={() => onCardClick && onCardClick(card)}
          >
            <div className="relative z-10">
              <span className="text-xs font-medium text-purple-300 bg-purple-900/20 px-2 py-1 rounded-full">
                {card.label}
              </span>
              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-400">{card.description}</p>
            </div>
          </BentoCard>
        ))}
    </BentoCardGrid>
  );
};

export default MagicBento;
