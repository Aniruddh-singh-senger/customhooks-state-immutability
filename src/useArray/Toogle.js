import React from 'react'

const Toogle = () => {



    return (
        <>
            <div class={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
                <input class="form-check-input" onClick={props.toggelemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label class="form-check-label" htmlfor="flexSwitchCheckDefault">enable dark mode</label>
            </div>
        </>
    )
}

export default Toogle;
