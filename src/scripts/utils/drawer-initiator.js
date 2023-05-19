const drawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener('click', () => {
      this._toggleDrawer(button, drawer);
    });

    document.querySelectorAll('.app-bar__item').forEach((nav) => {
      nav.addEventListener('click', () => {
        this._toggleDrawer(button, drawer);
      });
    });
  },

  _toggleDrawer(button, drawer) {
    drawer.classList.toggle('open');
    button.classList.toggle('hide');
  },
};

export default drawerInitiator;
