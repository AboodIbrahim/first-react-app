import BlogList from './blogList';
import useFetch from './useFetch';

const Home = () => {
    const {data:blogs} = useFetch("http://localhost:8000/blogs");

    const handleDelete = (id) => {
        // const newBlogs = blogs.filter(b => b.id !== id);
        // setBlogs(newBlogs);
    }

    return ( 
        <section className="content">
            {blogs ?
                <div className="container">
                    <BlogList title="Top" blogs={blogs.filter(b => !b.favorite)} onDelete={handleDelete}/>
                    <BlogList title="Latest" blogs={blogs.filter(b => b.favorite)} onDelete={handleDelete}/>
                </div> :
                <div className="loading">Loading...</div>
            }
        </section>
    );
}
 
export default Home;