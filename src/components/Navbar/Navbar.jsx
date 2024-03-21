import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/products', name: 'Products' },
        { id: 5, path: '/blogs', name: 'Blogs' }
      ];
      
    return (
        <div className="bg-slate-600 p-4">
            <div className="md:hidden text-2xl text-white" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <AiOutlineClose></AiOutlineClose> : 
                    <RiMenu2Line></RiMenu2Line>
                }
                
            </div>

            <ul className={`md:flex justify-center gap-10 duration-1000 absolute md:static
            ${open ? 'top-14': '-top-80'}  bg-slate-600`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </div>
    );
};

export default Navbar;
