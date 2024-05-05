import "./body.css";

function Body() {
  return (
    <>
      <div className="main">
        <div className="box">
          <div className="">
            <h1 className="pt-24 pl-60 text-[#000000] text-7xl">
              Let us find your
            </h1>
            <h2 className="pt-2 pl-60 text-[#e11d48] text-4xl">Forever Food</h2>
            <p className="pt-4 pl-60 text-white text-center flex justify-center  w-[700px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
            <div className="pt-6 pl-60 flex gap-6 ">
              <button className=" bg-[#e11d48] px-6 py-2 rounded-md text-white">
                Search Now
              </button>
              <button className="bg-white px-6 py-2 rounded-md text-[#e11d48]">
                Know more
              </button>
            </div>
          </div>
        </div>

        <div className=" mt-10 flex items-center ">
          <div className="pl-16">
            <img
              src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-6 p-12">
            <div>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore, debitis.
              </h2>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                beatae, magni dolores provident quaerat totam eos, aperiam
                architecto eius quis quibusdam fugiat dicta.
              </p>
            </div>
            <div>
              <button className=" bg-[#e11d48] px-6 py-2 rounded-md text-white">Get in Touch</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
