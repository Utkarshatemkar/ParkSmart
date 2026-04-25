window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");

    // total preloader duration (~5s)
    setTimeout(() => {
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.display = "none";
            mainContent.classList.remove("hidden");
        }, 800);
    }, 5000);
});





/*nav bar*/
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('show');

}
/*main content*/
function showHowItWorks() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("howItWorksVideo");

    // Set YouTube video URL
    video.src = "https://www.youtube.com/watch?v=OJU6tBfGwX0"; // Replace with your actual video link

    // Show the modal
    modal.style.display = "flex";
}

function closeVideoPopup() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("howItWorksVideo");

    // Hide the modal
    modal.style.display = "none";

    // Stop the video
    video.src = "";
}
/*pree book */
function reserveSpot() {

    window.location.href = 'listyourparking.html';
}

// Image animation effect on scroll
window.addEventListener('scroll', function () {
    const img = document.getElementById('parkingImage');
    const position = img.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
        img.style.transform = 'scale(1.1)';
    } else {
        img.style.transform = 'scale(1)';
    }
});
/*lets chat button */
function toggleChat() {
    const chatBox = document.getElementById("chatBox");
    chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
    chatBox.style.flexDirection = "column";
}

function submitForm() {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const phone = document.getElementById("phoneInput").value;

    if (!name || !email || !phone) {
        alert("Please fill in all fields!");
        return;
    }

    alert(`Thank you, ${name}. We'll get back to you soon!`);
    // Here, you can also send form data to a server or Google Sheet
}

function sendMessage(platform) {
    const message = document.getElementById("chatInput").value;
    if (!message.trim()) {
        alert("Please type a message.");
        return;
    }

    if (platform === "chat") {
        alert("Message sent via in-app chat: " + message);
    } else if (platform === "whatsapp") {
        const number = "+918010763727"; // Replace with your number
        const encoded = encodeURIComponent(message);
        const url = `https://wa.me/${number}?text=${encoded}`;
        window.open(url, "_blank");
    }

    document.getElementById("chatInput").value = "";
}
//platform

// Add smooth scroll animation or reveal effect
window.addEventListener("scroll", () => {
    const section = document.querySelector(".hero-section");
    const position = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if (position < screenPos) {
        section.classList.add("animate");
    }
});



/*why to choose smart park*/
function openPopup(title, description) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-description').innerText = description;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').classList.remove('show');
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closePopup();
    }
});
/*how smart park help*/
const cards = document.querySelectorAll('.card');

const showCards = () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 50) {
            card.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', showCards);
window.addEventListener('load', showCards);
/*free demo*/
function openDemoForm() {
    document.getElementById("demoForm").style.display = "block";
}

function closeDemoForm() {
    document.getElementById("demoForm").style.display = "none";
}

function submitDemoForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!name || !email || !phone) {
        alert("Please fill in all fields.");
        return;
    }

    alert(`Thank you, ${name}! We'll contact you at ${email} or ${phone} soon.`);
    closeDemoForm();
}
//footer
const form = document.getElementById('contactForm');
const toast = document.getElementById('toastMsg');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Show toast
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);

    // Clear form fields
    form.reset();
});
