//Test suite for Volvo website.

const VolvoPage = require("../pageobjects/volvo.page");

describe("Volvo Test", () => {
  // Test case to verify if Volvo's page opens successfully.
  it("should open Volvo's page", function () {
    VolvoPage.open();

    // Check that the title is the expected one
    VolvoPage.title.then(function (title) {
      assert.strictEqual(
        title,
        "Volvo Cars | A Million More | Volvo Cars Global"
      );
    });

    browser.pause(10000);
  });

  // Test case to verify the presence of cookies banner.
  it("Should be cookies banner", () => {
    // Check if the cookies banner is present
    VolvoPage.cookiesBanner.then((cookiesBanner) => {
      expect(cookiesBanner).toBeExisting();
    });

    // Check if the buttons are present
    VolvoPage.acceptButton.then((acceptButton) => {
      expect(acceptButton).toBeExisting();
    });

    // Check if the buttons are present
    VolvoPage.rejectButton.then((rejectButton) => {
      expect(rejectButton).toBeExisting();
    });

    // Check if the buttons are present
    VolvoPage.cookieSettingsButton.then((cookieSettingsButton) => {
      expect(cookieSettingsButton).toBeExisting();
    });
  });

  // Test case to verify the behavior of accepting cookies.
  it("Should click on Accept and cookies window should disappear", () => {
    VolvoPage.cookiesBanner.then((cookiesBanner) => {
      VolvoPage.acceptCookies();

      // Check if the cookies banner is not present
      expect(cookiesBanner).not.toBeExisting();

      // Check if a cookie has been set
      VolvoPage.cookie.then((cookie) => {
        expect(cookie.length).toBeGreaterThan(0);
      });
    });
  });

  // Test case to verify the behavior of rejecting cookies.
  it("Should reject cookies", () => {
    VolvoPage.cookiesBanner.then((cookiesBanner) => {
      VolvoPage.rejectCookies();
      expect(cookiesBanner).not.toBeExisting();
      // Check if a cookie has not been set (rejected)
      VolvoPage.cookie.then((cookie) => {
        expect(cookie.length).toBe(0);
      });
    });
  });

  // Test case to verify the behavior of clicking on Cookie Settings.
  it("Should click on Cookie Settings", () => {
    VolvoPage.cookiesBanner.then((cookiesBanner) => {
      VolvoPage.openCookieSettings();

      // Check if the cookies banner is not present
      expect(cookiesBanner).not.toBeExisting();

      // Check if the cookies settings are present
      VolvoPage.cookiesSettings.then((cookiesSettings) => {
        expect(cookiesSettings).toBeExisting();
      });
    });
  });

  // Test case to verify the presence of topbar.
  it("Should have topbar", () => {
    VolvoPage.topBar.then((topbar) => {
      // Check if the topbar is present
      expect(topbar).toBeExisting();

      // Check if the topbar contains the expected elements
      expect(topbar).toHaveTextContaining("Explore");
      expect(topbar).toHaveTextContaining("Our Cars");
      expect(topbar).toHaveTextContaining("Shops");
      expect(topbar).toHaveTextContaining("Owners");
      expect(topbar).toHaveTextContaining("About");
    });
  });

  // Test case to verify the presence of menu.
  it("Should have menu", () => {
    VolvoPage.menu.then((menu) => {
      // Check if the menu is present
      expect(menu).toBeExisting();

      // Check if the menu contains the expected elements
      expect(menu).toHaveTextContaining("Highlights");
      expect(menu).toHaveTextContaining("Features");
      expect(menu).toHaveTextContaining("Child safety");
      expect(menu).toHaveTextContaining("Research");
      expect(menu).toHaveTextContaining("Heritage");
    });
  });

  // Test case to verify the behavior of clicking on Highlights.
  it("Should click on Highlights", () => {
    VolvoPage.clickHighlights();
    VolvoPage.getCurrentUrl().then((url) => {
      // Check that the URL is the expected one
      expect(url).toEqual("https://www.volvocars.com/intl/v/safety/highlights");
    });
  });

  // Test case to verify the presence of hero image.
  it("Should have hero image", () => {
    VolvoPage.heroImage.then((heroImage) => {
      // Check if the hero image is present
      expect(heroImage).toBeExisting();

      // Check if the hero image has the expected attributes
      expect(heroImage).toHaveAttribute(
        "data-src",
        expect.stringContaining("hero-image.jpg")
      );
    });
  });

  // Test case to verify the width of hero image.
  it("Should have hero image with the same width as the window", () => {
    VolvoPage.heroImage.then((heroImage) => {
      // Check if the hero image has the expected width
      heroImage.getCSSProperty("width").then((imageWidth) => {
        const viewportWidth = browser.getViewportSize().width;
        expect(imageWidth.parsed.value).toBe(viewportWidth);
      });
    });
  });

  // Test case to verify the presence of footer.
  it("Should have footer", () => {
    VolvoPage.footer.then((footer) => {
      // Check if the footer is present
      expect(footer).toBeExisting();
    });
  });

  // Test case to verify the presence of social media icons.
  it("Should have social media icons", () => {
    VolvoPage.socialMediaIcons.then((socialMediaIcons) => {
      // Check if the social media icons are present
      expect(socialMediaIcons).toBeElementsArrayOfSize(5);

      // Check if the social media icons have the expected attributes
      expect(socialMediaIcons[0]).toHaveAttribute(
        "src",
        expect.stringContaining("facebook")
      );
      expect(socialMediaIcons[1]).toHaveAttribute(
        "src",
        expect.stringContaining("instagram")
      );
      expect(socialMediaIcons[2]).toHaveAttribute(
        "src",
        expect.stringContaining("twitter")
      );
      expect(socialMediaIcons[3]).toHaveAttribute(
        "src",
        expect.stringContaining("youtube")
      );
      expect(socialMediaIcons[3]).toHaveAttribute(
        "src",
        expect.stringContaining("linkedin")
      );
    });
  });
});
