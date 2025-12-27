import React from 'react';
import { AlertTriangle, Bug, Shield, Lock } from 'lucide-react';

const AwarenessNotes = () => {
    return (
        <div className="glass-card p-6 rounded-2xl space-y-4">
            <h2 className="font-bold flex items-center gap-2 text-amber-500">
                <AlertTriangle className="w-5 h-5" /> Security Awareness
            </h2>
            <div className="space-y-4 text-xs text-slate-400 leading-relaxed">
                <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                    <h4 className="text-slate-200 font-bold mb-1 flex items-center gap-1.5 uppercase tracking-tighter">
                        <Bug className="w-3 h-3 text-amber-500" /> OS/API Mechanism
                    </h4>
                    <p>Malware often uses <code>SetWindowsHookEx</code> (Windows) or <code>IOCTL</code> requests to intercept raw keyboard input before applications process it.</p>
                </div>
                <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                    <h4 className="text-slate-200 font-bold mb-1 flex items-center gap-1.5 uppercase tracking-tighter">
                        <Shield className="w-3 h-3 text-cyber-green" /> Detection Ideas
                    </h4>
                    <p>EDRs monitor for unauthorized process injection, high-frequency keyboard hooks, and suspicious background file writes to hidden directories.</p>
                </div>
                <p className="italic text-[10px] text-slate-500 border-t border-slate-800 pt-2">
                    <Lock className="w-3 h-3 inline mr-1" /> Reliability Note: This dashboard uses browser event listeners. It cannot capture keys outside this tab, ensuring user privacy.
                </p>
            </div>
        </div>
    );
};

export default AwarenessNotes;
