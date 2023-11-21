document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelectorAll('.menu_btn');
  const drops = document.querySelectorAll('.drop_down');
  
  btn.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let drop = currentBtn.closest('.nav_list_item').querySelector('.drop_down');
      btn.forEach(el => {
        if (el !== currentBtn) {
          el.classList.remove('active');
        }
      });

      drops.forEach(el => {
        if (el !== drop){
          el.classList.remove('active');
        }
      });
      drop.classList.toggle('active');
      btn.classList.toggle('btn_active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav_list')) {
      btn.forEach ( el => {
        el.classList.remove('active');
      });

      drops.forEach( el => {
        el.classList.remove('active');
      });
    }
  });

});
