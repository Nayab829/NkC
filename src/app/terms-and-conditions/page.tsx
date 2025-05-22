// app/terms/page.tsx
export default function TermsPage() {
  return (
    <main className="px-6 py-10 max-w-4xl mx-auto text-gray-800">
      <nav className="text-sm text-gray-500 mb-4">
        <span className="text-blue-600">Home</span> &gt; Terms and Conditions
      </nav>

      <h1 className="text-4xl font-bold mb-2 text-gray-900">Terms and Conditions</h1>
      <p className="text-sm text-gray-500 mb-8">This Agreement was last modified on 22 May 2025.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Terms and Conditions</h2>
        <p className="text-gray-700">
          Welcome to <strong>NKCSolar.com.pk</strong>. By using our website, products, and services, you agree to the following Terms and Conditions.
          Please read them carefully. If you do not agree, you should discontinue using our website and services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">1. Definitions</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>1.1. "We", "Our", "Us"</strong>: Refers to NKCSolar.com.pk, its affiliates, and partners.</li>
          <li><strong>1.2. "User", "You"</strong>: Refers to any individual or entity accessing or using our website or services.</li>
          <li><strong>1.3. "Services"</strong>: Refers to all solar-related products, installations, consultations, and other services offered by NKCSolar.com.pk.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">2. Acceptance of Terms</h2>
        <p className="text-gray-700">
          By accessing this website or availing of our services, you agree to abide by these Terms and Conditions,
          as well as applicable laws and regulations in Pakistan, including but not limited to the
          <strong> Pakistan Electronic Crimes Act (PECA)</strong> and <strong>Consumer Protection Laws</strong>.
        </p>
      </section>
    </main>
  );
}
