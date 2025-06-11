import image from "../assets/news.png";

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div
            className="card mb-4 shadow-sm h-100 news-glass-card border-0"
            style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: "16px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            }}
        >
            <img
                src={src || image}
                className="card-img-top"
                alt="news"
                style={{ height: "200px", objectFit: "cover", borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}
            />
            <div className="card-body d-flex flex-column justify-content-between text-white">
                <div>
                    <h5 className="card-title fw-bold">{title?.slice(0, 50)}</h5>
                    <p className="card-text">
                        {description
                            ? description.slice(0, 90)
                            : "Read the latest news and stay up to date with the world."}
                    </p>
                </div>
                <a
                    href={url}
                    className="btn btn-outline-light mt-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ borderRadius: "8px" }}
                >
                    Read More
                </a>
            </div>
        </div>
    );
};

export default NewsItem;
