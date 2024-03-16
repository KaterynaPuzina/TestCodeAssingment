class VolvoPage {
  get title() {
    return browser.getTitle();
  }

  open() {
    browser.url("/");
    browser.pause(2000);
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

  get cookieSettings() {
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

  get cookie() {
    return browser
      .getCookies(["OptanonConsent", "OptanonAlertBoxClosed"])
      .then(function (cookie) {
        return cookie;
      });
  }

  acceptCookies() {
    this.acceptButton.click();
    browser.pause(1000);
  }

  rejectCookies() {
    this.rejectButton.click();
    browser.pause(1000);
  }

  openCookieSettings() {
    this.cookieSettingsButton.click();
    browser.pause(1000);
  }

  clickHighlights() {
    this.HighlightsElement.click();
    browser.pause(1000);
  }

  getCurrentUrl() {
    return browser.getUrl();
  }
}

module.exports = new VolvoPage();
