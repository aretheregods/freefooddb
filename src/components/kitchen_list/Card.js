// @flow
import React, { Component } from 'react';

import './Card.css';

interface KitchenCardProps {
    id: string;
    name: string;
    description?: string;
};

export class KitchenCard extends Component<KitchenCardProps> {
    render() {
        return (
            <li className="card kitchen-card">
                <h3 className="card-title">{this.props.name}</h3>
                <p className="card-description">{this.props.description || "No Description"}</p>
            </li>
        )
    }
}
