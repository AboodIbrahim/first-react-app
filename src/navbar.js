import {useState} from 'react';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        {
            id: 1,
            text: "Home",
            url: "",
        },
        {
            id: 2,
            text: "Create",
            url: "/create",
        },
    ]

    function handleTab(e, tab) {
        e.preventDefault();
        setActiveTab(tab.id);
    }

    return ( 
        <nav>
            <div className="container">
                <a href="" className="title">Title</a>
                <ul>
                    {tabs.map(tab => 
                        <li
                            key={tab.id}
                            onClick={(e) => handleTab(e, tab)}
                            className={activeTab == tab.id ? "active" : ""}>
                                <a href={tab.url}>{tab.text}</a>
                        </li>    
                    )}
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;