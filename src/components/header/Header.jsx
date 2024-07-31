/* eslint-disable react/prop-types */
import './header.scss'

export default function Header({currentPage}) {
    return (
        <header className='header'>
            <nav>
                <div className='navList'>
                    <a className={`navItem ${currentPage === 'orgChart' ? 'navActive' : ''}`} href='/'>
                        Organisation Chart
                    </a>
                    <a className={`navItem ${currentPage === 'employees' ? 'navActive' : ''}`} href='/employees'>
                        Employees
                    </a>
                </div>
            </nav>
        </header>
    )
}
