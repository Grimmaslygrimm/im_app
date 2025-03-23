
import React from 'react';
import ReactDOM from 'react-dom/client';
import friendStorage from './friend-storage.js';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App 
        FriendGrid={friendStorage.getItems()}
        onSaveItems={friendStorage.saveItems}
    />
);