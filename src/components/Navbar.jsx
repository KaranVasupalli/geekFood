

function Navbar(){
    return(
        <>
            <div className="flex justify-around  h-16 bg-[#111827]  text-white  items-center">
                <div className=' flex gap-3 items-center'>
                    <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
                    <h1>GeekFoods</h1>
                </div>
                <div className='nav2'>
                    <li className=" flex gap-7">
                        <a href="/">Home</a>
                        <a href="/quote">Quote</a>
                        <a href="">Restaurant</a>
                        <a href="">Foods</a>
                        <a href="">Contact</a>
                    </li>
                </div>
                <div className="px-4 py-2 rounded-md bg-[#2563eb]">
                    <button className="tex">Get Started</button>
                </div>
            </div>

        </>
    )
}

export default Navbar;