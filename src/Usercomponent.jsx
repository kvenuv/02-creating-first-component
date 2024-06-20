function Header(){
    return(
        <>
        <header>
        <h1>This is person component</h1>
        </header>
        </>
    )
}

function Nav(){
    return(
        <>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        </nav>
        </>
    )
}
function Footer(){
    return(
        <>
        <footer>
            <p>The end of page</p>
        </footer>
        </>
    )
}
function Usercomponent(){
    return(
        <>
        <Header />
        <Nav />
        <Footer />
        </>
    )
}
export default Usercomponent;
