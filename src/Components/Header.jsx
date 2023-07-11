import React from 'react';

const Header = (props) => {
    const name = props.title;
    return (
        <header className='justify-between text-center'>
            <h1>{name}</h1>
        </header>
    );
};

export default Header;