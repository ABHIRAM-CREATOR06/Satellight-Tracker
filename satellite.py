import tkinter as tk
import subprocess
import os
import sys
from tkinter import messagebox, scrolledtext

def run_rust_tui():
    """Gets user input for Rust project directory and runs `cargo run` in terminal."""
    rust_project_dir = entry.get().strip()

    if not rust_project_dir or not os.path.exists(rust_project_dir):
        log_message("❌ Error: Invalid directory! Please enter a valid Rust project path.")
        messagebox.showerror("Error", "Invalid directory! Please enter a valid Rust project path.")
        return
    
    try:
        log_message("🚀 Launching Rust TUI Application...")
        
        if sys.platform.startswith("win"):
            subprocess.Popen(f'start cmd /k "cd /d {rust_project_dir} && cargo run"', shell=True)
        else:  # For Linux/Mac
            subprocess.Popen(f'gnome-terminal -- bash -c "cd {rust_project_dir} && cargo run; exec bash"', shell=True)
        
        log_message("✅ Rust TUI started successfully!")
    except Exception as e:
        log_message(f"⚠️ Execution Failed: {str(e)}")
        messagebox.showerror("Execution Failed", f"An error occurred: {str(e)}")

def log_message(message):
    """Logs status messages in the GUI."""
    log_display.insert(tk.END, message + "\n")
    log_display.see(tk.END)  # Auto-scroll

def exit_app():
    """Closes the application."""
    root.destroy()

# GUI setup
root = tk.Tk()
root.title("Sat-Nev Launcher")
root.geometry("500x400")
root.configure(bg="#1e1e1e")  # Dark theme

# Label
label = tk.Label(root, text="Enter Rust Project Directory:", font=("Arial", 12), bg="#1e1e1e", fg="white")
label.pack(pady=10)

# Input Field
entry = tk.Entry(root, width=50, font=("Arial", 12))
entry.pack(pady=5)

# Run Button
run_button = tk.Button(root, text="▶ Run TUI", command=run_rust_tui, font=("Arial", 14), padx=10, pady=5, bg="#4CAF50", fg="white")
run_button.pack(pady=10)

# Log Display Area
log_display = scrolledtext.ScrolledText(root, width=60, height=10, font=("Arial", 10), bg="#282828", fg="white")
log_display.pack(pady=10)
log_display.insert(tk.END, "🔹 Status Log:\n")

# Exit Button
exit_button = tk.Button(root, text="❌ Exit", command=exit_app, font=("Arial", 12), padx=10, pady=5, bg="#FF4C4C", fg="white")
exit_button.pack(pady=10)

root.mainloop()

