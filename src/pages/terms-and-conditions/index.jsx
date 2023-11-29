export default function Index(){
    return (
        <main>
            <header className="bg-black p-2 text-white">
                <h1 className="text-2xl font-semibold">Terms and Conditions</h1>
            </header>

            <div className="bg-white container mx-auto py-6 px-4">
                <section className=" rounded-lg  p-6">
                    <h2 className="text-xl font-semibold mb-4">Acceptance of Terms</h2>
                    <p>By using our services, you agree to comply with and be bound by these Terms and Conditions.</p>
                </section>

                <section className=" rounded-lg  p-6 mt-4">
                    <h2 className="text-xl font-semibold mb-4">User Responsibilities</h2>
                    <p>Users are responsible for:</p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Complying with applicable laws</li>
                        <li>Protecting their account information</li>
                        <li>Using the services responsibly</li>
                    </ul>
                </section>

                <section className=" rounded-lg  p-6 mt-4">
                    <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
                    <p>All content on this website is protected by intellectual property laws and may not be used without permission.</p>
                </section>

                <section className=" rounded-lg  p-6 mt-4">
                    <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
                    <p>We are not liable for any damages or losses arising from the use of our services.</p>
                </section>

                <section className=" rounded-lg  p-6 mt-4">
                    <h2 className="text-xl font-semibold mb-4">Governing Law</h2>
                    <p>These Terms and Conditions are governed by the laws of [Your Jurisdiction].</p>
                </section>

                <section className=" rounded-lg  p-6 mt-4">
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                    <p>If you have any questions or concerns about these Terms and Conditions, please <a href="contact.html" className="text-blue-500 hover:underline">contact us</a>.</p>
                </section>
            </div>
        </main>
    );
}