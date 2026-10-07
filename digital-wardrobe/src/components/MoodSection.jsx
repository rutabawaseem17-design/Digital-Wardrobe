import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import "../styles/moodSection.css";

const moods = [
    {
        id: "soft",
        name: "Soft Girl",
        description: "Pretty details, soft colors & romantic little touches.",
        className: "mood-pink",
        symbols: ["♡", "✦", "✿"],
    },
    {
        id: "cozy",
        name: "Cozy",
        description: "Comfy layers, warm tones & staying cute indoors.",
        className: "mood-butter",
        symbols: ["☁", "♡", "✦"],
    },
    {
        id: "clean",
        name: "Clean & Simple",
        description: "Neutral tones, simple pieces & effortlessly put together.",
        className: "mood-sage",
        symbols: ["✦", "○", "♡"],
    },
    {
        id: "main",
        name: "Main Character",
        description: "A little extra, a little dramatic, completely you.",
        className: "mood-lilac",
        symbols: ["✧", "♡", "★"],
    },
    {
        id: "night",
        name: "Night Out",
        description: "Statement pieces, darker tones & a little confidence.",
        className: "mood-brown",
        symbols: ["✦", "♡", "⋆"],
    },
];

function MoodSection() {
    const [selectedMood, setSelectedMood] = useState(moods[0]);

    return (
        <section className="mood-section">
            <div className="mood-header">
                <div>
                    <span className="section-label">
                        outfit moodboard ✦
                    </span>

                    <h2>
                        What's the
                        <em> vibe?</em>
                    </h2>

                    <p>
                        Pick a mood and let's find a look
                        that feels like you.
                    </p>
                </div>

                <div className="mood-selected-note">
                    <Sparkles size={15} />
                    <span>{selectedMood.name}</span>
                </div>
            </div>

            <div className="mood-grid">
                {moods.map((mood) => (
                    <button
                        key={mood.id}
                        className={`mood-card ${mood.className} ${
                            selectedMood.id === mood.id
                                ? "selected"
                                : ""
                        }`}
                        onClick={() => setSelectedMood(mood)}
                    >
                        <div className="mood-symbols">
                            {mood.symbols.map((symbol, index) => (
                                <span key={index}>{symbol}</span>
                            ))}
                        </div>

                        <div className="mood-card-content">
                            <span>mood {moods.indexOf(mood) + 1}</span>

                            <h3>{mood.name}</h3>
                        </div>

                        <div className="mood-arrow">
                            <ArrowRight size={17} />
                        </div>
                    </button>
                ))}
            </div>

            <div className="selected-mood">
                <div>
                    <span className="selected-mood-label">
                        currently feeling
                    </span>

                    <h3>
                        {selectedMood.name}
                        <span> ♡</span>
                    </h3>

                    <p>{selectedMood.description}</p>
                </div>

                <Link
                    to="/dress-up"
                    className="mood-style-button"
                >
                    Style this vibe
                    <ArrowRight size={16} />
                </Link>
            </div>
        </section>
    );
}

export default MoodSection;