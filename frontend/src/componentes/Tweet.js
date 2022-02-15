import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';

function Tweet() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/tweet');
        const items = await data.json();
        setItems(items);
    };

    return(
        <section>
            {
            items.map(item => (
                <div >
                    <div >
                        <div >
                            <div >
                                <h6>{item.name}</h6>
                                <p>{item.msg}</p>
                                <p><i>by {item.username}</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </section>
    );
}

export default Tweet;