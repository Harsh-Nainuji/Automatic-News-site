// src/components/NewsItem.jsx
import image from "../assets/news.png";

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card mb-4 shadow-sm h-100">
            <img
                src={src || image}
                className="card-img-top"
                alt="news"
                style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title">{title.slice(0, 50)}</h5>
                    <p className="card-text">
                        {description
                            ? description.slice(0, 90)
                            : "Read the latest news and stay up to date with the world."}
                    </p>
                </div>
                <a
                    href={url}
                    className="btn btn-danger mt-3"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Read More
                </a>
            </div>
        </div>
    );
};

export default NewsItem;
