export type WebClientScrapeResult = {
  url: string;
  html: string;
  text?: string;
  pdf?: string;
  screenshot?: string;
  error?: string;
};
export type WebclientConnectionMap = {
  "webclient.scrape": {
    request: {
      options?: Partial<{}>;
      body: {
        url: string | string[];
        screenshot?: boolean;
        pdf?: boolean;
        rateLimitMillis?: number;
        maxPages?: number;
      };
    };
    response: {};
    headers: {
      url?: string;
      authToken?: string;
    };
  };
};
