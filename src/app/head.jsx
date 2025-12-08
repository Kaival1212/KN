export default function Head() {
    return (
        <>
            {/* Cookiebot MUST be here */}
            <script
                id="Cookiebot"
                src="https://consent.cookiebot.com/uc.js"
                data-cbid="646bffc5-94ca-49dd-9203-74e3ed314193"
                data-blockingmode="auto"
                type="text/javascript"
            ></script>

            {/* Google Consent Mode v2 default state */}
            <script
                data-cookieconsent="ignore"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("consent", "default", {
              ad_personalization: "denied",
              ad_storage: "denied",
              ad_user_data: "denied",
              analytics_storage: "denied",
              functionality_storage: "denied",
              personalization_storage: "denied",
              security_storage: "granted",
              wait_for_update: 500,
            });
            gtag("set", "ads_data_redaction", true);
            gtag("set", "url_passthrough", false);
          `,
                }}
            ></script>
        </>
    );
}
