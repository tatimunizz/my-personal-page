// components/Toolbar.tsx
import { IconButton } from '../PaintCanvas.styles';
import { Download, SprayImage } from 'pixelarticons/react';

interface ToolbarProps {
  isBucketMode: boolean;
  onToggleBucket: () => void;
  onSave: () => void;
}

export function Toolbar({ isBucketMode, onToggleBucket, onSave }: ToolbarProps) {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <IconButton onClick={onToggleBucket} active={isBucketMode}>
        <SprayImage />
      </IconButton>
      <IconButton onClick={onSave}>
        <Download />
      </IconButton>
    </div>
  );
}