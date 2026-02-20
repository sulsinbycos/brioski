function HowItWorks() {
    const steps = [
        {
            step: "01",
            title: "Create your account",
            description: "Sign up in seconds with Google. No credit card required."
        },
        {
            step: "02",
            title: "Set up your workspace",
            description: "Create projects, invite your team, and customize your workflow."
        },
        {
            step: "03",
            title: "Start shipping",
            description: "Use AI-powered tools to automate tasks and deliver faster than ever."
        }
    ]

    return (
        <section id="how-it-works" className="py-20 px-6 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        How it
                        <span className="text-blue-500"> works</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Get started in three simple steps
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="text-5xl font-bold text-blue-500/20 mb-4">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks