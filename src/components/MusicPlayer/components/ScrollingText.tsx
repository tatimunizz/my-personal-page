import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const ScrollContainer = styled.div`
  overflow-x: hidden;
  width: 100%;
`;

const ScrollContent = styled.div<{ $shouldScroll: boolean }>`
  display: inline-block;
  white-space: nowrap;
  animation: ${props => props.$shouldScroll ? scroll : 'none'} 15s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const TextSpan = styled.span`
  display: inline-block;
  padding-right: 2rem;
`;

interface ScrollingTextProps {
  text: string;
}

export function ScrollingText({ text }: ScrollingTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const { scrollWidth, clientWidth } = containerRef.current;
      setShouldScroll(scrollWidth > clientWidth);
    }
  }, [text]);

  return (
    <ScrollContainer ref={containerRef}>
      <ScrollContent $shouldScroll={shouldScroll}>
        <TextSpan>{text}</TextSpan>
        {shouldScroll && <TextSpan>{text}</TextSpan>}
      </ScrollContent>
    </ScrollContainer>
  );
}