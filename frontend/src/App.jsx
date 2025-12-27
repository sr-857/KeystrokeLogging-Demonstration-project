import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Terminal,
  Database,
  BarChart3,
  Download,
  Trash2,
  Play,
  Square,
  Lock,
  User,
  LayoutDashboard,
  FileText,
  Shield
} from 'lucide-react';
import { format } from 'date-fns';

// Modular Components
import ConsentBanner from './components/ConsentBanner';
import StatusCard from './components/StatusCard';
import LiveKeyStream from './components/LiveKeyStream';
import LogTable from './components/LogTable';
import AnalyticsPanel from './components/AnalyticsPanel';
import ScreenshotUploader from './components/ScreenshotUploader';
import AwarenessNotes from './components/AwarenessNotes';

const App = () => {
  console.log('Keystroke Logging App Mounted');
  // --- State Management ---
  const [isLogging, setIsLogging] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const [keystrokes, setKeystrokes] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [duration, setDuration] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [autoScroll, setAutoScroll] = useState(true);
  const [screenshots, setScreenshots] = useState([]);
  const [activeTab, setActiveTab] = useState('dashboard');

  const streamRef = useRef(null);
  const timerRef = useRef(null);

  // --- IST Time Helper ---
  const getISTTime = () => {
    return new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  // --- Logging Logic ---
  useEffect(() => {
    if (isLogging) {
      const handleKeyDown = (e) => {
        const timestamp = getISTTime();
        const category = getCategory(e.key);

        const newEntry = {
          id: Date.now() + Math.random(),
          timestamp,
          key: e.key === ' ' ? 'Space' : e.key,
          type: category,
          raw: e.key,
          epoch: Date.now()
        };

        setKeystrokes(prev => [...prev, newEntry]);
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isLogging]);

  // --- Timer Logic ---
  useEffect(() => {
    if (isLogging) {
      timerRef.current = setInterval(() => {
        setDuration(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isLogging, startTime]);

  // --- Helpers ---
  const getCategory = (key) => {
    if (key.length === 1) {
      if (/[0-9]/.test(key)) return 'Number';
      return 'Alphabet';
    }
    if (key === ' ') return 'Space';
    if (key === 'Enter') return 'Enter';
    return 'Special';
  };

  const toggleLogging = () => {
    if (!hasConsent) return;
    if (!isLogging) {
      setStartTime(Date.now());
      setIsLogging(true);
    } else {
      setIsLogging(false);
    }
  };

  const clearLogs = () => {
    setKeystrokes([]);
    setDuration(0);
    if (isLogging) setStartTime(Date.now());
  };

  const downloadLogs = () => {
    const content = keystrokes.map(k => `[${k.timestamp}] Key: ${k.key} | Type: ${k.type}`).join('\n');
    const blob = new Blob([`ETHICAL KEYLOGGER DEMO LOG\nProject Lead: Subhajit Roy\nGenerated: ${getISTTime()}\n\n${content}`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `astraguard_log_${format(new Date(), 'yyyyMMdd_HHmm')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleScreenshot = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => setScreenshots(prev => [...prev, reader.result]);
      reader.readAsDataURL(file);
    });
  };

  // --- Analytics Data ---
  const stats = useMemo(() => {
    const counts = {};
    const typeCounts = { Alphabet: 0, Number: 0, Space: 0, Enter: 0, Special: 0 };

    keystrokes.forEach(k => {
      counts[k.key] = (counts[k.key] || 0) + 1;
      typeCounts[k.type] = (typeCounts[k.type] || 0) + 1;
    });

    const top5 = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, value]) => ({ name, value }));

    const pieData = Object.entries(typeCounts)
      .filter(([_, value]) => value > 0)
      .map(([name, value]) => ({ name, value }));

    return { total: keystrokes.length, top5, pieData };
  }, [keystrokes]);

  const filteredLogs = keystrokes.filter(k =>
    k.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
    k.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-4 md:p-8">
      {!hasConsent && <ConsentBanner onConsent={() => setHasConsent(true)} />}

      <div className={`max-w-7xl mx-auto space-y-8 ${!hasConsent ? 'blur-sm pointer-events-none' : ''} transition-all duration-700`}>

        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyber-neon/10 rounded-lg">
                <Terminal className="w-8 h-8 text-cyber-neon" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-white uppercase">
                Keystroke <span className="text-cyber-neon">Logging</span>
              </h1>
            </div>
            <div className="flex items-center gap-4 text-slate-400 text-sm ml-11">
              <span className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">
                <User className="w-3.5 h-3.5 text-cyber-purple" />
                Project Lead: <span className="text-slate-200 font-semibold">Subhajit Roy</span>
              </span>
              <span className="text-xs font-medium text-cyber-blue/80 italic">
                Understanding keylogging behavior. Building defense awareness.
              </span>
            </div>
          </div>

          <nav className="flex bg-slate-800/50 p-1 rounded-xl border border-slate-700">
            {[
              { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
              { id: 'logs', icon: FileText, label: 'Logs' },
              { id: 'analysis', icon: BarChart3, label: 'Analysis' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === tab.id
                  ? 'bg-cyber-blue text-white shadow-lg shadow-cyber-blue/20'
                  : 'text-slate-400 hover:text-slate-200'
                  }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </header>

        {/* Control & Status Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 glass-card p-6 rounded-2xl flex flex-wrap items-center gap-4">
            <button
              onClick={toggleLogging}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${isLogging
                ? 'bg-cyber-red/10 text-cyber-red border border-cyber-red/30 hover:bg-cyber-red/20'
                : 'bg-cyber-green text-slate-900 hover:bg-cyber-green/90 shadow-lg shadow-cyber-green/20'
                }`}
            >
              {isLogging ? <><Square className="w-4 h-4 fill-current" /> Stop Logging</> : <><Play className="w-4 h-4 fill-current" /> Start Logging</>}
            </button>
            <button onClick={clearLogs} className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-300 transition-colors border border-slate-700">
              <Trash2 className="w-5 h-5" />
            </button>
            <button onClick={downloadLogs} className="flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-200 font-semibold transition-colors border border-slate-700">
              <Download className="w-4 h-4" /> Download Log
            </button>
            <div className="h-8 w-px bg-slate-700 mx-2 hidden md:block"></div>
            <p className="text-xs text-slate-500 font-medium max-w-[200px]">
              <Lock className="w-3 h-3 inline mr-1" /> Zero external data transmission. All logs reside in local memory.
            </p>
          </div>

          <StatusCard isLogging={isLogging} duration={duration} totalKeys={stats.total} />
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {activeTab === 'dashboard' && (
            <>
              <div className="lg:col-span-2 space-y-8">
                <LiveKeyStream
                  keystrokes={keystrokes}
                  streamRef={streamRef}
                  autoScroll={autoScroll}
                  setAutoScroll={setAutoScroll}
                />
              </div>
              <div className="space-y-8">
                <ScreenshotUploader screenshots={screenshots} onUpload={handleScreenshot} />
                <AwarenessNotes />
              </div>
            </>
          )}

          {activeTab === 'logs' && (
            <LogTable logs={filteredLogs} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          )}

          {activeTab === 'analysis' && (
            <AnalyticsPanel stats={stats} duration={duration} />
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
          <p>© 2025 Keystroke Logging Initiative</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> Ethical Demo</span>
            <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> Local Only</span>
            <span className="flex items-center gap-1.5 text-cyber-neon"><Terminal className="w-3.5 h-3.5" /> v1.0 Lab</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
