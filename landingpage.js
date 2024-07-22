
        // Responsive Navbar Toggle
        var navbar = document.querySelector('.navbar');
        var navList = document.querySelector('.nav-list');

        navbar.addEventListener('click', function() {
            navList.classList.toggle('show');
        });

        // Modal Functionality
        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName('close')[0];

        // When the user clicks the button, open the modal
        document.getElementById('feedbackForm').onsubmit = function(event) {
            event.preventDefault(); // Prevent default form submission

            // Display modal
            modal.style.display = 'block';

            // Clear form fields
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';

            return false;
        };

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = 'none';
        };

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        };
   
