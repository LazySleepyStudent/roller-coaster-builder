import { useMemo } from "react";
import { useRollerCoaster } from "@/lib/stores/useRollerCoaster";

export function Sky() {
  const { isNightMode } = useRollerCoaster();
  
  const parkLights = useMemo(() => {
    const lights: { x: number; z: number; height: number; color: string }[] = [];
    
    for (let i = 0; i < 30; i++) {
      const angle = (i / 30) * Math.PI * 2;
      const radius = 60 + (i * 7) % 100;
      lights.push({
        x: Math.cos(angle) * radius,
        z: Math.sin(angle) * radius,
        height: 8 + (i % 4),
        color: ["#FFD700", "#FF6B6B", "#4ECDC4", "#FF69B4", "#00CED1", "#FFFFFF"][i % 6]
      });
    }
    return lights;
  }, []);
  
  const stars = useMemo(() => {
    const s: { x: number; y: number; z: number; size: number }[] = [];
    for (let i = 0; i < 100; i++) {
      s.push({
        x: (i * 17 % 500) - 250,
        y: 60 + (i * 13 % 50),
        z: (i * 23 % 500) - 250,
        size: 0.15 + (i % 3) * 0.05
      });
    }
    return s;
  }, []);
  
  const ferrisWheel = useMemo(() => {
    const spokes: { angle: number; color: string }[] = [];
    for (let i = 0; i < 12; i++) {
      spokes.push({
        angle: (i / 12) * Math.PI * 2,
        color: ["#FF0000", "#FFFF00", "#00FF00", "#0000FF", "#FF00FF", "#00FFFF"][i % 6]
      });
    }
    return spokes;
  }, []);
  
  if (isNightMode) {
    return (
      <>...  // Night mode JSX here... 
      </>
    );
  }
  
  return (
    <>...  // Day mode JSX here...
    </>
  );
}