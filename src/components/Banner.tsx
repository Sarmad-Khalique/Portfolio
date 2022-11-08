const Banner = ()=>{
    return (
        <div className={"bg-indigo-800 h-[calc(100vh-70px)] text-white text-2xl flex flex-col items-center justify-center h-fulls px-2"}>
            <div className={"text-center"}>Hi &#128075;<br/>I am Sarmad Khalique <br/> A Software Engineer, Web Developer and ML Enthusiast</div>
            <button className={"border-4 rounded-full my-6 py-2 px-6 hover:bg-white hover:text-indigo-800 hover:font-bold"}>Resume</button>
        </div>
    )
}

export default Banner;