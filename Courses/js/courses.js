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

document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    var resultsList = document.getElementById('autocomplete-results');
    var courseBoxes = document.querySelectorAll('.courses .box');

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

        // Show 'No results found' if no autocomplete results are available
        document.getElementById('no-results').style.display = results.length > 0 ? 'none' : 'block';

        resultsList.style.display = results.length > 0 ? 'block' : 'none';
    }

    function updateCourseDisplay(inputValue) {
        var matchedCourses = 0;

        courseBoxes.forEach(box => {
            var courseName = box.querySelector('h2').textContent;
            var courseTitle = box.querySelector('h3').textContent;
            var fullCourseName = `${courseName} - ${courseTitle}`;

            if (!fullCourseName.toLowerCase().includes(inputValue.toLowerCase())) {
                box.style.display = 'none';
            } else {
                box.style.display = 'block';
                matchedCourses++;
            }
        });

        // Show 'No results found' if no courses match the search input
        document.getElementById('no-results').style.display = matchedCourses > 0 ? 'none' : 'block';
    }

    searchInput.addEventListener('input', function() {
        var inputValue = this.value;
        var filteredCourses = filterCourses(inputValue);
        displayResults(filteredCourses);
        updateCourseDisplay(inputValue);
    });

    resultsList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            searchInput.value = event.target.textContent;
            resultsList.style.display = 'none';
            updateCourseDisplay(searchInput.value);
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target !== searchInput) {
            resultsList.style.display = 'none';
        }
    });
});
