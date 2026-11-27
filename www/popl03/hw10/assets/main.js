const CLIENT_ID = 'Ov23li5FlwcYPKNvt44C';
const CLIENT_SECRET = '73cdeb6ebf9b844716f5064d0f9bcdca46ff423a';
const BASE_API_URL = 'https://api.github.com';

const userProfileContainer = $('#user-profile')
const userRepos = $('#repos')

// fetch user
const fetchUser = async (username) => {
    const url = `${BASE_API_URL}/users/${username}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return $.ajax({ url: url, method: 'GET' });
}
// fetch repos
const fetchRepositories = async (userLogin) => {
    const url = `${BASE_API_URL}/users/${userLogin}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return await $.ajax({ url: url, method: 'GET' });
};
// display data of user
const displayUser = (user) => {
    const html = `
    <div class="profile-card">
      <h2>${user.name || user.login}</h2>
      <div>
        <img src="${user.avatar_url}" alt="${user.login}" width="150" />
        <div class="info">
          <p>Login: <span>${user.login}</span></p>
          <p>Bio: <span>${user.bio || 'neuvedeno'}</span></p>
          <p>Location: <span>${user.location || 'neuvedeno'}</span></p>
          <p>Registered: <span>${user.created_at ? new Date(user.created_at).toLocaleDateString('cs-CZ') : 'neuvedeno'}</span></p>
          <p>Followers: <span>${user.followers}</span></p>
          <a href="${user.html_url}">${user.html_url}</a>
        </div>
      </div>
    </div>
  `
    userProfileContainer.html(html)
};

// display user repos
const displayRepositories = async (repositories) => {
    let reposHtml = `<h2>Repositories</h2>`
    reposHtml += `<div class="list">`
    reposHtml += `<h3>This user has ${repositories.length} repositories </h3>`
    repositories.forEach(repo => {
        reposHtml += `<p><a href="${repo.html_url}" target="_blank">${repo.name}</a> | ${repo.url}</p>`;
    });
    reposHtml += '</div>';

    $("#repos").html(reposHtml);
};

// form resolve
$("#form").on('submit', async (e) => {
    e.preventDefault();
    const username = $('#u-name-input').val().trim();

    if (!username) return;

    userProfileContainer.empty();
    try {
        const userProfile = await fetchUser(username);
        displayUser(userProfile)

        const repos = await fetchRepositories(username);
        displayRepositories(repos);
    } catch (err) {
        userProfileContainer.empty().append('<p>User not found</p>');
    }
})