function Hero({ setPage }) {
    return (
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block bg-blue-500/10 text-blue-400 text-sm px-4 py-1.5 rounded-full mb-6">
                    🚀 Now in public beta
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                    Work smarter.
                    <br />
                    <span className="text-blue-500">Not harder.</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Brioski is an AI-powered productivity platform that helps
                    teams collaborate, manage projects, and automate workflows.
                    All in one place.
                </p>

                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={() => setPage("login")}
                        className="bg-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
                    >
                        Get Started Free
                    </button>
                    <a
                        href="#features"
                        className="border border-gray-700 px-8 py-3 rounded-lg text-lg font-medium hover:border-gray-500 transition"
                    >
                        Learn More
                    </a>
                </div>

                <p className="text-gray-600 text-sm mt-6">
                    No credit card required • Free forever plan
                </p>
            </div>
        </section>
    )
}

export default Hero