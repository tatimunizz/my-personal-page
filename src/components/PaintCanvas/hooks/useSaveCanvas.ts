// hooks/useSaveCanvas.ts
import { type RefObject } from 'react';

export function useSaveCanvas(canvasRef: RefObject<HTMLCanvasElement | null>) {
  const saveCanvas = (scale: number = 20) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const scaledWidth = canvas.width * scale;
    const scaledHeight = canvas.height * scale;

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = scaledWidth;
    tempCanvas.height = scaledHeight;
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return;
    tempCtx.fillStyle = 'transparent';
    tempCtx.fillRect(0, 0, scaledWidth, scaledHeight);
    tempCtx.imageSmoothingEnabled = false;
    tempCtx.drawImage(canvas, 0, 0, scaledWidth, scaledHeight);

    const link = document.createElement('a');
    link.download = 'tatimunizz-paint.png';
    link.href = tempCanvas.toDataURL('image/png');
    link.click();
  };
  return { saveCanvas };
}