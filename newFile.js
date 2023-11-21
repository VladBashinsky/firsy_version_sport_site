document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelectorAll('.menu_btn');
  btn.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let drop = currentBtn.closest('.nav_list_item').querySelector('drop_down');

      currentBtn;
    });
  });
});
