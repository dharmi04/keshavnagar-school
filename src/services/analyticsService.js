import { schoolConfig } from "../config/schoolConfig.js";

const measurementId = schoolConfig.analyticsMeasurementId;
let initialized = false;

export function initializeAnalytics() {
  if (!measurementId || initialized) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: false,
  });

  initialized = true;
}

export function trackPageView(path) {
  if (!measurementId || !window.gtag) return;

  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
