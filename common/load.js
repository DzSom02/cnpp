// Dynamically load the menu
fetch('../common/menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu').innerHTML = data;
  })
  .catch(error => console.error('Error loading menu:', error));

// Dynamically load the footer
fetch('../common/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  })
  .catch(error => console.error('Error loading footer:', error));
