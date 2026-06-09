import { Window } from "@components/common/Window/Window";
import { Canvas, CanvasTools, StyledPaintCanvas } from "./PaintCanvas.styles";
import { useTheme } from "@/providers/ThemeProvider";
import { useRef, useState } from "react";
import { useCanvasSetup } from "./hooks/useCanvasSetup";
import { useDrawing } from "./hooks/useDrawing";
import { Toolbar } from "./components/Toolbar";
import { useSaveCanvas } from "./hooks/useSaveCanvas";
import { ColorPalette } from "@components/common/ColorPalette/ColorPalette";

interface PaintCanvasProps {
  gridSize?: number;
  cellSize?: number;
}

export function PaintCanvas({gridSize = 24}: PaintCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const {theme} = useTheme();
  const colors = Object.values(theme.colors);
  const [selectedColor, setSelectedColor] = useState(theme.colors.dark);

  useCanvasSetup(canvasRef, gridSize);
  const { isBucketMode, setIsBucketMode, handleMouseDown, handleMouseMove, handleMouseUp, handleTouchStart, handleTouchMove, handleTouchEnd } = useDrawing(canvasRef, selectedColor);
  const { saveCanvas } = useSaveCanvas(canvasRef);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if(!canvas) return;

    const ctx = canvas.getContext('2d');
    if(!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  return (
    <Window title="paint.exe">
      <StyledPaintCanvas>
        <Canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
        <CanvasTools>
          <ColorPalette size={4} pointer={true} colors={colors.slice(0, 4)} onSelectColor={setSelectedColor}/>
          <Toolbar 
            isBucketMode={isBucketMode}
            onToggleBucket={() => setIsBucketMode(!isBucketMode)}
            onSave={() => saveCanvas(20)}
            onClear={clearCanvas}
          />
        </CanvasTools>
      </StyledPaintCanvas>
    </Window>
  );
}