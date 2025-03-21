const ContactUs = () => {
    return (
        <>
        <div className="flex flex-col justify-center space-y-4 text-center">
            <h1 className="text-xl text-center">Contact Us</h1>
            <p>As we prepare for launch, we’re looking for motivated sales professionals to join our beta testing program. This is your chance to gain early access, provide valuable feedback, and help shape the future of sales technology. If you're interested in streamlining your workflow and maximizing your sales potential, we’d love to hear from you! </p>
            <div className="text-center">
                <p className="">Send us an email and let's get in touch!</p>
                <button className="text-white bg-blue-600 hover:bg-blue-700 px-1 py-1 rounded my-2">
                    <a href="mailto:ianjosephrobertson@gmail.com">RepRoute</a>
                </button>
            </div>
        </div>
        </>
    )
}

export default ContactUs;