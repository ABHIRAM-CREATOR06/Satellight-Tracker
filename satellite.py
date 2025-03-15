import tkinter as tk
import subprocess
import os
import sys
import random
from tkinter import messagebox, scrolledtext, simpledialog, filedialog

def verify_admin():
    """Checks if the user enters the correct admin number and solves CAPTCHA."""
    admin_number = simpledialog.askinteger("Admin Verification", "Enter Admin Number:")
    if admin_number == 2005:
        run_rust_tui_admin()
    else:
        run_rust_tui_user()

def run_rust_tui_admin():
    """Runs `cargo run` in the predefined admin directory."""
    global process
    rust_project_dir = "C:\\Users\\abhir\\OneDrive\\Documents\\GitHub\\Satellite"
    launch_rust_tui(rust_project_dir)

def run_rust_tui_user():
    """Prompts user to select a directory and runs `cargo run`."""
    global process
    rust_project_dir = filedialog.askdirectory(title="Select Rust Project Directory")
    if not rust_project_dir:
        return
    launch_rust_tui(rust_project_dir)

def launch_rust_tui(rust_project_dir):
    """Executes the Rust project in the specified directory."""
    if not os.path.exists(rust_project_dir):
        log_message("❌ Error: Invalid directory! The specified Rust project path does not exist.")
        messagebox.showerror("Error", "Invalid directory! The specified Rust project path does not exist.")
        return
    
    log_message("🚀 Launching Rust TUI Application...")
    try:
        if sys.platform.startswith("win"):
            process = subprocess.Popen(f'start cmd /k "cd /d {rust_project_dir} && cargo run"', shell=True)
        else:
            process = subprocess.Popen(f'gnome-terminal -- bash -c "cd {rust_project_dir} && cargo run; exec bash"', shell=True)
        log_message("✅ Rust TUI started successfully!")
    except Exception as e:
        log_message(f"⚠️ Execution Failed: {str(e)}")
        messagebox.showerror("Execution Failed", f"An error occurred: {str(e)}")

def log_message(message):
    """Logs status messages in the GUI."""
    log_display.insert(tk.END, message + "\n")
    log_display.see(tk.END)

def exit_app():
    """Closes the application and terminates the Rust process if running."""
    global process
    try:
        if process:
            process.terminate()
    except NameError:
        pass
    root.destroy()

def toggle_theme():
    """Toggles between dark and light mode."""
    global dark_mode
    dark_mode = not dark_mode
    if dark_mode:
        root.configure(bg="#1e1e1e")
        title_label.configure(bg="#1e1e1e", fg="#4CAF50")
        log_display.configure(bg="#282828", fg="white")
        exit_button.configure(bg="#FF4C4C", fg="white")
        theme_button.configure(text="🌙 Dark Mode", bg="#333333", fg="white")
    else:
        root.configure(bg="white")
        title_label.configure(bg="white", fg="black")
        log_display.configure(bg="#F0F0F0", fg="black")
        exit_button.configure(bg="#DC3545", fg="black")
        theme_button.configure(text="☀️ Light Mode", bg="#F0F0F0", fg="black")

# GUI setup
root = tk.Tk()
root.title("Sat-Nev Launcher")
root.geometry("550x500")
dark_mode = True  # Default to dark mode
process = None  # Track the Rust process

# Project Information
project_info = "Sat-Nev Launcher is a user-friendly GUI tool designed to simplify the execution of Rust-based TUI applications. It provides an intuitive interface for launching applications seamlessly, with a toggle for dark and light modes."
info_label = tk.Label(root, text=project_info, font=("Arial", 10), wraplength=500, justify="center")
info_label.pack(pady=10)

# Title Label
title_label = tk.Label(root, text="🚀 Sat-Nev Launcher", font=("Arial", 16, "bold"))
title_label.pack(pady=10)

# Browse Button (for normal users)
browse_button = tk.Button(root, text="📂 Browse & Run TUI", command=run_rust_tui_user, font=("Arial", 14, "bold"), padx=15, pady=5)
browse_button.pack(pady=10)

# Log Display Area
log_display = scrolledtext.ScrolledText(root, width=60, height=10, font=("Arial", 10))
log_display.pack(pady=10)
log_display.insert(tk.END, "🔹 Status Log:\n")

# Theme Toggle Button
theme_button = tk.Button(root, text="🌙 Dark Mode", command=toggle_theme, font=("Arial", 12, "bold"), padx=10, pady=5)
theme_button.pack(pady=5)

# Admin Button (for admin users)
admin_button = tk.Button(root, text="🔑 Verify Admin & Run", command=verify_admin, font=("Arial", 14, "bold"), padx=15, pady=5, bg="#FFD700", fg="black")
admin_button.pack(pady=10)

# Exit Button
exit_button = tk.Button(root, text="❌ Exit", command=exit_app, font=("Arial", 12, "bold"), padx=10, pady=5)
exit_button.pack(pady=10)

# Apply Initial Theme
toggle_theme()

root.protocol("WM_DELETE_WINDOW", exit_app)  # Handle window close event

root.mainloop()


