function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Chen",
            role: "CTO at TechFlow",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            quote: "Brioski transformed how our team works. We shipped 3x faster in the first month. It's like having an extra team member."
        },
        {
            name: "James Wilson",
            role: "Product Manager at ScaleUp",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            quote: "The AI automation alone saved us 20 hours a week. Best investment we've made for our productivity stack."
        },
        {
            name: "Maria Garcia",
            role: "Founder at LaunchPad",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            quote: "I've tried every project management tool out there. Brioski is the only one my entire team actually enjoys using."
        }
    ]

    return (
        <section className="py-20 px-6 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Loved by
                        <span className="text-blue-500"> thousands</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        See what our users have to say
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 border border-gray-800 rounded-xl p-6"
                        >
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                "{item.quote}"
                            </p>
                            <div className="flex items-center gap-3">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <p className="font-semibold text-sm">{item.name}</p>
                                    <p className="text-gray-500 text-xs">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-8 mt-16 text-gray-600">
                    <p className="text-sm">Trusted by teams at</p>
                    <span className="text-lg font-bold">Google</span>
                    <span className="text-lg font-bold">Meta</span>
                    <span className="text-lg font-bold">Stripe</span>
                    <span className="text-lg font-bold">Vercel</span>
                </div>
            </div>
        </section>
    )
}

export default Testimonials