// @flow
import React, { Component } from 'react';

import { KitchenCard } from './Card';
import './List.css';

type KitchenListProps = {
    kitchens: Array<{id: string, name: string, description?: string}>
};

export class KitchenList extends Component<KitchenListProps> {
    render() {
        return (
            <ul className="kitchen-list">
                {this.props.kitchens &&
                    this.props.kitchens.map(kitchen => (<KitchenCard 
                        id={kitchen.id}
                        name={kitchen.name}
                        description={!!kitchen.description && kitchen.description}
                        key={kitchen.id}
                        />)
                    )
                }
            </ul>
        );
    }
}
