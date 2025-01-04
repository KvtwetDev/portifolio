import React from 'react';
import '../css/MenuBar.css';

export default function MenuBar() {
  const Arrow = ({ direction }) => {
    const style = { color: "green", fontSize: "30px", verticalAlign: 'middle' }

    return <span style={style}>{direction === 'right' ? '>' : '<'}</span>;
  };

  return (
    <>
        <div className='menubar'>
        <div className='logo'>logo</div>
        <nav className="nav">
            <span className="span"><Arrow direction="left" />Sobre mim<Arrow direction="right" /></span>
            <span className="span"><Arrow direction="left" />Projetos<Arrow direction="right" /></span>
            <span className="span"><Arrow direction="left" />Contato<Arrow direction="right" /></span>
        </nav>
        </div>
    </>
  );
}

