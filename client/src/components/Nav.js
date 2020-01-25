import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link to="/">Signup</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="Dashboard">Dashboard</Link></li>
            </ul>
            </div>
        </nav>
    )
}
