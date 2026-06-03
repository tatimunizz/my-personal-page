import { Window } from "@components/Window/Window";
import { Canvas, CanvasTools, StyledPaintCanvas } from "./PaintCanvas.styles";
import { useTheme } from "@/providers/ThemeProvider";
import { useRef, useState } from "react";
import { useCanvasSetup } from "./hooks/useCanvasSetup";
import { useDrawing } from "./hooks/useDrawing";
import { Toolbar } from "./components/Toolbar";
import { useSaveCanvas } from "./hooks/useSaveCanvas";
import { ColorPalette } from "./components/ColotPalette";

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
  const { isBucketMode, setIsBucketMode, handleMouseDown, handleMouseMove, handleMouseUp } = useDrawing(canvasRef, selectedColor);
  const { saveCanvas } = useSaveCanvas(canvasRef);

  return (
    <Window title="paint.exe">
      <StyledPaintCanvas>
        <Canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
        <CanvasTools>
          <ColorPalette colors={colors.slice(0, 4)} onSelectColor={setSelectedColor}/>
          <Toolbar 
            isBucketMode={isBucketMode}
            onToggleBucket={() => setIsBucketMode(!isBucketMode)}
            onSave={() => saveCanvas(20)}
          />
        </CanvasTools>
      </StyledPaintCanvas>
    </Window>
  );
}