document.addEventListener("DOMContentLoaded", function(event) { 
  // Присваиваем отклик для копки (заказать звонок)
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const CloseBtn = document.querySelector('.modal__close'); 
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  CloseBtn.addEventListener('click', switchModal);

});