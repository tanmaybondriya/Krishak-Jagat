"use client";

import { site } from "@/lib/site";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-2xl font-bold text-ink">कुछ गड़बड़ हो गई</h1>
      <p className="mt-3 text-muted">यह पेज अभी लोड नहीं हो सका। कृपया दोबारा प्रयास करें।</p>
      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-11 items-center rounded-full bg-leaf-700 px-5 font-semibold text-white hover:bg-leaf-800"
        >
          फिर से कोशिश करें
        </button>
        <a href={site.url} className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 font-semibold hover:text-leaf-800">
          krishakjagat.org
        </a>
      </div>
    </div>
  );
}
