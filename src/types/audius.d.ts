export {};

declare global {
  interface Window {
    /**
     * The global Audius SDK instance, available after including the script tag.
     * @see https://docs.audius.co/sdk
     */
    audiusSdk: {
      (config: { apiKey: string }): any;
    };
  }
}