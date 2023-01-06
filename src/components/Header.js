import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SiSpacex } from "react-icons/si"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header className='absolute flex items-center justify-between px-5 w-full'>
                <div>
                    <Link to="/">
                        <SiSpacex className="text-8xl text-white" />
                    </Link>
                </div>

                <nav className={`${isOpen ? "open" : ""}`}>
                    <ul>
                        <li>
                            <Link to="/capsules" className="text-white text-sm">
                                Capsules
                            </Link>
                        </li>
                        <li>
                            <Link to="/cores" className="text-white text-sm">
                                Cores
                            </Link>
                        </li>
                        <li>
                            <Link to="/crew" className="text-white text-sm">
                                Crew
                            </Link>
                        </li>
                        <li>
                            <Link to="/dragons" className="text-white text-sm">
                                Dragons
                            </Link>
                        </li>
                        <li>
                            <Link to="/landpads" className="text-white text-sm">
                                Landpads
                            </Link>
                        </li>
                        <li>
                            <Link to="/launches" className="text-white text-sm">
                                Launches
                            </Link>
                        </li>
                        <li>
                            <Link to="/launchpads" className="text-white text-sm">
                                Launchpads
                            </Link>
                        </li>
                        <li>
                            <Link to="/payloads" className="text-white text-sm">
                                Payloads
                            </Link>
                        </li>
                        <li>
                            <Link to="/roadster" className="text-white text-sm">
                                Roadster
                            </Link>
                        </li>
                        <li>
                            <Link to="/rockets" className="text-white text-sm">
                                Rockets
                            </Link>
                        </li>
                        <li>
                            <Link to="/ships" className="text-white text-sm">
                                Ships
                            </Link>
                        </li>
                        <li>
                            <Link to="/starlink" className="text-white text-sm">
                                Starlink
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='lg:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white text-sm uppercase tracking-wider">
                        {isOpen ? "Close" : "Menu"}
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header