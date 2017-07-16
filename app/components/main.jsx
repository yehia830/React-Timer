const React = require('react');
const Nav = require('Nav');

var Main = (props) => {
  return(
    <div>
      <div>
        <div>
          <Nav/>
          <p>Main.jsx rendered</p>
          {props.children}
        </div>
    </div>
    </div>
  )
}

module.exports = Main;
