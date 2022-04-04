export default function Footer(footerElement, siteElement) {
  const indexSite = siteElement.querySelector('[data-js="index_site"]');
  const bookSite = siteElement.querySelector('[data-js="bookmarks_site"]');
  const createSite = siteElement.querySelector('[data-js="create_site"]');
  const profileSite = siteElement.querySelector('[data-js="profile_site"]');

  const houseFooter = footerElement.querySelector('[data-js="footer_home"]');
  const bookFooter = footerElement.querySelector('[data-js="footer_bookmarks"]');
  const createFooter = footerElement.querySelector('[data-js="footer_create"]');
  const profileFooter = footerElement.querySelector('[data-js="footer_profile"]');

  houseFooter.addEventListener("click", () => {
    indexSite.classList.remove("hidden");
    bookSite.classList.add("hidden");
    createSite.classList.add("hidden");
    profileSite.classList.add("hidden");
  });

  bookFooter.addEventListener("click", () => {
    indexSite.classList.add("hidden");
    bookSite.classList.remove("hidden");
    createSite.classList.add("hidden");
    profileSite.classList.add("hidden");
  });

  createFooter.addEventListener("click", () => {
    indexSite.classList.add("hidden");
    bookSite.classList.add("hidden");
    createSite.classList.remove("hidden");
    profileSite.classList.add("hidden");
  });

  profileFooter.addEventListener("click", () => {
    indexSite.classList.add("hidden");
    bookSite.classList.add("hidden");
    createSite.classList.add("hidden");
    profileSite.classList.remove("hidden");
  });
}

/*   houseFooter.addEventListener("click", () => {
    if (houseFooter.classList.contains("hidden")) {
      houseFooter.classList.remove("hidden");
      if (!bookFooter.classList.contains("hidden")) {
        bookFooter.classList.add("hidden");
      }
      if (!createFooter.classList.contains("hidden")) {
        createFooter.classList.add("hidden");
      }
      if (!profileFooter.classList.contains("hidden")) {
        profileFooter.classList.add("hidden");
      }
    }
  });

  bookFooter.addEventListener("click", () => {
    if (bookFooter.classList.contains("hidden")) {
      bookFooter.classList.remove("hidden");
      if (!houseFooter.classList.contains("hidden")) {
        houseFooter.classList.add("hidden");
      }
      if (!createFooter.classList.contains("hidden")) {
        createFooter.classList.add("hidden");
      }
      if (!profileFooter.classList.contains("hidden")) {
        profileFooter.classList.add("hidden");
      }
    }
  });

  createFooter.addEventListener("click", () => {
    if (createFooter.classList.contains("hidden")) {
      createFooter.classList.remove("hidden");
      if (!houseFooter.classList.contains("hidden")) {
        houseFooter.classList.add("hidden");
      }
      if (!bookFooter.classList.contains("hidden")) {
        bookFooter.classList.add("hidden");
      }
      if (!profileFooter.classList.contains("hidden")) {
        profileFooter.classList.add("hidden");
      }
    }
  });

  profileFooter.addEventListener("click", () => {
    if (profileFooter.classList.contains("hidden")) {
      profileFooter.classList.remove("hidden");
      if (!houseFooter.classList.contains("hidden")) {
        houseFooter.classList.add("hidden");
      }
      if (!bookFooter.classList.contains("hidden")) {
        bookFooter.classList.add("hidden");
      }
      if (!createFooter.classList.contains("hidden")) {
        createFooter.classList.add("hidden");
      }
    }
  });
} */
