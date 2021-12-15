import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ zIndex: '1', position: 'sticky', top: '0.1px' }}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/Services">Services</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/ArrayUseState">ArrayUseState</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ObjectUseState">ObjectUseState</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/CustomHooks">CustomHooks</Link>
                </li>
              </ul>
              <div class={`form-check form-switch text-${this.props.mode==='light'? 'dark':'light'} mx-3`}>
                            <input class="form-check-input" onClick={this.props.toggelemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" htmlfor="flexSwitchCheckDefault">enable dark mode</label>
                        </div>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar