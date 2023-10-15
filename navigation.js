document.addEventListener('DOMContentLoaded', function() {
    var nav = `
        <nav class="row">
            <a href="../Home/index.html"><img src="img/logo_dark.png" alt="MM Logo" class="logo"></a>
            <ul class="main-nav" id="mainNav">
                <li><a href="../Home/index.html">Home</a></li>
                <li><a href="../Courses/Courses.html">Courses</a></li>
                <li><a href="../Dashboard/Dashboard.html">Profile</a></li>
                <li><a href="../Contact/Contact.html">Contact</a></li>
            </ul>
            <ul class="auth-nav">
                <li><a href="../Login/Login.html">Logout</a></li>
            </ul>
        </nav>
    `;

    document.querySelector('#nav-container').innerHTML = nav;

    // Identifying the active link
    var links = document.querySelectorAll('.main-nav li a');
    var currentUrl = window.location.href;
    links.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });

    // Adding CSS dynamically
    var css = `
        .main-nav li a.active {
            border-bottom: 2px solid #2980b9;
        }
    `;

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');

    head.appendChild(style);

    style.type = 'text/css';
    if (style.styleSheet) {
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
});
