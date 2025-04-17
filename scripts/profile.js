document.addEventListener('DOMContentLoaded', () => {
    //Getting user id from local storage to generate the right profile.
    const userId = localStorage.getItem('id');
    const profileContainer = document.getElementById('profile');
    
    if (userId) {
        profileContainer.textContent = userId;
    } else {
        console.error('No ID found in localStorage.');
        profileContainer.textContent = 'No ID found in localStorage.'
    }
});
