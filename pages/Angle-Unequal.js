import React, { useState, useEffect } from 'react';
import AngleUnequalData from './data/angle-unequal.json'
import Table from 'react-bootstrap/Table'
import { Row, Col } from 'react-bootstrap'

function AngleUnequal() {
  
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
                    AngleUnequalData.map((item) => {
                        return (
                            <tr key={item.StandardName}>
                                <td>{item.StandardName}</td>
                                <td>{item.SurfaceArea}</td>
                                <td>{item.lbsperft}</td>
                                <td>{item.Type}</td>
                                <td>{item.Description}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    </Row>
  );
}

export default AngleUnequal;