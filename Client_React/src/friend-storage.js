export default {
    getItems() {
        let items = localStorage.getItem('friend-grid');

        if (items) {
            return JSON.parse(items);
        } else {
            return [];
        }
    },

    saveItems(items) {
        localStorage.setItem('friend-grid', JSON.stringify(items));
    }
}