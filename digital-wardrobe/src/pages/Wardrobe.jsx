import { useEffect, useState } from "react";
import {
    Plus,
    Heart,
    Trash2,
    Shirt,
    Sparkles,
    ImagePlus,
    Upload,
} from "lucide-react";

import "../styles/wardrobe.css";

const categories = [
    {
        id: "all",
        label: "All",
    },
    {
        id: "tops",
        label: "Tops",
    },
    {
        id: "bottoms",
        label: "Bottoms",
    },
    {
        id: "dresses",
        label: "Dresses",
    },
    {
        id: "shoes",
        label: "Shoes",
    },
    {
        id: "accessories",
        label: "Accessories",
    },
];

function Wardrobe() {

    // =========================
    // CLOSET
    // =========================

    const [clothes, setClothes] = useState(() => {
        const saved = localStorage.getItem(
            "digitalWardrobe"
        );

        return saved ? JSON.parse(saved) : [];
    });

    const [activeCategory, setActiveCategory] =
        useState("all");

    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem(
            "wardrobeFavorites"
        );

        return saved ? JSON.parse(saved) : [];
    });

    // =========================
    // ADD ITEM MODAL
    // =========================

    const [showAddForm, setShowAddForm] =
        useState(false);

    const [newItem, setNewItem] = useState({
        name: "",
        category: "tops",
        color: "pink",
        image: "",
    });

    // =========================
    // SAVE CLOSET
    // =========================

    useEffect(() => {
        localStorage.setItem(
            "digitalWardrobe",
            JSON.stringify(clothes)
        );
    }, [clothes]);

    useEffect(() => {
        localStorage.setItem(
            "wardrobeFavorites",
            JSON.stringify(favorites)
        );
    }, [favorites]);

    // =========================
    // FILTER
    // =========================

    const filteredClothes =
        activeCategory === "all"
            ? clothes
            : clothes.filter(
                  (item) =>
                      item.category ===
                      activeCategory
              );

    // =========================
    // FAVORITE
    // =========================

    const toggleFavorite = (id) => {
        setFavorites((current) =>
            current.includes(id)
                ? current.filter(
                      (itemId) =>
                          itemId !== id
                  )
                : [...current, id]
        );
    };

    // =========================
    // DELETE
    // =========================

    const deleteItem = (id) => {
        setClothes((current) =>
            current.filter(
                (item) => item.id !== id
            )
        );

        setFavorites((current) =>
            current.filter(
                (itemId) => itemId !== id
            )
        );
    };

    // =========================
    // INPUT CHANGE
    // =========================

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setNewItem((current) => ({
            ...current,
            [name]: value,
        }));
    };

    // =========================
    // IMAGE UPLOAD
    // =========================

    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        if (!file) {
            return;
        }

        if (!file.type.startsWith("image/")) {
            alert("Please select an image file.");
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            setNewItem((current) => ({
                ...current,
                image: reader.result,
            }));
        };

        reader.readAsDataURL(file);
    };

    // =========================
    // ADD ITEM
    // =========================

    const addItem = (event) => {
        event.preventDefault();

        if (!newItem.name.trim()) {
            alert("Please enter an item name.");
            return;
        }

        if (!newItem.image) {
            alert("Please upload an image.");
            return;
        }

        const item = {
            id: Date.now(),
            name: newItem.name.trim(),
            category: newItem.category,
            color: newItem.color,
            image: newItem.image,
        };

        setClothes((current) => [
            item,
            ...current,
        ]);

        setNewItem({
            name: "",
            category: "tops",
            color: "pink",
            image: "",
        });

        setShowAddForm(false);
    };

    // =========================
    // CLOSE MODAL
    // =========================

    const closeModal = () => {
        setShowAddForm(false);

        setNewItem({
            name: "",
            category: "tops",
            color: "pink",
            image: "",
        });
    };

    return (
        <main className="wardrobe-page">

            {/* =========================
                HEADER
            ========================= */}

            <section className="wardrobe-header">

                <div>
                    <span className="wardrobe-label">
                        ✦ your personal wardrobe
                    </span>

                    <h1>
                        My
                        <em> Closet</em>
                    </h1>

                    <p>
                        Add your own clothes, build
                        your digital wardrobe, and
                        create looks from pieces you
                        actually own.
                    </p>
                </div>

                <button
                    className="add-item-button"
                    onClick={() =>
                        setShowAddForm(true)
                    }
                >
                    <Plus size={18} />
                    Add Item
                </button>

            </section>


            {/* =========================
                CATEGORY FILTERS
            ========================= */}

            {clothes.length > 0 && (
                <section className="wardrobe-toolbar">

                    <div className="wardrobe-categories">

                        {categories.map(
                            (category) => (
                                <button
                                    key={category.id}
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
                                </button>
                            )
                        )}

                    </div>

                    <span className="item-count">
                        {filteredClothes.length}{" "}
                        {filteredClothes.length === 1
                            ? "piece"
                            : "pieces"}
                    </span>

                </section>
            )}


            {/* =========================
                CLOSET
            ========================= */}

            {filteredClothes.length > 0 ? (

                <section className="wardrobe-grid">

                    {filteredClothes.map(
                        (item) => (
                            <article
                                className="clothing-card"
                                key={item.id}
                            >

                                <div className="clothing-image">

                                    <img
                                        src={
                                            item.image
                                        }
                                        alt={
                                            item.name
                                        }
                                    />

                                    <button
                                        className={`clothing-heart ${
                                            favorites.includes(
                                                item.id
                                            )
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            toggleFavorite(
                                                item.id
                                            )
                                        }
                                        aria-label="Favorite item"
                                    >
                                        <Heart
                                            size={18}
                                            fill={
                                                favorites.includes(
                                                    item.id
                                                )
                                                    ? "currentColor"
                                                    : "none"
                                            }
                                        />
                                    </button>

                                    <button
                                        className="delete-item"
                                        onClick={() =>
                                            deleteItem(
                                                item.id
                                            )
                                        }
                                        aria-label="Delete item"
                                    >
                                        <Trash2
                                            size={16}
                                        />
                                    </button>

                                </div>

                                <div className="clothing-info">

                                    <div>

                                        <span>
                                            {
                                                item.category
                                            }
                                        </span>

                                        <h3>
                                            {
                                                item.name
                                            }
                                        </h3>

                                    </div>

                                    <div
                                        className={`color-dot ${item.color}`}
                                    />

                                </div>

                            </article>
                        )
                    )}

                </section>

            ) : (

                /* =========================
                    EMPTY CLOSET
                ========================= */

                <section className="empty-wardrobe">

                    <div className="empty-icon">
                        <Shirt size={30} />
                    </div>

                    <span className="empty-label">
                        ✦ nothing here yet
                    </span>

                    <h2>
                        Your closet is waiting
                        for you ♡
                    </h2>

                    <p>
                        Upload photos of your own
                        clothes and start building
                        your digital wardrobe.
                    </p>

                    <button
                        onClick={() =>
                            setShowAddForm(true)
                        }
                    >
                        <ImagePlus size={17} />
                        Add Your First Item
                    </button>

                </section>
            )}


            {/* =========================
                BOTTOM NOTE
            ========================= */}

            {clothes.length > 0 && (
                <div className="wardrobe-note">

                    <Sparkles size={16} />

                    <span>
                        Your closet, your clothes,
                        your style.
                    </span>

                </div>
            )}


            {/* =========================
                ADD ITEM MODAL
            ========================= */}

            {showAddForm && (

                <div
                    className="modal-overlay"
                    onClick={closeModal}
                >

                    <div
                        className="add-item-modal"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        <button
                            className="modal-close"
                            onClick={closeModal}
                        >
                            ×
                        </button>

                        <span className="modal-label">
                            ✦ add to your wardrobe
                        </span>

                        <h2>
                            Add something
                            <em> cute.</em>
                        </h2>

                        <p>
                            Upload a photo of something
                            from your real closet.
                        </p>


                        <form
                            onSubmit={addItem}
                        >

                            {/* =========================
                                IMAGE UPLOAD
                            ========================= */}

                            <div className="image-upload-area">

                                {newItem.image ? (

                                    <div className="image-preview">

                                        <img
                                            src={
                                                newItem.image
                                            }
                                            alt="Preview"
                                        />

                                        <button
                                            type="button"
                                            className="change-image-button"
                                            onClick={() =>
                                                document
                                                    .getElementById(
                                                        "clothing-image-input"
                                                    )
                                                    .click()
                                            }
                                        >
                                            <Upload
                                                size={14}
                                            />
                                            Change Image
                                        </button>

                                    </div>

                                ) : (

                                    <label
                                        htmlFor="clothing-image-input"
                                        className="image-upload-box"
                                    >

                                        <div className="upload-icon">
                                            <ImagePlus
                                                size={27}
                                            />
                                        </div>

                                        <strong>
                                            Upload clothing
                                            photo
                                        </strong>

                                        <span>
                                            PNG, JPG or WEBP
                                        </span>

                                    </label>

                                )}

                                <input
                                    id="clothing-image-input"
                                    type="file"
                                    accept="image/png,image/jpeg,image/webp"
                                    onChange={
                                        handleImageUpload
                                    }
                                    hidden
                                />

                            </div>


                            {/* =========================
                                ITEM NAME
                            ========================= */}

                            <label>
                                Item name

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="e.g. Pink cardigan"
                                    value={
                                        newItem.name
                                    }
                                    onChange={
                                        handleInputChange
                                    }
                                />
                            </label>


                            {/* =========================
                                CATEGORY
                            ========================= */}

                            <label>
                                Category

                                <select
                                    name="category"
                                    value={
                                        newItem.category
                                    }
                                    onChange={
                                        handleInputChange
                                    }
                                >

                                    <option value="tops">
                                        Tops
                                    </option>

                                    <option value="bottoms">
                                        Bottoms
                                    </option>

                                    <option value="dresses">
                                        Dresses
                                    </option>

                                    <option value="shoes">
                                        Shoes
                                    </option>

                                    <option value="accessories">
                                        Accessories
                                    </option>

                                </select>

                            </label>


                            {/* =========================
                                COLOR
                            ========================= */}

                            <label>
                                Color

                                <select
                                    name="color"
                                    value={
                                        newItem.color
                                    }
                                    onChange={
                                        handleInputChange
                                    }
                                >

                                    <option value="pink">
                                        Pink
                                    </option>

                                    <option value="red">
                                        Red
                                    </option>

                                    <option value="orange">
                                        Orange
                                    </option>

                                    <option value="yellow">
                                        Yellow
                                    </option>

                                    <option value="butter">
                                        Butter Yellow
                                    </option>

                                    <option value="green">
                                        Green
                                    </option>

                                    <option value="sage">
                                        Sage
                                    </option>

                                    <option value="mint">
                                        Mint
                                    </option>

                                    <option value="blue">
                                        Blue
                                    </option>

                                    <option value="sky">
                                        Sky Blue
                                    </option>

                                    <option value="navy">
                                        Navy
                                    </option>

                                    <option value="purple">
                                        Purple
                                    </option>

                                    <option value="lavender">
                                        Lavender
                                    </option>

                                    <option value="brown">
                                        Brown
                                    </option>

                                    <option value="beige">
                                        Beige
                                    </option>

                                    <option value="cream">
                                        Cream
                                    </option>

                                    <option value="white">
                                        White
                                    </option>

                                    <option value="gray">
                                        Gray
                                    </option>

                                    <option value="black">
                                        Black
                                    </option>

                                </select>

                            </label>


                            {/* =========================
                                SUBMIT
                            ========================= */}

                            <button
                                type="submit"
                                className="save-item-button"
                            >
                                <Plus size={18} />
                                Add to My Closet
                            </button>

                        </form>

                    </div>

                </div>

            )}

        </main>
    );
}

export default Wardrobe;