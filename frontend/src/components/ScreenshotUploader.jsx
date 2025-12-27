import React from 'react';
import { Upload } from 'lucide-react';

const ScreenshotUploader = ({ screenshots, onUpload }) => {
    return (
        <div className="glass-card p-6 rounded-2xl">
            <h2 className="font-bold flex items-center gap-2 text-cyber-blue mb-4">
                <Upload className="w-5 h-5" /> Prototype Proof
            </h2>
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-slate-700 rounded-2xl hover:border-cyber-blue/50 hover:bg-cyber-blue/5 transition-all cursor-pointer group">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                    <Upload className="w-8 h-8 text-slate-500 group-hover:text-cyber-blue mb-2" />
                    <p className="text-xs text-slate-500 group-hover:text-slate-400 font-bold">UPLOAD DEMO SCREENSHOTS</p>
                    <p className="text-[10px] text-slate-600 mt-1">Local preview only. No server upload.</p>
                </div>
                <input type="file" className="hidden" multiple onChange={onUpload} accept="image/*" />
            </label>
            <div className="grid grid-cols-3 gap-2 mt-4">
                {screenshots.map((src, i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden border border-slate-700 group relative">
                        <img src={src} alt="Proof" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-cyber-blue/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScreenshotUploader;
