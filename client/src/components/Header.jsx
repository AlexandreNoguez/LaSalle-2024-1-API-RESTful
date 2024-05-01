import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                <ul className="flex">
                    <li className="mr-6">
                        <Link to="/" className="hover:text-gray-300">Início</Link>
                    </li>
                    <li className="mr-6">
                        <Link to="/product/add" className="hover:text-gray-300">Adicionar Produtos</Link>
                    </li>
                    <li className="mr-6">
                        <Link to="/dashboard" className="hover:text-gray-300">Dashoard</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
