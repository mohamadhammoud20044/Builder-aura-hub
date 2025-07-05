import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, Lock, FileText } from "lucide-react";

const Compliance = () => {
  const certifications = [
    {
      title: "ISO 27001",
      description: "Information Security Management System",
      icon: Shield,
      status: "Certified",
    },
    {
      title: "GDPR Compliance",
      description: "General Data Protection Regulation adherence",
      icon: Lock,
      status: "Compliant",
    },
    {
      title: "SOC 2 Type II",
      description: "Security, Availability, and Confidentiality",
      icon: CheckCircle,
      status: "Audited",
    },
    {
      title: "Data Processing",
      description: "Lawful data processing procedures",
      icon: FileText,
      status: "Implemented",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Header />

        <div className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800">
            <div className="container mx-auto px-4 text-center">
              <Badge className="mb-6 bg-gradient-ai border-0 text-white px-4 py-2">
                ✓ Compliance & Standards
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                Compliance Framework
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                COFTECH maintains the highest standards of security, privacy,
                and regulatory compliance to protect your data and ensure
                trusted service delivery.
              </p>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Certifications &{" "}
                  <span className="gradient-text">Standards</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  We adhere to industry-leading standards and undergo regular
                  audits to ensure compliance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {certifications.map((cert, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center">
                        <cert.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {cert.description}
                      </p>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      >
                        {cert.status}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Compliance Details */}
          <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Regulatory Compliance</h2>
                <p>
                  COFTECH operates under strict compliance frameworks designed
                  to protect customer data and ensure regulatory adherence
                  across multiple jurisdictions.
                </p>

                <h3>Data Protection Regulations</h3>
                <ul>
                  <li>
                    <strong>GDPR (General Data Protection Regulation):</strong>{" "}
                    Full compliance with European data protection standards
                  </li>
                  <li>
                    <strong>CCPA (California Consumer Privacy Act):</strong>{" "}
                    Protecting California residents' privacy rights
                  </li>
                  <li>
                    <strong>PIPEDA:</strong> Personal Information Protection in
                    Canada
                  </li>
                </ul>

                <h3>Security Standards</h3>
                <ul>
                  <li>
                    <strong>ISO 27001:</strong> International standard for
                    information security management
                  </li>
                  <li>
                    <strong>SOC 2 Type II:</strong> Service Organization Control
                    for security and availability
                  </li>
                  <li>
                    <strong>PCI DSS:</strong> Payment Card Industry Data
                    Security Standard
                  </li>
                </ul>

                <h3>Industry Standards</h3>
                <ul>
                  <li>AI Ethics Guidelines and Responsible AI Development</li>
                  <li>Software Development Lifecycle (SDLC) Security</li>
                  <li>Cloud Security Alliance (CSA) Best Practices</li>
                  <li>NIST Cybersecurity Framework</li>
                </ul>

                <h2>Compliance Monitoring</h2>
                <p>We continuously monitor our compliance posture through:</p>
                <ul>
                  <li>Regular internal audits and assessments</li>
                  <li>Third-party security evaluations</li>
                  <li>Continuous compliance monitoring tools</li>
                  <li>Employee training and certification programs</li>
                  <li>Incident response and reporting procedures</li>
                </ul>

                <h2>Transparency Reports</h2>
                <p>
                  We publish regular transparency reports detailing our
                  compliance efforts, security incidents, and data handling
                  practices. These reports are available upon request.
                </p>

                <h2>Contact Our Compliance Team</h2>
                <p>
                  For compliance-related questions or to request compliance
                  documentation:
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

export default Compliance;
