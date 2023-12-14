import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { GiCheckMark } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

import '../Styles/Components/join-list-modal.scss'
import axios from 'axios'
import { TailSpin } from 'react-loader-spinner'



interface UserInfo {
    first_name: string;
    last_name: string;
    email: string;
}

interface Props {
    showWaitList: boolean;
    setShowWaitList:  React.Dispatch<React.SetStateAction<boolean>>;
}

const JoinListModal: React.FC<Props> = ({ showWaitList, setShowWaitList }) => {

    const [loading, setLoading] = useState(false)
    const [successful, setSuccessful] = useState(false)
    const [errMsg, setErrMsg] = useState('')

    // const BASE_URL:string = import.meta.env.VITE_BASE_URL;

    // FORM VALIDATION SCHEMA
    const schema = yup.object().shape({
        first_name: yup.string().max(30, 'Name too long').required('Please enter your first name '),
        last_name: yup.string().max(30, 'Name too long').required('Please enter your last name'),
        email: yup.string().email('Please enter a valid email').required('Please enter your email address'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    // SUBMIT USER INFO
    const onSubmit = async (data: UserInfo) => {
        try {
            setLoading(true)
            setErrMsg('')

            const res = await axios.post('http://example.com', {
                data,
            })

            console.log(res)
            setSuccessful(true)
            setLoading(false)

            setTimeout(() => {
                setShowWaitList(false)
            }, 2500);

        } catch (err: any) {
            setLoading(false)
            setErrMsg(err.message)
            console.log(err);

        }

    }


    return (
        <div className={`jwl ${showWaitList && 'show-modal'}`} >
            <div className={`jwl-container ${showWaitList && 'scale-up'}`}>
                <h3>Join Wait List</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quibusdam molestiae necessitatibus expedita reprehenderit? Velit provident hic eligendi magni architecto.</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {errMsg != '' && <p className='err-msg'>{errMsg}</p>}

                    <div className="jwl-inner-form">

                        <div className="inp">
                            <label htmlFor="f-name">First Name</label>
                            <p className='err'>{errors.first_name?.message}</p>
                            <input type="text" id="f-name" placeholder='Enter Your First Name' {...register('first_name')} />
                        </div>

                        <div className="inp">
                            <label htmlFor="l-name">Last Name</label>
                            <p className='err'>{errors.last_name?.message}</p>
                            <input type="text" id="l-name" placeholder='Enter Your Last Name'  {...register('last_name')} />
                        </div>

                        <div className="inp">
                            <label htmlFor="email">Email</label>
                            <p className='err'>{errors.email?.message}</p>
                            <input type="text" id="email" placeholder='Enter Your email '  {...register('email')} />
                        </div>

                    </div>

                    {loading
                        ? <div className="spinner">
                            <TailSpin
                                height="50"
                                width="50"
                                wrapperClass="spinner"
                                color="var(--primary-color)"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                            />
                        </div>
                        : <button className='afa'>Join Wait List</button>}
                </form>

                <MdCancel onClick={() => setShowWaitList(false)} />

            </div>

            <div className={`success ${successful && 'show-msg'}`}>
                <GiCheckMark />
                <h3>successful</h3>
            </div>

        </div>
    )
}

export default JoinListModal
