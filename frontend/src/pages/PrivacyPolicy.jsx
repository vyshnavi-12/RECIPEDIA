import React from 'react';
import { Shield, Eye, Lock, Users, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        "Personal information (name, email, age, gender, address, phone) when you register",
        "Recipe content, comments, and interactions you create",
        "Usage data and analytics to improve our service",
        "Device information and IP addresses for security purposes"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our recipe sharing platform",
        "To personalize your experience and show relevant content",
        "To communicate with you about your account and updates",
        "To improve our services and develop new features",
        "To ensure platform security and prevent abuse"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      content: [
        "We use industry-standard encryption to protect your data",
        "Passwords are hashed using bcrypt with salt",
        "Regular security audits and vulnerability assessments",
        "Limited access to personal data by authorized personnel only",
        "Secure data transmission using HTTPS protocols"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information",
        "Recipe content you share is publicly visible as intended",
        "We may share data with service providers who assist our operations",
        "Legal requirements may require disclosure in certain circumstances",
        "Aggregated, anonymized data may be used for analytics"
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Your Rights",
      content: [
        "Access and review your personal information",
        "Update or correct your profile information",
        "Delete your account and associated data",
        "Opt-out of marketing communications",
        "Request data portability in standard formats"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use Recipedia.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Recipedia ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our recipe sharing platform.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By using Recipedia, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our service.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg text-white mr-4">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Cookies Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience on Recipedia. These technologies help us:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Remember your preferences and login status</li>
              <li>• Analyze how you use our platform to improve our service</li>
              <li>• Provide personalized content and recommendations</li>
              <li>• Ensure platform security and prevent fraud</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-600">
              <p>• Email: privacy@recipedia.com</p>
              <p>• Address: [Your Company Address]</p>
              <p>• Phone: [Your Contact Number]</p>
            </div>
          </div>

          {/* Updates Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Updates to This Policy</h3>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 