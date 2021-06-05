const BlogList = ({title, blogs, onDelete}) => {
    return (
        <div className="blogs">
            {blogs.length !== 0 && <h2>{title}</h2>}

            {blogs.map(blog => 
                <div key={blog.id} className="blog-preview">
                    <div>
                        <h3 className="title">{blog.title}</h3>
                        <p className="author">{blog.author}</p>
                    </div>
                    <button className="delete-btn" onClick={() => onDelete(blog.id)}>Delete</button>
                </div>
            )}
        </div>
    );
}
 
export default BlogList;