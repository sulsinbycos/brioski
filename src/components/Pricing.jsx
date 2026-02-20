function Pricing({ setPage }) {
    const plans = [
        {
            name: "Free",
            price: "$0",
            period: "forever",
            description: "For individuals getting started",
            features: [
                "Up to 3 projects",
                "Basic analytics",
                "1 team member",
                "Community support",
                "Word of the Day"
            ],
            cta: "Get Started",
            popular: false
        },
        {
            name: "Pro",
            price: "$12",
            period: "/month",
            description: "For growing teams",
            features: [
                "Unlimited projects",
                "Advanced analytics",
                "Up to 10 team members",
                "Priority support",
                "AI automation",
                "Custom integrations"
            ],
            cta: "Start Free Trial",
            popular: true
        },
        {
            name: "Enterprise",
            price: "$49",
            period: "/month",
            description: "For large organizations",
            features: [
                "Everything in Pro",
                "Unlimited team members",
                "Custom AI models",
                "Dedicated account manager",
                "SSO & SAML",
                "99.99% uptime SLA"
            ],
            cta: "Contact Sales",
            popular: false
        }
    ]

    return (
        <section id="pricing" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Simple, transparent
                        <span className="text-blue-500"> pricing</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        No hidden fees. No surprises. Cancel anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-xl p-8 relative ${
                                plan.popular
                                    ? "bg-blue-600 border-2 border-blue-400"
                                    : "bg-gray-900 border border-gray-800"
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                                    MOST POPULAR
                                </div>
                            )}

                            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                            <p className={`text-sm mb-4 ${plan.popular ? "text-blue-200" : "text-gray-400"}`}>
                                {plan.description}
                            </p>

                            <div className="mb-6">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                <span className={`${plan.popular ? "text-blue-200" : "text-gray-500"}`}>
                                    {plan.period}
                                </span>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm">
                                        <span className={`${plan.popular ? "text-blue-200" : "text-blue-500"}`}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => setPage("login")}
                                className={`w-full py-3 rounded-lg font-medium transition ${
                                    plan.popular
                                        ? "bg-white text-blue-600 hover:bg-gray-100"
                                        : "bg-gray-800 hover:bg-gray-700"
                                }`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing