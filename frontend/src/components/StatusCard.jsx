import React from 'react';
import { Activity } from 'lucide-react';

const StatusCard = ({ isLogging, duration, totalKeys }) => {
    return (
        <div className={`glass-card p-6 rounded-2xl border-l-4 ${isLogging ? 'border-l-cyber-green animate-pulse-glow' : 'border-l-cyber-red'}`}>
            <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">System Status</p>
                    <h3 className={`text-xl font-black ${isLogging ? 'text-cyber-green' : 'text-cyber-red'}`}>
                        {isLogging ? 'ACTIVE MONITORING' : 'SYSTEM IDLE'}
                    </h3>
                </div>
                <Activity className={`w-6 h-6 ${isLogging ? 'text-cyber-green' : 'text-slate-600'}`} />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Duration</p>
                    <p className="text-lg font-mono font-bold text-white">{duration}s</p>
                </div>
                <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Captured</p>
                    <p className="text-lg font-mono font-bold text-white">{totalKeys}</p>
                </div>
            </div>
        </div>
    );
};

export default StatusCard;
