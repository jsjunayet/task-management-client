
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthControl } from "../router/AuthProvider";

const Navber = ({ Children }) => {
    const { logOut, user, } = useContext(AuthControl)
    const handlesingout = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const navlink =
        <>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " border-b-2 border-gray-400" : ""
                }
            >
                Home
            </NavLink>

            <NavLink
                to="/task"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " border-b-2 border-gray-400" : ""
                }
            >
                All task
            </NavLink>
            {
                user ? <div className="md:flex  gap-5 justify-center items-center">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " border-b-2 border-gray-400" : ""
                        }
                    >
                        Dashboard
                    </NavLink>
                    <Link onClick={handlesingout}
                        className=""
                    >
                        LogOut
                    </Link>

                </div> : <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " border-b-2 border-gray-400" : ""
                    }
                >
                    Login
                </NavLink>
            }
        </>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content fixed z-40 w-full bg-[#15151599] opacity-100 flex flex-col">
                {/* Navbar */}
                <div className="navbar  max-w-7xl mx-auto">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <div>
                            <p className="text-xl text-bold uppercase text-white ">Task Management</p>
                            <p className="tracking-[.55em] uppercase text-xl text-white">PLARFORM</p>
                        </div>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu text-xl uppercase flex gap-5 items-center menu-horizontal text-white">
                            {/* Navbar menu content here */}
                            {navlink}
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                {Children}
            </div>
            <div className="drawer-side z-50">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu flex  flex-col items-center  gap-2 uppercase  w-60 min-h-full bg-gray-900 text-white text-xl">
                    {/* Sidebar content here */}
                    {navlink}
                </ul>
            </div>
        </div>
    );
};

export default Navber;