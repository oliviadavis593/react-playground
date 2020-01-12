import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs'
import renderer from 'react-test-renderer'

describe('Tabs Component', () => {
    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Tabs />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the first tab by default', () => {
        const tree = renderer.create(<Tabs tabs={tabsProp} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})