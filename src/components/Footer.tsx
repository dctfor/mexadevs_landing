import React from 'react';
import { Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-8">
          <Code2 className="w-8 h-8 text-blue-400 mr-2" />
          <span className="text-2xl font-bold text-white">Mexadevs</span>
        </div>
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Mexadevs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}