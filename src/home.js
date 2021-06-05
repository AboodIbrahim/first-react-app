import {useState} from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {id: 1, title: "How to use Photoshop", author: "Tom macherony"},
        {id: 2, title: "Best programing language in 2021", author: "Robert Jake"},
        {id: 3, title: "What to do when you're bored", author: "Anonymouse"},
    ]);

    return ( 
        <section className="content">
            <div className="container">
                <h1>Home Page</h1>

                <div className="blogs">
                    {blogs.map(blog => 
                        <div key={blog.id} className="blog-preview">
                            <h2 className="title">{blog.title}</h2>
                            <p className="author">{blog.author}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
 
export default Home;