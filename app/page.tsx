export default function Home() {
  const faqs = [
    {
      q: "Which cloud providers are supported?",
      a: "AWS, GCP, and Azure are fully supported. We scan EC2, Lambda, RDS, GKE, Cloud Run, Azure VMs, and more."
    },
    {
      q: "How does outage impact prediction work?",
      a: "We build a live dependency graph of your infrastructure. When a provider reports an incident, we instantly highlight every service in your stack that depends on the affected region or service."
    },
    {
      q: "Is my cloud credential data secure?",
      a: "Credentials are encrypted at rest using AES-256 and never logged. We use read-only IAM roles so we never touch your data plane."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          For DevOps &amp; SRE Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Map Your App&apos;s{" "}
          <span className="text-[#58a6ff]">Cloud Dependencies</span>
          <br />Before the Next Outage Hits
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Scan your infrastructure across AWS, GCP, and Azure. Visualize dependency graphs with D3.js. Get instant outage impact analysis so you know exactly what breaks — and why.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start Mapping — $39/mo
        </a>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🗺️", title: "Dependency Graphs", desc: "Interactive D3.js maps of every cloud service your app touches." },
            { icon: "⚡", title: "Real-Time Alerts", desc: "Instant notifications when a provider incident threatens your stack." },
            { icon: "📊", title: "Impact Scoring", desc: "Quantify blast radius so you can prioritize incident response fast." }
          ].map((f) => (
            <div key={f.title} className="p-5 rounded-xl bg-[#161b22] border border-[#30363d]">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl bg-[#161b22] border border-[#58a6ff] p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$39</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited cloud accounts",
              "AWS, GCP & Azure scanning",
              "Real-time dependency graphs",
              "Outage impact alerts",
              "Scheduled scans & reports",
              "Slack & PagerDuty integration"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-5 rounded-xl bg-[#161b22] border border-[#30363d]">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Cloud Outage Dependency Mapper. All rights reserved.
      </footer>
    </main>
  );
}
