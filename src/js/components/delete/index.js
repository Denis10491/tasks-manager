const remove = () => {
    document.querySelectorAll('#delete').forEach(element => {
        element.addEventListener('click', function() {
            let item = this.parentNode.parentNode;
            delete localStorage[item.id];
            item.remove();
        });
    });
}

export default remove;