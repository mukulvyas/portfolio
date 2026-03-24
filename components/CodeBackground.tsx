"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

// Coding-flavored symbols that rain down
const CODE_CHARS =
  "01{}[]()<>/\\;:=!?@#$%&|^~*+-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface Column {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  length: number;
  opacity: number;
  glowIndex: number; // index of the brightest (head) char
}

export default function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const canvas = canvasEl as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    const FONT_SIZE = 13;
    const COLUMN_SPACING = 22;
    let columns: Column[] = [];
    let animId: number;
    let lastTime = 0;

    function buildColumns(width: number, height: number) {
      const count = Math.floor(width / COLUMN_SPACING);
      columns = Array.from({ length: count }, (_, i) => ({
        x: i * COLUMN_SPACING + COLUMN_SPACING / 2,
        y: Math.random() * -height,
        speed: 0.6 + Math.random() * 1.2,
        chars: Array.from(
          { length: 28 },
          () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)],
        ),
        length: 8 + Math.floor(Math.random() * 20),
        opacity: 0.06 + Math.random() * 0.1,
        glowIndex: 0,
      }));
    }

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buildColumns(canvas.width, canvas.height);
    }

    function randomChar() {
      return CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
    }

    function tick(ts: number) {
      const delta = ts - lastTime;
      lastTime = ts;
      const dt = Math.min(delta, 50) / 16; // normalised, cap spikes

      const isDark = themeRef.current === "dark";

      // Fading trail — semi-transparent fill
      ctx.fillStyle = isDark
        ? "rgba(3, 3, 8, 0.18)"
        : "rgba(248, 250, 252, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${FONT_SIZE}px 'Courier New', monospace`;

      for (const col of columns) {
        // Occasionally mutate a char in the stream
        if (Math.random() < 0.04) {
          const idx = Math.floor(Math.random() * col.chars.length);
          col.chars[idx] = randomChar();
        }

        // Draw the trailing stream
        for (let i = 0; i < col.length; i++) {
          const cy = col.y - i * FONT_SIZE;
          if (cy < -FONT_SIZE || cy > canvas.height + FONT_SIZE) continue;

          const charIdx = (col.glowIndex + i) % col.chars.length;
          const char = col.chars[charIdx];

          // fade away from the head
          const fade = Math.pow(1 - i / col.length, 1.6);

          if (i === 0) {
            // Head — bright glow
            ctx.fillStyle = isDark
              ? `rgba(165, 180, 252, ${col.opacity * 8})`
              : `rgba(99, 102, 241, ${col.opacity * 10})`;
            ctx.shadowColor = isDark ? "#818cf8" : "#6366f1";
            ctx.shadowBlur = 8;
          } else {
            // Trail
            if (isDark) {
              ctx.fillStyle = `rgba(99, 102, 241, ${col.opacity * fade * 3.5})`;
            } else {
              ctx.fillStyle = `rgba(79, 70, 229, ${col.opacity * fade * 3})`;
            }
            ctx.shadowBlur = 0;
          }

          ctx.fillText(char, col.x, cy);
        }

        ctx.shadowBlur = 0;

        // Advance column
        col.y += col.speed * dt;
        col.glowIndex = (col.glowIndex + 1) % col.chars.length;

        // Reset when tail leaves the bottom
        if (col.y - col.length * FONT_SIZE > canvas.height) {
          col.y = -FONT_SIZE * (2 + Math.random() * 10);
          col.speed = 0.6 + Math.random() * 1.2;
          col.length = 8 + Math.floor(Math.random() * 20);
          col.opacity = 0.06 + Math.random() * 0.1;
        }
      }

      animId = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []); // Canvas setup only once — theme is read via ref

  // On theme change, clear canvas immediately to avoid ghost trails
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (theme === "light") {
      ctx.fillStyle = "rgba(248, 250, 252, 1)";
    } else {
      ctx.fillStyle = "rgba(3, 3, 8, 1)";
    }
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
