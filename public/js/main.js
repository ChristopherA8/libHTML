const isLoggedIn = () => {
  document.getElementById("nav-login").style.display = "block";
  document.getElementById("nav-logout").style.display = "none";

  if (
    !localStorage.getItem("token") ||
    localStorage.getItem("token") == "undefined"
  ) {
    if (document.location.pathname == "/pages/learn.html") {
      document.location = "/pages/login.html";
    }
    return;
  }

  fetch("/api/users/profile", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      if (res.status == 403) {
        return Promise.reject();
      }
      if (res.status == 200) return res.json();

      throw new Error(`HTTP error, status = ${res.status}`);
    })
    .then((json) => {
      try {
        const { user } = json;
        document.getElementById("nav-login").style.display = "none";
        document.getElementById("nav-logout").style.display = "block";
      } catch (err) {
        console.log(err);
      }
    })
    .catch((err) => console.log(err));
};

const logout = () => {
  localStorage.removeItem("token");
  document.location = "/pages/login.html";
};

const login = () => {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  document.getElementById("authErr-username").style.display = "none";
  document.getElementById("authErr-password").style.display = "none";
  document.getElementById("authErr-notFound").style.display = "none";
  document.getElementById("authErr-incorrect").style.display = "none";
  document.getElementById("authErr-server").style.display = "none";

  if (!username)
    return (document.getElementById("authErr-username").style.display =
      "block");
  if (!password)
    return (document.getElementById("authErr-password").style.display =
      "block");

  const formData = {
    username: username,
    password: password,
  };

  const params = new URLSearchParams();
  Object.keys(formData).forEach((key) => {
    params.append(key, formData[key]);
  });

  fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  })
    .then((res) => {
      if (res.status == 500) {
        document.getElementById("authErr-server").style.display = "block";
        return Promise.reject();
      }
      if (res.status == 404) {
        document.getElementById("authErr-notFound").style.display = "block";
        return Promise.reject();
      }
      if (res.status == 401) {
        document.getElementById("authErr-incorrect").style.display = "block";
        return Promise.reject();
      }
      if (res.status == 200) return res.json();

      throw new Error(`HTTP error, status = ${res.status}`);
    })
    .then((json) => {
      const { token } = json;
      localStorage.setItem("token", token);
      document.location = "/";
    })
    .catch((err) => console.log(err));

  /*
  authErr-username
  authErr-password
  authErr-notFound
  authErr-incorrect
  authErr-server
  */
};

const signup = () => {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  document.getElementById("signupErr-username").style.display = "none";
  document.getElementById("signupErr-password").style.display = "none";
  document.getElementById("signupErr-found").style.display = "none";

  if (!username)
    return (document.getElementById("signupErr-username").style.display =
      "block");
  if (!password)
    return (document.getElementById("signupErr-password").style.display =
      "block");

  const formData = {
    username: username,
    password: password,
  };

  const params = new URLSearchParams();
  Object.keys(formData).forEach((key) => {
    params.append(key, formData[key]);
  });

  fetch("/api/users/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  })
    .then((res) => {
      if (res.status == 409) {
        document.getElementById("signupErr-found").style.display = "block";
        return Promise.reject();
      }
      if (res.status == 201) {
        // document.location = "/pages/login.html";
        showToast("accountCreated");
        return Promise.resolve();
      }

      throw new Error(`HTTP error, status = ${res.status}`);
    })
    .catch((err) => console.log(err));
};

/**
 * Show Toast
 * @param {String} name
 */
const showToast = (name) => {
  // fixed bottom-5 right-5
  switch (name) {
    case "accountCreated":
      document.body.innerHTML += `
          <div id="toast-accountCreated" class="fixed top-5 right-5 max-w-xs w-full bg-gray-200 border border-line-2 text-sm text-surface-foreground rounded-lg" role="alert" tabindex="-1" aria-labelledby="hs-toast-soft-color-dark-label">
            <div id="hs-toast-soft-color-dark-label" class="flex p-4">
              Account created successfully!
              <div class="ms-auto">
                <button onclick="closeToast('accountCreated')" type="button" class="shrink-0 flex justify-center items-center size-5 text-foreground opacity-50 hover:opacity-100 focus:outline-hidden dark:text-foreground" aria-label="Close">
                  <span class="sr-only">Close</span>
                  <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </div>
            </div>
          </div>
        `;
      break;

    default:
      break;
  }

  setTimeout(() => closeToast(name), 3000);
};

/**
 * Close Toast
 * @param {String} name
 */
const closeToast = (name) => {
  switch (name) {
    case "accountCreated":
      if (document.getElementById("toast-accountCreated"))
        document.getElementById("toast-accountCreated").remove();
      break;

    default:
      break;
  }
};

/**
 * Prevent form from refreshing page when submitting by pressing 'enter' key
 * @param {String} name
 */
const setupForm = (name) => {
  switch (name) {
    case "login":
      var form = document.getElementById("login-form");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        login();
      });
      break;
    case "signup":
      var form = document.getElementById("signup-form");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        signup();
      });
      break;
    default:
      break;
  }
};
