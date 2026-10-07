import { useEffect, useState } from "react";
import {
    Heart,
    Trash2,
    Sparkles,
    Shirt,
    ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import "../styles/savedLooks.css";

function SavedLooks() {
    const [looks, setLooks] = useState(() => {
        const saved = localStorage.getItem(
            "savedLooks"
        );

        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem(
            "savedLooks",
            JSON.stringify(looks)
        );
    }, [looks]);

    const deleteLook = (id) => {
        setLooks((current) =>
            current.filter(
                (look) => look.id !== id
            )
        );
    };

    const clearLooks = () => {
        const confirmed = window.confirm(
            "Remove all your saved looks?"
        );

        if (confirmed) {
            setLooks([]);
        }
    };

    return (
        <main className="saved-looks-page">

            {/* =========================
                HEADER
            ========================= */}

            <section className="saved-looks-header">

                <div>

                    <span className="saved-label">
                        ✦ your little lookbook
                    </span>

                    <h1>
                        My
                        <em> Looks.</em>
                    </h1>

                    <p>
                        All the outfits you've created
                        and loved enough to keep.
                    </p>

                </div>

                {looks.length > 0 && (
                    <button
                        className="clear-looks-button"
                        onClick={clearLooks}
                    >
                        <Trash2 size={16} />
                        Clear All
                    </button>
                )}

            </section>


            {/* =========================
                EMPTY STATE
            ========================= */}

            {looks.length === 0 ? (

                <section className="empty-looks">

                    <div className="empty-looks-icon">
                        <Heart size={30} />
                    </div>

                    <span>
                        ✦ nothing saved yet
                    </span>

                    <h2>
                        Your little lookbook
                        is empty ♡
                    </h2>

                    <p>
                        Create an outfit in Dress Me,
                        save the looks you love, and
                        they'll all live here.
                    </p>

                    <Link
                        to="/dress-up"
                        className="create-look-button"
                    >
                        Create a Look
                        <Sparkles size={16} />
                    </Link>

                </section>

            ) : (

                <>
                    {/* =========================
                        LOOK COUNT
                    ========================= */}

                    <div className="saved-count">

                        <span>
                            {looks.length}{" "}
                            {looks.length === 1
                                ? "look"
                                : "looks"}{" "}
                            saved
                        </span>

                        <Heart
                            size={16}
                            fill="currentColor"
                        />

                    </div>


                    {/* =========================
                        SAVED LOOKS GRID
                    ========================= */}

                    <section className="saved-looks-grid">

                        {looks.map((look) => (

                            <article
                                className="saved-look-card"
                                key={look.id}
                            >

                                <div className="saved-look-preview">

                                    {/* TOP */}

                                    {look.top && (
                                        <div className="saved-piece saved-top">
                                            <img
                                                src={
                                                    look.top.image
                                                }
                                                alt={
                                                    look.top.name
                                                }
                                            />
                                        </div>
                                    )}


                                    {/* BOTTOM */}

                                    {look.bottom && (
                                        <div className="saved-piece saved-bottom">
                                            <img
                                                src={
                                                    look.bottom.image
                                                }
                                                alt={
                                                    look.bottom.name
                                                }
                                            />
                                        </div>
                                    )}


                                    {/* DRESS */}

                                    {look.dress && (
                                        <div className="saved-piece saved-dress">
                                            <img
                                                src={
                                                    look.dress.image
                                                }
                                                alt={
                                                    look.dress.name
                                                }
                                            />
                                        </div>
                                    )}


                                    {/* SHOES */}

                                    {look.shoes && (
                                        <div className="saved-piece saved-shoes">
                                            <img
                                                src={
                                                    look.shoes.image
                                                }
                                                alt={
                                                    look.shoes.name
                                                }
                                            />
                                        </div>
                                    )}


                                    {/* ACCESSORY */}

                                    {look.accessory && (
                                        <div className="saved-piece saved-accessory">
                                            <img
                                                src={
                                                    look
                                                        .accessory
                                                        .image
                                                }
                                                alt={
                                                    look
                                                        .accessory
                                                        .name
                                                }
                                            />
                                        </div>
                                    )}

                                    <button
                                        className="delete-look"
                                        onClick={() =>
                                            deleteLook(
                                                look.id
                                            )
                                        }
                                        aria-label="Delete saved look"
                                    >
                                        <Trash2
                                            size={16}
                                        />
                                    </button>

                                </div>


                                <div className="saved-look-info">

                                    <div>

                                        <span>
                                            look{" "}
                                            {looks.indexOf(
                                                look
                                            ) + 1}
                                        </span>

                                        <h3>
                                            {look.name ||
                                                "My Outfit"}
                                        </h3>

                                    </div>

                                    <Heart
                                        size={18}
                                        fill="currentColor"
                                    />

                                </div>


                                <div className="saved-look-items">

                                    {[
                                        look.top,
                                        look.bottom,
                                        look.dress,
                                        look.shoes,
                                        look.accessory,
                                    ]
                                        .filter(Boolean)
                                        .map(
                                            (
                                                item
                                            ) => (
                                                <span
                                                    key={
                                                        item.id
                                                    }
                                                >
                                                    {
                                                        item.name
                                                    }
                                                </span>
                                            )
                                        )}

                                </div>

                            </article>

                        ))}

                    </section>


                    {/* =========================
                        CREATE MORE
                    ========================= */}

                    <section className="more-looks">

                        <div>

                            <span>
                                ✦ feeling creative?
                            </span>

                            <h2>
                                Make another
                                <em> look.</em>
                            </h2>

                        </div>

                        <Link
                            to="/dress-up"
                            className="make-look-button"
                        >
                            Style Something
                            <ArrowRight
                                size={16}
                            />
                        </Link>

                    </section>

                </>
            )}

        </main>
    );
}

export default SavedLooks;