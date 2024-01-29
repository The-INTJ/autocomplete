import { HeaderProps } from '../../../lib/types';
import React from 'react';
import styles from '../../../styles/foundational/Header.module.scss';

const Header: React.FC<HeaderProps> = ({ children, selected, setSelected }) => {

    return (
        <header className={styles.headerStyles} role='tablist'>
            {React.Children.map(children, (child, index) => (

                <button
                    type='button'
                    aria-selected={index === selected}
                    role='tab'
                    aria-controls={`panel-` + index}
                    id={`tab-` + index}
                    key={child.props.uniqueId}
                    className={styles.headerChild}
                    onClick={() => setSelected(index)}
                    style={{
                        gridColumn: index === selected ? `span ${Math.ceil(React.Children.count(children) / 2)}` : undefined
                    }}
                >
                    {child}
                </button>
            ))}
        </header>
    );
};

export default Header;
