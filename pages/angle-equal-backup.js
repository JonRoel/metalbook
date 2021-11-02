// import React, { useState, useEffect, ref } from 'react';
// import AngleEqualData from './data/angle-equal.json';
// import { Table, ButtonGroup, Button } from 'react-bootstrap';
// import { Row, Col } from 'react-bootstrap';
// import { withRouter } from 'next/router';
// import { findDOMNode } from 'react-dom';

// function AngleEqual() {
//     const [items, setItems] = useState([]);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [error, setError] = useState(null);
//     const [steelType, setSteelType] = useState("Mild Steel");
//     const [api, setApi] = useState('angle-equal.json');

//     function handleClick(event) {
//         const id = event.target.id;
//         setSteelType(id),
//             function() {
//                 dataUrl();
//             }
//     }

// function dataUrl() {
//     if(steelType === 'Mild Steel') {
//         setApi('angle-equal.json'),
//         function() {
//             this.useEffect();
//         }
//     } else if(steelType === 'Stainless Steel') {
//         setApi('ss-angle-equal.json'),
//         function() {
//             this.useEffect();
//         }
//     }
// }
 
// useEffect(() => {
//     fetch("./data/" + `${api}`)
//         .then(res => res.json())
//         .then(
//         (result) => {
//             setIsLoaded(true);
//             setItems(result);
//             console.log({items});
//         },
//         (error) => {
//             setIsLoaded(true);
//             setError(error);
//         }
//         )
//     }, [])
    
//     if (error) {
//     return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//     return <div>Loading...</div>;
//     } else {
//     return (
//         <Row className="table-wrapper">
//             <ButtonGroup aria-label="Basic example">
//                 <Button onClick={handleClick} variant="secondary" id="Mild Steel" className="steeltypebutton">Mild Steel</Button>
//                 <Button onClick={handleClick} variant="secondary" id="Stainless Steel" className="steeltypebutton">Stainless Steel</Button>
//                 <Button onClick={handleClick} variant="secondary" id="Aluminum" className="steeltypebutton">Aluminum</Button>
//             </ButtonGroup>
//             <p>this is my state checker: {steelType}</p>
//             <Table striped bordered hover variant="dark">
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
//                     items.map((items) => {
//                         return (
//                             <tr key={items.StandardName}>
//                                 <td>{items.StandardName}</td>
//                                 <td>{items.SurfaceArea}</td>
//                                 <td>{items.LbsPerFt}</td>
//                                 <td>{items.Type}</td>
//                                 <td>{items.Description}</td>
//                             </tr>
//                         )
//                     })
//                 }
//             </tbody>
//         </Table>
//     </Row>
//     );
//     }
// }
  
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
