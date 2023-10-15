// Array to store replies for each topic with the hardcoded username "Mike Johnson"
const replies = [
    [], // Replies for the first topic
    [], 
    [] // Replies for the second topic
];

// Function to display replies for a topic
function displayReplies(topicIndex) {
    const replyContainer = document.querySelectorAll('.topic-reply-container')[topicIndex];
    replyContainer.innerHTML = '';

    replies[topicIndex].forEach((reply) => {
        const replyElement = document.createElement('div');
        replyElement.classList.add('topic-reply');
        replyElement.innerHTML = `<p class="reply-author">Reply from Mike Johnson:</p><p class="reply-content">${reply}</p>`;
        replyContainer.appendChild(replyElement);
    });
}

// Event listeners for the "Send" icons
const sendIcons = document.querySelectorAll('.send-icon');
sendIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const textarea = document.querySelector(`#reply-textarea-${index}`);
        const replyText = textarea.value.trim();
        if (replyText !== '') {
            replies[index].push(replyText);
            textarea.value = ''; // Clear the textarea
            displayReplies(index); // Display the updated replies
        }
    });
});

// Function to show the popover
function showPopover() {
const popover = document.getElementById('popover');
popover.style.display = 'block';
}

// Function to hide the popover
function hidePopover() {
const popover = document.getElementById('popover');
popover.style.display = 'none';
}

// Event listener for the "Add Question" button to show the popover
const addQuestionButton = document.querySelector('.add-question-button');
addQuestionButton.addEventListener('click', showPopover);

// Event listener for the "Submit" button inside the popover
const submitButton = document.getElementById('submit-topic');
submitButton.addEventListener('click', (event) => {
event.stopPropagation(); // Prevent the click event from propagating to the document

const title = document.getElementById('title').value;
//const author = document.getElementById('author').value;
const content = document.getElementById('content').value;

if (title && content) {
    // Create a new forum topic and add it to the forum container
    const newTopic = document.createElement('div');
    newTopic.classList.add('forum-topic');

    newTopic.innerHTML = `
        <h3 class="topic-title">${title}</h3>
        <p class="topic-author">Posted by Mike Johnson:</p>
        <p class="topic-content">${content}</p>
        
        <!-- Reply Box -->
        <div class="reply-box">
                <div class="textarea-container">
                    <textarea id="reply-textarea-1" placeholder="Type your reply..."></textarea>
                    <i class="fas fa-paper-plane send-icon" id="send-icon-1"></i>
                </div>
        </div>
    `;

    // Append the new topic to the forum container
    const forumContainer = document.querySelector('.forum');
    forumContainer.appendChild(newTopic);

    // Hide the popover after adding the topic
    hidePopover();
}
});

// Event listener to hide the popover when clicking outside of it
document.addEventListener('click', (event) => {
if (event.target === document.getElementById('popover')) {
    hidePopover();
}
});


document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const forumTopics = document.querySelectorAll(".forum-topic");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        forumTopics.forEach(function (topic) {
            const topicTitle = topic.querySelector(".topic-title").textContent.toLowerCase();
            if (topicTitle.includes(searchTerm)) {
                topic.style.display = "block";
            } else {
                topic.style.display = "none";
            }
        });
    });
});


