window.addEventListener("DOMContentLoaded", () => {
  const nav = (() => {
    const nav = document.querySelector(".main-navigation");
    const navOpen = document.querySelector(".mobile-nav-open");
    const navClose = document.querySelector(".mobile-nav-close");
    navOpen.addEventListener("click", () => nav.classList.add("active"));
    navClose.addEventListener("click", () => nav.classList.remove("active"));
  })();

  const search = (() => {
    const searchResult = (result) =>
      `<div class="search-result"><a href="${result.url}">${result.name}</a></div>`;
    const search = document.querySelector("#search-form");
    const searchResults = document.querySelector("#search-results");

    search.addEventListener("submit", (e) => {
      e.preventDefault();
      searchResults.innerHTML = "";
      const output = document.createElement("div");
      const data = new FormData(e.target);
      const query = data.get("query");
      const pages = JSON.parse(SITE_DATA.pages);
      const results =
        Array.from(pages)?.filter((page) =>
          page.name.toLowerCase().includes(query.toLowerCase())
        ) || [];
      if (results.length > 0 && query.length > 0) {
        const markup = results.map((result) => searchResult(result));
        output.innerHTML = markup.join("");
        searchResults.appendChild(output);
      } else {
        output.innerHTML = `<p class="empty-notice">No results found for ${query}</p>`;
        searchResults.appendChild(output);
      }
    });
  })();
});
