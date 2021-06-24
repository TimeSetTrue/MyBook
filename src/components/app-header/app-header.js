import React from 'react';

const AppHeader = ({liked, allPosts}) => {
    return(
        <div className="app-header d-flex">
            <h1>Andrey Altusov</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader;