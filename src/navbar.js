import {useState} from 'react';
import { Link } from 'react-router-dom';
import { getTabs } from './data/repository';

const Navbar = () => {
    const tabs = getTabs();
    const [activeTab, setActiveTab] = useState(1);

    function handleTab(e, tab) {
        setActiveTab(tab.id);
    }

    return ( 
        <nav>
            <div className="container">
                <a href="/" className="title">Title</a>
                <ul>
                    {tabs.map(tab => 
                        <li
                            key={tab.id}
                            onClick={(e) => handleTab(e, tab)}
                            className={activeTab === tab.id ? "active" : ""}>
                                <Link to={tab.url}>{tab.text}</Link>
                        </li>    
                    )}
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;