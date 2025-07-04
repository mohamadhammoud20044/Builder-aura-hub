import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Badge } from "@/components/ui/badge";

const CookiePolicy = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Header />

        <div className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800">
            <div className="container mx-auto px-4 text-center">
              <Badge className="mb-6 bg-gradient-ai border-0 text-white px-4 py-2">
                🍪 Cookie Information
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                Cookie Policy
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Learn about how we use cookies and similar technologies to
                improve your experience on our website.
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

                <h2>What Are Cookies</h2>
                <p>
                  Cookies are small text files that are placed on your computer
                  or mobile device when you visit our website. They are widely
                  used to make websites work more efficiently and provide
                  information to website owners.
                </p>

                <h2>How We Use Cookies</h2>
                <p>We use cookies for the following purposes:</p>
                <ul>
                  <li>
                    <strong>Essential Cookies:</strong> These are necessary for
                    the website to function properly
                  </li>
                  <li>
                    <strong>Performance Cookies:</strong> These help us
                    understand how visitors interact with our website
                  </li>
                  <li>
                    <strong>Functionality Cookies:</strong> These remember your
                    preferences and settings
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> These are used to
                    deliver relevant advertisements
                  </li>
                </ul>

                <h2>Types of Cookies We Use</h2>
                <h3>Session Cookies</h3>
                <p>
                  These are temporary cookies that remain in your browser until
                  you leave the website. They help us identify you during a
                  single browsing session.
                </p>

                <h3>Persistent Cookies</h3>
                <p>
                  These cookies remain on your device for a set period or until
                  you delete them. They help us remember your preferences when
                  you return to our website.
                </p>

                <h2>Managing Cookies</h2>
                <p>
                  You can control and manage cookies in your browser settings.
                  Please note that removing or blocking cookies may impact your
                  user experience and parts of our website may no longer be
                  accessible or function properly.
                </p>

                <h2>Third-Party Cookies</h2>
                <p>
                  We may use third-party services that place cookies on your
                  device. These services have their own privacy policies and we
                  encourage you to read them.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions about our Cookie Policy, please
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

export default CookiePolicy;
