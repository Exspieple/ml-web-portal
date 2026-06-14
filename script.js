import sitesList from "/sitesList.json" with { type: "json" };

const sitesListWrapper = document.querySelector(".sites-list");

sitesList.forEach((site) => {
  sitesListWrapper.innerHTML += `
        <li>
          <a class="site-button" href="${site.href}" target="_blank">
              <img class="site-icon" src="/assets/${site.icon}" />
              <div class="site-title">${site.label}</div>
          </a>
        </li>
    `;
});
