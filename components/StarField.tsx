"use client";

import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const stars: {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      twinkleSpeed: number;
      twinklePhase: number;
    }[] = [];

    const meteors: {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      active: boolean;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 3000);
      stars.length = 0;
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.3,
          opacity: Math.random(),
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const spawnMeteor = () => {
      if (Math.random() < 0.003) {
        meteors.push({
          x: Math.random() * canvas.width + 200,
          y: -20,
          length: Math.random() * 60 + 40,
          speed: Math.random() * 4 + 3,
          opacity: 1,
          active: true,
        });
      }
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      for (const star of stars) {
        const twinkle =
          Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.5 + 0.5;
        const opacity = star.opacity * twinkle;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();

        // Add glow to brighter stars
        if (star.radius > 1) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(
            star.x,
            star.y,
            0,
            star.x,
            star.y,
            star.radius * 3
          );
          gradient.addColorStop(0, `rgba(180, 200, 255, ${opacity * 0.3})`);
          gradient.addColorStop(1, "transparent");
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }

      // Draw meteors
      spawnMeteor();
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        if (!m.active) continue;

        m.x -= m.speed;
        m.y += m.speed;
        m.opacity -= 0.008;

        if (m.opacity <= 0 || m.y > canvas.height + 50) {
          meteors.splice(i, 1);
          continue;
        }

        const gradient = ctx.createLinearGradient(
          m.x,
          m.y,
          m.x + m.length * 0.7,
          m.y - m.length * 0.7
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${m.opacity})`);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x + m.length * 0.7, m.y - m.length * 0.7);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    createStars();
    animationId = requestAnimationFrame(draw);

    window.addEventListener("resize", () => {
      resize();
      createStars();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
