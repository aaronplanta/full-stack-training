interface EventProps {
    eventName: string;
    date: string;
    venue: string;
}

function EventCard({ eventName, date, venue }: EventProps) {
    return (
        <div className="mb-10 w-[100%] border border-black-20 rounded-2xl p-7">
            <h3 className="font-bold">{eventName}</h3>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Venue:</strong> {venue}</p>
        </div>
    );
}

export default EventCard;