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
  if (typeof window === "undefined" || typeof window.dataLayer?.push !== "function") {
    return;
  }

  const { event_action, ...params } = event;
  window.dataLayer.push({ event: event_action, params });
};

declare global {
  interface Window {
    dataLayer?;
  }
}
