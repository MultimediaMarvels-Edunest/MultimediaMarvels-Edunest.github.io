document.addEventListener('DOMContentLoaded', function() {
    var nav = `
        <nav class="row">
            <a href="../Home/index.html"><img src="img/logo_dark.png" alt="MM Logo" class="logo"></a>
            <ul class="main-nav">
                <li><a href="../Home/index.html">Home</a></li>
                <li><a href="../Courses/Courses.html">Courses</a></li>
                <li><a href="../Dashboard/Dashboard.html">Dashboard</a></li>
                <li><a href="../Contact/Contact.html">Contact</a></li>
            </ul>
            <ul class="auth-nav">
                <li><a href="../Login/Login.html">Login</a></li>
                <li><a href="../Register/Register.html">Register</a></li>
            </ul>
        </nav>
    `;

    document.querySelector('#nav-container').innerHTML = nav;
});
