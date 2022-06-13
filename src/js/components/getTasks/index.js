const getTasks = () => {
    return JSON.parse(localStorage.getItem('tasks')) ?? [];
}

export default getTasks;