/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { APIProvider } from '@vis.gl/react-google-maps';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechAndGearSection } from './components/TechAndGearSection';
import { AdventuresSection } from './components/AdventuresSection';
import { PastRidesStorySection } from './components/PastRidesStorySection';
import { MembershipPage } from './components/MembershipPage';
import { EventCalendar } from './components/EventCalendar';
import { PartnerNetwork } from './components/PartnerNetwork';
import { MemberPortal } from './components/MemberPortal';
import { AdminPortal } from './components/AdminPortal';
import { CheckoutModal } from './components/CheckoutModal';
import { MemberCardScannerModal } from './components/MemberCardScannerModal';
import { AddEditMemberModal } from './components/AddEditMemberModal';
import { EditProfileModal } from './components/EditProfileModal';
import { Footer } from './components/Footer';
import { Member } from './types';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

const GOOGLE_MAPS_API_KEY =
  (import.meta as any).env.VITE_GOOGLE_MAPS_API_KEY ||
  'AIzaSyAFnaH0TKJV0fHFEB4U1ZtexS6562Qv9jk';

function AppContent() {
  const { activeTab, notification } = useApp();
  const [isAddEditOpen, setIsAddEditOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<Member | null>(null);
  const [quotaExceeded, setQuotaExceeded] = useState(false);

  useEffect(() => {
    const handleQuotaExceeded = () => {
      setQuotaExceeded(true);
    };
    window.addEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    return () => {
      window.removeEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    };
  }, []);

  const handleOpenAddMember = () => {
    setEditingMember(null);
    setIsAddEditOpen(true);
  };

  const handleOpenEditMember = (member: Member) => {
    setEditingMember(member);
    setIsAddEditOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0f14] text-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white w-full max-w-full overflow-x-hidden">
      {/* Tier 2 Quota Exceeded Sticky Notice Banner */}
      {quotaExceeded && (
        <div className="bg-[#161f2c] border-b border-[#2a374a] text-slate-200 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm w-full">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-orange-400 hover:text-orange-300"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}

      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-18 sm:top-20 right-3 sm:right-4 z-50 max-w-[calc(100vw-24px)] sm:max-w-sm rounded-xl border border-[#2a374a] bg-[#121822]/95 p-3.5 shadow-2xl backdrop-blur-md flex items-start gap-3">
          {notification.type === 'success' && <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />}
          {notification.type === 'warning' && <AlertCircle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />}
          {notification.type === 'info' && <Info className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />}
          <div className="text-xs text-slate-200 leading-snug flex-1 break-words">
            {notification.message}
          </div>
        </div>
      )}

      {/* Top Navigation */}
      <Navbar />

      {/* Main View Area */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {activeTab === 'member-portal' ? (
          <MemberPortal />
        ) : activeTab === 'admin-portal' ? (
          <AdminPortal
            onOpenAddMember={handleOpenAddMember}
            onOpenEditMember={handleOpenEditMember}
          />
        ) : activeTab === 'calendar' ? (
          <EventCalendar />
        ) : activeTab === 'stories' ? (
          <PastRidesStorySection />
        ) : activeTab === 'tech-gear' ? (
          <TechAndGearSection />
        ) : activeTab === 'membership' ? (
          <MembershipPage />
        ) : activeTab === 'partners' ? (
          <PartnerNetwork />
        ) : (
          /* Main Landing View: Gritty, passionate rider culture without paywalls or leaderboards */
          <>
            <Hero />
            <PastRidesStorySection />
            <TechAndGearSection />
            <AdventuresSection />
            <EventCalendar />
            <PartnerNetwork />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Modals */}
      <CheckoutModal />
      <MemberCardScannerModal />
      <AddEditMemberModal
        isOpen={isAddEditOpen}
        onClose={() => setIsAddEditOpen(false)}
        memberToEdit={editingMember}
      />
      <EditProfileModal />
    </div>
  );
}

export default function App() {
  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </APIProvider>
  );
}
