

function Navbar(props){
    return(
    <section > 
    <article className=" flex flex-row justify-center ">
       
        {/* MATES TOTALES*/}

        <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg mx-2">
          <div>
            <span className="text-sm font-semibold text-gray-400">Mates totales</span>
            <h1 className="text-2xl font-bold">{props?.categories?.mates}</h1>
          </div>
          <div>
            <img src="https://img.icons8.com/ios/500/mate.png" alt="" className="h-[40px] w-[40px]"/>
          </div>
        </div>

        {/* MATERAS TOTALES*/}

        <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg mx-2">
          <div>
            <span className="text-sm font-semibold text-gray-400">Materas totales</span>
            <h1 className="text-2xl font-bold">{props?.categories?.materas}</h1>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/14/14062.png" alt="" className="h-[40px] w-[40px]"/>
          </div>
        </div>
        

        {/* BOMBILLAS TOTALES*/}

        <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg mx-2">
          <div>
            <span className="text-sm font-semibold text-gray-400">Bombillas totales</span>
            <h1 className="text-2xl font-bold">{props?.categories?.bombillas}</h1>
          </div>
          <div>
            <img src="https://wonpower.com.ar/wp-content/uploads/2019/11/Silueta-1-scaled-600x600.jpg" alt="" className="h-[40px] w-[40px]"/>
          </div>
        </div>
        

        {/* TERMOS TOTALES*/}
        <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg mx-2">
          <div>
            <span className="text-sm font-semibold text-gray-400">Termos totales</span>
            <h1 className="text-2xl font-bold">{props?.categories?.termos}</h1>
          </div>
          <div>
            <img src="https://prints.ultracoloringpages.com/0c19a098721e737d1e27b62ab7907f42.png" alt="" className="h-[40px] w-[40px]"/>
          </div>
        </div>
     

    </article>

    <form action="/create" method="GET" className = "bg-red-700 my-10 text-white text-sm w-1/4 p-2 rounded-lg mx-auto text-center">
         <button type="submit" > CREAR NUEVO PRODUCTO </button>
    </form>


    <form action="/admin" method="GET" className = "bg-red-700 my-10 text-white text-sm w-1/4 p-2 rounded-lg mx-auto text-center">
         <button type="submit" > VER ADMINS </button>
    </form>
  </section>
    )
}

export default Navbar; 