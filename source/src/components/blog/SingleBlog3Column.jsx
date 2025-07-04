import { Link } from 'react-router-dom';
import Animation from '../animation/Animation';

const SingleBlog3Column = ({ blog }) => {
    const { id, thumb, date, title,text, btnText, tag } = blog

    return (
        <>
            <Animation className='animate__animated animate__fadeInUp' delay='100ms'>
                <div className="home-blog-style-one-item animate">
                    <div className="home-blog-thumb">
                        <Link to={`/blog-single-with-sidebar/${id}`}>
                            <img src={`/assets/img/blog/${thumb}`} alt="Thumb" />
                        </Link>
                        <ul className="home-blog-meta">
                            <li>
                                <Link to="#" >{tag}</Link>
                            </li>
                            <li>{date}</li>
                        </ul>
                    </div>
                    <div className="content">
                        <div className="info">
                            <h4 className="blog-title">
                                <Link to={`/contact-us`}>{title}</Link>
                            </h4>
                            

                            {/* 🔽 This is where you display the description text */}
                            <p className="blog-description">{text}</p>

                            <Link to={`/contact-us`} className="btn-apply-now" >{btnText} <i className="fas fa-long-arrow-right" /></Link>
                            
                        </div>
                    </div>
                </div>
            </Animation >
        </>
    );
};

export default SingleBlog3Column;