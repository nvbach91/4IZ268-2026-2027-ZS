const form = document.querySelector('#user-input');
const usernameInput = document.querySelector('#userName');
const submitButton = document.querySelector('#input-button');
const statusMessage = document.querySelector('#status');
const profileContainer = document.querySelector('#user-profile');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = usernameInput.value.trim();

    if (!username) {
        statusMessage.textContent = 'Enter a GitHub username to search.';
        usernameInput.focus();
        return;
    }

    submitButton.disabled = true;
    statusMessage.textContent = `Looking up ${username}...`;
    profileContainer.replaceChildren();

    try {
        const user = await fetchJson(`https://api.github.com/users/${encodeURIComponent(username)}`);
        const repositories = await fetchJson(user.repos_url);
        renderProfile(user, repositories);
        statusMessage.textContent = `Showing ${user.login}'s profile.`;
    } catch (error) {
        statusMessage.textContent = error.message;
    } finally {
        submitButton.disabled = false;
    }
});

const fetchJson = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error('No GitHub user was found with that username.');
        }
        throw new Error('Could not load GitHub data. Please try again.');
    }

    return response.json();
};

const renderProfile = (user, repositories) => {
    const profileCard = document.createElement('article');
    profileCard.className = 'profile-card';

    const avatar = document.createElement('img');
    avatar.className = 'avatar';
    avatar.src = user.avatar_url;
    avatar.alt = `${user.login}'s avatar`;

    const details = document.createElement('div');
    const heading = document.createElement('h2');
    heading.textContent = user.name || user.login;
    details.append(heading);

    if (user.bio) {
        const bio = document.createElement('p');
        bio.className = 'profile-bio';
        bio.textContent = user.bio;
        details.append(bio);
    }

    const info = document.createElement('dl');
    info.className = 'profile-info';
    addInfo(info, 'Username', user.login);
    addInfo(info, 'Email', user.email || 'Not provided');
    addInfo(info, 'Location', user.location || 'Not provided');
    addInfo(info, 'Followers', user.followers);
    addInfo(info, 'Joined', new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(new Date(user.created_at)));
    const profileLinkTerm = document.createElement('dt');
    profileLinkTerm.textContent = 'GitHub';
    const profileLinkDescription = document.createElement('dd');
    const profileLink = document.createElement('a');
    profileLink.href = user.html_url;
    profileLink.target = '_blank';
    profileLink.rel = 'noopener noreferrer';
    profileLink.textContent = user.html_url;
    profileLinkDescription.append(profileLink);
    info.append(profileLinkTerm, profileLinkDescription);
    details.append(info);
    profileCard.append(avatar, details);

    const repositorySection = document.createElement('section');
    repositorySection.className = 'repos';
    const repositoryHeading = document.createElement('h2');
    repositoryHeading.textContent = `Public repositories (${user.public_repos})`;
    repositorySection.append(repositoryHeading);

    if (repositories.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'This user has no public repositories.';
        repositorySection.append(emptyMessage);
    } else {
        const repositoryList = document.createElement('ul');
        repositoryList.className = 'repo-list';

        repositories.forEach((repository) => {
            const item = document.createElement('li');
            item.className = 'repo';

            const link = document.createElement('a');
            link.href = repository.html_url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = repository.name;
            item.append(link);

            if (repository.description) {
                const description = document.createElement('p');
                description.className = 'repo-description';
                description.textContent = repository.description;
                item.append(description);
            }

            repositoryList.append(item);
        });

        repositorySection.append(repositoryList);
    }

    profileContainer.replaceChildren(profileCard, repositorySection);
};

const addInfo = (list, label, value) => {
    const term = document.createElement('dt');
    term.textContent = label;
    const description = document.createElement('dd');
    description.textContent = value;
    list.append(term, description);
};