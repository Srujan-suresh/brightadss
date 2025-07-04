const Preloader = () => {
    return (
        <>
            <div id="preloader">
                <div id="gixus-preloader" className="gixus-preloader">
                    <div className="animation-preloader">
                        <div className="spinner" />
                        <div className="txt-loading">
                            <span data-text-preloader="BR" className="letters-loading">
                                BR
                            </span>
                            <span data-text-preloader="IG" className="letters-loading">
                                IG
                            </span>
                            <span data-text-preloader="HT" className="letters-loading">
                                HT
                            </span>
                            <span data-text-preloader="AD" className="letters-loading">
                                AD
                            </span>
                            <span data-text-preloader="S" className="letters-loading">
                                S
                            </span>
                        </div>
                    </div>
                    <div className="loader">
                        <div className="row">
                            <div className="col-3 loader-section section-left">
                                <div className="bg" />
                            </div>
                            <div className="col-3 loader-section section-left">
                                <div className="bg" />
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg" />
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Preloader;