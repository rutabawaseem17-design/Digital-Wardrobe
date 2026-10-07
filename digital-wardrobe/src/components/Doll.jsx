function Doll({ outfit }) {
    return (
        <div className="doll-stage">
            <div className="doll-character">

                {/* Body */}

                <div className="doll-layer doll-body-layer">
                    <div className="doll-body-placeholder" />
                </div>


                {/* Bottom */}

                {outfit.bottom && (
                    <div className="doll-layer doll-clothing-layer">
                        <img
                            src={outfit.bottom.image}
                            alt=""
                        />
                    </div>
                )}


                {/* Top */}

                {outfit.top && (
                    <div className="doll-layer doll-clothing-layer">
                        <img
                            src={outfit.top.image}
                            alt=""
                        />
                    </div>
                )}


                {/* Dress */}

                {outfit.dress && (
                    <div className="doll-layer doll-clothing-layer">
                        <img
                            src={outfit.dress.image}
                            alt=""
                        />
                    </div>
                )}


                {/* Shoes */}

                {outfit.shoes && (
                    <div className="doll-layer doll-clothing-layer">
                        <img
                            src={outfit.shoes.image}
                            alt=""
                        />
                    </div>
                )}


                {/* Accessories */}

                {outfit.accessory && (
                    <div className="doll-layer doll-clothing-layer">
                        <img
                            src={
                                outfit.accessory.image
                            }
                            alt=""
                        />
                    </div>
                )}

            </div>
        </div>
    );
}

export default Doll;