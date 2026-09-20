import { useState, useEffect } from "react";
import type { EventsList } from "./events/EventsList";
import type { MoviesList } from "./events/MoviesList";

import axios from "axios";
import EventCard from "./components/EventCard";
import MovieCard from "./components/MovieCard";
import NoOptionSelectedCard from "./components/NoOptionSelectedCard";

function App() {
    const [eventsList, setEventsList] = useState<EventsList[]>([]);
    const [moviesList, setMoviesList] = useState<MoviesList[]>([]);

    const [eventsButtonClicked, setEventsButtonClicked] = useState<boolean>(false)
    const [moviesButtonClicked, setMoviesButtonClicked] = useState<boolean>(false)

    const noneSelected = !eventsButtonClicked && !moviesButtonClicked;

    const displayConcertickets = (): void => {
        setEventsButtonClicked(!eventsButtonClicked)
        setMoviesButtonClicked(false)
    }
    const displayMovieTickets = (): void => {
        setMoviesButtonClicked(!moviesButtonClicked)
        setEventsButtonClicked(false)
    }

    useEffect(() => {
        if (eventsButtonClicked) {
            const fetchEvents = async () => {
                try {
                    const response = await axios.get("http://127.0.0.1:8000/api/events");
                    setEventsList(response.data);
                } catch (error) {
                    console.error("Error fetching data from backend:", error);
                }
            };
            fetchEvents();
        }
    }, [eventsButtonClicked]);

    useEffect(() => {
        if (moviesButtonClicked) {
            const fetchMovies = async () => {
                try {
                    const response = await axios.get("http://127.0.0.1:8000/api/movies");
                    setMoviesList(response.data);
                } catch (error) {
                    console.error("Error fetching data from backend:", error);
                }
            };
            fetchMovies();
        }
    }, [moviesButtonClicked]);

    useEffect(() => {}, [eventsButtonClicked, moviesButtonClicked])

    return (
        <div className="p-10 m-10 flex flex-col items-center shadow-4sxl rounded-xl bg-slate-900">
            <div className="flex justify-center gap-4 w-[80%]">
                <button 
                    onClick={displayConcertickets}
                    className="w-[25%] p-10 bg-gray-200 text-4xl font-semibold rounded-xl shadow-md hover:shadow-md transition-colors"
                >
                    {eventsButtonClicked ? "Close List of Events" : "View List of Events"}
                </button>
                <button 
                    onClick={displayMovieTickets}
                    className="w-[25%] p-10 bg-white text-4xl font-semibold rounded-xl shadow-md hover:bg-purple-700 transition-colors"
                >
                    {moviesButtonClicked ? "Close List of Movies" : "View List of Movies"}
                </button>
            </div>
            <div className="flex flex-col items-center p-10 w-[80%]">
                {noneSelected ? (
                    <NoOptionSelectedCard/>
                ) : eventsButtonClicked ? (
                    eventsList.map((event) => (
                        <EventCard
                            eventName={event.name}
                            date={event.date}
                            venue={event.venue}
                        />
                    ))
                ) : moviesButtonClicked ? (
                    moviesList.map((movie) => (
                        <MovieCard
                            title={movie.title}
                            description={movie.description}
                            director={movie.director}
                            image={movie.image}
                        />
                    ))
                ) : (
                    <div>Something went wrong</div>
                )}
            </div>
        </div>
    );
}

export default App