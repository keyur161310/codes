import React from "react";
import cricket from "./3_cricket";

class scoreboard extends React.Component {
    render() {
        return (<div className="container-fluid">
            <div className="row">
               <cricket name='ms dhoni' />
                
            </div>
        </div>
        );
    }
}

export default scoreboard;