import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Key Environment Detector — Stop Leaking Production Keys",
  description: "Monitors API calls to detect when production keys are used in development or staging environments. Real-time alerts for engineering teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="038e2b69-9980-4477-8411-0e8e9638101e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
