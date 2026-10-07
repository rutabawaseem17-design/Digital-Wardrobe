import { useEffect, useState } from "react";
import {
    Shuffle,
    RotateCcw,
    Heart,
    Sparkles,
    Shirt,
    ArrowRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import Doll from "../components/Doll";

import "../styles/dressUp.css";

function DressUp() {
    const navigate = useNavigate();

    const [clothes, setClothes] = useState([]);

    const [outfit, setOutfit] = useState({
        top: null,
        bottom: null,
        dress: null,
        shoes: null,
        accessory: null,
    });

    const [activeCategory, setActiveCategory] =
        useState("tops");

    const [savedMessage, setSavedMessage] =
        useState("");

    const categories = [
        {
            id: "tops",
            label: "Tops",
            outfitKey: "top",
        },
        {
            id: "bottoms",
            label: "Bottoms",
            outfitKey: "bottom",
        },
        {
            id: "dresses",
            label: "Dresses",
            outfitKey: "dress",
        },
        {
            id: "shoes",
            label: "Shoes",
            outfitKey: "shoes",
        },
        {
            id: "accessories",
            label: "Extras",
            outfitKey: "accessory",
        },
    ];

    /* =========================
       LOAD MY CLOSET
    ========================= */

    useEffect(() => {
        const saved =
            localStorage.getItem(
                "digitalWardrobe"
            );

        if (saved) {
            try {
                setClothes(JSON.parse(saved));
            } catch {
                setClothes([]);
            }
        }
    }, []);

    /* =========================
       GET CATEGORY ITEMS
    ========================= */

    const categoryItems = clothes.filter(
        (item) =>
            item.category ===
            activeCategory
    );

    /* =========================
       SELECT ITEM
    ========================= */

    const selectItem = (item) => {
        if (activeCategory === "tops") {
            setOutfit((current) => ({
                ...current,
                top: item,
                dress: null,
            }));
        }

        if (activeCategory === "bottoms") {
            setOutfit((current) => ({
                ...current,
                bottom: item,
                dress: null,
            }));
        }

        if (activeCategory === "dresses") {
            setOutfit((current) => ({
                ...current,
                dress: item,
                top: null,
                bottom: null,
            }));
        }

        if (activeCategory === "shoes") {
            setOutfit((current) => ({
                ...current,
                shoes: item,
            }));
        }

        if (activeCategory === "accessories") {
            setOutfit((current) => ({
                ...current,
                accessory: item,
            }));
        }

        setSavedMessage("");
    };

    /* =========================
       RESET
    ========================= */

    const resetOutfit = () => {
        setOutfit({
            top: null,
            bottom: null,
            dress: null,
            shoes: null,
            accessory: null,
        });

        setSavedMessage("");
    };

    /* =========================
       RANDOM ITEM
    ========================= */

    const randomItem = (category) => {
        const items = clothes.filter(
            (item) =>
                item.category === category
        );

        if (!items.length) {
            return null;
        }

        return items[
            Math.floor(
                Math.random() *
                    items.length
            )
        ];
    };

    /* =========================
       RANDOM OUTFIT
    ========================= */

    const randomOutfit = () => {
        const top = randomItem("tops");

        const bottom =
            randomItem("bottoms");

        const dress =
            randomItem("dresses");

        const shoes =
            randomItem("shoes");

        const accessory =
            randomItem("accessories");

        if (
            !top &&
            !bottom &&
            !dress &&
            !shoes &&
            !accessory
        ) {
            return;
        }

        const useDress =
            dress &&
            Math.random() > 0.5;

        setOutfit({
            top: useDress
                ? null
                : top,

            bottom: useDress
                ? null
                : bottom,

            dress: useDress
                ? dress
                : null,

            shoes,
            accessory,
        });

        setSavedMessage("");
    };

    /* =========================
       SELECTED
    ========================= */

    const getSelectedItem = (item) => {
        return Object.values(
            outfit
        ).some(
            (piece) =>
                piece?.id === item.id
        );
    };

    /* =========================
       SAVE LOOK
    ========================= */

    const saveLook = () => {
        const hasItems =
            Object.values(outfit).some(
                (item) => item !== null
            );

        if (!hasItems) {
            setSavedMessage(
                "Pick at least one piece first ♡"
            );

            return;
        }

        const saved =
            localStorage.getItem(
                "savedLooks"
            );

        let currentLooks = [];

        try {
            currentLooks = saved
                ? JSON.parse(saved)
                : [];
        } catch {
            currentLooks = [];
        }

        const newLook = {
            id: Date.now(),
            name: "My Outfit",
            top: outfit.top,
            bottom: outfit.bottom,
            dress: outfit.dress,
            shoes: outfit.shoes,
            accessory: outfit.accessory,
        };

        localStorage.setItem(
            "savedLooks",
            JSON.stringify([
                newLook,
                ...currentLooks,
            ])
        );

        setSavedMessage(
            "Look saved to My Looks ♡"
        );
    };

    /* =========================
       GO TO SAVED LOOKS
    ========================= */

    const viewSavedLooks = () => {
        navigate("/looks");
    };

    /* =========================
       EMPTY CLOSET
    ========================= */

    if (!clothes.length) {
        return (
            <main className="dress-up-page">

                <section className="dress-up-header">
                    <div>

                        <span className="dress-label">
                            ✦ your little
                            fashion studio
                        </span>

                        <h1>
                            Dress
                            <em> Me.</em>
                        </h1>

                        <p>
                            Your fashion studio
                            is ready — but your
                            closet is empty.
                        </p>

                    </div>
                </section>

                <section className="empty-dress-up">

                    <div className="empty-dress-icon">
                        <Shirt size={32} />
                    </div>

                    <span>
                        ✦ your closet is
                        waiting
                    </span>

                    <h2>
                        Add your clothes
                        first ♡
                    </h2>

                    <p>
                        Upload your own clothes
                        in My Closet and they'll
                        appear here ready to
                        style.
                    </p>

                    <Link
                        to="/closet"
                        className="go-to-closet"
                    >
                        Go to My Closet
                        <ArrowRight
                            size={17}
                        />
                    </Link>

                </section>

            </main>
        );
    }

    return (
        <main className="dress-up-page">

            {/* =========================
                HEADER
            ========================= */}

            <section className="dress-up-header">

                <div>

                    <span className="dress-label">
                        ✦ your little
                        fashion studio
                    </span>

                    <h1>
                        Dress
                        <em> Me.</em>
                    </h1>

                    <p>
                        Pick pieces from your
                        own closet and create
                        a look that feels
                        completely you.
                    </p>

                </div>

                <div className="dress-actions">

                    <button
                        className="random-button"
                        onClick={
                            randomOutfit
                        }
                    >
                        <Shuffle
                            size={17}
                        />
                        Random Look
                    </button>

                    <button
                        className="reset-button"
                        onClick={
                            resetOutfit
                        }
                    >
                        <RotateCcw
                            size={16}
                        />
                        Reset
                    </button>

                </div>

            </section>


            {/* =========================
                STUDIO
            ========================= */}

            <section className="dress-studio">

                {/* =========================
                    DOLL
                ========================= */}

                <div className="doll-panel">

                    <div className="doll-panel-decoration decoration-one">
                        ✦
                    </div>

                    <div className="doll-panel-decoration decoration-two">
                        ♡
                    </div>

                    <Doll
                        outfit={outfit}
                    />

                    <div className="doll-caption">
                        <Sparkles
                            size={15}
                        />
                        your look
                    </div>

                </div>


                {/* =========================
                    CLOTHING
                ========================= */}

                <div className="clothing-panel">

                    <div className="clothing-panel-header">

                        <div>

                            <span>
                                choose from
                                your closet
                            </span>

                            <h2>
                                Style it
                                <em>
                                    {" "}
                                    your way.
                                </em>
                            </h2>

                        </div>

                        <Heart
                            size={22}
                            strokeWidth={1.7}
                        />

                    </div>


                    {/* =========================
                        CATEGORIES
                    ========================= */}

                    <div className="dress-categories">

                        {categories.map(
                            (category) => (
                                <button
                                    key={
                                        category.id
                                    }
                                    className={
                                        activeCategory ===
                                        category.id
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        setActiveCategory(
                                            category.id
                                        )
                                    }
                                >
                                    {
                                        category.label
                                    }
                                </button>
                            )
                        )}

                    </div>


                    {/* =========================
                        ITEMS
                    ========================= */}

                    {categoryItems.length >
                    0 ? (

                        <div className="dress-items">

                            {categoryItems.map(
                                (item) => {

                                    const selected =
                                        getSelectedItem(
                                            item
                                        );

                                    return (
                                        <button
                                            key={
                                                item.id
                                            }
                                            className={`dress-item ${
                                                selected
                                                    ? "selected"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                selectItem(
                                                    item
                                                )
                                            }
                                        >

                                            <div className="dress-item-image">

                                                <img
                                                    src={
                                                        item.image
                                                    }
                                                    alt={
                                                        item.name
                                                    }
                                                />

                                                {selected && (
                                                    <span>
                                                        ✓
                                                    </span>
                                                )}

                                            </div>

                                            <p>
                                                {
                                                    item.name
                                                }
                                            </p>

                                        </button>
                                    );
                                }
                            )}

                        </div>

                    ) : (

                        /* =========================
                           EMPTY CATEGORY
                        ========================= */

                        <div className="empty-dress-category">

                            <div className="empty-category-icon">
                                <Shirt
                                    size={25}
                                />
                            </div>

                            <span>
                                No{" "}
                                {
                                    categories.find(
                                        (
                                            category
                                        ) =>
                                            category.id ===
                                            activeCategory
                                    )?.label
                                }{" "}
                                yet
                            </span>

                            <h3>
                                Add something
                                to your closet
                            </h3>

                            <p>
                                Add your own{" "}
                                {
                                    categories.find(
                                        (
                                            category
                                        ) =>
                                            category.id ===
                                            activeCategory
                                    )?.label.toLowerCase()
                                }{" "}
                                and they'll
                                show up here.
                            </p>

                            <Link
                                to="/closet"
                                className="category-closet-button"
                            >
                                Add to My Closet
                                <ArrowRight
                                    size={15}
                                />
                            </Link>

                        </div>

                    )}


                    {/* =========================
                        SAVE LOOK
                    ========================= */}

                    <button
                        className="save-look-button"
                        onClick={saveLook}
                    >
                        <Heart size={17} />
                        Save This Look
                    </button>

                    {/* =========================
                        SAVE MESSAGE
                    ========================= */}

                    {savedMessage && (
                        <div className="save-look-message">
                            {savedMessage}
                        </div>
                    )}

                    {/* =========================
                        VIEW SAVED LOOKS
                    ========================= */}

                    <button
                        className="view-saved-button"
                        onClick={
                            viewSavedLooks
                        }
                    >
                        View My Looks
                        <ArrowRight
                            size={15}
                        />
                    </button>

                </div>

            </section>

        </main>
    );
}

export default DressUp;