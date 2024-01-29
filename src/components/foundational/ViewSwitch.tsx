import React from 'react';
import { ViewSwitchProps } from '../../lib/types';

const ViewSwitch: React.FC<ViewSwitchProps> = ({ index, children }) => {
    return (
        <>
            {React.Children.map(children, (child, childIndex) => (
                childIndex === index! ? (
                    <div
                        role="tabpanel"
                        id={`panel-` + childIndex}
                        aria-labelledby={`tab-` + childIndex} >
                            <React.Fragment key={childIndex}>{child}</React.Fragment>
                    </div>
                ) : null
            ))}
        </>
    );
};


export default ViewSwitch;

