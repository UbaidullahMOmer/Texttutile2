import React, {Fragment} from "react";
import {Button, Tabel} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.main.css";
import Employees from "./Employees";

function Home(){
    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Tabel striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                            ?
                            Employees.map((item) =>{
                                return(
                                    <tr>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Age}
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                        }
                    </tbody>
                </Tabel>
            </div>
        </Fragment>
    )
}

export default Home;