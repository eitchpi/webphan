 // *** Logo looping *** //
 const logoStates = ['.logo-state01', '.logo-state02', '.logo-state03', '.logo-state04','.logo-state05','.logo-state01', '.logo-state02', '.logo-state01', '.logo-state02','.logo-state05'];
 let currentIndex = 0;

 function toggleLogoState(index) {
   $(logoStates[index]).toggleClass('active');
   setTimeout(function () {
     $(logoStates[index]).toggleClass('active');
     currentIndex = (currentIndex + 1) % logoStates.length; // Move to the next logo state
     toggleLogoState(currentIndex); // Call the function again for the next state
   }, getDelay(index));
 }

 function getDelay(index) {
   const delays = [2000, 3000, 2000, 250, 200, 1200, 2100, 1800, 1200, 200]; // Delays for each state in milliseconds
   return delays[index];
 }

 // Start the animation
 toggleLogoState(currentIndex);
 