import type { MetaFunction } from "@remix-run/node";
import liff from "@line/liff";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  const [geoLatitude, setGeoLatitude] = useState(0);

  const onClick = async () => {
    if (!liff.isLoggedIn()) {
      liff.login();
    }

    const result = await liff.scanCodeV2();
    console.log(result);
  };

  const showGeolocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGeoLatitude(position.coords.latitude);
    });
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix (SPA Mode)</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/future/spa-mode"
            rel="noreferrer"
          >
            SPA Mode Guide
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <div>
        <button onClick={onClick}>QRコード読み取り</button>
      </div>
      <div>
        <p>緯度: {geoLatitude}</p>
        <button onClick={showGeolocation}>位置情報を読み取り</button>
      </div>
    </div>
  );
}
