import React, { useContext } from 'react';
import PageContext from '@/Context/PageContext';

export default function Banner() {
    const props = useContext(PageContext);
    console.log({ props })
    return (
        <div>test</div>
    );
}
