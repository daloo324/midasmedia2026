"use client";

import { usePathname } from "next/navigation";
import { standalonePages } from "@/lib/content";

// Shows its contents (the menu or footer) everywhere except standalone pages.
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (standalonePages.includes(pathname)) return null;
  return <>{children}</>;
}
