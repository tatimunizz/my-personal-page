// hooks/useDrawing.ts
import { useState, type RefObject } from 'react';

const getMouseCoords = (e: React.MouseEvent<HTMLCanvasElement>, canvas: HTMLCanvasElement) => {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const mouseX = (e.clientX - rect.left) * scaleX;
  const mouseY = (e.clientY - rect.top) * scaleY;
  const x = Math.floor(mouseX);
  const y = Math.floor(mouseY);
  if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) return { x, y };
  return null;
};

const getTouchCoords = (e: React.TouchEvent<HTMLCanvasElement>, canvas: HTMLCanvasElement) => {
  e.preventDefault();
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const touch = e.touches[0];
  const clientX = touch.clientX;
  const clientY = touch.clientY;
  const canvasX = (clientX - rect.left) * scaleX;
  const canvasY = (clientY - rect.top) * scaleY;
  const x = Math.floor(canvasX);
  const y = Math.floor(canvasY);
  if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) return { x, y };
  return null;
};

export function useDrawing(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  selectedColor: string
) {
  const [isDrawing, setIsDrawing] = useState(false);
  const [isBucketMode, setIsBucketMode] = useState(false);

  const drawPixel = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = selectedColor;
    ctx.fillRect(x, y, 1, 1);
  };

  const floodFill = (startX: number, startY: number, replacementColor: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data; // Uint8ClampedArray (RGBA)

    const getColorAt = (x: number, y: number): [number, number, number, number] => {
      const idx = (y * canvas.width + x) * 4;
      return [data[idx], data[idx+1], data[idx+2], data[idx+3]];
    };

    const setColorAt = (x: number, y: number, r: number, g: number, b: number, a: number) => {
      const idx = (y * canvas.width + x) * 4;
      data[idx] = r;
      data[idx+1] = g;
      data[idx+2] = b;
      data[idx+3] = a;
    };

    const parseColor = (color: string): [number, number, number, number] => {
      const tempCtx = document.createElement('canvas').getContext('2d');
      if (!tempCtx) return [0,0,0,255];
      tempCtx.fillStyle = color;
      tempCtx.fillRect(0,0,1,1);
      const [r,g,b,a] = tempCtx.getImageData(0,0,1,1).data;
      return [r,g,b,a];
    };

    const targetRGBA = getColorAt(startX, startY);
    const replacementRGBA = parseColor(replacementColor);

    if (targetRGBA[0] === replacementRGBA[0] && targetRGBA[1] === replacementRGBA[1] && targetRGBA[2] === replacementRGBA[2] && targetRGBA[3] === replacementRGBA[3]) return;

    const stack: [number, number][] = [[startX, startY]];
    const visited = new Set<string>();

    while (stack.length) {
      const [x, y] = stack.pop()!;
      const key = `${x},${y}`;
      if (visited.has(key)) continue;
      visited.add(key);

    if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) continue;

    const [r,g,b,a] = getColorAt(x, y);
    if (r === targetRGBA[0] && g === targetRGBA[1] && b === targetRGBA[2] && a === targetRGBA[3]) {
      setColorAt(x, y, replacementRGBA[0], replacementRGBA[1], replacementRGBA[2], replacementRGBA[3]);
      stack.push([x+1, y], [x-1, y], [x, y+1], [x, y-1]);
    }
  }

  ctx.putImageData(imageData, 0, 0);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const coords = getMouseCoords(e, canvas);
    if (!coords) return;
    if (isBucketMode) {
      floodFill(coords.x, coords.y, selectedColor);
    } else {
      setIsDrawing(true);
      drawPixel(coords.x, coords.y);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || isBucketMode) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const coords = getMouseCoords(e, canvas);
    if (coords) drawPixel(coords.x, coords.y);
  };

  const handleMouseUp = () => setIsDrawing(false);

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const coords = getTouchCoords(e, canvas);
    if (!coords) return;
    if (isBucketMode) {
      floodFill(coords.x, coords.y, selectedColor);
    } else {
      setIsDrawing(true);
      drawPixel(coords.x, coords.y);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (!isDrawing || isBucketMode) return;
    const coords = getTouchCoords(e, canvas);
    if (coords) drawPixel(coords.x, coords.y);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setIsDrawing(false);
  };

  return {
    isBucketMode,
    setIsBucketMode,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}