import { AiOutlineDashboard } from "react-icons/ai"
import {RiAdminLine} from 'react-icons/ri'
import {MdLogout,MdReportProblem,MdAccountBox} from 'react-icons/md'
import{SiCampaignmonitor} from 'react-icons/si'
import {FcSalesPerformance} from 'react-icons/fc'
import { NavLink } from "react-router-dom";
import { IoIosArrowDown,IoIosArrowUp} from "react-icons/io";
import './sidebarmenu.css';
import { useState } from "react";
// import './sidebar.css';
    const SidebarMenu =()=>{
        const [saleDShow, setsaleDShow]=useState();
        const [adminShow, setadminShow]=useState();
        const [compShow,setcompShow]=useState();
        function showSales(){
            setsaleDShow(!saleDShow);
        }
        const showAdmin=()=>{
            setadminShow(!adminShow);
        }
        const showcomp=()=>{
            setcompShow(!compShow)
        }
        return(
            <>  <div className="sidebar">
            <div className="top">
                 {/*
                        do not remove top className div because logo of the company set here with 
                        the help of the csss
                */}
            </div>
                <div className="mainSide">
                    <div className="center">
                        <ul className="ulli_class">
                            <li className="sideLi">
                            <NavLink to="/">
                                <AiOutlineDashboard className="icons"/> <span className="sideSpan">Dashboard</span>
                            </NavLink>
                            </li>
                            <li className="sideLi" onClick={showSales}>
                                <FcSalesPerformance className="icons"/> <span className="sideSpan">Sales { saleDShow ? <IoIosArrowUp/>: <IoIosArrowDown/>} </span>
                             </li> 
                                { saleDShow ? <>
                                    <NavLink to="/sale/customer">
                                        <div className="sideSpan divnav"> <span className="sideSpan">Customer</span></div>
                                    </NavLink>
                                    <NavLink to="/sale/lead">
                                        <div className="sideSpan divnav"> <span className="sideSpan">Lead</span></div>
                                    </NavLink> </> : null
                                }
                            <li className="sideLi" onClick={showAdmin}>
                                <RiAdminLine className="icons"/> <span className="sideSpan"> <span className="sideSpan">Admin</span>{ adminShow ? <IoIosArrowUp/>: <IoIosArrowDown/>} </span>
                            </li>{ adminShow ? <>
                                    <NavLink to="/Admin/account">
                                        <div  className="sideSpan divnav"><span className="sideSpan">Account</span></div> 
                                    </NavLink>
                                    <NavLink to="/Admin/master">
                                        <div className="sideSpan divnav"> <span className="sideSpan">Master</span></div>
                                    </NavLink>
                                </> : null
                            }
                            <li className="sideLi" onClick={showcomp}>
                                <SiCampaignmonitor className="icons"/><span className="sideSpan">Campaign{ compShow ? <IoIosArrowUp/>: <IoIosArrowDown/>} </span>
                            </li>
                                {   compShow ? 
                                        <>
                                            <NavLink to="/campaign/email">
                                            <div className="sideSpan divnav">Email</div>
                                            </NavLink>
                                            <NavLink to="/Campaign/whatsapp">
                                                <div className="sideSpan divnav">Whatsapp</div>
                                            </NavLink>
                                            <NavLink to="/Campaign/sms">
                                                <div className="sideSpan divnav">SMS</div>
                                            </NavLink>
                                         </> : null
                                }
                            <li className="sideLi">
                            <NavLink to="/report">
                                <MdReportProblem className="icons"/> <span className="sideSpan">Report</span>
                                </NavLink>
                            </li>
                            <li className="sideLi">
                            <NavLink to="/login">
                                <MdLogout className="icons"/> <span className="sideSpan">Logout</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
             </div>   
            </>
        )
    }
  export default SidebarMenu;