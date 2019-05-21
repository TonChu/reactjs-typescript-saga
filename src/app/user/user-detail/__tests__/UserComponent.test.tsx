import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import UserDetailView from '../UserDetailComponent';

const props: any = {
    exampleAction: jest.fn(),
};

describe('<UserDetailView />', () => {
    let view: ShallowWrapper<any>;
    beforeEach(() => {
        view = shallow(<UserDetailView {...props} />);
    });

    it('should match snapshot', () => {
        expect(view).toMatchSnapshot();
    });

    it('contains correct text', () => {
        expect(view.text()).toContain('Example ReactJS page');
    });
});
