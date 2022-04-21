import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <Link to="/">
                    <h1>Agila Metoder</h1>
                    <p>Scrum</p>
                </Link>
            </nav>
        </header>
    );
}

export default Header;