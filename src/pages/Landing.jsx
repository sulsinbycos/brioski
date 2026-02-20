import Hero from "../components/Hero"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"
import Pricing from "../components/Pricing"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
import WordWidget from "../components/WordWidget"

function Landing({ setPage }) {
    return (
        <div>
            <Hero setPage={setPage} />
            <Features />
            <HowItWorks />
            <Pricing setPage={setPage} />
            <Testimonials />
            <Footer />
            <WordWidget />
        </div>
    )
}

export default Landing