import { Link } from "react-router-dom";
import {
    ArrowRight,
    Sparkles,
    Shirt,
    ShoppingBag,
    Footprints
} from "lucide-react";

import MoodSection from "../components/MoodSection";

import "../styles/home.css";

function Home() {
    return (
        <main className="home">

            {}

            <section className="hero">

                <div className="hero-content">

                    <div className="hero-sticker">
                        ✦ your little fashion world ✦
                    </div>

                    <h1>
                        Your closet,
                        <br />
                        <span>but make it cute.</span>
                    </h1>

                    <p>
                        Organize your favorite pieces, create
                        adorable outfits and dress your little
                        digital doll however you want.
                    </p>

                    <div className="hero-buttons">

                        <Link
                            to="/dress-up"
                            className="primary-btn"
                        >
                            Dress My Doll
                            <Sparkles size={17} />
                        </Link>

                        <Link
                            to="/closet"
                            className="secondary-btn"
                        >
                            Open My Closet
                            <ArrowRight size={17} />
                        </Link>

                    </div>

                </div>


                {}

                <div className="hero-scene">

                    <div className="cloud cloud-one"></div>

                    <div className="cloud cloud-two"></div>


                    <div className="closet-illustration">

                        <div className="closet-top">
                            <span>♡</span>
                            <span>♡</span>
                            <span>♡</span>
                        </div>

                        <div className="clothing-rack">

                            <div className="hanger hanger-one">
                                👚
                            </div>

                            <div className="hanger hanger-two">
                                👗
                            </div>

                            <div className="hanger hanger-three">
                                🧥
                            </div>

                            <div className="hanger hanger-four">
                                👚
                            </div>

                        </div>

                    </div>


                    <div className="hero-doll">

                        <div className="doll-hair">
                            ♡
                        </div>

                        <div className="doll-body">
                            ♡
                        </div>

                    </div>


                    <div className="hero-sparkle sparkle-one">
                        ✦
                    </div>

                    <div className="hero-sparkle sparkle-two">
                        ✧
                    </div>

                    <div className="hero-sparkle sparkle-three">
                        ✦
                    </div>

                </div>

            </section>


            {}

            <MoodSection />


            {}

            <section className="dress-section section">

                <div className="dress-card">

                    <div className="dress-text">

                        <span className="section-label">
                            make it yours ✦
                        </span>

                        <h2>
                            Create your
                            <br />
                            <em>digital doll.</em>
                        </h2>

                        <p>
                            Choose your skin tone, hair, eyes,
                            hijab and little details to create
                            a digital doll that's completely you.
                        </p>

                        <Link
                            to="/create-doll"
                            className="primary-btn"
                        >
                            Create My Doll
                            <Sparkles size={17} />
                        </Link>

                    </div>


                    <div className="dress-preview">

                        <div className="preview-circle"></div>

                        <div className="preview-doll">
                            ♡
                        </div>

                        <div className="floating-item floating-shirt">
                            👚
                        </div>

                        <div className="floating-item floating-bag">
                            👜
                        </div>

                        <div className="floating-item floating-shoe">
                            👟
                        </div>

                    </div>

                </div>

            </section>


            {}

            <section className="categories section">

                <div className="section-heading">

                    <div>

                        <span className="section-label">
                            explore your closet
                        </span>

                        <h2>
                            A place for all
                            <em> your favorites.</em>
                        </h2>

                    </div>

                </div>


                <div className="category-grid">

                    <Link
                        to="/closet"
                        className="category-card category-tops"
                    >

                        <div className="category-icon">
                            <Shirt
                                size={40}
                                strokeWidth={1.4}
                            />
                        </div>

                        <div>
                            <span>01</span>
                            <h3>Tops</h3>
                            <p>
                                Tees, shirts & sweaters
                            </p>
                        </div>

                    </Link>


                    <Link
                        to="/closet"
                        className="category-card category-dresses"
                    >

                        <div className="category-icon">
                            👗
                        </div>

                        <div>
                            <span>02</span>
                            <h3>Dresses</h3>
                            <p>
                                Pretty little things
                            </p>
                        </div>

                    </Link>


                    <Link
                        to="/closet"
                        className="category-card category-shoes"
                    >

                        <div className="category-icon">
                            <Footprints
                                size={40}
                                strokeWidth={1.4}
                            />
                        </div>

                        <div>
                            <span>03</span>
                            <h3>Shoes</h3>
                            <p>
                                Complete the look
                            </p>
                        </div>

                    </Link>


                    <Link
                        to="/closet"
                        className="category-card category-bags"
                    >

                        <div className="category-icon">
                            <ShoppingBag
                                size={40}
                                strokeWidth={1.4}
                            />
                        </div>

                        <div>
                            <span>04</span>
                            <h3>Accessories</h3>
                            <p>
                                The little details
                            </p>
                        </div>

                    </Link>

                </div>

            </section>


            {}

            <section className="final-cta">

                <div className="cta-stars">
                    ✦　✧　♡　✦
                </div>

                <span className="section-label">
                    ready when you are
                </span>

                <h2>
                    Let's create
                    <br />
                    something <em>cute.</em>
                </h2>

                <Link
                    to="/dress-up"
                    className="primary-btn"
                >
                    Dress My Doll
                    <Sparkles size={17} />
                </Link>

            </section>

        </main>
    );
}

export default Home;