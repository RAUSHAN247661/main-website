import React from 'react';

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8 px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
      <div className="space-y-8 text-gray-700">
        <section>
          <p>
            This Privacy Policy describes how Q FACT ("we", "us", or "our") collects, uses, and protects your
            information when you visit our website, make a purchase, or interact with our content and services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Information we collect</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Account and contact details: name, email address, and optional social handles when you contact us or
              subscribe to updates.
            </li>
            <li>
              Transaction data: products purchased, order ID, billing details (processed securely by our payment
              partners; we do not store full card details).
            </li>
            <li>
              Usage data: pages visited, links clicked, device/browser information, and approximate location based on
              IP for analytics and fraud prevention.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">How we use your information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide and improve our products and services.</li>
            <li>Process payments and deliver digital downloads.</li>
            <li>Respond to your requests and provide customer support.</li>
            <li>Send important updates, purchase receipts, and product notices.</li>
            <li>Detect, prevent, and address security or fraudulent activity.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Cookies and analytics</h2>
          <p>
            We use cookies and similar technologies to remember preferences and to analyze website performance. You can
            control cookies through your browser settings; disabling cookies may affect certain features.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Payment processing</h2>
          <p>
            Payments are processed by trusted third-party providers. Your card details are handled directly by the
            payment processor and are not stored on our servers. We retain minimal transaction data required for order
            fulfillment and accounting.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Data sharing</h2>
          <p>
            We do not sell your personal information. We may share limited data with service providers who assist with
            hosting, analytics, customer support, and payment processing, under strict confidentiality obligations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Data retention</h2>
          <p>
            We keep your information only as long as necessary for the purposes described above or as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Your rights</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access, correct, or delete your personal information.</li>
            <li>Opt out of marketing communications at any time.</li>
            <li>Request a copy of the data we hold about you.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Children’s privacy</h2>
          <p>
            Our services are not directed to children under 13. If you believe a child has provided us personal data,
            please contact us and we will promptly delete it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Changes to this policy</h2>
          <p>
            We may update this policy to reflect changes to our practices or for legal, operational, or regulatory
            reasons. The “Last updated” date will be adjusted accordingly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact us</h2>
          <p>
            For privacy questions or requests, contact us at <a className="text-primary underline" href="mailto:qfact2024@gmail.com">qfact2024@gmail.com</a>.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;


