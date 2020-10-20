import React from 'react'
import ReactDOM from 'react-dom';
import RegularComponent from './RegularComponent';

const PortalDemo = () => {
    return ReactDOM.createPortal(
            <RegularComponent />,document.getElementById('portal-root')
    )
}

export default PortalDemo
