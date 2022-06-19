import Script from "next/script";
import BLOG from "@/blog.config";

const Scripts = () => (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${BLOG.analytics.gaConfig.measurementId}`}
    />
    <Script strategy="lazyOnload" id="ga">
      {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${BLOG.analytics.gaConfig.measurementId}', {
              page_path: window.location.pathname,
            });`}
    </Script>
  </>
);

export default Scripts;
