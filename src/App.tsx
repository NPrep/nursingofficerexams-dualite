import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import {
  AIIMSNorcetExam,
  ESICNursingOfficerExam,
  GovernmentHospitalsRecruiting,
  HowToApplyNursingOfficerExam,
  JIPMERNursingOfficerExam,
  NHMNursingOfficerRecruitment,
  NursingOfficerEligibility,
  NursingOfficerExamsInIndia,
  NursingOfficerSalary,
  RRBNursingSuperintendentExam,
} from './pages/InfoPages';
import { PrivacyPolicy, Disclaimer } from './pages/Legal';
import { RouterWrapper } from './next/RouterWrapper';

type AppProps = {
  initialPath?: string;
};

function App({ initialPath = '/' }: AppProps) {
  return (
    <RouterWrapper initialPath={initialPath}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nursing-officer-exams-in-india" element={<NursingOfficerExamsInIndia />} />
          <Route path="/aiims-norcet-exam" element={<AIIMSNorcetExam />} />
          <Route path="/rrb-nursing-superintendent-exam" element={<RRBNursingSuperintendentExam />} />
          <Route path="/esic-nursing-officer-exam" element={<ESICNursingOfficerExam />} />
          <Route path="/jipmer-nursing-officer-exam" element={<JIPMERNursingOfficerExam />} />
          <Route path="/nhm-nursing-officer-recruitment" element={<NHMNursingOfficerRecruitment />} />
          <Route path="/nursing-officer-eligibility" element={<NursingOfficerEligibility />} />
          <Route path="/government-hospitals-nursing-officer-recruitment" element={<GovernmentHospitalsRecruiting />} />
          <Route path="/nursing-officer-salary" element={<NursingOfficerSalary />} />
          <Route path="/how-to-apply-for-nursing-officer-exam" element={<HowToApplyNursingOfficerExam />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </RouterWrapper>
  );
}

export default App;
