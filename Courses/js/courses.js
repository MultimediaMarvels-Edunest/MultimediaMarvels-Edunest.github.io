var courses = [
    "COS212 - Data Structures And Algorithms",
    "COS301 - Software Engineering",
    "WTW285 - Discrete Structures II",
    "COS402 - Computer Networks",
    "COS403 - Machine Learning",
    "WTW315 - Calculus III",
    "COS414 - Operating Systems",
    "COS421 - Database Systems",
    "WTW335 - Linear Algebra",
    "COS432 - Web Development",
    "COS444 - Graphics Design",
    "WTW355 - Probability and Statistics"
];
window.onload = () => {
    document.getElementsByClassName("auth-nav")[0].style.display = "none";
};
document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    var resultsList = document.getElementById('autocomplete-results');

    function filterCourses(input) {
        return courses.filter(course => course.toLowerCase().includes(input.toLowerCase()));
    }

    function displayResults(results) {
        resultsList.innerHTML = '';
        results.forEach(course => {
            var listItem = document.createElement('li');
            listItem.textContent = course;
            resultsList.appendChild(listItem);
        });
        resultsList.style.display = results.length > 0 ? 'block' : 'none';
    }

    searchInput.addEventListener('input', function() {
        var inputValue = this.value;
        var filteredCourses = filterCourses(inputValue);
        displayResults(filteredCourses);
    });

    resultsList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            searchInput.value = event.target.textContent;
            resultsList.style.display = 'none';
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target !== searchInput) {
            resultsList.style.display = 'none';
        }
    });
});