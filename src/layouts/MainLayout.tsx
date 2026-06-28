import { Header } from "@components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "@components/Footer/Footer";
import { SideBar } from "@components/SideBar/SideBar";
import { LayoutContainer, MainContent } from "./MainLayout.styles";
import { AnimatePresence, motion } from "motion/react";
import { useClickPosition } from "@contexts/ClickPositionContext";
import { useEffect, useRef, useState } from "react";

export default function MainLayout() {
  const location = useLocation();
  const { position } = useClickPosition();
  const motionRef = useRef<HTMLDivElement>(null);
  const [origin, setOrigin] = useState("50% 50%");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (position && motionRef.current) {
      const rect = motionRef.current.getBoundingClientRect();
      const x = position.x;
      const y = -20;
      setOrigin(`${x}px ${y}px`);
    } else {
      setOrigin("50% 50%");
    }
  }, [position, location.pathname]);

  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <AnimatePresence mode="wait">
          <motion.div
            ref={motionRef}
            key={location.pathname}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              width: "100%",
              height: "100%",
              transformOrigin: origin,
            }}
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
        <SideBar />
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
}
