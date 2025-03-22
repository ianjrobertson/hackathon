const ContactUs = () => {
    return (
        <>
            <div className="flex flex-col justify-center space-y-4 text-center">
                <h1 className="text-4xl text-center">Contact Us</h1>
                <div className="text-l">As we prepare for launch, we're looking for motivated sales professionals to join our beta testing program. This is your chance to gain early access, provide valuable feedback, and help shape the future of sales technology. If you're interested in streamlining your workflow and maximizing your sales potential, we'd love to hear from you! </div>
                <div className="text-center">
                    <p className="">Send us an email and let's get in touch!</p>
                    <button className="text-accent bg-primary hover:bg-neutral px-1 py-1 rounded my-2">
                        <a href="mailto:reproute.hackathon@gmail.com?subject=Beta%20Testing&body=Hello,%20I%20have%20a%20question%20about...">RepRoute</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ContactUs;