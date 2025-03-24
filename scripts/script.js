
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const loginValue = document.getElementById('login').value;

      alert(`Вітаємо, ${loginValue}! Ви успішно зареєстровані.`);

    });
  });
  
