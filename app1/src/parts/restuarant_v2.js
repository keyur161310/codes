import React from "react";
import DinigTable from "./dinigtable_v2";

class Restaurant extends React.Component {
    render() {
        return (<div className="container-fluid">
            <div className="row">
                <DinigTable   name='superman'  tableno='990'  /> 
                <DinigTable    name='batman'  tableno='111' />
            </div>
        </div>
        );
    }
}

export default Restaurant;