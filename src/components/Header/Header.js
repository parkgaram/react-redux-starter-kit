import React,{ Component } from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

class Header extends Component {

  render(){
    return (
      <div>
        <h1>React Redux Starter Kit</h1>
        <IndexLink to='/' activeClassName={classes.activeRoute}>
          Home
        </IndexLink>
        {' · '}
        <Link to='/counter' activeClassName={classes.activeRoute}>
          Counter
        </Link>
      </div>
    )
  }
}
// export const Header = () => (
//   <div>
//     <h1>React Redux Starter Kit</h1>
//     <IndexLink to='/' activeClassName={classes.activeRoute}>
//       Home
//     </IndexLink>
//     {' · '}
//     <Link to='/counter' activeClassName={classes.activeRoute}>
//       Counter
//     </Link>
//   </div>
// )

export default Header
