"use client";

import { useEffect, useState } from "react";
import Navigation from "./Navigation";

/**
 * Controls when the top navigation is shown.
 * By default it hides during the welcome screen and fades in once the welcome completes.
 */
export default function NavShell() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Wait for the welcome screen to finish, then reveal the nav.
    const handleComplete = () => {
      window.sessionStorage.setItem("welcome-complete", "true");
      setVisible(true);
    };

    window.addEventListener("welcome-complete", handleComplete);
    return () => window.removeEventListener("welcome-complete", handleComplete);
  }, []);

  // Hide the nav entirely while the welcome screen is showing so it doesn't flash underneath
  if (!visible) return null;

  return (
    <div className="transition-opacity duration-500 opacity-100">
      <Navigation />
    </div>
  );
}
