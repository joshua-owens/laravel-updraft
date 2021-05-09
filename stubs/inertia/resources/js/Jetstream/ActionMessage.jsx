import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default function ActionMessage({ on, children, className }) {
    return (
        <div className={className}>
            <CSSTransition
                timeout={0}
                in={on}
                classNames={{
                    exit: 'opacity-0',
                    exitActive: 'transition ease-in duration-1000',
                    exitDone: 'opacity-100',
                }}
            >
                <div className="text-sm text-gray-600">
                    {children}
                </div>
            </CSSTransition>
        </div>
    );
}
