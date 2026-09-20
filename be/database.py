from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker

# Creates a local SQLite file named "events.db"
SQLALCHEMY_DATABASE_URL = "sqlite:///./events.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Define the SQL Table
class EventDB(Base):
    __tablename__ = "allEvents"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    date = Column(String)
    venue = Column(String)

class MovieDB(Base):
    __tablename__ = "allMovies"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    director = Column(String)
    image = Column(String)

# Create the tables in the database file
Base.metadata.create_all(bind=engine)
