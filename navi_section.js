// Navi titles switching when scrolling 
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.track-section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Callback function to handle intersection changes
    function intersectionCallback(entries) {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.3) {
                const id = entry.target.getAttribute('id');
                const correspondingNavLink = document.querySelector(`a[href="#${id}"]`);

                sections.forEach(section => section.classList.remove('active'));
                navLinks.forEach(link => link.classList.remove('active'));

                entry.target.classList.add('active');
                correspondingNavLink.classList.add('active');
            }
        });
    }

    // Intersection observer options
    const options = {
        threshold: 0.3 // Trigger callback when at least 20% of the element is visible
    };

    // Create intersection observer
    const observer = new IntersectionObserver(intersectionCallback, options);

    // Observe each section
    sections.forEach(section => observer.observe(section));
});
