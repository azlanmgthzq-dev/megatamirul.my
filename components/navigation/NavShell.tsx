"use client";

import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import Navigation from "./Navigation";

function subscribeWelcomeComplete(callback: () => void) {
  window.addEventListener("welcome-complete", callback);
  return () => window.removeEventListener("welcome-complete", callback);
}

function getWelcomeCompleteSnapshot() {
  return window.sessionStorage.getItem("welcome-complete") === "true";
}

function getServerWelcomeCompleteSnapshot() {
  return false;
}

/**
 * Controls when the top navigation is shown.
 * On the home page it hides during the welcome screen and fades in once the welcome completes.
 * On any other route there's no welcome screen to wait for, so it shows immediately.
 */
export default function NavShell() {
  const pathname = usePathname();
  const welcomeComplete = useSyncExternalStore(
    subscribeWelcomeComplete,
    getWelcomeCompleteSnapshot,
    getServerWelcomeCompleteSnapshot
  );
  const visible = pathname !== "/" || welcomeComplete;

  // Hide the nav entirely while the welcome screen is showing so it doesn't flash underneath
  if (!visible) return null;

  return (
    <div className="transition-opacity duration-500 opacity-100">
      <Navigation />
    </div>
  );
}
