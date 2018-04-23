// @flow
import React from 'react';
import Renderer from 'react-test-renderer';
import { KitchenCard } from './Card';

const cardProps = {
    id: 'aj8u4truwqh3pt7',
    name: 'The Bowery Mission',
    description: 'A complete shithole except the food is sometimes tasty.'
}

describe('KitchenCard component', () => {
    it('renders correctly', () => {
        const card = Renderer
        .create(<KitchenCard id={cardProps.id} name={cardProps.name} description={cardProps.description}/>)
        expect(card).toMatchSnapshot();
    });
});
