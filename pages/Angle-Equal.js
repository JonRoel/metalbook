import React, { useState, useEffect } from 'react';
import AngleEqualData from './data/angle-equal.json';
import Table from 'react-bootstrap/Table'
import { Row, Col } from 'react-bootstrap'
import { withRouter } from 'next/router'

function AngleEqual() {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

useEffect(() => {
    fetch("./data/angle-equal.json")
        .then(res => res.json())
        .then(
        (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log({items});
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
        )
    }, [])

    

    if (error) {
    return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
    return <div>Loading...</div>;
    } else {
    return (
        <Row className="table-wrapper">
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Standard Name</th>
                <th>Surface Area</th>
                <th>lbs per ft</th>
                <th>Type</th>
                <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map((items) => {
                        return (
                            <tr key={items.StandardName}>
                                <td>{items.StandardName}</td>
                                <td>{items.SurfaceArea}</td>
                                <td>{items.LbsPerFt}</td>
                                <td>{items.Type}</td>
                                <td>{items.Description}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    </Row>
    );
    }
}
  
//   return (
//     <Row className="table-wrapper">
//         <Table striped bordered hover variant="dark">
//             <thead>
//                 <tr>
//                 <th>Standard Name</th>
//                 <th>Surface Area</th>
//                 <th>lbs per ft</th>
//                 <th>Type</th>
//                 <th>Description</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     AngleEqualData.map((item) => {
//                         return (
//                             <tr key={item.StandardName}>
//                                 <td>{item.StandardName}</td>
//                                 <td>{item.SurfaceArea}</td>
//                                 <td>{item.LbsPerFt}</td>
//                                 <td>{item.Type}</td>
//                                 <td>{item.Description}</td>
//                             </tr>
//                         )
//                     })
//                 }
//             </tbody>
//         </Table>
//     </Row>
//   );
// }


export default withRouter(AngleEqual);