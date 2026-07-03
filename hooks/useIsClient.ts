"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

/** True once mounted on the client. Always false during SSR and the first hydration pass. */
export function useIsClient() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}
