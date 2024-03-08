import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { LiffProvider } from "react-liff";

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <LiffProvider liffId={import.meta.env.LIFF_ID || ""}>
        <RemixBrowser />
      </LiffProvider>
    </StrictMode>
  );
});
