function searchWikipedia() {
    var searchTerm = document.getElementById("searchInput").value;
    if (searchTerm.trim() !== "") {
        var url = "https://en.wikipedia.org/wiki/" + encodeURIComponent(searchTerm);
        window.open(url, "_blank");
    } else {
        alert("Please enter a search term.");
    }
}

// Function to open the selected sport tab
function openSport(evt, sportName) {
    var i, sportTab, tablinks;
    sportTab = document.getElementsByClassName("sport-tab");
    for (i = 0; i < sportTab.length; i++) {
        sportTab[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(sportName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Function to scroll to the top of the page
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Function to submit the user's vote
function submitVote() {
    var selectedOption = document.querySelector('input[name="vote"]:checked');
    if (selectedOption) {
        alert('Thank you for your vote! You selected: ' + selectedOption.value);
        // Here you can submit the vote to a server or perform other actions
    } else {
        alert('Please select an option before submitting.');
    }
}

// Function to handle form submission and send message
function sendMessage(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Perform validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Send message via email or backend API
    // Example: Sending message using EmailJS API
    // EmailJS.send("default_service", "template_id", {
    //     from_name: name,
    //     reply_to: email,
    //     message_html: message
    // }).then(function(response) {
    //     alert('Message sent successfully!');
    //     document.getElementById('contactForm').reset();
    // }, function(error) {
    //     alert('Failed to send message. Please try again later.');
    // });
}

// Function to toggle modal display
function toggleModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'block' : 'none';
}

// Function to close modal when clicked outside the content
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Function to handle email subscription
function subscribeEmail() {
    var email = prompt('Please enter your email address:');
    if (email) {
        // Perform validation and subscribe the email
        // Example: Subscribe email using AJAX or fetch API
        // fetch('subscribe_endpoint', {
        //     method: 'POST',
        //     body: JSON.stringify({ email: email }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.success) {
        //         alert('Thank you for subscribing!');
        //     } else {
        //         alert('Failed to subscribe. Please try again later.');
        //     }
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        //     alert('Failed to subscribe. Please try again later.');
        // });
        alert('Thank you for subscribing!');
    }
}

// Function to handle user rating feedback
function submitRating() {
    var rating = document.getElementById('rating').value;
    if (rating) {
        // Perform submission of rating
        // Example: Send rating to backend API
        // fetch('submit_rating_endpoint', {
        //     method: 'POST',
        //     body: JSON.stringify({ rating: rating }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.success) {
        //         alert('Thank you for your rating!');
        //     } else {
        //         alert('Failed to submit rating. Please try again later.');
        //     }
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        //     alert('Failed to submit rating. Please try again later.');
        // });
        alert('Thank you for your rating!');
    }
}

// Function to display countdown timer
function displayCountdown() {
    var countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
}

// Function to fetch and display latest news headlines
function displayNewsHeadlines() {
    // Fetch news headlines from an API
    // Example: Fetching news using fetch API
    // fetch('news_api_endpoint')
    // .then(response => response.json())
    // .then(data => {
    //     // Display news headlines
    //     var newsList = document.getElementById('newsList');
    //     data.articles.forEach(article => {
    //         var li = document.createElement('li');
    //         li.textContent = article.title;
    //         newsList.appendChild(li);
    //     });
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    //     alert('Failed to fetch news. Please try again later.');
    // });
    
    // Dummy data for demonstration
    var headlines = [
        "Breaking news: Lorem ipsum dolor sit amet",
        "New study reveals shocking results",
        "Latest sports updates: Football, basketball, cricket",
        "Weather forecast for the week",
        "Technology trends in 2025"
    ];

    // Display news headlines
    var newsList = document.getElementById('newsList');
    headlines.forEach(headline => {
        var li = document.createElement('li');
        li.textContent = headline;
        newsList.appendChild(li);
    });
}

// Initialize functions on page load
document.addEventListener("DOMContentLoaded", function() {
    displayCountdown();
    displayNewsHeadlines();
});
