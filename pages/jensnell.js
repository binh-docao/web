
import Seo from "../components/Seo";
import Portfolio from "../components/portfolio/jensnell";
import Sidebar from "../components/sidebar/Sidebar";
import Link from 'next/link';

const index = () => {
    return (
        <>
            <Seo pageTitle="Jen Snell" imageUrl="/img/portfolio/jensnell/1.jpg"></Seo>
            <Sidebar />
            <div className="rightpart">
                <div className="rightpart_in">
                    <div className="tokyo_tm_section">
                        <div className="container">
                            <div className="tokyo_tm_portfolio">
                                <div className="tokyo_tm_title">
                                    <div className="title_flex">
                                        <div className="left">
                                            <Link href="/portfolio">
                                                <div className="back-to-portfolio">
                                                    ← Back to Portfolio
                                                </div>
                                            </Link>
                                            <h3>Jen Snell</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio_filter">
                                    <Portfolio />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
