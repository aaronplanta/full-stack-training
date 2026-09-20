from playwright.sync_api import sync_playwright
from scrapers.utils import Utils

def get_events_list():
    url = 'https://smtickets.com/events/listing/arena'
    browser_path = Utils.get_local_browser_path()

    if not browser_path:
        print("❌ Could not find Chrome or Edge.")
        return []

    print(f"🚀 Launching local browser from: {browser_path}")

    with sync_playwright() as p:
        browser = p.chromium.launch(
            headless=False,
            executable_path=browser_path,
        )

        page = browser.new_page()
        
        print(f"🌐 Navigating to: {url}")
        page.goto(url)

        print("\n🔍 Extracting events using native locators...\n")
        
        events = page.locator("li.event_li")

        try:
            events.first.wait_for(timeout=10000)
        except Exception:
            print("❌ Could not find any events.")
            browser.close()
            return []

        scraped_events = []

        for event in events.all():
            event_name_loc = event.locator("div:first-child").first
            date_loc = event.locator("span.o-date").first
            venue_loc = event.locator("div:last-of-type").first

            event_name = event_name_loc.inner_text() if event_name_loc.count() > 0 else "Unknown Event Name"
            date = date_loc.inner_text() if date_loc.count() > 0 else "Unknown Date"
            venue = venue_loc.inner_text() if venue_loc.count() > 0 else "Unknown Venue"

            event_data = {
                "event_name": event_name.strip(),
                "date": date.strip(),
                "venue": venue.strip()
            }
            scraped_events.append(event_data)

        browser.close()

    return scraped_events
