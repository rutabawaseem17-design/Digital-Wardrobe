import { useEffect, useMemo, useState } from "react";
import {
    RefreshCw,
    Search,
    Sparkles,
} from "lucide-react";

import { getFashionItems } from "../services/fashionApi";
import OutfitCard from "./OutfitCard";

import "../styles/components.css";

function OutfitInspiration() {

    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("all");

    const [favorites, setFavorites] = useState([]);


    /* =========================
       FETCH PRODUCTS
    ========================= */

    useEffect(() => {

        async function loadItems() {

            try {

                setLoading(true);

                const products =
                    await getFashionItems();

                setItems(products);

            } catch (error) {

                setError(
                    "Oops! We couldn't find the outfits."
                );

            } finally {

                setLoading(false);

            }
        }

        loadItems();

    }, []);


    /* =========================
       FAVORITES
    ========================= */

    const toggleFavorite = (id) => {

        setFavorites((current) => {

            if (current.includes(id)) {

                return current.filter(
                    (item) => item !== id
                );

            }

            return [...current, id];

        });

    };


    /* =========================
       FILTER
    ========================= */

    const filteredItems = useMemo(() => {

        return items.filter((item) => {

            const matchesSearch =
                item.title
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    );

            const matchesCategory =
                category === "all" ||
                item.category === category;

            return (
                matchesSearch &&
                matchesCategory
            );

        });

    }, [items, search, category]);


    /* =========================
       SURPRISE ME
    ========================= */

    const surpriseMe = () => {

        if (!items.length) return;

        const randomIndex =
            Math.floor(
                Math.random() * items.length
            );

        const randomItem =
            items[randomIndex];

        setSearch("");

        setCategory("all");

        setTimeout(() => {

            const element =
                document.getElementById(
                    `outfit-${randomItem.id}`
                );

            element?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });

        }, 100);

    };


    return (
        <section className="inspiration-section">

            {/* HEADER */}

            <div className="inspiration-header">

                <div>

                    <span className="section-label">
                        outfit inspo ✦
                    </span>

                    <h2>
                        What's the
                        <em> vibe?</em>
                    </h2>

                    <p>
                        Find something cute,
                        save your favorites,
                        and get inspired for
                        your next look.
                    </p>

                </div>


                <button
                    className="surprise-button"
                    onClick={surpriseMe}
                >
                    <Sparkles size={17} />

                    Surprise Me
                </button>

            </div>


            {/* CONTROLS */}

            <div className="inspiration-controls">

                <div className="inspiration-search">

                    <Search size={17} />

                    <input
                        type="text"
                        placeholder="Search something cute..."
                        value={search}
                        onChange={(event) =>
                            setSearch(
                                event.target.value
                            )
                        }
                    />

                </div>


                <div className="category-filters">

                    <button
                        className={
                            category === "all"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setCategory("all")
                        }
                    >
                        All
                    </button>

                    <button
                        className={
                            category ===
                            "womens-dresses"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setCategory(
                                "womens-dresses"
                            )
                        }
                    >
                        Dresses
                    </button>

                    <button
                        className={
                            category ===
                            "womens-shoes"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setCategory(
                                "womens-shoes"
                            )
                        }
                    >
                        Shoes
                    </button>

                    <button
                        className={
                            category ===
                            "womens-bags"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setCategory(
                                "womens-bags"
                            )
                        }
                    >
                        Bags
                    </button>

                </div>

            </div>


            {/* CONTENT */}

            {loading && (

                <div className="inspiration-state">

                    <RefreshCw
                        size={25}
                        className="loading-spinner"
                    />

                    <p>
                        Finding cute things...
                    </p>

                </div>

            )}


            {!loading && error && (

                <div className="inspiration-state">

                    <span>♡</span>

                    <p>{error}</p>

                    <button
                        onClick={() =>
                            window.location.reload()
                        }
                    >
                        Try Again
                    </button>

                </div>

            )}


            {!loading &&
                !error &&
                filteredItems.length > 0 && (

                    <div className="outfit-grid">

                        {filteredItems.map((item) => (

                            <div
                                key={item.id}
                                id={`outfit-${item.id}`}
                            >

                                <OutfitCard
                                    item={item}
                                    isFavorite={
                                        favorites.includes(
                                            item.id
                                        )
                                    }
                                    onFavorite={
                                        toggleFavorite
                                    }
                                />

                            </div>

                        ))}

                    </div>

                )}


            {!loading &&
                !error &&
                filteredItems.length === 0 && (

                    <div className="inspiration-state">

                        <span>♡</span>

                        <h3>
                            Nothing found
                        </h3>

                        <p>
                            Try searching for
                            something else.
                        </p>

                    </div>

                )}

        </section>
    );
}

export default OutfitInspiration;