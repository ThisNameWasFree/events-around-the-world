const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.header__navigation');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navigation.classList.toggle('active');
});
