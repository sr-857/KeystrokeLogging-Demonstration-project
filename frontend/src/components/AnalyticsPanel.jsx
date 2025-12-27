import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend
} from 'recharts';
import { ArrowRightLeft, MousePointer2 } from 'lucide-react';

const AnalyticsPanel = ({ stats, duration }) => {
    const COLORS = ['#00f2ff', '#7000ff', '#00ff88', '#ff4d4d', '#eab308'];

    return (
        <div className="lg:col-span-3 space-y-8 animate-in zoom-in-95 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-8 rounded-3xl text-center space-y-2 border-t-4 border-t-cyber-blue">
                    <p className="text-slate-500 font-black uppercase tracking-widest text-xs">Total Events</p>
                    <p className="text-5xl font-black text-white">{stats.total}</p>
                </div>
                <div className="glass-card p-8 rounded-3xl text-center space-y-2 border-t-4 border-t-cyber-green">
                    <p className="text-slate-500 font-black uppercase tracking-widest text-xs">Active Time</p>
                    <p className="text-5xl font-black text-white">{duration}<span className="text-xl ml-1 text-slate-500">sec</span></p>
                </div>
                <div className="glass-card p-8 rounded-3xl text-center space-y-2 border-t-4 border-t-cyber-purple">
                    <p className="text-slate-500 font-black uppercase tracking-widest text-xs">Efficiency</p>
                    <p className="text-5xl font-black text-white">{duration > 0 ? (stats.total / duration).toFixed(1) : '0'}<span className="text-xl ml-1 text-slate-500">k/s</span></p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="glass-card p-8 rounded-3xl">
                    <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
                        <ArrowRightLeft className="w-6 h-6 text-cyber-neon" /> Keystroke Frequency
                    </h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={stats.top5}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip cursor={{ fill: '#1e293b' }} contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)' }} />
                                <Bar dataKey="value" fill="#00f2ff" radius={[6, 6, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="glass-card p-8 rounded-3xl">
                    <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
                        <MousePointer2 className="w-6 h-6 text-cyber-purple" /> Category Breakdown
                    </h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={stats.pieData} innerRadius={80} outerRadius={110} paddingAngle={8} dataKey="value">
                                    {stats.pieData.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '12px' }} />
                                <Legend verticalAlign="middle" align="right" layout="vertical" iconType="circle" wrapperStyle={{ paddingLeft: '20px', fontSize: '14px', fontWeight: 'bold' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPanel;
