class VolvoPage {
  get title() {
    return browser.getTitle();
  }

  get cookiesBanner() {
    return $(".ot-sdk-container");
  }

  get acceptButton() {
    return $("#onetrust-accept-btn-handler");
  }

  get rejectButton() {
    return $("#onetrust-reject-all-handler");
  }

  get cookieSettingsButton() {
    return $("#onetrust-pc-btn-handler");
  }

  get cookiesSettings() {
    return $(".ot-sdk-container");
  }

  get topBar() {
    return $("#site-nav-topbar-wrapper");
  }

  get menu() {
    return $($("[aria-controls='ixRp7Q5J_njjqBPZUOhHL']"));
  }

  get HighlightsElement() {
    return $("em=Highlights");
  }

  get heroImage() {
    return $("[data-autoid='hero:image']");
  }

  get footer() {
    return $("#vcc-site-footer-shadow-container");
  }

  get socialMediaIcons() {
    return $$(".icon-sprite");
  }

  get cookies() {
    return browser
      .getCookies(["OptanonConsent", "OptanonAlertBoxClosed"])
      .then(function (cookie) {
        return cookie;
      });
  }

  async open() {
    browser.url("/");
    await browser.waitUntil(async () => () => this.title.isDisplayed(), {
      timeout: 5000,
      timeoutMsg: "Expected page to be loaded after 5s",
    });
  }

  async acceptCookies() {
    this.acceptButton.click();

    // Wait for the cookies banner to disappear
    await browser.waitUntil(
      async () => {
        const isDisplayed = await this.cookiesBanner.isDisplayed();
        return !isDisplayed;
      },
      {
        timeout: 5000, // The function will try up to 5 seconds.
        timeoutMsg: "Expected cookies banner to be gone after 5s",
      }
    );
  }

  async rejectCookies() {
    this.rejectButton.click();
    await browser.waitUntil(
      async () => {
        const isDisplayed = await this.cookiesBanner.isDisplayed();
        return !isDisplayed;
      },
      {
        timeout: 5000, // The function will try up to 5 seconds.
        timeoutMsg: "Expected cookies banner to be gone after 5s",
      }
    );
  }

  async openCookiesSettings() {
    this.cookieSettingsButton.click();
    await browser.waitUntil(
      async () => {
        const isDisplayed = await this.cookiesBanner.isDisplayed();
        return !isDisplayed;
      },
      {
        timeout: 5000, // The function will try up to 5 seconds.
        timeoutMsg: "Expected cookies banner to be gone after 5s",
      }
    );
  }

  async clickHighlights() {
    this.HighlightsElement.click();
    await browser.waitUntil(() => browser.getUrl() !== currentUrl, {
      timeout: 5000, // The function will try up to 5 seconds.
      timeoutMsg: "Expected URL to change after 5s",
    });
  }

  getCurrentUrl() {
    return browser.getUrl();
  }
}

module.exports = new VolvoPage();
