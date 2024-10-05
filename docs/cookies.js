// Loading value of cookies
const getCookie = (name) => {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  return parts.length < 2 ? undefined : parts.pop().split(";").shift();
};

// setup cookies
const setCookie = function (name, value, expiryDays, path = "/") {
  const exdate = new Date();
  exdate.setHours(
    exdate.getHours() + (typeof expiryDays !== "number" ? 365 : expiryDays) * 24
  );
  document.cookie =
    name + "=" + value + ";expires=" + exdate.toUTCString() + ";path=" + path;
};

// Load cookies.html and setup cookies
document.addEventListener("DOMContentLoaded", () => {
  fetch("cookies.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("cookie-container").innerHTML = data;

      const $cookiesBanner = document.querySelector(".cookies-eu-banner");
      const $acceptButton = $cookiesBanner.querySelector(".accept");
      const $declineButton = $cookiesBanner.querySelector(".decline");
      const cookieName = "cookiesBanner";
      const hasCookie = getCookie(cookieName);

      // Display the cookie banner if the cookie is not set
      if (!hasCookie) {
        $cookiesBanner.classList.remove("hidden");
      }

      // Click on the button "Accept all"
      $acceptButton.addEventListener("click", () => {
        setCookie(cookieName, "true", 365);
        $cookiesBanner.remove();
      });

      // Click on the button "Decline all"
      $declineButton.addEventListener("click", () => {
        setCookie(cookieName, "false", 7);
        $cookiesBanner.remove();
      });
    })
    .catch((error) => console.error("Error loading the cookie banner:", error));
});
