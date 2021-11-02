import React, { useState, useEffect, ref, Component } from 'react';
import AngleEqualData from './data/angle-equal.json';
import { Table, ButtonGroup, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { withRouter } from 'next/router';
import { findDOMNode, render } from 'react-dom';

export default class AngleEqual extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            isLoaded: false,
            error: null,
            steelType: 'Mild Steel',
            api: 'angle-equal.json',
        }

        this.handleClick = this.handleClick.bind(this);
        this.dataUrl = this.dataUrl.bind(this);
    }

    handleClick = (event) => {
        const id = event.target.id;
        this.setState({steelType: id}),
            function() {
                dataUrl();
            }
    }

dataUrl = () => {
    if(this.state.steelType === 'Mild Steel') {
        this.setState({api: 'angle-equal.json'}),
        function() {
            this.useEffect();
        }
    } else if(this.state.steelType === 'Stainless Steel') {
        this.setState({api: 'ss-angle-equal.json'}),
        function() {
            this.useEffect();
        }
    }
}

componentDidMount() {
    fetch('/data/angle-equal.json')
        .then(res => res.json())
        .then(
        (result) => {
            this.setState({
            isLoaded: true,
            items: result.items
            });
        },
        (error) => {
            this.setState({
            isLoaded: true,
            error
            });
        }
        )
    }



render() {

    const { error, isLoaded, items, steelType } = this.state;

    if (!isLoaded) {
    return <div>Loading...</div>;
    } else {
    return (
        <Row className="table-wrapper">
            <ButtonGroup aria-label="Basic example">
                <Button onClick={this.handleClick} variant="secondary" id="Mild Steel" className="steeltypebutton">Mild Steel</Button>
                <Button onClick={this.handleClick} variant="secondary" id="Stainless Steel" className="steeltypebutton">Stainless Steel</Button>
                <Button onClick={this.handleClick} variant="secondary" id="Aluminum" className="steeltypebutton">Aluminum</Button>
            </ButtonGroup>
            <p>this is my state checker: {steelType}</p>
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
                {this.state.items.map((item) => (
                    <tr key={item.StandardName}>
                        <td>{item.StandardName}</td>
                        <td>{item.SurfaceArea}</td>
                        <td>{item.LbsPerFt}</td>
                        <td>{item.Type}</td>
                        <td>{item.Description}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Row>
    );
  }
}
}