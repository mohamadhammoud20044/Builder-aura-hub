import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Badge } from "@/components/ui/badge";

const TermsOfService = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Header />

        <div className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800">
            <div className="container mx-auto px-4 text-center">
              <Badge className="mb-6 bg-gradient-ai border-0 text-white px-4 py-2">
                📋 Legal Terms
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Please read these terms carefully before using our services.
                These terms govern your use of COFTECH services.
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

                <h2>Acceptance of Terms</h2>
                <p>
                  By accessing and using COFTECH services, you accept and agree
                  to be bound by the terms and provision of this agreement. If
                  you do not agree to abide by the above, please do not use this
                  service.
                </p>

                <h2>Use License</h2>
                <p>
                  Permission is granted to temporarily use COFTECH services for
                  personal, non-commercial transitory viewing only. This is the
                  grant of a license, not a transfer of title, and under this
                  license you may not:
                </p>
                <ul>
                  <li>modify or copy the materials</li>
                  <li>
                    use the materials for any commercial purpose or for any
                    public display
                  </li>
                  <li>
                    attempt to reverse engineer any software contained on the
                    website
                  </li>
                  <li>
                    remove any copyright or other proprietary notations from the
                    materials
                  </li>
                </ul>

                <h2>Service Availability</h2>
                <p>
                  We strive to provide continuous service availability but do
                  not guarantee uninterrupted access. We reserve the right to
                  modify, suspend, or discontinue any part of our services at
                  any time.
                </p>

                <h2>User Responsibilities</h2>
                <p>You are responsible for:</p>
                <ul>
                  <li>Maintaining the confidentiality of your account</li>
                  <li>All activities that occur under your account</li>
                  <li>Ensuring that your use complies with applicable laws</li>
                  <li>Providing accurate and current information</li>
                </ul>

                <h2>Limitation of Liability</h2>
                <p>
                  In no event shall COFTECH or its suppliers be liable for any
                  damages (including, without limitation, damages for loss of
                  data or profit, or due to business interruption) arising out
                  of the use or inability to use COFTECH services.
                </p>

                <h2>Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please
                  contact us at:
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

export default TermsOfService;
