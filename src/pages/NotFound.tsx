import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative text-center max-w-md">
        <div className="w-20 h-20 rounded-3xl bg-[#2563eb]/15 border border-[#2563eb]/30 flex items-center justify-center mx-auto mb-8">
          <Search size={32} className="text-[#2563eb]" />
        </div>
        <h1 className="font-heading text-6xl font-bold text-white mb-4">404</h1>
        <p className="font-heading text-2xl font-bold text-white mb-3">Page Not Found</p>
        <p className="text-[#94a3b8] text-base mb-8 leading-relaxed">
          Looks like this page got lost in the search index. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2563eb] text-white font-semibold hover:bg-[#1d4ed8] hover:scale-105 transition-all duration-200 shadow-lg shadow-blue-500/25"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}