document.addEventListener('DOMContentLoaded', function() {
  fetch('http://ipinfo.io/json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('ip').textContent = data.ip;
    })
    .catch(error => {
      document.getElementById('ip').textContent = 'Erreur lors de la récupération de l\'IP';
      console.error('Error:', error);
    });
});
