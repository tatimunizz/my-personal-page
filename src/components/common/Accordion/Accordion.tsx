import { ChevronDown } from "pixelarticons/react";
import { AccordionButton, AccordionContainer, AccordionToggle } from "./Accordion.styles";

interface AccordionProps {
  isOpen: boolean;
  onToggle: () => void;
  buttonText: string;
  children: React.ReactNode;
  className?: string;
}

export function Accordion({isOpen, onToggle, buttonText, children, className}: AccordionProps) {
  return (
    <AccordionContainer className={className} $isOpen={isOpen}>
      <AccordionButton onClick={onToggle} $isOpen={isOpen}>
        {buttonText}
        <AccordionToggle $isOpen={isOpen}>
          <ChevronDown />
        </AccordionToggle>
      </AccordionButton>
      {children}
    </AccordionContainer>
  );
}