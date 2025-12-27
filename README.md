# JalRakshak-Keylog-Security-Lab

**Understanding keylogging behavior. Building defense awareness. Local only. Ethical only.**

A learning-focused prototype that shows how keystroke logging works, how logs are stored locally, and why endpoint permissions and detection matter in cybersecurity.

## ⚠️ Ethical Use Statement

**This project is built strictly for security education and malware behavior awareness.**

- This is **not** for spying or real monitoring.
- All logs are stored **locally only**.
- **No data** is transmitted externally.
- Built strictly for security education and malware behavior awareness.
- Use this tool only on systems you own or have explicit permission to test.

## 🚀 Features

- **User-Consent Based**: Demo logging only runs after explicit user consent.
- **Real-Time Stream**: Live visualization of keystroke events with IST timestamps.
- **Local Storage**: Logs are saved to local `.txt` and `.db` files.
- **Log Management**: Search, refresh, clear, and download functionality.
- **Advanced Analytics**: Statistical breakdown of top keys and category distribution via Recharts.
- **Prototype Proof**: Local screenshot upload and preview for demo verification.
- **Security Awareness**: Integrated notes on OS/API mechanisms and detection strategies.

## 📂 Project Structure

```
/JalRakshak-Keylog-Security-Lab
│
├── /frontend           # React + Tailwind CSS Dashboard
├── /logger             # Python System-Level Logger
├── /logs               # Local Log Storage (.txt, .db)
└── README.md           # Main Project Documentation
```

## 🛠️ Installation & Run Steps

### Frontend Dashboard
```bash
cd frontend
npm install
npm run dev
```
The dashboard will be available at `http://localhost:5173`.

### Python Logger
```bash
cd logger
pip install -r requirements.txt
python keylogger.py
```
*Note: System-level logging may require administrative permissions depending on your OS.*

## 📊 Screenshots
![Dashboard Overview](frontend/public/dashboard_preview.png)
*(Placeholder: Add your dashboard screenshots here)*

## 🎥 Demo Video
[Watch the Demo Video](https://youtube.com/link-to-your-demo)
*(Placeholder: Add your YouTube/Drive link here)*

## 🧠 Learning Takeaway
Keylogging is a critical technique in both offensive and defensive security. Understanding how these tools operate at the system level helps security professionals build better detection mechanisms (EDR/AV) and highlights the importance of the "Principle of Least Privilege" when managing endpoint permissions.

---
**Project Lead:** Subhajit Roy
