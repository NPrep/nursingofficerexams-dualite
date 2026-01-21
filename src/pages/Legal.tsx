import React from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/UIComponents';

export const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Privacy Policy - Nursing Officer Exams"
        description="Privacy Policy for NursingOfficerExams.com. Learn how we protect your data."
        canonical="/privacy-policy"
      />
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
      <div className="max-w-4xl mx-auto prose prose-blue">
        <h1>Privacy Policy</h1>
        <p>Last updated: January 2025</p>
        <p>At NursingOfficerExams.com, accessible from https://nursingofficerexams.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by NursingOfficerExams.com and how we use it.</p>
        
        <h2>Information We Collect</h2>
        <p>We do not collect any personal identifiable information (PII) unless you voluntarily submit it through our contact forms. We may use cookies to improve user experience and analyze website traffic.</p>

        <h2>Log Files</h2>
        <p>NursingOfficerExams.com follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

        <h2>Cookies and Web Beacons</h2>
        <p>Like any other website, NursingOfficerExams.com uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.</p>
      </div>
    </div>
  );
};

export const Disclaimer = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Disclaimer - Nursing Officer Exams"
        description="Disclaimer for NursingOfficerExams.com. We are an educational resource and not affiliated with any government body."
        canonical="/disclaimer"
      />
      <Breadcrumbs items={[{ label: 'Disclaimer' }]} />
      <div className="max-w-4xl mx-auto prose prose-blue">
        <h1>Disclaimer</h1>
        <p>Last updated: January 2025</p>
        
        <h2>Not a Government Website</h2>
        <p><strong>NursingOfficerExams.com is NOT an official website of any government ministry or department.</strong> This is not an official portal, just a help portal regarding nursing exams providing free resources and information for students.</p>
        
        <h2>Information Accuracy</h2>
        <p>While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.</p>

        <h2>External Links</h2>
        <p>Through this website, you are able to link to other websites which are not under the control of NursingOfficerExams.com. We have no control over the nature, content and availability of those sites.</p>
      </div>
    </div>
  );
};
