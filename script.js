import sitesList from "/sitesList.json" with { type: "json" };

const sitesListWrapper = document.querySelector(".sites-list");

sitesList.forEach((site) => {
    sitesListWrapper.innerHTML += `
        <li>
          <a href="${site.href}" target="_blank">
            <div class="site-button">
              <img class="site-icon" src="${site.icon}" />
              <div class="site-title">${site.label}</div>
            </div>
          </a>
        </li>
    `;
});