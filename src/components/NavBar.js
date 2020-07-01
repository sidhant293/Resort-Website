import React from 'react';
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{

    constructor(){
        super();
        this.state={
            isOpen:false
        }
    }

    handleToogle=()=>{
        let open=!this.state.isOpen;
        this.setState({isOpen:open});
    }

    render(){
        return(
            <nav className='navbar'>
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to='/'>
                        <img src={logo} alt="home logo"/>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToogle}>
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen? "nav-links show-nav" : "nav-links"}>
                        <li> <Link to='/'> Home </Link> </li>
                        <li> <Link to='/rooms'> Rooms </Link> </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;