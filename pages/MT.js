import React, { useState, useEffect } from 'react';
import AngleEqualData from './data/angle-equal.json'
import Table from 'react-bootstrap/Table'
import { Row, Col } from 'react-bootstrap'

function AngleEqual() {
  
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
                    AngleEqualData.map((item) => {
                        return (
                            <tr key={item.StandardName}>
                                <td>{item.StandardName}</td>
                                <td>{item.SurfaceArea}</td>
                                <td>{item.LbsPerFt}</td>
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

export default AngleEqual;