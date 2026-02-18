// TAB SWITCHING
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

function openTab(tabId) {
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(tab => tab.classList.remove("show"));

    const targetBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
    const targetTab = document.getElementById(tabId);

    if (targetBtn && targetTab) {
        targetBtn.classList.add("active");
        targetTab.classList.add("show");
    }
}

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        openTab(btn.getAttribute("data-tab"));
    });
});

// CLOCK
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("clockText").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// YEAR
document.getElementById("yearText").textContent = new Date().getFullYear();

const btnGlow = document.getElementById("btnGlow");

if (btnGlow) {
    btnGlow.addEventListener("click", () => {
        btnGlow.innerHTML = `<i class="fa-solid fa-check"></i> Highlighted!`;

        btnGlow.style.transform = "translateY(-3px)";
        btnGlow.style.boxShadow = "0 16px 35px rgba(255, 138, 0, 0.35)";

        setTimeout(() => {
            btnGlow.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> Quick Highlight`;
            btnGlow.style.transform = "translateY(0px)";
            btnGlow.style.boxShadow = "none";
        }, 1400);
    });
}

// CONTACT FORM DEM
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        alert("Message sent successfully! (Demo)");

        contactForm.reset();
    });
}
