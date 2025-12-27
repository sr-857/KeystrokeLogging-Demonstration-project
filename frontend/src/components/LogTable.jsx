import React from 'react';
import { Database, Search, CheckCircle2 } from 'lucide-react';

const LogTable = ({ logs, searchTerm, setSearchTerm }) => {
    return (
        <div className="lg:col-span-3 glass-card rounded-2xl overflow-hidden animate-in fade-in duration-500">
            <div className="p-6 border-b border-slate-700/50 bg-slate-800/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="font-bold text-xl flex items-center gap-2 text-cyber-neon">
                    <Database className="w-6 h-6" /> Stored Logs Repository
                </h2>
                <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search keys or types..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2 pl-10 pr-4 text-sm focus:border-cyber-neon outline-none transition-all"
                    />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-900/50 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                            <th className="px-6 py-4 border-b border-slate-800">Timestamp</th>
                            <th className="px-6 py-4 border-b border-slate-800">Captured Key</th>
                            <th className="px-6 py-4 border-b border-slate-800">Event Type</th>
                            <th className="px-6 py-4 border-b border-slate-800">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-mono">
                        {logs.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="px-6 py-12 text-center text-slate-600 italic">No matching logs found in local memory.</td>
                            </tr>
                        ) : (
                            logs.map(k => (
                                <tr key={k.id} className="hover:bg-slate-800/30 transition-colors border-b border-slate-800/50 group">
                                    <td className="px-6 py-3 text-slate-500 text-xs">{k.timestamp}</td>
                                    <td className="px-6 py-3 font-bold text-cyber-neon">{k.key}</td>
                                    <td className="px-6 py-3">
                                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${k.type === 'Alphabet' ? 'bg-cyber-blue/10 text-cyber-blue' :
                                                k.type === 'Number' ? 'bg-cyber-purple/10 text-cyber-purple' :
                                                    'bg-slate-700 text-slate-300'
                                            }`}>
                                            {k.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3">
                                        <span className="flex items-center gap-1.5 text-[10px] text-cyber-green font-bold">
                                            <CheckCircle2 className="w-3 h-3" /> VERIFIED
                                        </span>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LogTable;
