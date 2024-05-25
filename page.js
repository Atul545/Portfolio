// var typed = new typed(".text", {
//     String: ["Frontend Developer", "YouTube", "Web Developer"],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// })


//Redirect to social media

function redirectToFacebook() {
    window.location.href = "https://www.facebook.com/Atul-K-Shrivastava";
}

function redirectToInstagram() {
    window.location.href = "https://www.instagram.com/1shri15";
}

function redirectToTwitter() {
    alert("Ha has no Twitter account");
    //window.location.href = "https://www.instagram.com/your-instagram-username";
}

//validation

submit = () => {
    var nameInput = document.getElementById('names').value.trim();
    var email = document.getElementById('email').value.trim();
    var mobile = document.getElementById('number').value.trim();

    // Regular expression for basic name validation
    var nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression for mobile number validation (assuming 10 digits)
    var mobileRegex = /^\d{10}$/;

    if (!nameRegex.test(nameInput) || nameInput == "") {
        alert('Please enter a valid name.');
        return false;
    }
    if (!emailRegex.test(email) || email == "") {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!mobileRegex.test(mobile) || mobile == "") {
        alert('Please enter a valid 10-digit mobile number.');
        return false;
    }

    alert("success");
}


//Show hidden content after clicking

document.getElementById('showHiddenContent').addEventListener('click', function() {
    var hiddenDiv = document.getElementById('hiddenDiv');
    // Toggle the class to show/hide the division
    hiddenDiv.classList.toggle('about-hidden');
});