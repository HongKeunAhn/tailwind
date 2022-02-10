import React from 'react';


const Header = () => {
    return (
        <header className='flex flex-row justify-between px-8 py-4 border-2 border-solid border-purple-400'>
            <div className='flex-1'>
                <p>logo</p>
            </div>
            <nav className='flex justify-between flex-1'>
                <ul className='flex flex-1 justify-around'>
                    <li>menu1</li>
                    <li>menu2</li>
                    <li>menu3</li>
                    <li>menu4</li>
                </ul>
                <ul className='flex flex-2 justify-between ml-4'>
                    <li>Sign In</li>
                    <li className='ml-2'>Cart</li>
                    <li className='ml-2'>Search</li>
                </ul>
            </nav>
        </header>
    )
};


export default Header;