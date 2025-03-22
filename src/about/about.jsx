import ContactUs from "../home/contactUs"

const About = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-4xl">Mission</h1>
                <p>Empower sales teams with AI-driven insights to maximize efficiency, minimize wasted effort, and help every rep—rookie or veteran—close more doors with confidence.</p>

                <h1 className="text-4xl">Vision</h1>
                <p>To revolutionize door-to-door sales by making data-driven selling the industry standard, enabling sales teams to work smarter, not harder.</p>

                <h1 className="text-4xl">Values</h1>
                <ul>
                    <li><strong>Efficiency First</strong> – We prioritize smart, data-backed solutions that optimize time and effort for sales teams.</li>
                    <li><strong>Empowerment</strong> – Our technology enhances reps' potential, giving them the tools to succeed at any experience level.</li>
                    <li><strong>Integrity in Selling</strong> – Ethical, transparent, and honest sales practices drive long-term success.</li>
                    <li><strong>Innovation & Adaptability</strong> – We continuously refine our AI and insights to stay ahead of the ever-changing sales landscape.</li>
                    <li><strong>Customer Success</strong> – The success of our users is our success; we build with sales teams' needs at the core.</li>
                </ul>
            </div>
            <div className="fixed bottom-0 bg-secondary text-primary p-4">
                <ContactUs />
            </div>
        </div>
    )
}
export default About;