"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-3ZQ50R9P5Q";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!window.gtag) return;

    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

    // Track page view on every route change
    window.gtag("event", "page_view", {
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [pathname, searchParams]);

  return null;
}
