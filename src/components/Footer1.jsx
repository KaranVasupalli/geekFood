import './footer.css'

const Footer1 = ()=>{
    return(
        <>
            <div className=" mt-10  bg-[#f3f4f6] ">
                <div className='flex justify-center h-12 '>
                    <div className="img mt-2"></div>
                </div>
               <div className=' text-center mt-8'>
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.
                    </p>
               </div>
               <ul className='flex gap-16 justify-center mt-8'>
                <li>About</li>
                <li>Careers</li>
                <li>History</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Blog</li>
               </ul>

               <div className='flex justify-center gap-6 mt-8'>
                    <div className='img1 w-8'></div>
                    <div className='img2 w-8'></div>
                    <div className='img3 w-8'></div>
                    <div className='img4 w-8'></div>
                    <div className='img5 w-8'></div>
               </div>
            </div>
        </>
    )
}

export default Footer1