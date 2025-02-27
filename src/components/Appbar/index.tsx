
import React from 'react';
import "./styles.scss";

// container suử dụng grid line hoặc grid areaarea


const Appbar = () => {
    return (
        <div className='app_bar_container'>
            <div className='item item-1'>Header</div>
            <div className='item item-2'>Sidebar</div>
            <div className='item item-3'>comment</div>
            <div className='item item-4'>Content</div>
            <div className='item item-5'>footer</div>
        </div>
    )
}

export default Appbar;
