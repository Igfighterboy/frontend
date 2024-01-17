import React, { useEffect } from 'react'
import './Server.css'

const Server = () => {

    useEffect(()=>{
        const cookie = document.cookie
        const splitCookie = cookie.split('=')
        const accessToken = splitCookie[1]?.toString();
        console.log(accessToken)
        fetch('http://localhost:3001/dashboard/servers',{method:'post',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({accessToken:accessToken})})
    },[])
  return (
    <div className="server-container">
        <div className="servers">
        <div className="title-base">
            <div className="title">
                <h3>Lokiheree007's Server</h3>
                <p>Select A Server To Get Started</p>
            </div>
            <div className="line"></div>
            </div>
            <div className="datas">
                <div className="data-title">
                    <h5>SHOWING 50 SERVERS</h5>
                </div>
                <div className="data-content-main">


                <div className="data-content">
                    <div className="image">
                    <img src="../Assets/alpha-logo.png" alt="server logo" />
                    <p>ALPhA MUSIX TOWNHALL</p>
                    </div>
                    <div className="content-data">
                    <button className="s-btn">GO TO ALPhA ROOM</button>
                    </div>
                </div>

                <div className="data-content">
                    <div className="image">
                    <img src="../Assets/alpha-logo.png" alt="server logo" />
                    <p>ALPhA MUSIX TOWNHALL</p>
                    </div>
                    <div className="content-data">
                    <button className="s-btn-2">INVITE ALPHA MUSIX</button>
                    </div>
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Server