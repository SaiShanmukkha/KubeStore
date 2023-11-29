export default function Index(){
    return (
        <main>
            <header className="bg-black p-2 text-white">
                <h1 className="text-2xl font-bold">Privacy Policy:</h1>
            </header>
            <div className="bg-white container mx-auto py-6 px-4">

                <section className="rounded-lg  p-6">
                    <h2 className="text-xl font-semibold mb-4">Introduction</h2>
                    <p>This Privacy Policy describes how we collect, use, and protect your personal information when you use our e-commerce website.</p>
                </section>

                <section className="rounded-lg  p-6 mt-4">
                    <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
                    <p>We may collect various types of information, including:</p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Personal information (e.g., name, email address, shipping address)</li>
                        <li>Payment information (e.g., credit card details)</li>
                        <li>Device and browsing information (e.g., IP address, browser type)</li>
                    </ul>
                </section>

                <section className="rounded-lg  p-6 mt-4">
                    <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
                    <p>We use your information for purposes such as:</p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Processing orders and payments</li>
                        <li>Providing customer support</li>
                        <li>Improving our website and services</li>
                    </ul>
                </section>

                <section className="rounded-lg  p-6 mt-4">
                    <h2 className="text-xl font-semibold mb-4">Data Security</h2>
                    <p>We take measures to protect your data, but no method of transmission over the internet is 100% secure.</p>
                </section>

                <section className="rounded-lg  p-6 mt-4">
                    <h2 className="text-xl font-semibold mb-4">Your Choices</h2>
                    <p>You can update your account information and preferences at any time.</p>
                </section>

                <section className="rounded-lg  p-6 mt-4">
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                    <p>If you have questions or concerns about our Privacy Policy, please send us an <a href="mailto:support@kubestore.com" className="text-blue-500 hover:underline">email</a>.</p>
                </section>
            </div>
        </main>
    );
}