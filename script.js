document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('donationModal');
    var closeButton = document.querySelector('.close');

    // Show the modal when the page is loaded
    modal.style.display = 'block';

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});