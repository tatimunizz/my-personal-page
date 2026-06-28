import { Window } from "@components/common/Window/Window";
import {
  Selector,
  SliderContainer,
  StyledPalettePicker,
} from "./PalettePicker.styles";
import { ChevronLeft, ChevronRight } from "pixelarticons/react";
import { useTheme } from "@/providers/ThemeProvider";
import { ColorPalette } from "@components/common/ColorPalette/ColorPalette";
import { IconButton } from "@components/common/IconButton/IconButton";
import { themes, type ThemeName } from "@styles/theme";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef } from "react";

export function PalettePicker() {
  const { nextTheme, prevTheme, themeName, setTheme } = useTheme();
  const palettes = Object.values(themes).map((t) => Object.values(t.colors));
  const themeNames = Object.keys(themes);
  const currentIndex = themeNames.indexOf(themeName);

  const isInternalUpdate = useRef(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    duration: 10,
    watchResize: true,
  });

    useEffect(() => {
    if (emblaApi && currentIndex >= 0) {
      isInternalUpdate.current = true;
      emblaApi.scrollTo(currentIndex, false);
      setTimeout(() => {
        isInternalUpdate.current = false;
      }, 50);
    }
  }, [emblaApi, currentIndex]);

    useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      if (isInternalUpdate.current) return;

      const index = emblaApi.selectedScrollSnap();
      const newThemeName = themeNames[index % themeNames.length] as ThemeName;
      if (newThemeName !== themeName) {
        setTheme(newThemeName);
      }
    };
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, themeName, themeNames, setTheme]);

  const handlePrev = useCallback(() => {
    if (emblaApi) {
      isInternalUpdate.current = true;
      emblaApi.scrollPrev();
      prevTheme();
      setTimeout(() => {
      isInternalUpdate.current = false;
      }, 300);
    }
  }, [emblaApi, prevTheme]);

  const handleNext = useCallback(() => {
    if (emblaApi) {
      isInternalUpdate.current = true;
      emblaApi.scrollNext();
      nextTheme();
      setTimeout(() => {
      isInternalUpdate.current = false;
      }, 300);
    }
  }, [emblaApi, nextTheme]);

  return (
    <Window title="palette.exe">
      <StyledPalettePicker>
        Palette picker
        <Selector>
          <IconButton size={32} onClick={handlePrev}>
            <ChevronLeft />
          </IconButton>
          <SliderContainer>
            <div ref={emblaRef} style={{ overflow: "hidden", width: "100%" }}>
              <div style={{ display: "flex", width: "100%", touchAction: "pan-y pinch-zoom" }}>
                {palettes.map((colors, index) => (
                  <div
                    key={index}
                    style={{ flex: "0 0 100%", minWidth: 0, padding: "0 4px" }}
                  >
                    <ColorPalette size={5} shadow={true} colors={colors} />
                  </div>
                ))}
              </div>
            </div>
          </SliderContainer>
          <IconButton size={32} onClick={handleNext}>
            <ChevronRight />
          </IconButton>
        </Selector>
      </StyledPalettePicker>
    </Window>
  );
}
