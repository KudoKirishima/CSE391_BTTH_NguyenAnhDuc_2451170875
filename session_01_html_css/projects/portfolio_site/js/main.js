document.addEventListener("DOMContentLoaded", function () {
    const skillsSection = document.querySelector(".skills-section");
    const skillBars = document.querySelectorAll(".skill-progress");

    if (!skillsSection) {
        return;
    }

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                skillBars.forEach(function (bar) {
                    const width = bar.getAttribute("data-width");
                    bar.style.width = width;
                });

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(skillsSection);
});