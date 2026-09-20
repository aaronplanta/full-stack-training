interface MovieProps {
    title: string;
    description: string;
    director: string;
    image: string;
}

function MovieCard({ title, description, director, image }: MovieProps) {
    return (
        <div className="flex mb-10 w-[100%] border border-black-20 rounded-2xl p-7 gap-10">
            <img src={image} className="shadow-lg rounded-xl"/>
            <div>
                <h3 className="font-bold">{title}</h3>
                <p><strong>Description:</strong> {description}</p>
                <p><strong>Director:</strong> {director}</p>
            </div>
        </div>
    );
}

export default MovieCard;