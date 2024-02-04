import CartWidget from "./CartWdiget/CartWidget"


const NavBar = () => {
    return (
        
        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
          <img src="" alt="./img/logo.jpeg" width="30" height="30" class="d-inline-block align-text-top"/>
           AvilaCookies
          </a>
        </div>
        <CartWidget/>
      </nav>
    )
}
export default NavBar;