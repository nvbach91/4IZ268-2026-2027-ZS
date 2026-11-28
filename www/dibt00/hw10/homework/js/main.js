/**
 * Git The Hub
 */
// It is best practice to create variables and functions under one object to avoid global polution
const App = {};

// Dobrý den, omlouvám se, ale až moc si vážím svého github účtu na to abych sem dával token :D,
// i přes to že bych ho potom vyrušil a atd, nechce se mi to dělat, navíc to api funguje i bez toho
// jenom nevrací info jako email a atd, viz [dokumentace](https://docs.github.com/en/rest/users/users?apiVersion=2026-03-10#get-a-user)
// // INSERT CLIENT ID FROM GITHUB
// App.client_id = '...';
// // INSERT CLIENT SECRET FROM GITHUB
// App.client_secret = '...';


// Public GitHub data can be fetched without authentication.
App.baseApiUrl = 'https://api.github.com';

// render the user's information
App.renderUser = (user) => {
  const profileLnk = $('<a>').attr('href', user.html_url).text(user.login);
  App.userProfile.empty().append(
    $('<img>').attr('src', user.avatar_url).attr('alt', user.login),
    $('<h2>').text(user.name || user.login),
    $('<p>').append(profileLnk),
    $('<p>').text(user.bio || ''),
    $('<p>').text(`Location: ${user.location || 'Not specified'}`),
    $('<p>').text(`Company: ${user.company || 'Not specified'}`),
    $('<p>').text(`Email: ${user.email || 'Not specified'}`),
    $('<p>').text(`Website: ${user.blog || 'Not specified'}`),
    $('<p>').text(`Followers: ${user.followers}`),
    $('<p>').text(`Following: ${user.following}`),
    $('<p>').text(`Public repositories: ${user.public_repos}`),
    $('<p>').text(`Registered: ${user.created_at.slice(0, 10)}`)
  );
};

// a function that fetches repositories of users based on their username
App.fetchRepositories = async (username) => {
  const url = `${App.baseApiUrl}/users/${encodeURIComponent(username)}/repos`;
  let repos = [];
  let page = 1;
  let resp;
  do {
    resp = await $.getJSON(url, { per_page: 100, page: page });
    repos = repos.concat(resp);
    page++;
  } while (resp.length === 100);
  return repos;
};

App.renderRepositories = (repositories) => {
  App.repositories.empty().append(
    repositories.map((repository) => $('<li>').append(
      $('<a>').attr('href', repository.html_url).text(repository.name),
      $('<p>').text(repository.description || ''),
      $('<p>').text(`${repository.language || 'Unknown language'} | Stars: ${repository.stargazers_count}`)
    ))
  );
  if (repositories.length === 0) {
    App.repositories.append($('<li>').text('No public repositories found.'));
  }
};

App.init = () => {
  App.searchForm = $('#search-form');
  App.usernameInput = App.searchForm.find('input[name="username"]');
  App.searchButton = App.searchForm.find('button');
  App.userProfile = $('#user-profile');
  App.repositories = $('#repositories');
  App.loading = false;

  App.searchForm.on('submit', async (event) => {
    event.preventDefault();
    if (App.loading) return;

    const username = App.usernameInput.val().trim();
    App.userProfile.empty();
    App.repositories.empty();
    if (!username) {
      App.userProfile.append($('<p>').addClass('error').text('Enter a username.'));
      return;
    }

    App.loading = true;
    App.searchButton.prop('disabled', true);
    const loader = $('<div>').addClass('loader').attr('role', 'status').attr('aria-label', 'Loading');
    App.userProfile.append(loader);

    let userFound = false;
    try {
      const user = await $.getJSON(`${App.baseApiUrl}/users/${encodeURIComponent(username)}`);
      userFound = true;
      App.renderUser(user);
      App.repositories.append($('<li>').append(loader));
      const repositories = await App.fetchRepositories(user.login);
      App.renderRepositories(repositories);
    } catch (error) {
      let message = 'Could not load GitHub data. Try again later.';
      if (error.status === 404 && !userFound) message = 'User not found.';
      else if (error.status === 403 || error.status === 429) message = 'GitHub API limit reached or access denied. Try again later.';

      App.repositories.empty();
      if (userFound) {
        App.repositories.append($('<li>').addClass('error').text(message));
      } else {
        App.userProfile.append($('<p>').addClass('error').text(message));
      }
    } finally {
      loader.remove();
      App.loading = false;
      App.searchButton.prop('disabled', false);
    }
  });
};

// wait for the page to load, then execute the main processes
$(document).ready(() => App.init());
