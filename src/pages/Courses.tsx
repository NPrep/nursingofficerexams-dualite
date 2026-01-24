import React from 'react';
import { courses } from '../data/mockData';
import { Breadcrumbs, Card } from '../components/UIComponents';
import { Check, Zap, Award, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';
import { cn } from '../lib/utils';

export const CoursesPage = () => {
  // Product Schema for Courses
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": courses.map((course, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": course.title,
        "description": course.description,
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": "0",
          "priceCurrency": "INR"
        }
      }
    }))
  };

  const getThemeStyles = (theme: string) => {
    switch(theme) {
      case 'blue':
        return {
          header: 'bg-blue-600',
          border: 'border-blue-200',
          icon: 'text-blue-600',
          button: 'bg-blue-600 hover:bg-blue-700',
          lightBg: 'bg-blue-50',
          Icon: BookOpen
        };
      case 'green':
        return {
          header: 'bg-green-600',
          border: 'border-green-200',
          icon: 'text-green-600',
          button: 'bg-green-600 hover:bg-green-700',
          lightBg: 'bg-green-50',
          Icon: Zap
        };
      case 'orange':
        return {
          header: 'bg-orange-600',
          border: 'border-orange-200',
          icon: 'text-orange-600',
          button: 'bg-orange-600 hover:bg-orange-700',
          lightBg: 'bg-orange-50',
          Icon: Award
        };
      default:
        return {
          header: 'bg-brand-600',
          border: 'border-brand-200',
          icon: 'text-brand-600',
          button: 'bg-brand-600 hover:bg-brand-700',
          lightBg: 'bg-brand-50',
          Icon: BookOpen
        };
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Best Nursing Officer Exam Courses 2026 - NORCET, RRB, CHO"
        description="Enroll in premium nursing exam courses. Comprehensive test series, rapid revision, and gold batches for AIIMS NORCET, RRB, and State Nursing exams."
        canonical="/courses"
        type="product"
        schema={productSchema}
      />

      <Breadcrumbs items={[{ label: 'Courses' }]} />
      
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Nursing Exam Courses</h1>
        <p className="text-lg text-gray-600">
          Structured learning programs designed by experts to help you crack AIIMS NORCET, RRB, and State Nursing exams in your first attempt.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses.map((course) => {
          const styles = getThemeStyles(course.theme || 'blue');
          const Icon = styles.Icon;

          return (
            <Card key={course.id} className={cn("flex flex-col p-0 overflow-hidden transition-all hover:shadow-xl relative group border-t-4", styles.border)}>
              {/* Text-Only Header with Color */}
              <div className={cn("p-6 text-white text-center", styles.header)}>
                 <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Icon size={32} className="text-white" />
                 </div>
                 <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                 <p className="text-white/90 text-sm">{course.description}</p>
              </div>

              <div className="p-6 flex flex-col flex-grow bg-white">
                <div className="space-y-4 mb-8 flex-grow">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start text-sm text-gray-700">
                      <div className={cn("mt-0.5 mr-3 p-1 rounded-full flex-shrink-0", styles.lightBg)}>
                        <Check size={12} className={styles.icon} />
                      </div>
                      <span className="leading-relaxed font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <a 
                    href={course.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn("block w-full text-center text-white px-4 py-3 rounded-lg font-bold text-sm transition-colors shadow-sm hover:shadow-md uppercase tracking-wide", styles.button)}
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
