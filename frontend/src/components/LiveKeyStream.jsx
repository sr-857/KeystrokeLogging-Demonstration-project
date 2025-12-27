import React from 'react';
import { Terminal, Keyboard } from 'lucide-react';

const LiveKeyStream = ({ keystrokes, streamRef, autoScroll, setAutoScroll }) => {
    return (
        <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-[450px]">
            <div className="p-4 border-b border-slate-700/50 bg-slate-800/30 flex justify-between items-center">
                <h2 className="font-bold flex items-center gap-2 text-cyber-neon">
                    <Terminal className="w-5 h-5" /> Live Keystroke Stream
                </h2>
                <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={autoScroll}
                            onChange={e => setAutoScroll(e.target.checked)}
                            className="rounded border-slate-700 bg-slate-900 text-cyber-blue focus:ring-cyber-blue"
                        />
                        Auto-scroll
                    </label>
                    <span className="text-[10px] bg-cyber-neon/10 text-cyber-neon px-2 py-0.5 rounded border border-cyber-neon/20 font-bold">REAL-TIME</span>
                </div>
            </div>
            <div ref={streamRef} className="flex-1 overflow-y-auto p-4 space-y-2 font-mono text-sm">
                {keystrokes.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-slate-600 opacity-40 italic">
                        <Keyboard className="w-12 h-12 mb-3" />
                        <p>Awaiting system input events...</p>
                    </div>
                ) : (
                    keystrokes.map(k => (
                        <div key={k.id} className="flex items-center gap-4 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-cyber-neon/30 transition-all group">
                            <span className="text-slate-500 text-[10px] w-32">{k.timestamp}</span>
                            <span className="text-white font-bold w-16 text-center bg-slate-800 rounded py-1">{k.key}</span>
                            <span className={`text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-tighter ${k.type === 'Alphabet' ? 'bg-cyber-blue/10 text-cyber-blue' :
                                    k.type === 'Number' ? 'bg-cyber-purple/10 text-cyber-purple' :
                                        k.type === 'Space' ? 'bg-cyber-green/10 text-cyber-green' :
                                            'bg-amber-500/10 text-amber-500'
                                }`}>
                                {k.type}
                            </span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default LiveKeyStream;
