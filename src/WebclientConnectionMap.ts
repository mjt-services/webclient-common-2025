export type WebClientScrapeResult = {
  url: string;
  html?: string;
  markdown?: string;
  pdf?: string;
  screenshot?: string;
  error?: string;
};

export type WebClientOpName =
  | "open"
  | "screenshot"
  | "pdf"
  | "html"
  | "markdown"
  | "close";

export type WebClientOp = [WebClientOpName, string] | [WebClientOpName];

export type WebClientProgram = WebClientOp[];

export type WebclientConnectionMap = {
  "webclient.exec": {
    request: {
      options?: Partial<{}>;
      body: WebClientProgram;
    };
    response: WebClientScrapeResult;
    headers: {
      url?: string;
      authToken?: string;
    };
  };
};
