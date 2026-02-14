import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import ExamDetail from './pages/ExamDetail';
import { PYQPage, MockTestPage, SubjectTestsPage } from './pages/Resources';
import { BlogList } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail'; // Imported
import { CoursesPage } from './pages/Courses';
import { ExamsList } from './pages/ExamsList';
import About from './pages/About';
import Contact from './pages/Contact';
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
          
          {/* Exams */}
          <Route path="/exams" element={<ExamsList />} />
          <Route path="/exam/:examId" element={<ExamDetail />} />
          
          {/* Resources */}
          <Route path="/pyq" element={<PYQPage />} />
          <Route path="/mock-tests" element={<MockTestPage />} />
          <Route path="/subject-tests" element={<SubjectTestsPage />} />
          
          {/* Courses */}
          <Route path="/courses" element={<CoursesPage />} />
          
          {/* Blog */}
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />} /> {/* New Route */}

          {/* Trust & Legal Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </RouterWrapper>
  );
}

export default App;
