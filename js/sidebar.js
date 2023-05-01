export default function sidebar_toogle() {
  const d = document
  const w = window

  d.addEventListener('click', (e) => {
    const $menu_sidebar = d.getElementById('menu_side')
    const $body = d.querySelector('#body')

    if (e.target.matches('#btn_open') || e.target.matches('#btn_open *')) {
      $body.classList.toggle('body_move')
      $menu_sidebar.classList.toggle('menu__side_move')
    }
  })
}
