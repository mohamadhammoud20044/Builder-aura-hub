import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Badge } from "@/components/ui/badge";

const PrivacyPolicy = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Header />

        <div className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800">
            <div className="container mx-auto px-4 text-center">
              <Badge className="mb-6 bg-gradient-ai border-0 text-white px-4 py-2">
                🔒 Privacy & Security
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Your privacy is important to us. This policy outlines how we
                collect, use, and protect your personal information.
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

                <h2>Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as
                  when you create an account, contact us, or use our services.
                  This may include your name, email address, phone number, and
                  any other information you choose to provide.
                </p>

                <h2>How We Use Your Information</h2>
                <ul>
                  <li>To provide and maintain our services</li>
                  <li>To process transactions and send related information</li>
                  <li>To send you technical notices and support messages</li>
                  <li>To respond to your comments and questions</li>
                  <li>To improve our services and develop new features</li>
                </ul>

                <h2>Information Sharing</h2>
                <p>
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information only in the
                  following circumstances:
                </p>
                <ul>
                  <li>With your consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>
                    With service providers who assist us in operating our
                    business
                  </li>
                </ul>

                <h2>Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction. However, no method of transmission
                  over the internet is 100% secure.
                </p>

                <h2>Your Rights</h2>
                <p>
                  You have the right to access, update, or delete your personal
                  information. You may also opt out of certain communications
                  from us. To exercise these rights, please contact us at
                  coftech.net@gmail.com.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please
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

export default PrivacyPolicy;
