import tkinter as tk
import subprocess
import os

# Set this to your Rust project's directory
RUST_PROJECT_DIR = r"C:\Users\abhir\OneDrive\Documents\GitHub\Satellite"

def run_rust_tui():
    """Opens Windows terminal and runs `cargo run` inside the Rust project directory."""
    if os.path.exists(RUST_PROJECT_DIR):
        subprocess.Popen(f'start cmd /k "cd /d {RUST_PROJECT_DIR} && cargo run"', shell=True)
    else:
        print("Error: Rust project directory not found.")

# GUI setup
root = tk.Tk()
root.title("Rust TUI Launcher")
root.geometry("300x150")

run_button = tk.Button(root, text="Run", command=run_rust_tui, font=("Arial", 12), padx=10, pady=5)
run_button.pack(pady=20)

root.mainloop()
