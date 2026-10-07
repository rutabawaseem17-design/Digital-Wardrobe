import { useState } from "react";
import {
    Check,
    ArrowLeft,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import "../styles/dressMe.css";


const topOptions = [
    {
        id: "none",
        label: "None",
    },
    {
        id: "basic",
        label: "Basic Tee",
        color: "#F3A6B6",
    },
    {
        id: "oversized",
        label: "Oversized Tee",
        color: "#AAB8A4",
    },
    {
        id: "sweater",
        label: "Sweater",
        color: "#D7B5C5",
    },
    {
        id: "cardigan",
        label: "Cardigan",
        // color: "#E8C7A8",
    },
    {
        id: "hoodie",
        label: "Hoodie",
        color: "#A8B7C8",
    },
];


const categories = [
    {
        id: "tops",
        label: "Tops",
    },
    {
        id: "bottoms",
        label: "Bottoms",
        comingSoon: true,
    },
    {
        id: "dresses",
        label: "Dresses",
        comingSoon: true,
    },
    {
        id: "outerwear",
        label: "Outerwear",
        comingSoon: true,
    },
    {
        id: "shoes",
        label: "Shoes",
        comingSoon: true,
    },
    {
        id: "accessories",
        label: "Accessories",
        comingSoon: true,
    },
];


function DressMe() {

    const [selectedTop, setSelectedTop] =
        useState("none");

    const [activeCategory, setActiveCategory] =
        useState("tops");


    const selectTop = (topId) => {
        setSelectedTop(topId);
    };


    const selectedItem = topOptions.find(
        (item) => item.id === selectedTop
    );


    return (

        <main className="dress-me-page">

            {/* ==================================================
                HEADER
            ================================================== */}

            <header className="dress-header">

                <Link
                    to="/"
                    className="dress-back"
                >
                    <ArrowLeft size={17} />
                    Back
                </Link>


                <div className="dress-title">

                    <span>
                        YOUR DIGITAL WARDROBE
                    </span>

                    <h1>
                        Dress <em>me.</em>
                    </h1>

                    <p>
                        Pick your pieces and create
                        your perfect look.
                    </p>

                </div>


                <div className="dress-sparkle">
                    <Sparkles size={18} />
                </div>

            </header>


            {/* ==================================================
                MAIN
            ================================================== */}

            <section className="dress-layout">


                {/* ==================================================
                    OUTFIT PREVIEW
                ================================================== */}

                <div className="dress-preview">

                    <span className="dress-preview-label">
                        YOUR LOOK
                    </span>


                    {/* PLAIN PINK STYLING AREA */}

                    <div className="outfit-canvas">

                        {selectedTop &&
                            selectedTop !== "none" && (

                            <div
                                className={`canvas-top canvas-${selectedTop}`}
                                style={{
                                    background:
                                        selectedItem?.color,
                                }}
                            >

                                <div className="canvas-neck" />

                                <div className="canvas-sleeve canvas-sleeve-left" />

                                <div className="canvas-sleeve canvas-sleeve-right" />

                            </div>

                        )}


                        {selectedTop === "none" && (

                            <div className="empty-outfit">

                                <div className="empty-outfit-icon">
                                    ✦
                                </div>

                                <h3>
                                    Start styling
                                </h3>

                                <p>
                                    Choose a piece from
                                    your wardrobe.
                                </p>

                            </div>

                        )}

                    </div>


                    {/* SELECTED ITEM INFO */}

                    <div className="dress-preview-info">

                        <strong>
                            {selectedItem?.id === "none"
                                ? "Your Look"
                                : selectedItem?.label}
                        </strong>

                        <span>
                            {selectedItem?.id === "none"
                                ? "nothing selected yet"
                                : "currently selected"}
                        </span>

                    </div>

                </div>


                {/* ==================================================
                    WARDROBE
                ================================================== */}

                <div className="wardrobe-panel">

                    <div className="wardrobe-heading">

                        <span>
                            Wardrobe
                        </span>

                        <h2>
                            Pick your <em>fit.</em>
                        </h2>

                    </div>


                    {/* ==================================================
                        CATEGORIES
                    ================================================== */}

                    <div className="wardrobe-categories">

                        {categories.map(
                            (category) => (

                                <button
                                    key={category.id}
                                    type="button"
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

                                    {category.label}

                                    {category.comingSoon && (
                                        <small>
                                            soon
                                        </small>
                                    )}

                                </button>

                            )
                        )}

                    </div>


                    {/* ==================================================
                        TOPS
                    ================================================== */}

                    {activeCategory === "tops" && (

                        <div className="clothing-options">

                            {topOptions.map(
                                (option) => {

                                    const selected =
                                        selectedTop ===
                                        option.id;

                                    return (

                                        <button
                                            key={option.id}
                                            type="button"
                                            className={`clothing-card ${
                                                selected
                                                    ? "selected"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                selectTop(
                                                    option.id
                                                )
                                            }
                                        >

                                            <div className="clothing-preview">

                                                {option.id ===
                                                    "none" ? (

                                                    <span className="none-symbol">
                                                        ×
                                                    </span>

                                                ) : (

                                                    <div
                                                        className={`mini-top mini-${option.id}`}
                                                        style={{
                                                            background:
                                                                option.color,
                                                        }}
                                                    />

                                                )}

                                            </div>


                                            <div className="clothing-name">

                                                <span>
                                                    {
                                                        option.label
                                                    }
                                                </span>

                                                {selected && (
                                                    <Check
                                                        size={15}
                                                    />
                                                )}

                                            </div>

                                        </button>

                                    );

                                }
                            )}

                        </div>

                    )}


                    {/* ==================================================
                        COMING SOON
                    ================================================== */}

                    {activeCategory !== "tops" && (

                        <div className="coming-soon">

                            <div>
                                ✦
                            </div>

                            <h3>
                                Coming soon
                            </h3>

                            <p>
                                More cute pieces are
                                being added to the wardrobe.
                            </p>

                        </div>

                    )}

                </div>

            </section>

        </main>
    );
}


export default DressMe;