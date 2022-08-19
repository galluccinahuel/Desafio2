import './NavBar.css';


function NavBar(){

    return(

        <div className='navBar-container'>    
            <ul className='navBar-itemContainer'>
                <li className='navBar-item'><a href="#">E-comerce</a></li>
                <li className='navBar-item'><a href="#">Productos</a></li>
                <li className='navBar-item'><a href="#">Servicios</a></li>
                <li className='navBar-item'><a href="#">Contacto</a></li>
            </ul>
        </div>

    )


}

export default NavBar;