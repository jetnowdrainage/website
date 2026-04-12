"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

declare global {
  interface Window {
    MyJobQuoteWidget?: new () => {
      init: (options: {
        targetId: string;
        userId: string;
        numberOfReviews: number;
        widgetStyle: string;
        theme: string;
      }) => void;
    };
  }
}

const MY_JOB_QUOTE_SCRIPT_ID = "myjobquote-widget-script";

export function ContactReviews() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const isDark = resolvedTheme === "dark";

    const initialiseWidget = () => {
      if (!window.MyJobQuoteWidget) {
        return;
      }

      const widget = new window.MyJobQuoteWidget();
      widget.init({
        targetId: "mjq-widget",
        userId: "usr_8apj6x4cdsgb7pix8e4jnsqjcppv",
        numberOfReviews: 10,
        widgetStyle: "single",
        theme: isDark ? "dark" : "light",
      });
    };

    const existingScript = document.getElementById(MY_JOB_QUOTE_SCRIPT_ID) as HTMLScriptElement | null;
    if (existingScript) {
      initialiseWidget();
      return;
    }

    const script = document.createElement("script");
    script.id = MY_JOB_QUOTE_SCRIPT_ID;
    script.src = "https://www.myjobquote.co.uk/js/widget.js";
    script.async = true;
    script.onload = initialiseWidget;
    document.body.appendChild(script);
  }, [resolvedTheme]);

  return (
    <section className="pb-16 md:pb-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-8 space-y-3">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-primary md:text-4xl">
            Customer Reviews
          </h2>
          <p className="max-w-3xl text-base leading-8 text-[var(--text-muted)]">
            Independent reviews from MyJobQuote, highlighting recent customer feedback on our
            drainage services.
          </p>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.45)] sm:p-6">
          <div id="mjq-widget" />
        </div>
      </div>
    </section>
  );
}
