document.addEventListener('DOMContentLoaded', function() {
  fetch('http://ipinfo.io/json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('ip').textContent = data.ip;
    })
    .catch(error => {
      document.getElementById('ip').textContent = 'Error during the search for your public IP';
      console.error('Error:', error);
    });
});
