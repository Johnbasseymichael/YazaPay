import React from 'react'

import '../Styles/Components/join-list-modal.scss'

function JoinListModal() {

    return (
        <div className="jwl">
            <div className="jwl-container">
                <h3>Join Wait List</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quibusdam molestiae necessitatibus expedita reprehenderit? Velit provident hic eligendi magni architecto.</p>

                <form >
                    <div className="jwl-inner-form">

                        <div className="inp">
                            <label htmlFor="f-name">First Name</label>
                            <input type="text" id="f-name" placeholder='Enter Your First Name' />
                        </div>

                        <div className="inp">
                            <label htmlFor="l-name">Last Name</label>
                            <input type="text" id="l-name" placeholder='Enter Your Last Name' />
                        </div>

                        <div className="inp">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" placeholder='Enter Your email ' />
                        </div>

                        <div className="inp">
                            <label htmlFor="phone">phone</label>
                            <input type="text" id="phone" placeholder='Enter Your phone number' />
                        </div>

                    </div>

                    <button>Join Wait List</button>

                </form>
            </div>
        </div>
    )
}

export default JoinListModal
