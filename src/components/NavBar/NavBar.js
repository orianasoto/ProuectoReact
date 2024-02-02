import CartWidget from "./CartWdiget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>AvilaCookies</h3>
            <div>
              <button>Tortas</button>
              <button>Galletas</button>
              <button>Arreglos personalizados</button>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default NavBar