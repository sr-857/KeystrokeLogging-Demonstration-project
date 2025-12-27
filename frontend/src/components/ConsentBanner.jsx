import React from 'react';
import { Shield } from 'lucide-react';

const ConsentBanner = ({ onConsent }) => {
    return (
        <div className="fixed top-0 left-0 w-full z-50 p-4 animate-in slide-in-from-top duration-500">
            <div className="max-w-4xl mx-auto glass-card border-cyber-blue/50 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyber-blue/20 rounded-xl">
                        <Shield className="w-8 h-8 text-cyber-blue" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">Ethical Demonstration Consent</h3>
                        <p className="text-sm text-slate-400">This tool is for security research only. All data stays in browser memory. No external transmission.</p>
                    </div>
                </div>
                <button
                    onClick={onConsent}
                    className="bg-cyber-blue hover:bg-cyber-blue/80 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-cyber-blue/20 whitespace-nowrap"
                >
                    Start Demo Logging
                </button>
            </div>
        </div>
    );
};

export default ConsentBanner;
