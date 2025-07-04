import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Badge } from "@/components/ui/badge";

const DataProcessing = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Header />

        <div className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800">
            <div className="container mx-auto px-4 text-center">
              <Badge className="mb-6 bg-gradient-ai border-0 text-white px-4 py-2">
                🔐 Data Security
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                Data Processing Agreement
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our commitment to protecting and processing your data in
                accordance with applicable data protection regulations.
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  <strong>Last Updated:</strong>{" "}
                  {new Date().toLocaleDateString()}
                </p>

                <h2>Data Processing Principles</h2>
                <p>
                  COFTECH is committed to processing personal data in accordance
                  with applicable data protection laws, including GDPR and other
                  relevant regulations. We follow these key principles:
                </p>
                <ul>
                  <li>Lawfulness, fairness, and transparency</li>
                  <li>Purpose limitation</li>
                  <li>Data minimization</li>
                  <li>Accuracy</li>
                  <li>Storage limitation</li>
                  <li>Integrity and confidentiality</li>
                  <li>Accountability</li>
                </ul>

                <h2>Legal Basis for Processing</h2>
                <p>
                  We process personal data based on the following legal bases:
                </p>
                <ul>
                  <li>
                    <strong>Consent:</strong> When you have given clear consent
                    for specific purposes
                  </li>
                  <li>
                    <strong>Contract:</strong> When processing is necessary for
                    contract performance
                  </li>
                  <li>
                    <strong>Legal Obligation:</strong> When required by law
                  </li>
                  <li>
                    <strong>Legitimate Interest:</strong> When necessary for our
                    legitimate business interests
                  </li>
                </ul>

                <h2>Data Processing Activities</h2>
                <h3>Customer Data</h3>
                <p>
                  We process customer data for service delivery, support,
                  billing, and communication purposes. This includes contact
                  information, usage data, and transaction records.
                </p>

                <h3>Technical Data</h3>
                <p>
                  We collect and process technical data to ensure service
                  functionality, security, and performance optimization.
                </p>

                <h3>Marketing Data</h3>
                <p>
                  With consent, we process data for marketing communications and
                  service improvement based on user preferences and behavior.
                </p>

                <h2>Data Security Measures</h2>
                <ul>
                  <li>Encryption of data in transit and at rest</li>
                  <li>Access controls and authentication</li>
                  <li>Regular security assessments</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>

                <h2>International Data Transfers</h2>
                <p>
                  When we transfer personal data outside the European Economic
                  Area, we ensure appropriate safeguards are in place, including
                  adequacy decisions or standard contractual clauses.
                </p>

                <h2>Your Rights</h2>
                <p>
                  You have the following rights regarding your personal data:
                </p>
                <ul>
                  <li>Right of access</li>
                  <li>Right to rectification</li>
                  <li>Right to erasure</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object</li>
                  <li>Rights related to automated decision-making</li>
                </ul>

                <h2>Contact Our Data Protection Officer</h2>
                <p>
                  For any data processing questions or to exercise your rights,
                  contact our Data Protection Officer:
                </p>
                <ul>
                  <li>Email: coftech.net@gmail.com</li>
                  <li>Phone: +961 76 847 101</li>
                  <li>Address: Lebanon Beirut al Hamra Bliss street</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default DataProcessing;
