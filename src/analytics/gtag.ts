export type AnalyticsEventParams = {
  event_name: string;
  event_category?: string;
  event_label?: string;
  event_action?: string;
  event_location?: string;
  event_destination?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
};

export const trackEvent = (event: AnalyticsEventParams) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  const { event_name, ...params } = event;
  window.gtag("event", event_name, params);
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
