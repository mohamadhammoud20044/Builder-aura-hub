import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Calendar, Globe, Award, Target } from "lucide-react";

const CompanyInfo = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <div className="pt-20">
        {/* Company Overview */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-ai border-0 text-white px-4 py-2">
                🏢 Company Information
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                About COFTECH
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                Comprehensive information about COFTECH - AI & Technology
                Solutions Company
              </p>
            </div>
          </div>
        </section>

        {/* Company Facts */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              Company <span className="gradient-text">Overview</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-ai rounded-lg flex items-center justify-center mb-4">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Company Name</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>COFTECH</strong> - AI & Technology Solutions
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Leading provider of artificial intelligence and technology
                    solutions
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-ai rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Founded</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>2020</strong>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Established to democratize AI technology for businesses
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-ai rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Team Size</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>4 Core Team Members</strong>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Experienced professionals in AI and technology
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-ai rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>San Francisco, CA</strong>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Serving clients worldwide
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-ai rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>AI for Everyone</strong>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Making AI accessible to businesses of all sizes
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-ai rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>10+ Years Experience</strong>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Combined team experience in AI and technology
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Members Details */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              Team <span className="gradient-text">Members</span>
            </h2>

            <div className="max-w-6xl mx-auto space-y-8">
              {/* Mohamad Hammoud */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        MH
                      </div>
                      <h3 className="text-xl font-bold">Mohamad Hammoud</h3>
                      <p className="text-primary font-medium">
                        CEO & Technician
                      </p>
                    </div>
                    <div className="md:col-span-3">
                      <h4 className="font-semibold mb-2">About:</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Visionary leader driving COFTECH's technological
                        innovation and strategic direction. Expert in both
                        business leadership and hands-on technical
                        implementation. Mohamad combines deep technical
                        knowledge with strategic business acumen to guide
                        COFTECH's mission of making AI accessible to all
                        businesses.
                      </p>
                      <h4 className="font-semibold mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Strategic Leadership</Badge>
                        <Badge variant="secondary">
                          Technical Implementation
                        </Badge>
                        <Badge variant="secondary">Business Development</Badge>
                        <Badge variant="secondary">AI Strategy</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Komail Zein */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        KZ
                      </div>
                      <h3 className="text-xl font-bold">Komail Zein</h3>
                      <p className="text-primary font-medium">CEO PR</p>
                    </div>
                    <div className="md:col-span-3">
                      <h4 className="font-semibold mb-2">About:</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Public relations expert leading COFTECH's brand presence
                        and communication strategy. Specialized in building
                        strong relationships with media and stakeholders. Komail
                        ensures COFTECH's message reaches the right audiences
                        and maintains the company's reputation as a trusted AI
                        solutions provider.
                      </p>
                      <h4 className="font-semibold mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Public Relations</Badge>
                        <Badge variant="secondary">Brand Management</Badge>
                        <Badge variant="secondary">Media Strategy</Badge>
                        <Badge variant="secondary">Stakeholder Relations</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Khallil Moussa Hammoud */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        KMH
                      </div>
                      <h3 className="text-xl font-bold">
                        Khallil Moussa Hammoud
                      </h3>
                      <p className="text-primary font-medium">
                        President & Programmer
                      </p>
                    </div>
                    <div className="md:col-span-3">
                      <h4 className="font-semibold mb-2">About:</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Technical president overseeing COFTECH's development
                        operations and programming excellence. Expert in
                        software architecture and team leadership. Khallil
                        ensures all COFTECH solutions are built with the highest
                        technical standards and scalable architectures that can
                        grow with client needs.
                      </p>
                      <h4 className="font-semibold mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Software Development</Badge>
                        <Badge variant="secondary">System Architecture</Badge>
                        <Badge variant="secondary">Team Leadership</Badge>
                        <Badge variant="secondary">Technical Strategy</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Firas Soufan */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        FS
                      </div>
                      <h3 className="text-xl font-bold">Firas Soufan</h3>
                      <p className="text-primary font-medium">
                        CEO PR Marketing
                      </p>
                    </div>
                    <div className="md:col-span-3">
                      <h4 className="font-semibold mb-2">About:</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Marketing and PR strategist driving COFTECH's market
                        presence and customer engagement. Expert in digital
                        marketing and brand positioning. Firas develops
                        comprehensive marketing strategies that effectively
                        communicate COFTECH's value proposition and drive
                        customer acquisition and retention.
                      </p>
                      <h4 className="font-semibold mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Digital Marketing</Badge>
                        <Badge variant="secondary">Brand Strategy</Badge>
                        <Badge variant="secondary">Customer Engagement</Badge>
                        <Badge variant="secondary">Market Analysis</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              Our <span className="gradient-text">Services</span>
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      AI Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        • <strong>Conversational AI:</strong> Advanced chatbots
                        and virtual assistants
                      </li>
                      <li>
                        • <strong>Website Builder AI:</strong> Automatic website
                        generation
                      </li>
                      <li>
                        • <strong>Custom AI Solutions:</strong> Tailored AI
                        development
                      </li>
                      <li>
                        • <strong>AI Automation:</strong> Process automation and
                        optimization
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      Technology Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        • <strong>Web Development:</strong> Modern responsive
                        websites
                      </li>
                      <li>
                        • <strong>Mobile Development:</strong> iOS and Android
                        applications
                      </li>
                      <li>
                        • <strong>Cloud Solutions:</strong> Scalable cloud
                        infrastructure
                      </li>
                      <li>
                        • <strong>Cybersecurity:</strong> Comprehensive security
                        solutions
                      </li>
                      <li>
                        • <strong>IT Support:</strong> 24/7 technical support
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              Contact <span className="gradient-text">Information</span>
            </h2>

            <div className="max-w-3xl mx-auto text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    General Contact
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>Email:</strong> hello@coftech.com
                    <br />
                    <strong>Phone:</strong> +1 (555) 123-4567
                    <br />
                    <strong>Website:</strong> https://coftech.com
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">AI Services</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>Email:</strong> ai@coftech.com
                    <br />
                    <strong>Specialization:</strong> AI Consultation
                    <br />
                    <strong>Response Time:</strong> 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CompanyInfo;
