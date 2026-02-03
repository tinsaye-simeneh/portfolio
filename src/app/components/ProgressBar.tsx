"use client";

import { useEffect, useState, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function ProgressBar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const completeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reset progress when route changes
    setProgress(0);
    setIsLoading(true);

    // Clear any existing timers
    if (timerRef.current) clearInterval(timerRef.current);
    if (completeTimerRef.current) clearTimeout(completeTimerRef.current);

    // Simulate progress
    timerRef.current = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 90) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 90;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 90);
      });
    }, 100);

    // Complete progress when page loads
    completeTimerRef.current = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 300);
    }, 500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (completeTimerRef.current) clearTimeout(completeTimerRef.current);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            height: "3px",
          }}
        >
          <Box
            h="100%"
            bgGradient="linear(to-r, orange.400, red.500, yellow.400)"
            style={{
              width: `${progress}%`,
              transition: "width 0.3s ease",
            }}
          />
          <motion.div
            animate={{
              x: [0, 200, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "100px",
              height: "100%",
              background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

