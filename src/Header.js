import React from 'react';

const Header = function () {

    const headerStyle = {textAlign:'center', padding:20, background:'#000', color:'#fff',textTransform:'uppercase'};
    return (

    <div style={headerStyle}>
      phone directory
    </div>
    )

}

// class Header extends Component {
//     render () {
//         return (
//             <div className="Header">
//             phone directory
//           </div>
//         )

//     }
// }
export default Header;