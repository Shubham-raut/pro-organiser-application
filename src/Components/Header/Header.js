import React, { useState, useContext } from 'react';
import styles from './Header.module.css';
import { NavLink } from "react-router-dom";
import { firebaseApp as firebase } from '../../Firebase/config';
import { AuthContext } from '../../Context/Authentication';

const Header = () => {
    const { user } = useContext(AuthContext);
    const [isDropdown, setIsDropdown] = useState(false);
    const toggleDropdown = () => {
        setIsDropdown(!isDropdown);
    }

    async function handleLogout() {
        await firebase.auth().signOut();
        setIsDropdown(false);
    }

    return (
        <>
            <div className={styles.Navbar}>
                <div className={styles.Title}>Pro Organizer</div>
                {user ?
                    (
                        <div className={styles.NavItemContainer}>
                            <NavLink exact to="/" activeClassName={styles.Active}>
                                <div className={styles.NavItem}>Home</div>
                            </NavLink>
                            <NavLink to="/createboard" activeClassName={styles.Active}>
                                <div className={styles.NavItem}>Create a Board</div>
                            </NavLink>
                            <li className={styles.anchor} onClick={toggleDropdown}>
                                <div className={styles.NavItem}>{user.email}</div>
                            </li>
                        </div>
                    ) :
                    (
                        <>
                            <div className={styles.secondSet}>
                                <NavLink activeClassName={styles.Active} to="/login">
                                    <div className={styles.NavItem}>Login</div>
                                </NavLink>

                                <NavLink activeClassName={styles.Active} to="/signup">
                                    <div className={styles.NavItem}>Sign Up</div>
                                </NavLink>
                            </div>
                        </>
                    )
                }
                {isDropdown && (
                    <div className={styles.dropdownMenu}>
                        <div className={styles.dropdownItem} onClick={handleLogout}>
                            Logout
                      </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Header;