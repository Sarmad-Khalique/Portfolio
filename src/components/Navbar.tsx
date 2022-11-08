import React, {useState} from "react";
import {BiMenuAltRight} from "react-icons/bi";

const Navbar = ()=>{
    const [open, setOpen] = useState(false);

    const styles = {
        link:"cursor-pointer hover:border-b hover:border-indigo-800 transition-all duration-200 font-bold text-xl md:text-lg md:text-white md:hover:border-white md:tracking-wide"
    }
    return (
        <div className={"flex items-center justify-between w-full px-5 py-5 bg-indigo-800"}>
            <div className={"w-fit text-2xl font-bold text-white"}>Sarmad<span>K.</span></div>
            <div className={`${open?"flex":"translate-x-[100%]"} transition-all duration-300 flex flex-col text-indigo-800 w-screen fixed items-center justify-around bg-white h-screen inset-0 md:relative md:transition-none md:w-auto md:h-auto md:translate-x-0 md:flex-row md:space-x-5 md:bg-transparent`}>
                <div className={styles.link}>Home</div>
                <div className={styles.link}>Projects</div>
                <div className={styles.link}>Contact</div>
            </div>
            <BiMenuAltRight className={`z-10 md:hidden ${open?"text-indigo-800":"text-white"}`} onClick={()=>setOpen(!open)} />
        </div>
    )
}
export default Navbar;