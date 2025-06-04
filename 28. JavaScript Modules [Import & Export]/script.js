function nav() {
    let nav = document.createElement("div")
    nav.innerHTML = `  
    <nav>
    <div class="logo">&#127809;THE TREE</div>
    <div class="nav-links">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </div>
  </nav>
  <section class="content-section">
    <div class="image-container">
      <img src="https://www.wallpaperflare.com/static/994/919/697/tree-branches-spring-leaves-wallpaper.jpg" alt="Side Image">
    </div>
    <div class="text-container">
      <h2>&#127811;THE TREE</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit, elit ut ultricies pharetra, metus urna sollicitudin nulla, at fermentum sem nisl et ligula. Maecenas luctus, magna nec facilisis pulvinar, nisi nunc eleifend nunc, nec porta nulla tortor sit amet nunc. Praesent eu lorem ac orci rhoncus lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec feugiat diam id justo gravida fermentum. Sed eu justo vitae libero vestibulum sollicitudin. Aenean eget nisi at diam accumsan consequat ac non sem. Curabitur vel laoreet neque, sed congue ante. Donec vel tincidunt nulla. Vivamus at porttitor leo. Etiam eu blandit risus. Nulla facilisi. Mauris tristique facilisis ipsum, in varius ex laoreet sed. In scelerisque convallis justo, id dignissim orci tincidunt eget.      
      </p>
    </div>
  </section>
    `
    return nav
}
export default nav