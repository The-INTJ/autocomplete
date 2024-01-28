import React from 'react';
import { ViewSwitchProps } from '../lib/types';

const ViewSwitch: React.FC<ViewSwitchProps> = ({ index, children }) => {
    return (
        <>
            {React.Children.map(children, (child, childIndex) => 
                childIndex === index ? <React.Fragment key={childIndex}>{child}</React.Fragment> : null
            )}
        </>
    );
};

export default ViewSwitch;

