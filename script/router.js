window.addEventListener('load', () => {
    const routes = {
        '/': 'home.html',
        '/lessons': 'lessons.html',
        '/login': 'login.html',
        '/register': 'register.html',
        '/profile': 'profile.html',
    };

    const contentDiv = document.querySelector('#content');

    const renderPage = (html) => {
        contentDiv.innerHTML = html;
    };

    const handleResponse = (response) => {
        if (response.ok) {
            response.text().then(renderPage);
        } else {
            renderPage('<h1>Page not found</h1>');
        }
    };

    const handleRoute = (path) => {
        const filename = routes[path];
        if (filename) {
            fetch(filename).then(handleResponse);
        } else {
            renderPage('<h1>Page not found</h1>');
        }
    };

    const path = window.location.pathname;
    handleRoute(path);

    window.addEventListener('popstate', () => {
        handleRoute(window.location.pathname);
    });
});
