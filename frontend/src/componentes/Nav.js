import React from 'react'; ///ES6 js 
import {Link} from 'react-router-dom';
function Nav(){
return(
    <nav >
    <div>
        <div >
            <Link to='/home' >Home</Link>
            <Link to='/tweet' >Tweet</Link>
        </div>
    </div>
</nav>
);

}
export default Nav;