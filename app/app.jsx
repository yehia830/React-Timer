const React = require('react');
const ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');
// const Weather = require('Weather');
// const About = require('About');
// const Examples = require('Examples');
// load foundation-sites
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
//app css
require('style!css!sass!applicationStyles')



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
  
    </Route>
  </Router>, //property
    document.getElementById('app'));
