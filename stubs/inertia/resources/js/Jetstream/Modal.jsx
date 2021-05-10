import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

export default function Modal({ show = false, maxWidth = '2xl', closeable = true, close, children }) {
    const styles = show ? { display: 'block' } : { display: 'none' };

    function maxWidthClass() {
        return {
            'sm': 'sm:max-w-sm',
            'md': 'sm:max-w-md',
            'lg': 'sm:max-w-lg',
            'xl': 'sm:max-w-xl',
            '2xl': 'sm:max-w-2xl',
        }[maxWidth]
    }

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = null;
        }
    }, [show]);

    useEffect(() => {
        function closeOnEscape (e) {
            if (e.key === 'Escape' && props.show) {
                close()
            }
        }

        document.addEventListener('keydown', closeOnEscape)

        return () => document.removeEventListener('keydown', closeOnEscape);
    })

    return createPortal((
        <CSSTransition
            timeout={0}
            classNames={{
                exitActive: 'duration-200',
            }}
        >
            <div style={styles} className="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50" scroll-region="true">
                <CSSTransition
                    timeout={0}
                    classNames={{
                        enter: 'opacity-0',
                        enterActive: 'ease-out duration-300',
                        enterDone: 'opacity-100',
                        exit: 'opacity-100',
                        exitActive: 'ease-in duration-200',
                        exitDone: 'opacity-0',
                    }}
                >
                    <div style={styles} className="fixed inset-0 transform transition-all" onClick={close}>
                        <div className="absolute inset-0 bg-gray-500 opacity-7" />
                    </div>
                </CSSTransition>

                <CSSTransition
                    timeout={0}
                    classNames={{
                        enter: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-9',
                        enterActive: 'ease-out duration-300',
                        enterDone: 'opacity-100 translate-y-0 sm:scale-100',
                        exit: 'opacity-100 translate-y-0 sm:scale-100',
                        exitActive: 'ease-in duration-200',
                        exitDone: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                    }}
                >
                    <div style={styles} className={`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass()}`} onClick={close}>
                        {children}
                    </div>
                </CSSTransition>
            </div>
        </CSSTransition>
    ), document.body);
}
