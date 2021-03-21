import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

function widthClass(width) {
    return {
        '48': 'w-48',
    }[width.toString()]
}

function alignmentClasses(align) {
    if (align === 'left') {
        return 'origin-top-left left-0'
    } else if (align === 'right') {
        return 'origin-top-right right-0'
    } else {
        return 'origin-top'
    }
}

export default function Dropdown({ trigger, content, align = 'right', width = '48',  contentClasses = ['py-1', 'bg-white'] }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const closeOnEscape = (e) => {
            if (open && e.keyCode === 27) {
                setOpen(false);
            }
        }

        document.addEventListener('keydown', closeOnEscape);

        return () => {
            document.removeEventListener('keydown', closeOnEscape);
        }
    });

    const styles = open ? { opacity: 1 } : { opacity: 0 };

    return (
        <div className="relative">
            <div onClick={() => setOpen(!open)}>
                {trigger}
            </div>

            {open && (
                <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}></div>
            )}

            <div>
                <CSSTransition
                    timeout={0}
                    in={open}
                    classNames={{
                        enter: 'transition ease-out duration-200',
                        enterActive: 'transform opacity-0 scale-95',
                        enterDone: 'transform opacity-100 scale-100',
                        exit: 'transition ease-in duration-75',
                        exitActive: 'transform opacity-0 scale-95',
                        exitDone: 'transform opacity-100 scale-100',
                    }}
                >
                    <div
                        className={`absolute z-50 mt-2 rounded-md shadow-lg ${widthClass(width)} ${alignmentClasses(align)}`}
                        onClick={() => setOpen(false)}
                        style={styles}
                    >
                        <div className={`rounded-md ring-1 ring-black ring-opacity-5 ${contentClasses.join(' ')}`}>
                            {content}
                        </div>
                    </div>
                </CSSTransition>
            </div>
        </div>
    );
}
