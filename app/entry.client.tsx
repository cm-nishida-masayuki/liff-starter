import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import liff from "@line/liff";
import OneSignal from "react-onesignal";

liff.init({ liffId: import.meta.env.VITE_LIFF_ID }).then(() => {
  OneSignal.init({ appId: "063f5660-2284-419a-a859-648c02783f0e" }).then(() => {
    OneSignal.Slidedown.promptPush();
    startTransition(() => {
      hydrateRoot(
        document,
        <StrictMode>
          <RemixBrowser />
        </StrictMode>
      );
    });
  });
});
