import requests
import json # <-- Add this import

def get_movies_list():
    api_url = "https://robinsonsmovieworld.com/webservice/getmovieswithdetails"
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/json, text/plain, */*",
        "Referer": "https://robinsonsmovieworld.com/",
        "X-Requested-With": "XMLHttpRequest"
    }

    print(f"📡 Fetching JSON data from: {api_url}")
    response = requests.get(api_url, headers=headers)

    if response.status_code != 200:
        print("❌ Server rejected request.")
        return []

    try:
        raw_data = response.json()
    except requests.exceptions.JSONDecodeError:
        print("❌ Server returned invalid JSON.")
        return []

    # --- THE FIX: Unpacking the ASP.NET format ---
    
    # 1. If it's a dictionary, look inside the "d" or "data" key
    if isinstance(raw_data, dict):
        movie_list = raw_data.get("d") or raw_data.get("data") or raw_data
    else:
        movie_list = raw_data

    # 2. If the list is still a giant string (double-encoded), decode it again
    if isinstance(movie_list, str):
        movie_list = json.loads(movie_list)

    # ---------------------------------------------

    scraped_movies = []

    # Now we safely loop through the actual unpacked list
    for movie in movie_list:
        # Final safety check to ensure we are looking at a dictionary
        if isinstance(movie, dict):
            movie_data = {
                "title": movie.get("Movie_Name", "Unknown Title"),
                "description": movie.get("Synopsis", "Unknown Description"),
                "director": movie.get("Director", "Unknown Director"),
                "image": movie.get("Image", "Unknown Image")
            }
            scraped_movies.append(movie_data)

    print(f"✅ Successfully extracted {len(scraped_movies)} movies!")
    return scraped_movies
