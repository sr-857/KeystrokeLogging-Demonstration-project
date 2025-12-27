# 🛡️ JalRakshak-Keylog-Security-Lab

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Python](https://img.shields.io/badge/Logger-Python-3776AB?logo=python)](https://www.python.org/)

**Understanding keylogging behavior. Building defense awareness. Local only. Ethical only.**

JalRakshak is a premium, learning-focused cybersecurity prototype designed to demonstrate how keystroke logging operates at the system level. It provides a modern, interactive dashboard to visualize captured events, analyze patterns, and understand the underlying security mechanisms.

---

## ⚠️ Ethical Use Statement

**This project is built strictly for security education and malware behavior awareness.**

- **Educational Only**: This is a prototype for learning, not a tool for malicious use.
- **Local Storage**: All captured data is stored **locally only** on your machine.
- **No Exfiltration**: There is **zero** external network transmission or hidden spying behavior.
- **User Consent**: Logging only activates after explicit user acknowledgment in the dashboard.
- **Privacy First**: The dashboard uses browser-level listeners, ensuring it cannot capture data from other applications or tabs.

---

## 🚀 Key Features

### 💻 Modern Web Dashboard
- **Cyber-Noir Theme**: A premium, dark-mode UI with neon accents and glassmorphic cards.
- **Live Stream**: Real-time visualization of keystroke events with IST timestamps (+0530).
- **Advanced Analytics**: Interactive charts (Recharts) showing key frequency and category distribution.
- **Log Management**: Search, filter, clear, and download logs directly from the UI.

### 🐍 Python System Logger
- **Dual Logging**: Simultaneously logs to `keystrokes.txt` and a local SQLite `keystrokes.db`.
- **IST Timestamps**: Every event is recorded with precise Indian Standard Time.
- **Ethical Guardrails**: Clear startup warnings and immediate cessation on user toggle.

---

## 📂 Project Structure

```bash
/JalRakshak-Keylog-Security-Lab
├── /frontend           # React + Tailwind CSS Dashboard
├── /logger             # Python System-Level Logger
├── /logs               # Local Log Storage (.txt, .db)
└── README.md           # Main Project Documentation
```

---

## 🛠️ Getting Started

### 1. Frontend Dashboard
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view the dashboard.

### 2. Python Logger
```bash
cd logger
pip install -r requirements.txt
python keylogger.py
```
*Note: Administrative permissions may be required for system-level input capture.*

---

## 📊 Learning Takeaways
- **Endpoint Security**: Understand how EDR/AV solutions detect unauthorized input hooks.
- **Data Handling**: Learn about secure local log storage and IST time synchronization.
- **Defensive Awareness**: Recognize the importance of application permissions and the "Principle of Least Privilege".

---

**Project Lead:** Subhajit Roy  
*Cybersecurity Research & Development*
