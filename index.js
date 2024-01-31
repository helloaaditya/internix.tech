document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("site-header");
    var lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.style.top = "-100px"; 
        } else {
            header.style.top = "0";
        }

        lastScrollTop = scrollTop;
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const animateSection = document.getElementById("animateSection");

    function addAnimation() {
        animateSection.classList.add("animate__animated", "animate__slideInLeft", "animate__slow");
        window.removeEventListener("scroll", addAnimation);
    }

    // Trigger animation when user scrolls to the section
    window.addEventListener("scroll", function () {
        const sectionOffset = animateSection.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > sectionOffset) {
            addAnimation();
        }
    });

    // Trigger animation on page load if the section is already in view
    if (window.scrollY + window.innerHeight > animateSection.offsetTop) {
        addAnimation();
    }
});

// Function to handle search
function searchInternships() {
    var searchText = document.querySelector('.search-box input[type="text"]').value.toLowerCase();
    
    var cards = document.querySelectorAll('.Internships-card .card');
    cards.forEach(function(card) {
        var title = card.querySelector('h4').innerText.toLowerCase();
        var description = card.querySelector('p').innerText.toLowerCase();
        if (searchText === '' || title.includes(searchText) || description.includes(searchText)) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none'; 
        }
    });
}

// Add event listener to search button
document.querySelector('.search-box button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    searchInternships();
});

// Add event listener to input field for real-time search
document.querySelector('.search-box input[type="text"]').addEventListener('input', searchInternships);


function applyNow(){
    // open the link 
    window.open("https://forms.gle/jacdejq1ymPrzZWE7", "_blank");
}
