import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import liff from "@line/liff";
import OneSignal from "react-onesignal";

liff.init({ liffId: import.meta.env.VITE_LIFF_ID }).then(() => {
  if (window.matchMedia("(display-mode: standalone)").matches) {
    OneSignal.init({ appId: "a8c5a8f8-d638-47b0-90c2-3b30b8fe85bd" }).then(
      () => {
        OneSignal.Slidedown.promptPush();
      }
    );
  }
  /* @ts-ignore */
  Weglot.initialize({ api_key: "wg_17df67728eb7d5d696c3c8fcf674ec3d3" });
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>
    );
  });
});
