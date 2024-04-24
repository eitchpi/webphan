	// Function to initialize particlesJS and setup event listeners
    function initializeParticlesAndEventListeners() {
        // Particles JS Background Animation
        var config = {
            /* Your shared configuration options */
            particles: {
                number: {
                    value: 156,
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                },
                color: {
                    value: "#06FD00",
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000",
                    },
                    polygon: {
                        nb_sides: 5,
                    },
                    image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100,
                    },
                },
                opacity: {
                    value: 0.4,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false,
                    },
                },
                size: {
                    value: 6,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false,
                    },
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: "top",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 1499.3805191013182,
                        rotateY: 1200,
                    },
                },
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse",
                    },
                    onclick: {
                        enable: true,
                        mode: "push",
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1,
                        },
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                    push: {
                        particles_nb: 4,
                    },
                    remove: {
                        particles_nb: 2,
                    },
                },
            },
            retina_detect: true,
        };

        var colorSet1 = ["#19FF09", "#06FD00"]; // Green
        var colorSet2 = ["#CB81F8", "#B337FF"]; // Violet

        var isColorSet1 = true; // Track current color set

        // Initialize particlesJS
        particlesJS("particles-js-1", config);
        particlesJS("particles-js-2", config);

       // Function to toggle particle colors and update nav bubble color
          function toggleColors() {
      // Toggle color set
      isColorSet1 = !isColorSet1;

      // Update particle colors directly in the configuration
      config.particles.color.value = isColorSet1 ? colorSet1 : colorSet2;

      // Update nav bubble color
      var navBubbleColor = isColorSet1 ? "var(--swatch--brand)" : "var(--swatch--violet-40)";
      document.querySelector('.nav-bubble').style.backgroundColor = navBubbleColor;
      document.querySelector('.nav-bubble_outline').style.borderColor = navBubbleColor;

      // Reinitialize particles with updated configurations
      particlesJS("particles-js-1", config);
      particlesJS("particles-js-2", config);
      
      // Refresh inner window size
      window.dispatchEvent(new Event('resize'));
      
      }

      // Event listener to toggle particle colors upon clicking .nav-logo
      document.addEventListener('DOMContentLoaded', function() {
          document.querySelector('.nav-logo').addEventListener('click', toggleColors);
      });

      // Set initial nav bubble color based on initial color set
      var initialNavBubbleColor = isColorSet1 ? "var(--swatch--brand)" : "var(--swatch--violet-40)";
      document.querySelector('.nav-bubble').style.backgroundColor = initialNavBubbleColor;
      document.querySelector('.nav-bubble_outline').style.borderColor = initialNavBubbleColor;
      }

      // Call the function to initialize particlesJS and setup event listeners
      initializeParticlesAndEventListeners();
       