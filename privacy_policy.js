  document.addEventListener('DOMContentLoaded', function () {
    const privacyPolicy = document.querySelector('.privacy_policy');
    const privacyButton = document.querySelector('.footer-nav-link.privacy');
    const closeButton = document.querySelector('.close_icon');
    const bannerLink = document.querySelector('.fs-cc-banner3_text-link');
    let scrollPosition = 0; // Variable to store scroll position

    // Function to show the privacy policy
    function showPrivacyPolicy() {
        scrollPosition = window.scrollY; // Store the current scroll position
        privacyPolicy.style.display = 'block';
        document.body.style.position = 'fixed'; // Fix the body position
        document.body.style.width = '100%'; // Fix the body width
        document.body.style.top = `-${scrollPosition}px`; // Position the body at the current scroll position
    }

    // Function to hide the privacy policy
    function hidePrivacyPolicy() {
        privacyPolicy.style.display = 'none';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        window.scrollTo(0, scrollPosition); // Scroll back to the previous position
    }

    // Event listener for the privacy button click
    privacyButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action of the link
        showPrivacyPolicy();
    });

    // Event listener for the close button click
    closeButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action of the link
        hidePrivacyPolicy();
    });

    // Event listener for the banner link click
    bannerLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action of the link
        showPrivacyPolicy();
    });
});