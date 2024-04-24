document.addEventListener("DOMContentLoaded", function () {
    const nextStepMap = {
        'step-welcome': {
            website: 'step-website-1',
            designer: 'step-designer-1',
            developer: 'step-developer-1',
            something: 'step-something-1'
        },
        'step-website-1': mapNext('step-website-2', 'step-welcome'),
        'step-website-2': mapNext('step-website-3', 'step-website-1'),
        'step-website-3': mapNext('step-website-4', 'step-website-2'),
        'step-website-4': mapNext('step-timeline', 'step-website-3'),
        'step-timeline': mapNext('step-budget', 'step-previous'),
        'step-budget': mapNext('step-contact-details', 'step-timeline'),
        'step-contact-details': { back: 'step-budget' },
        'step-something-1': mapNext('step-something-2', 'step-welcome'),
        'step-something-2': mapNext('step-timeline', 'step-something-1'),
        'step-developer-1': mapNext('step-developer-2', 'step-welcome'),
        'step-developer-2': mapNext('step-developer-3', 'step-developer-1'),
        'step-developer-3': mapNext('step-developer-4', 'step-developer-2'),
        'step-developer-4': mapNext('step-timeline', 'step-developer-3'),
        'step-designer-1': mapNext('step-designer-2', 'step-welcome'),
        'step-designer-2': mapNext('step-designer-3', 'step-designer-1'),
        'step-designer-3': mapNext('step-timeline', 'step-designer-2')
        // Define mappings for other steps similarly
    };

    // Helper function to map next and back steps
    function mapNext(next, back) {
        return { next, back };
    }  

    let previousSteps = []; // Initialize an empty array to track previous steps

    function handleNextButtonClick(event) {
        const nextButton = event.target;
        nextButton.disabled = true; // Disable the button to prevent multiple clicks
        const currentStep = event.target.closest('.onboarding_step');
        const currentStepId = currentStep.getAttribute('if-id');
        const selectedInput = currentStep.querySelector('input[type="radio"]:checked, input[type="checkbox"]:checked');
        const errorMessage = currentStep.querySelector('.form_error-msg');

        if (!selectedInput && currentStep.querySelectorAll('input[type="radio"], input[type="checkbox"]').length > 0) {
            errorMessage.classList.add('active');
            setTimeout(() => {
                errorMessage.classList.remove('active');
            }, 3000); // Hide error message after 3 seconds
            nextButton.disabled = false; // Re-enable the button
            return; // Stop execution if no option is selected
        }

        errorMessage.classList.remove('active');

        let nextStepId;

        if (currentStepId === 'step-welcome') {
            const choice = selectedInput.value.toLowerCase();
            nextStepId = nextStepMap[currentStepId][choice];
        } else {
            nextStepId = nextStepMap[currentStepId].next;
        }

        previousSteps.push(currentStepId); // Push the current step to the stack

        const nextStep = document.querySelector(`[if-id="${nextStepId}"]`);

        if (nextStep) {
            nextStep.classList.add('active');
            currentStep.classList.remove('active');
        } else {
            console.error(`Next step with ID "${nextStepId}" not found.`);
        }

        nextButton.disabled = false; // Re-enable the button
    }

    function handleBackButtonClick(event) {
        const currentStep = event.target.closest('.onboarding_step');
        const currentStepId = currentStep.getAttribute('if-id');

        // Pop the last visited step from the stack
        const prevStepId = previousSteps.pop();

        const prevStep = document.querySelector(`[if-id="${prevStepId}"]`);

        if (prevStep) {
            prevStep.classList.add('active');
            currentStep.classList.remove('active');

            // Remove error message when navigating back
            const errorMessage = prevStep.querySelector('.form_error-msg');
            if (errorMessage) {
                errorMessage.classList.remove('active');
            }
        } else {
            console.error(`Previous step with ID "${prevStepId}" not found.`);
        }
    }

    const nextButtons = document.querySelectorAll('.button-next');
    nextButtons.forEach(button => {
        button.addEventListener('click', handleNextButtonClick);
    });

    const backButtons = document.querySelectorAll('.button-back');
    backButtons.forEach(button => {
        button.addEventListener('click', handleBackButtonClick);
    });

    const steps = document.querySelectorAll('.onboarding_step');
    steps.forEach(step => {
        step.addEventListener('input', () => {
            const errorMessage = step.querySelector('.form_error-msg');
            const selectedInput = step.querySelector('input[type="radio"]:checked, input[type="checkbox"]:checked');
            if (selectedInput || !step.querySelector('input[type="radio"], input[type="checkbox"]')) {
                errorMessage.classList.remove('active');
            }
        });
    });

    // Debounce function to ensure onDoubleClick is only called once within a certain time frame
    function debounce(func, delay) {
        let timeout;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), delay);
        };
    }

    // Define the onDoubleClick function
    function onDoubleClick(event) {
        const target = event.target;
        if (target && target.classList && target.classList.contains('someClass')) {
            // Do something
            console.log("Double-click detected on an element with class 'someClass'");
        }
    }

    // Add debounced event listener for double-click events
    document.addEventListener('dblclick', debounce(onDoubleClick, 300));

});