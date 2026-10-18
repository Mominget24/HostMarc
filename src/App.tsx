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

  const getPageFromUrl = (): PageId => {
    // 1. If user arrives via legacy hash (e.g. #reviews), migrate cleanly to /reviews
    const rawHash = window.location.hash.replace(/^#\/?/, '').trim();
    if (rawHash && validPages.includes(rawHash as PageId)) {
      const cleanPath = rawHash === 'home' ? '/' : `/${rawHash}`;
      window.history.replaceState({ page: rawHash }, '', cleanPath + window.location.search);
      return rawHash as PageId;
    }

    // 2. Read clean pathname (e.g. /reviews, /about)
    const rawPath = window.location.pathname.replace(/^\/+|\/+$/g, '').trim();
    if (rawPath && validPages.includes(rawPath as PageId)) {
      return rawPath as PageId;
    }

    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromUrl);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCoupon, setModalCoupon] = useState('HOSTMARC');

  // Sync clean pathname routing when user clicks back/forward
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromUrl());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    const newPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({ page }, '', newPath + window.location.search);
    }
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
