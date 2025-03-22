import ContactUs from "../home/contactUs";

const About = () => {
    return (
        <div className="h-full flex flex-col">
            <div className="flex flex-grow justify-center items-center p-4">
                <img src="/images/Designer.jpeg" />
            </div>
            <div className="flex-grow text-center flex flex-col text-primary p-4">
                <h1 className="text-4xl mb-4">Mission</h1>
                <p className="mb-8">Empower sales teams with AI-driven insights to maximize efficiency, minimize wasted effort, and help every rep—rookie or veteran—close more doors with confidence.</p>

                <h1 className="text-4xl mb-4">Vision</h1>
                <p className="mb-8">To revolutionize door-to-door sales by making data-driven selling the industry standard, enabling sales teams to work smarter, not harder.</p>

                <h1 className="text-4xl mb-4">Values</h1>
                <ul className="flex flex-col items-center space-y-4">
                    <li className="inline-block"><strong>Efficiency First</strong> - We prioritize smart, data-backed solutions that optimize time and effort for sales teams.</li>
                    <li className="inline-block"><strong>Empowerment</strong> - Our technology enhances reps' potential, giving them the tools to succeed at any experience level.</li>
                    <li className="inline-block"><strong>Integrity in Selling</strong> - Ethical, transparent, and honest sales practices drive long-term success.</li>
                    <li className="inline-block"><strong>Innovation & Adaptability</strong> - We continuously refine our AI and insights to stay ahead of the ever-changing sales landscape.</li>
                    <li className="inline-block"><strong>Customer Success</strong> - The success of our users is our success; we build with sales teams' needs at the core.</li>
                </ul>
            </div>
            <footer className="bg-secondary text-primary p-4">
                <ContactUs />
            </footer>
        </div>
    );
};

export default About;
