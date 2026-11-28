/**
 * Git The Hub
 * Vyhledání uživatele na GitHubu a výpis jeho repozitářů.
 * Celý kód je v IIFE, aby nic nebylo v globálním objektu window.
 */
(() => {
  // Adresa GitHub API (požadavky jsou anonymní, bez klíče)
  const BASE_API_URL = "https://api.github.com";

  // Povolené znaky v uživatelském jménu: písmena, číslice a pomlčka (max. 39 znaků)
  const USERNAME_PATTERN = /^[a-zA-Z0-9-]{1,39}$/;

  // Prvky stránky, se kterými pracujeme
  const searchForm = $("#search-form");
  const usernameInput = $("#username");
  const searchButton = $("#search-button");
  const formError = $("#form-error");
  const loader = $("#loader");
  const message = $("#message");
  const userProfile = $("#user-profile");
  const repositoriesSection = $("#repositories-section");
  const repositoriesList = $("#repositories");

  // Zapne / vypne načítání (spinner a zablokované tlačítko)
  const setLoading = (isLoading) => {
    loader.prop("hidden", !isLoading);
    searchButton.prop("disabled", isLoading);
  };

  // Vyčistí výsledky předchozího hledání
  const clearResults = () => {
    message.text("");
    userProfile.empty().prop("hidden", true);
    repositoriesList.empty();
    repositoriesSection.prop("hidden", true);
  };

  // Podle chyby z axiosu vrátí českou hlášku pro uživatele
  const getErrorMessage = (error) => {
    const status = error.response ? error.response.status : null;
    if (status === 404) {
      return "Uživatel nenalezen.";
    }
    if (status === 403 || status === 429) {
      return "Příliš mnoho požadavků, zkuste to později.";
    }
    return "Nepodařilo se načíst data.";
  };

  // Z webu uživatele udělá odkaz (GitHub ho občas vrací bez https://)
  const getBlogUrl = (blog) => {
    if (blog.startsWith("http://") || blog.startsWith("https://")) {
      return blog;
    }
    return `https://${blog}`;
  };

  // Vytvoří odstavec "Popisek: hodnota" (hodnota se vkládá přes .text())
  const createInfoLine = (label, value) => {
    const line = $("<p></p>");
    line.append($("<strong></strong>").text(`${label}: `));
    line.append(document.createTextNode(value));
    return line;
  };

  // Stáhne údaje o uživateli
  const fetchUser = async (username) => {
    const response = await axios.get(`${BASE_API_URL}/users/${username}`);
    return response.data;
  };

  // Stáhne repozitáře uživatele (nejnověji upravené nahoře)
  const fetchRepositories = async (login) => {
    const response = await axios.get(`${BASE_API_URL}/users/${login}/repos`, {
      params: { sort: "updated", per_page: 100 },
    });
    return response.data;
  };

  // Vykreslí profil uživatele
  const displayUser = (user) => {
    // jméno nemusí být vyplněné, pak použijeme login
    const name = user.name || user.login;

    const avatar = $("<img>", {
      class: "avatar",
      src: user.avatar_url,
      alt: `Avatar uživatele ${user.login}`,
    });

    const info = $("<div></div>", { class: "user-info" });
    info.append($("<h2></h2>").text(name));
    info.append($("<p></p>", { class: "login" }).text(`@${user.login}`));

    // nepovinné údaje vypíšeme jen tehdy, když je uživatel vyplnil
    if (user.bio) {
      info.append($("<p></p>").text(user.bio));
    }
    if (user.company) {
      info.append(createInfoLine("Společnost", user.company));
    }
    if (user.location) {
      info.append(createInfoLine("Lokalita", user.location));
    }
    if (user.blog) {
      const blogLine = $("<p></p>");
      blogLine.append($("<strong></strong>").text("Web: "));
      blogLine.append(
        $("<a></a>", {
          href: getBlogUrl(user.blog),
          target: "_blank",
          rel: "noopener noreferrer",
        }).text(user.blog),
      );
      info.append(blogLine);
    }

    // statistiky
    const stats = $("<p></p>", { class: "stats" });
    stats.append($("<span></span>").text(`Repozitáře: ${user.public_repos}`));
    stats.append($("<span></span>").text(`Sledující: ${user.followers}`));
    stats.append($("<span></span>").text(`Sleduje: ${user.following}`));
    info.append(stats);

    // odkaz na profil
    info.append(
      $("<p></p>").append(
        $("<a></a>", {
          href: user.html_url,
          target: "_blank",
          rel: "noopener noreferrer",
        }).text("Zobrazit profil na GitHubu"),
      ),
    );

    // do stránky se vše vloží najednou
    userProfile.empty().append(avatar, info).prop("hidden", false);
  };

  // Vykreslí seznam repozitářů
  const displayRepositories = (repositories) => {
    // uživatel nemá žádné veřejné repozitáře
    if (repositories.length === 0) {
      const emptyItem = $("<li></li>").text(
        "Uživatel nemá žádné veřejné repozitáře.",
      );
      repositoriesList.empty().append(emptyItem);
      repositoriesSection.prop("hidden", false);
      return;
    }

    // položky si nejdřív připravíme do pole, do DOM je vložíme až na konci
    const items = repositories.map((repository) => {
      const item = $("<li></li>");
      item.append(
        $("<a></a>", {
          class: "repo-name",
          href: repository.html_url,
          target: "_blank",
          rel: "noopener noreferrer",
        }).text(repository.name),
      );
      item.append($("<p></p>").text(repository.description || "Bez popisu"));
      const language = repository.language || "neuvedeno";
      item.append(
        $("<p></p>", { class: "repo-meta" }).text(
          `Jazyk: ${language} · Hvězdy: ${repository.stargazers_count}`,
        ),
      );
      return item;
    });

    repositoriesList.empty().append(items);
    repositoriesSection.prop("hidden", false);
  };

  // Zkontroluje zadané jméno, vrátí text chyby nebo prázdný řetězec
  const validateUsername = (username) => {
    if (username === "") {
      return "Zadejte uživatelské jméno.";
    }
    if (!USERNAME_PATTERN.test(username)) {
      return "Jméno může obsahovat jen písmena, číslice a pomlčku (max. 39 znaků).";
    }
    return "";
  };

  // Odeslání formuláře (bez znovunačtení stránky)
  searchForm.on("submit", async (e) => {
    e.preventDefault();

    // když se ještě načítá, další hledání nespouštíme
    if (searchButton.prop("disabled")) {
      return;
    }

    const username = usernameInput.val().trim();
    const errorText = validateUsername(username);
    formError.text(errorText);
    usernameInput.toggleClass("invalid", errorText !== "");
    if (errorText !== "") {
      return;
    }

    clearResults();
    setLoading(true);
    try {
      // nejdřív profil, potom repozitáře
      const user = await fetchUser(username);
      displayUser(user);
      const repositories = await fetchRepositories(user.login);
      displayRepositories(repositories);
    } catch (error) {
      message.text(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  });
})();
