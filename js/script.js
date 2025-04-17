// Get user name
let userName = prompt("Beritahu saya, Siapa nama anda?", "");

if (userName === null || userName.trim() === "") {
    userName = "Anonymous";
}

document.getElementById("user-name").textContent = userName;

// Sticky header effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.sticky-logo');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Form handling
document.getElementById("message-form").addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("nama").value;
    const tanggal = document.getElementById("date").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const message = document.getElementById("message").value;

    document.getElementById("result-nama").innerText = name || "-";
    document.getElementById("result-date").innerText = tanggal || "-";
    document.getElementById("result-gender").innerText = gender || "-";
    document.getElementById("result-message").innerText = message || "-";
    
    // Scroll to results on mobile for better UX
    document.getElementById("message-result").scrollIntoView({ behavior: 'smooth' });
}