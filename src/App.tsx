import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AffiliateModal } from './components/AffiliateModal';
import { AffiliateStickyBar } from './components/AffiliateStickyBar';
import { HomePage } from './components/pages/HomePage';
import { HonestReviewPage } from './components/pages/HonestReviewPage';
import { ComparisonsPage } from './components/pages/ComparisonsPage';
import { MigrationGuidePage } from './components/pages/MigrationGuidePage';
import { ToolsPage } from './components/pages/ToolsPage';
import { DealsPage } from './components/pages/DealsPage';
import { TutorialsPage } from './components/pages/TutorialsPage';
import { UseCasesPage } from './components/pages/UseCasesPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { LegalPages } from './components/pages/LegalPages';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCoupon, setModalCoupon] = useState('HOSTMARC');

  // Sync hash routing if user clicks back/forward or navigates
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'reviews',
        'comparisons',
        'renewal-costs',
        'migration',
        'tools',
        'deals',
        'tutorials',
        'use-cases',
        'about',
        'contact',
        'disclosure',
        'privacy',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = (coupon = 'HOSTMARC') => {
    setModalCoupon(coupon);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F3EFE6] text-[#153E43] flex flex-col font-sans selection:bg-[#153E43] selection:text-[#F3EFE6]">
      {/* Header with Top Bar Contract */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAffiliateModal={() => handleOpenModal('HOSTMARC')}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenModal={() => handleOpenModal('HOSTMARC')}
          />
        )}

        {currentPage === 'reviews' && (
          <HonestReviewPage
            onNavigate={handleNavigate}
            onOpenModal={() => handleOpenModal('HOSTMARC')}
          />
        )}

        {currentPage === 'comparisons' && (
          <ComparisonsPage
            onNavigate={handleNavigate}
            onOpenModal={() => handleOpenModal('HOSTMARC')}
          />
        )}

        {currentPage === 'migration' && (
          <MigrationGuidePage
            onNavigate={handleNavigate}
            onOpenModal={() => handleOpenModal('HOSTMARC')}
          />
        )}

        {currentPage === 'tools' && (
          <ToolsPage
            onNavigate={handleNavigate}
            onOpenModal={() => handleOpenModal('HOSTMARC')}
          />
        )}

        {currentPage === 'renewal-costs' && (
          <ToolsPage
            onNavigate={handleNavigate}
            onOpenModal={() => handleOpenModal('HOSTMARC')}
          />
        )}

        {currentPage === 'deals' && (
          <DealsPage
            onNavigate={handleNavigate}
            onOpenModal={() => handleOpenModal('HOSTMARC')}
          />
        )}

        {currentPage === 'tutorials' && (
          <TutorialsPage
            onNavigate={handleNavigate}
            onOpenModal={() => handleOpenModal('HOSTMARC')}
          />
        )}

        {currentPage === 'use-cases' && (
          <UseCasesPage
            onNavigate={handleNavigate}
            onOpenModal={() => handleOpenModal('HOSTMARC')}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenModal={() => handleOpenModal('HOSTMARC')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenModal={() => handleOpenModal('HOSTMARC')}
          />
        )}

        {currentPage === 'disclosure' && (
          <LegalPages
            pageType="disclosure"
            onNavigate={handleNavigate}
            onOpenModal={() => handleOpenModal('HOSTMARC')}
          />
        )}

        {currentPage === 'privacy' && (
          <LegalPages
            pageType="privacy"
            onNavigate={handleNavigate}
            onOpenModal={() => handleOpenModal('HOSTMARC')}
          />
        )}
      </main>

      {/* Persistent Non-Intrusive Bottom Offer Bar */}
      <AffiliateStickyBar onOpenModal={() => handleOpenModal('HOSTMARC')} />

      {/* Affiliate Voucher Modal */}
      <AffiliateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedCoupon={modalCoupon}
      />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAffiliateModal={() => handleOpenModal('HOSTMARC')}
      />
    </div>
  );
}
