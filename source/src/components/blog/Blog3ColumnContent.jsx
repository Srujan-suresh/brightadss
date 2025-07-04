import SingleBlog3Column from './SingleBlog3Column';
import BlogData from '@/assets/jsonData/blog/BlogData.json';

const Blog3ColumnContent = () => {
    // Show only the first 6 blog posts
    const currentBlogData = BlogData.slice(0, 6);

    return (
        <div className="blog-area home-blog blog-grid default-padding-bottom">
            <div className="container">
                <div className="blog-item-box">
                    <div className="row">
                        {currentBlogData.map(blog =>
                            <div className="col-xl-4 col-md-6 col-lg-6 mb-50" key={blog.id}>
                                <SingleBlog3Column blog={blog} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog3ColumnContent;
