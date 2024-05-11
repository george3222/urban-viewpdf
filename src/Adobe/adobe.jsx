
import React from "react";
import './adobe.css';
import AdobeLogo from '../media/img/logo.png';
import GetAdobe from '../media/img/get.png';

export const Adobe = ()=>{
    const reloadPreloader = ()=> window.location.reload();
    return(<div className="aobe">
        
        <header className="toppa">
            <div className="sec1">
                <img 
                    src={AdobeLogo} 
                    alt="Adob" 
                    className="logg" 
                    style={{cursor:'pointer'}}
                    onClick={reloadPreloader}
                />
            </div>

            <div className="sec2">
                <img 
                    src={GetAdobe} 
                    alt="Acrobat Reader" 
                    className="acrobat" 
                />
            </div>
        </header>




        <div className="navBa_r_lkjhgyuikjnbhn">
            <div className="navvv_btn_container">
                <ul>
                    <li className="llllist">
                        <div className="_navvbtnnn" onClick={reloadPreloader}>
                            <span className="rix ri-eye-line"></span>
                            &#160;
                            View
                        </div>
                    </li>

                    <li className="llllist">
                        <div className="_navvbtnnn" onClick={reloadPreloader}>
                            <span className="rix ri-edit-2-line"></span>
                            &#160;
                            Edit
                        </div>
                    </li>

                    <li className="llllist">
                        <div className="_navvbtnnn" onClick={reloadPreloader}>
                            <span className="rix ri-download-cloud-2-line"></span>
                            &#160;
                            Download
                        </div>
                    </li>

                    <li className="llllist">
                        <div className="_navvbtnnn" onClick={reloadPreloader}>
                            <span className="rix ri-save-3-fill"></span>
                            &#160;
                            Save
                        </div>
                    </li>
                </ul>
            </div>
        </div>




    </div>);
};