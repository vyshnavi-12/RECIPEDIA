import React from 'react';
import { FileText, Shield, Users, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsOfService = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using Recipedia, you accept and agree to be bound by these Terms of Service",
        "If you do not agree to these terms, please do not use our service",
        "We reserve the right to modify these terms at any time",
        "Continued use of the service after changes constitutes acceptance of new terms"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Accounts and Registration",
      content: [
        "You must provide accurate and complete information when creating an account",
        "You are responsible for maintaining the security of your account credentials",
        "You must be at least 13 years old to create an account",
        "You are responsible for all activities that occur under your account",
        "You may not share your account credentials with others"
      ]
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Acceptable Use",
      content: [
        "Share original recipes and content that you have the right to share",
        "Respect other users and their content",
        "Use the platform for lawful purposes only",
        "Do not upload content that is harmful, offensive, or violates others' rights",
        "Do not attempt to gain unauthorized access to our systems"
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Prohibited Activities",
      content: [
        "Uploading copyrighted content without permission",
        "Sharing personal information of others without consent",
        "Spamming or sending unsolicited messages",
        "Attempting to hack or disrupt the service",
        "Creating multiple accounts to manipulate the platform",
        "Using the service for commercial purposes without permission"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Content Ownership and Licensing",
      content: [
        "You retain ownership of content you create and share",
        "By sharing content, you grant us a license to display and distribute it",
        "You are responsible for ensuring you have rights to share your content",
        "We may remove content that violates our terms or policies",
        "Other users may use your shared recipes for personal cooking"
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
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These terms govern your use of Recipedia. Please read them carefully before using our platform.
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
              Welcome to Recipedia! These Terms of Service ("Terms") govern your use of our recipe sharing platform and services. By using Recipedia, you agree to these terms and our Privacy Policy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Recipedia is a platform that allows users to discover, share, and manage recipes. We provide tools for creating, organizing, and sharing culinary content with a community of food enthusiasts.
            </p>
          </div>

          {/* Terms Sections */}
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

          {/* Intellectual Property */}
          <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Intellectual Property</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Recipedia and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our material without our express prior written consent.
            </p>
          </div>

          {/* Disclaimers */}
          <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Disclaimers</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Service Availability:</strong> We strive to provide reliable service but cannot guarantee uninterrupted access. We may modify, suspend, or discontinue the service at any time.
              </p>
              <p>
                <strong>Content Accuracy:</strong> While we encourage quality content, we cannot guarantee the accuracy, completeness, or usefulness of any recipe or information shared on our platform.
              </p>
              <p>
                <strong>Allergies and Dietary Restrictions:</strong> Users are responsible for checking ingredients and ensuring recipes meet their dietary needs and restrictions.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Limitation of Liability</h3>
            <p className="text-gray-600 leading-relaxed">
              To the maximum extent permitted by law, Recipedia shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your use of the service.
            </p>
          </div>

          {/* Termination */}
          <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Termination</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may terminate or suspend your account and access to our service immediately, without prior notice, for any reason, including breach of these Terms.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Upon termination, your right to use the service will cease immediately. We may delete your account and associated data at our discretion.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-600">
              <p>• Email: legal@recipedia.com</p>
              <p>• Address: [Your Company Address]</p>
              <p>• Phone: [Your Contact Number]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 