// hooks/useCanvasSetup.ts
import { useEffect, type RefObject } from 'react';

export function useCanvasSetup(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  gridSize: number
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = gridSize;
    canvas.height = gridSize;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = 'transparent';
    ctx.fillRect(0, 0, gridSize, gridSize);
  }, [gridSize, canvasRef]);
}