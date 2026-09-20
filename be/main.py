from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import SessionLocal, EventDB, MovieDB
from scrapers.getEvents import get_events_list
from scrapers.getMovies import get_movies_list

app = FastAPI(title="Ticket Radar API")

# Allow React to talk to FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/api/scraper")
def trigger_events_scraper(db: Session = Depends(get_db)):
    
    scraped_data = get_events_list()
    
    db.query(EventDB).delete()
    
    for item in scraped_data:
        new_event = EventDB(
            name=item["event_name"], 
            date=item["date"], 
            venue=item["venue"]
        )
        db.add(new_event)

    db.commit()
    return {"message": f"Successfully scraped and saved {len(scraped_data)} events."}

@app.post("/api/scrape-movies")
def trigger_movie_scraper(db: Session = Depends(get_db)):
    scraped_data = get_movies_list()
    
    db.query(MovieDB).delete()
    
    for item in scraped_data:
        new_movie = MovieDB(
            title=item["title"], 
            description=item["description"], 
            director=item["director"],
            image=item["image"]
        )
        db.add(new_movie)
        
    db.commit()
    return {"message": f"Successfully scraped and saved {len(scraped_data)} movies."}

@app.get("/api/events")
def get_all_events(db: Session = Depends(get_db)):
    events = db.query(EventDB).all()
    return events

@app.get("/api/movies")
def get_all_movies(db: Session = Depends(get_db)):
    movies = db.query(MovieDB).all()
    return movies
