import { Link } from "react-router-dom";

const Navigation = () => (
    <nav className="Navigation">
        <Link className="Nav-item" to='/'>Home</Link>
        <Link className="Nav-item" to='/heroes'>Heroes</Link>
        <Link className="Nav-item" to='/episodes'>Episodes</Link>
    </nav>
)

export default Navigation;