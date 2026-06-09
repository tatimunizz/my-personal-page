// components/Toolbar.tsx
import styled from 'styled-components';
import { Download, SprayImage, Trash } from 'pixelarticons/react';
import { IconButton } from '@components/common/IconButton/IconButton';

const ToolButton = styled(IconButton)<{ $active?: boolean}>`
  color: ${props => props.$active ? props.theme.colors.medium : props.theme.colors.dark};
  opacity: ${props => props.$active ? 1 : 0.7};
  transition: all 0.2s;
  &:hover {
    opacity: 1;
    color: ${props => props.theme.colors.medium};
  }
`

interface ToolbarProps {
  isBucketMode: boolean;
  onToggleBucket: () => void;
  onSave: () => void;
  onClear: () => void;
}

export function Toolbar({ isBucketMode, onToggleBucket, onSave, onClear }: ToolbarProps) {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <ToolButton size={24} onClick={onToggleBucket} $active={isBucketMode}>
        <SprayImage />
      </ToolButton>
      <ToolButton size={24} onClick={onClear}>
        <Trash/>
      </ToolButton>
      <ToolButton size={24} onClick={onSave}>
        <Download />
      </ToolButton>
    </div>
  );
}