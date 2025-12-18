import { useMemo } from "react";

interface RainDrop {
    id: number;
    left: number;
    animationDuration: number;
    length: number;
    opacity: number;
    delay: number;
    width: number;
}

const RainAnimation = () => {
    // Generate raindrops using useMemo to ensure they're only created once
    const raindrops = useMemo(() => {
        const rainDropCount = 150; // Number of raindrops - increased for better visibility
        const drops: RainDrop[] = [];

        for (let i = 0; i < rainDropCount; i++) {
            drops.push({
                id: i,
                left: Math.random() * 100, // Random horizontal position (0-100%)
                animationDuration: 0.5 + Math.random() * 1.5, // Random fall duration (0.5-2s) - faster than snow
                length: 15 + Math.random() * 25, // Random length (15-40px)
                opacity: 0.5 + Math.random() * 0.5, // Random opacity (0.5-1.0) - more visible
                delay: Math.random() * 2, // Random delay (0-2s)
                width: 1.5 + Math.random() * 1, // Random width (1.5-2.5px) - thicker for visibility
            });
        }

        return drops;
    }, []);

    return (
        <>
            <div
                className="absolute inset-0 z-[1] pointer-events-none overflow-hidden"
                aria-hidden="true"
            >
                {raindrops.map((drop) => (
                    <div
                        key={drop.id}
                        className="absolute top-0"
                        style={{
                            left: `${drop.left}%`,
                            width: `${drop.width}px`,
                            height: `${drop.length}px`,
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            opacity: drop.opacity,
                            animation: `rainfall-${drop.id} ${drop.animationDuration}s linear infinite`,
                            animationDelay: `${drop.delay}s`,
                            boxShadow: `0 0 ${drop.length / 2}px rgba(255, 255, 255, ${drop.opacity * 0.8})`,
                            borderRadius: '2px',
                        }}
                    />
                ))}
            </div>
            <style>{`
        ${raindrops.map((drop) => `
          @keyframes rainfall-${drop.id} {
            0% {
              transform: translateY(-100vh) translateX(0);
              opacity: 0;
            }
            2% {
              opacity: ${drop.opacity};
            }
            98% {
              opacity: ${drop.opacity};
            }
            100% {
              transform: translateY(100vh) translateX(0);
              opacity: 0;
            }
          }
        `).join('')}
      `}</style>
        </>
    );
};

export default RainAnimation;

