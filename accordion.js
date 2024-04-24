// Accordion
document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item.gradient");

        accordionItems.forEach((item, index) => {
            item.addEventListener("click", function () {
                const siblingContent = this.querySelector(".accordion-content");
                const accordionText = siblingContent.querySelector(".accordion-text");
                const accordionIcon = this.querySelector(".accordeon_icon");
                const accordionElements = accordionText.querySelector(".accordeon-elements"); // Select the .accordeon-elements within .accordion-text
                const svgAddIcon = this.querySelectorAll(".svg_add_icon path"); // Select all path elements within .svg_add_icon within the clicked item

                const isActive = this.classList.contains("active");

                // Remove 'active' class from all items and rotate all icons back to their initial position
                accordionItems.forEach((accordionItem) => {
                    accordionItem.classList.remove("active");
                    accordionItem.querySelector(".accordion-content").classList.remove("active");
                    accordionItem.querySelector(".accordion-text").classList.remove("active");
                    accordionItem.querySelector(".accordeon_icon").classList.remove("rotate");

                    // Also remove 'active' class from .accordeon-elements
                    accordionItem.querySelector(".accordion-text .accordeon-elements").classList.remove("active");

                    // Reset color of all path elements within .svg_add_icon to var(--nav--links-icon)
                    accordionItem.querySelectorAll(".svg_add_icon path").forEach(path => path.setAttribute('fill', 'var(--nav--links-icon)')); 
                });

                if (!isActive) {
                    // Toggle 'active' class for the clicked item
                    this.classList.add("active");
                    siblingContent.classList.add("active");
                    accordionText.classList.add("active");

                    // Toggle 'rotate' class for the clicked item's icon
                    accordionIcon.classList.add("rotate");

                    // Change color of all path elements within .svg_add_icon to var(--nav--links-icon-hover)
                    svgAddIcon.forEach(path => path.setAttribute('fill', 'var(--nav--links-icon-hover)'));

                    // Add 'active' class to .accordeon-elements within .accordion-text after a delay
                    setTimeout(function () {
                        accordionElements.classList.add("active");
                    }, 300); // Adjust the delay time as needed (in milliseconds)
                }
            });

            // Initially open the first item
            if (index === 0) {
                item.click();
            }
        });
    });	