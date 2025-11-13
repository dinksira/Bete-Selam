"use client";

import React, { createContext, useContext, useState } from 'react';

type Page = 'home' | 'services' | 'find-doctor' | 'emergency' | 'about' | 'contact';
type Language = 'en' | 'am';

interface AppContextType {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  currentLang: Language;
  setCurrentLang: (lang: Language) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentLang, setCurrentLang] = useState<Language>('en');

  return (
    <AppContext.Provider value={{
      currentPage,
      setCurrentPage,
      currentLang,
      setCurrentLang,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}