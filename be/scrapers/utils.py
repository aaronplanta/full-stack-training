import os

class Utils:

    @staticmethod
    def get_local_browser_path():
        """Detects local Chrome or Edge path automatically for Playwright."""
        windows_paths = [
            r"C:\Program Files\Google\Chrome\Application\chrome.exe",
            r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
            r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
        ]
        mac_paths = [
            "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
            "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
        ]

        for path in windows_paths + mac_paths:
            if os.path.exists(path):
                return path
        return None