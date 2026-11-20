const fetchUsersButton = document.querySelector('#fetch-users');
const usersList = document.querySelector('#users');

fetchUsersButton.addEventListener('click', async () => {
    try {
        const response = await axios.get('https://dummyjson.com/users');
        console.log(response.data);
        const users = response.data.users;
        const userElements = [];
        for (const user of users) {
            const userElement = document.createElement('li');
            userElement.textContent = `${user.firstName} ${user.lastName} - ${user.email}`;
            const userDeleteButton = document.createElement('button');
            userDeleteButton.textContent = 'delete';
            userDeleteButton.addEventListener('click', async () => {
                try {
                    const response = await axios.delete(`https://dummyjson.com/users/${user.id}`);
                    console.log('User', user.id, 'deleted', response);
                    userElement.remove();
                } catch (err) {
                    console.error(err);
                }

            });
            userElement.append(userDeleteButton);
            userElements.push(userElement);

        }
        // console.log(userElements);
        usersList.append(...userElements);
    } catch (err) {
        console.error(err);
    }
});