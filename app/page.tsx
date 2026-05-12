export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Using Production Keys<br />
          <span className="text-[#58a6ff]">in the Wrong Environment</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          API Key Environment Detector monitors your API calls in real time, alerting your team the moment a production key is detected in dev or staging — before it causes a breach or billing disaster.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $49/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["Pattern Matching", "Environment Fingerprinting", "Instant Alerts", "Team Access Controls", "Webhook & SDK", "Lemon Squeezy Billing"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-xs px-3 py-1 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Integrate SDK or Webhook", desc: "Drop in our lightweight SDK or point your existing webhook to our endpoint. Works with any stack." },
            { step: "2", title: "Define Rules", desc: "Configure which key patterns map to production. Set environment fingerprints for dev, staging, and prod." },
            { step: "3", title: "Get Alerted Instantly", desc: "Receive Slack, email, or webhook alerts the moment a production key is detected outside production." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="w-8 h-8 rounded-full bg-[#58a6ff] text-[#0d1117] font-bold flex items-center justify-center text-sm mb-4">{item.step}</div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-[#8b949e] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Team Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$49<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Per workspace. Unlimited team members.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited API key rules",
              "Environment fingerprinting",
              "Real-time Slack & email alerts",
              "SDK + webhook ingestion",
              "Team access management",
              "7-day alert history",
              "Priority support"
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {feat}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started — $49/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does environment detection work?",
              a: "We use a combination of hostname patterns, environment variable fingerprints, and request metadata to classify each API call's environment. You can also explicitly tag environments in the SDK."
            },
            {
              q: "Does this store my API keys?",
              a: "No. We only store partial key hashes (last 4 chars) for matching purposes. Full keys are never persisted. All data is encrypted in transit and at rest."
            },
            {
              q: "What happens after the 7-day trial?",
              a: "Your workspace is automatically upgraded to the $49/mo plan via Lemon Squeezy. You can cancel anytime from your billing portal with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} API Key Environment Detector. Built for engineering teams.
      </footer>
    </main>
  );
}
