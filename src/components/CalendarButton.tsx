"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { Row, Icon, IconButton, useTheme } from "@once-ui-system/core";
import styles from "@/components/about/about.module.scss";

interface CalendarButtonProps {
  calLink: string;
  namespace?: string;
}

export default function CalendarButton({ 
  calLink, 
  namespace = "30min"
}: CalendarButtonProps) {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  // Sync with website theme
  useEffect(() => {
    const themeValue = document.documentElement.getAttribute("data-theme") as "light" | "dark";
    setCurrentTheme(themeValue || "light");
  }, [theme]);

  // Initialize Cal.com
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace });
      cal("ui", { 
        hideEventTypeDetails: false, 
        layout: "month_view",
      });
    })();
  }, [namespace]);

  const handleClick = async () => {
    const cal = await getCalApi({ namespace });
    // Force theme by adding it to the URL
    const calLinkWithTheme = `${calLink}?theme=${currentTheme}`;
    cal("modal", { calLink: calLinkWithTheme });
  };

  return (
    <Row
      fitWidth
      border="brand-alpha-medium"
      background="brand-alpha-weak"
      radius="full"
      padding="4"
      gap="8"
      marginBottom="m"
      vertical="center"
      className={styles.blockAlign}
      style={{
        backdropFilter: "blur(var(--static-space-1))",
      }}
    >
      <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
      <Row paddingX="8">Schedule a call</Row>
      <IconButton
        onClick={handleClick}
        data-border="rounded"
        variant="secondary"
        icon="chevronRight"
      />
    </Row>
  );
}
