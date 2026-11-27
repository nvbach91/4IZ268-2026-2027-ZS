
const usersList = document.querySelector('#users');
const userForm = document.querySelector('#user-form');
userForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const userData = Object.fromEntries(formData);
    const id = userData.id;
    try {
        const responseData = id ? await updateUser(id, userData) : await createUser(userData);
        console.log(responseData);
        userForm.reset();
    } catch (e) {
        console.error(e);
    }
});
const createUserElement = (user) => {
    const userElement = document.createElement('li');
    userElement.textContent = `${user.firstName} ${user.lastName} - ${user.email}`;
    const userDeleteButton = document.createElement('button');
    userDeleteButton.textContent = 'Delete';
    userDeleteButton.addEventListener('click', async () => {
        try {
            const response = await deleteUser(user.id);
            console.log('User', user.id, 'deleted', response);
            userElement.remove();
        } catch (err) {
            console.error(err);
        }
    });
    const userUpdateButton = document.createElement('button');
    userUpdateButton.textContent = 'Update';
    userUpdateButton.addEventListener('click', () => {
        userForm.querySelector('input[name="firstName"]').value = user.firstName;
        userForm.querySelector('input[name="lastName"]').value = user.lastName;
        userForm.querySelector('input[name="email"]').value = user.email;
        userForm.querySelector('input[name="id"]').value = user.id;
    });

    const showPostsButton = document.createElement('button');
    showPostsButton.textContent = 'Show posts';
    showPostsButton.addEventListener('click', async () => {
        const responseData = await fetchPosts(user.id);
        const html = responseData.length === 0
            ? 'User has 0 posts'
            : responseData.map((post) => {
                return `Title: ${post.title}<br><br>${post.body}`;
            });
        Swal.fire({
            title: 'Posts',
            html,
            icon: "success"
        });
    });

    userElement.append(userDeleteButton);
    userElement.append(userUpdateButton);
    userElement.append(showPostsButton);
    return userElement;
};
const updateUser = async (id, userData) => {
    const url = `https://dummyjson.com/users/${id}`;
    const response = await axios.put(url, userData); // volat PUT
    return response.data;
};
const createUser = async (userData) => {
    const url = 'https://dummyjson.com/users/add';
    const response = await axios.post(url, userData); // volat POST
    return response.data;
};
const deleteUser = async (id) => {
    const response = await axios.delete(`https://dummyjson.com/users/${id}`);
    return response.data;
};
const fetchUsers = async (filters = {}) => {
    /*
    {
        'hair.color': 'Blonde',
    }
    */
    const keys = Object.keys(filters);
    let key = ''; // ??
    let value = ''; // ??
    for (const k of keys) {
        key = k;
        value = filters[k];
    }
    const url = `https://dummyjson.com/users/filter?key=${key}&value=${value}`;
    const response = await axios.get(url);
    return response.data.users;
};
const fetchPosts = async (userId) => {
    const url = `https://dummyjson.com/users/${userId}/posts`;
    const response = await axios.get(url);
    return response.data.posts;
};
// IIFE = immediately invoked function expression
(async () => {
    try {
        const users = await fetchUsers();
        const userElements = [];
        for (const user of users) {
            const userElement = createUserElement(user);
            userElements.push(userElement);
        }
        usersList.append(...userElements);
    } catch (err) {
        console.error(err);
    }
})();
