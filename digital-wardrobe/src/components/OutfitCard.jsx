import { Heart, ArrowUpRight } from "lucide-react";

function OutfitCard({
    item,
    isFavorite,
    onFavorite,
}) {

    return (
        <article className="outfit-card">

            <div className="outfit-image">

                <img
                    src={item.thumbnail}
                    alt={item.title}
                />

                <button
                    className={`outfit-heart ${
                        isFavorite ? "active" : ""
                    }`}
                    onClick={() => onFavorite(item.id)}
                    aria-label="Favorite outfit"
                >
                    <Heart
                        size={18}
                        fill={
                            isFavorite
                                ? "currentColor"
                                : "none"
                        }
                    />
                </button>

                <span className="outfit-arrow">
                    <ArrowUpRight size={17} />
                </span>

            </div>

            <div className="outfit-card-info">

                <div>
                    <span>
                        {item.category
                            .replace("womens-", "")
                        }
                    </span>

                    <h3>{item.title}</h3>
                </div>

                <p>
                    ${item.price}
                </p>

            </div>

        </article>
    );
}

export default OutfitCard;