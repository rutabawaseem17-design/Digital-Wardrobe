import { useEffect, useState } from "react";
import {
    Check,
    Sparkles,
    RotateCcw,
    Save,
} from "lucide-react";
import { Link } from "react-router-dom";

import CustomDoll from "../components/CustomDoll";
import "../styles/DollCreator.css";


const options = {

    skin: [
        {
            id: "fair",
            label: "Fair",
            color: "#F8D8C5",
        },
        {
            id: "light",
            label: "Light",
            color: "#EFC1A8",
        },
        {
            id: "warm",
            label: "Warm",
            color: "#D99D7D",
        },
        {
            id: "tan",
            label: "Tan",
            color: "#B97958",
        },
        {
            id: "deep",
            label: "Deep",
            color: "#875239",
        },
    ],

    hair: [
        {
            id: "longWavy",
            label: "Long Wavy",
        },
        {
            id: "curtain",
            label: "Curtain",
        },
        {
            id: "clipped",
            label: "Clipped",
        },
        {
            id: "braids",
            label: "Braids",
        },
        {
            id: "buns",
            label: "Double Buns",
        },
        {
            id: "wavyClips",
            label: "Wavy Clips",
        },
    ],

    hairColor: [
        {
            id: "brown",
            label: "Brown",
            color: "#4A3026",
        },
        {
            id: "black",
            label: "Black",
            color: "#241F1D",
        },
        {
            id: "chestnut",
            label: "Chestnut",
            color: "#7A4935",
        },
        {
            id: "blonde",
            label: "Blonde",
            color: "#C89E62",
        },
    ],

    eyes: [
        {
            id: "soft",
            label: "Soft",
        },
        {
            id: "round",
            label: "Round",
        },
        {
            id: "happy",
            label: "Happy",
        },
    ],

    hijab: [
        {
            id: "none",
            label: "None",
        },
        {
            id: "sage",
            label: "Sage",
        },
        {
            id: "pink",
            label: "Pink",
        },
        {
            id: "cream",
            label: "Cream",
        },
    ],

    extras: [
        {
            id: "none",
            label: "None",
        },
        {
            id: "glasses",
            label: "Glasses",
        },
        {
            id: "heart",
            label: "Heart Clip",
        },
    ],

    background: [
        {
            id: "cream",
            label: "Cream",
            color: "#FFF9F1",
        },
        {
            id: "pink",
            label: "Pink",
            color: "#F6DDE2",
        },
        {
            id: "sage",
            label: "Sage",
            color: "#C9D8C0",
        },
        {
            id: "butter",
            label: "Butter",
            color: "#F4E7B2",
        },
    ],
};


const defaultDoll = {
    skin: "fair",
    hair: "longWavy",
    hairColor: "brown",
    eyes: "soft",
    hijab: "none",
    extras: "none",
    background: "cream",
    top: "none",
};


function DollCreator() {

    const [doll, setDoll] = useState(defaultDoll);

    const [activeTab, setActiveTab] = useState("skin");

    const [saved, setSaved] = useState(false);


    useEffect(() => {

        const savedDoll =
            localStorage.getItem("myDigitalDoll");

        if (savedDoll) {

            try {

                setDoll(JSON.parse(savedDoll));

            } catch {

                setDoll(defaultDoll);

            }

        }

    }, []);


    const selectOption = (value) => {

        setDoll((previous) => ({
            ...previous,
            [activeTab]: value,
        }));

        setSaved(false);
    };


    const resetDoll = () => {

        setDoll(defaultDoll);

        setSaved(false);
    };


    const saveDoll = () => {

        localStorage.setItem(
            "myDigitalDoll",
            JSON.stringify(doll)
        );

        setSaved(true);
    };


    const currentBackground =
        options.background.find(
            (item) => item.id === doll.background
        )?.color || "#FFF9F1";


    return (

        <main className="doll-creator-page">

            {/* ==================================================
                HEADER
            ================================================== */}

            <header className="creator-header">

                <div>

                    <span className="creator-label">
                        Build your little character
                    </span>

                    <h1>
                        Create your <em>doll.</em>
                    </h1>

                    <p>
                        Pick the little details that make
                        your doll feel like you.
                    </p>

                </div>


                <Link
                    to="/"
                    className="creator-skip"
                >
                    Maybe later
                </Link>

            </header>


            {/* ==================================================
                CREATOR
            ================================================== */}

            <section className="doll-creator">


                {/* ==================================================
                    PREVIEW
                ================================================== */}

                <div
                    className="doll-preview-panel"
                    style={{
                        background: currentBackground,
                    }}
                >

                    <span className="preview-label">
                        YOUR DOLL
                    </span>


                    <span className="preview-decoration decoration-star">
                        ✦
                    </span>


                    <span className="preview-decoration decoration-heart">
                        ♡
                    </span>


                    {/* STATIC DOLL */}

                    <div className="creator-doll">

                        <CustomDoll doll={doll} />

                    </div>


                    {/* <div className="preview-name">

                        <strong>
                            My Doll
                        </strong>

                        <span>
                            your little digital twin
                        </span>

                    </div> */}

                </div>


                {/* ==================================================
                    CONTROLS
                ================================================== */}

                <div className="creator-controls">

                    <div className="controls-header">

                        <div>

                            <span>
                                Customize
                            </span>

                            <h2>
                                Make it <em>you.</em>
                            </h2>

                        </div>


                        <button
                            type="button"
                            className="reset-doll"
                            onClick={resetDoll}
                        >
                            <RotateCcw size={13} />

                            Reset
                        </button>

                    </div>


                    {/* ==================================================
                        TABS
                    ================================================== */}

                    <div className="creator-tabs">

                        {Object.keys(options).map(
                            (category) => (

                                <button
                                    key={category}
                                    type="button"
                                    className={
                                        activeTab === category
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        setActiveTab(category)
                                    }
                                >
                                    {category === "hairColor"
                                        ? "Hair Color"
                                        : category}
                                </button>

                            )
                        )}

                    </div>


                    {/* ==================================================
                        OPTIONS
                    ================================================== */}

                    <div className="creator-options">

                        {options[activeTab].map(
                            (option) => {

                                const selected =
                                    doll[activeTab] === option.id;

                                return (

                                    <button
                                        key={option.id}
                                        type="button"
                                        className={`creator-option ${
                                            selected
                                                ? "selected"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            selectOption(
                                                option.id
                                            )
                                        }
                                    >

                                        {option.color ? (

                                            <span
                                                className="option-color"
                                                style={{
                                                    background:
                                                        option.color,
                                                }}
                                            />

                                        ) : (

                                            <span className="option-preview">
                                                {activeTab ===
                                                "hair"
                                                    ? "♡"
                                                    : "✦"}
                                            </span>

                                        )}


                                        <span>
                                            {option.label}
                                        </span>


                                        {selected && (
                                            <Check size={15} />
                                        )}

                                    </button>

                                );

                            }
                        )}

                    </div>


                    {/* ==================================================
                        SAVE
                    ================================================== */}

                    <div className="creator-save-area">

                        <button
                            type="button"
                            className="save-doll-button"
                            onClick={saveDoll}
                        >

                            {saved ? (
                                <>
                                    <Check size={16} />

                                    Doll saved
                                </>
                            ) : (
                                <>
                                    <Save size={16} />

                                    Save my doll
                                </>
                            )}

                        </button>


                        {saved && (
                            <div className="doll-save-message">

                                <Sparkles size={13} />

                                Your doll is ready for Dress Me.

                            </div>
                        )}

                    </div>

                </div>

            </section>

        </main>
    );
}

export default DollCreator;