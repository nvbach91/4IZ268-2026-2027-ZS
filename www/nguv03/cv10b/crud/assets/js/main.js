const usersList = document.querySelector('#users-list');
const form = document.querySelector('#user-form');
const searchForm = document.querySelector('#search-form');

const openUserForm = (user) => {
    // open form with pre-filled inputs
    form.querySelector('input[name="firstName"]').value = user.firstName;
    form.querySelector('input[name="lastName"]').value = user.lastName;
    form.querySelector('input[name="email"]').value = user.email;
    form.querySelector('input[name="id"]').value = user.id;
};

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData);
    console.log(userData);
    const id = userData.id;
    try {
        const responseData = id ? await updateUser(id, userData) : await createUser(userData);
        console.log(responseData);
        form.reset();
    } catch (err) {
        console.error(err);
    }

});

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    const searchQuery = formData.get('q');
    const responseData = await searchUsers(searchQuery);
    usersList.innerHTML = '';
    const userElements = [];
    for (const user of responseData) {
        const userElement = createUserElement(user);
        userElements.push(userElement);
    }
    usersList.append(...userElements);
});

const createUserElement = (user) => {
    const userElement = document.createElement('li');
    const userDeleteButton = document.createElement('button');
    userDeleteButton.textContent = 'Delete';
    userDeleteButton.addEventListener('click', async () => {
        try {
            const responseData = await deleteUser(user);
            console.log(responseData);
            userElement.remove();
        } catch (err) {
            console.error(err);
        }
    });

    const userUpdateButton = document.createElement('button');
    userUpdateButton.textContent = 'Update';
    userUpdateButton.addEventListener('click', () => {
        openUserForm(user);
    });

    const displayPostsButton = document.createElement('button');
    displayPostsButton.textContent = 'Display posts';
    displayPostsButton.addEventListener('click', async () => {
        const responseData = await fetchUserPosts(user.id);
        const html = responseData.length === 0
            ? 'User does not have any posts'
            : responseData.map((post) => {
                const { title, body } = post;
                return `Title: ${title}, Body: ${body}`;
            }).join('<br><br>');
        Swal.fire({
            title: 'User posts',
            html,
            icon: 'success'
        });
    });

    userElement.textContent = `${user.firstName} ${user.lastName} - ${user.email}`;
    userElement.append(userDeleteButton);
    userElement.append(userUpdateButton);
    userElement.append(displayPostsButton);

    return userElement;
};

const fetchUserPosts = async (userId) => {
    const url = `https://dummyjson.com/users/${userId}/posts`;
    const response = await axios.get(url);
    return response.data.posts;
};

const searchUsers = async (searchQuery) => {
    const url = `https://dummyjson.com/users/search?q=${searchQuery}`;
    const response = await axios.get(url);
    return response.data.users;
};
const createUser = async (user) => {
    const url = 'https://dummyjson.com/users/add';
    const response = await axios.post(url, user);
    return response.data;
};
const deleteUser = async (user) => {
    const url = `https://dummyjson.com/users/${user.id}`;
    const response = await axios.delete(url);
    return response.data;
};
const updateUser = async (id, user) => {
    const url = `https://dummyjson.com/users/${id}`;
    const response = await axios.put(url, user);
    return response.data;
};
const fetchUsers = async (filters = {}) => {

    filters = {
        key: 'hair.color',
        value: 'White',
    };

    const url = `https://dummyjson.com/users/filter?key=${filters.key}&value=${filters.value}`;
    const response = await axios.get(url);
    return response.data.users;
};


// IIFE = immediately invoked function expression
(async () => {
    try {
        const responseData = await fetchUsers();
        const userElements = [];
        for (const user of responseData) {
            const userElement = createUserElement(user);
            userElements.push(userElement);
        }
        usersList.append(...userElements);
    } catch (err) {
        console.error(err);
    }
})();
