const fetchUsersButton = document.querySelector('#fetch-users');
const usersList = document.querySelector('#users-list');
const App = {};

const openUserForm = (id) => {
    // find user object in App.users
    const user = App.users.find((user) => id === user.id);
    // open form with pre-filled inputs
    const form = document.querySelector('#user-form');
    form.setAttribute('style', 'display: block');
    form.querySelector('input[name="firstName"]').value = user.firstName;
    form.querySelector('input[name="lastName"]').value = user.lastName;
    form.querySelector('input[name="email"]').value = user.email;
};

fetchUsersButton.addEventListener('click', async () => {
    try {
        const response = await axios.get('https://dummyjson.com/users');
        App.users = response.data.users;
        const userElements = [];
        for (const user of App.users) {
            const userElement = document.createElement('li');
            const userDeleteButton = document.createElement('button');
            userDeleteButton.textContent = 'Delete';
            userDeleteButton.addEventListener('click', async () => {
                const url = `https://dummyjson.com/users/${user.id}`;
                try {
                    const response = await axios.delete(url);
                    console.log(response);
                    userElement.remove();
                } catch (err) {
                    console.error(err);
                } 
            });
            
            const userUpdateButton = document.createElement('button');
            userUpdateButton.textContent = 'Update';
            userUpdateButton.addEventListener('click', () => {
                openUserForm(user.id);
            });

            userElement.textContent = `${user.firstName} ${user.lastName} - ${user.email}`;
            userElement.append(userDeleteButton);
            userElement.append(userUpdateButton);
            userElements.push(userElement);
        }
        usersList.append(...userElements);
    } catch (err) {
        console.error(err);
    }
});