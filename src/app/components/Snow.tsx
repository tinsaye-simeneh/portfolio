"use client";

import { useEffect, useState } from "react";
import { Snowfall } from "react-snowfall";
import { Box } from "@chakra-ui/react";

export default function Snow() {
  const [showSnow, setShowSnow] = useState(false);

  useEffect(() => {
    // Check if current date is in December (month 11 in JavaScript Date, 0-indexed)
    const currentDate = new Date();
    const month = currentDate.getMonth(); // 0-11, where 11 is December
    
    // Show snow from December 1st to December 31st
    if (month === 11) {
      setShowSnow(true);
    }
  }, []);

  if (!showSnow) return null;

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      pointerEvents="none"
      zIndex={9999}
      style={{ overflow: "hidden" }}
    >
      <Snowfall
        color="#ffffff"
        snowflakeCount={150}
        speed={[0.5, 3]}
        wind={[-0.5, 2]}
        radius={[0.5, 3]}
        opacity={[0.3, 0.9]}
      />
    </Box>
  );
}
