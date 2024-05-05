import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="flex justify-around h-16 bg-[#111827] text-white items-center">
            <div className='flex gap-3 items-center'>
                <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
                <h1>GeekFoods</h1>
            </div>
            <div className='nav2'>
                <ul className="flex gap-7">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/quote">Quote</Link></li>
                    <li><Link to="/">Restaurant</Link></li>
                    <li><Link to="/">Foods</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </div>
            <div className="px-4 py-2 rounded-md bg-[#2563eb]">
                <button className="tex">Get Started</button>
            </div>
        </div>
    )
}

export default Navbar;
