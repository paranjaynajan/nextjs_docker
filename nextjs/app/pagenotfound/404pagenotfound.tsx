import React, { useState } from 'react';
import styles from './404.module.scss'
import PagenotfoundLogo from '../../assets/images/ass.png'
import { useNavigate } from 'react-router-dom';



const Pagenotfound = () => {
    const navigate = useNavigate();
    return (<>
     <div className={styles.backdrop}>

        <div className={styles.container}>
            <img src={PagenotfoundLogo} width={150} alt="Page Not Found" />
            <div className={styles.heading}>
                Page not found
            </div>
          
             <div className={styles.subHeading}>
                Sorry, we couldn't find this page.
             </div>
             <div className={styles.subHeading}>
               But don't worry , you can find plenty of other things on our homepage
             </div>
            <button className={styles.pageNotFoundButton}
                onClick={() => navigate("/home")}
            >
                Go home
            </button>


        </div>
    </div>


    </>)
}
export default Pagenotfound