import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { addUser } from '@/components/firebase/write';

const Beta = () => {
    const router = useRouter();
    const [err, setErr] = useState(false);

    let name;
    let email;
    let img;
    let uid;
    let fname;
    let lName;

    const [userImg, setUserImg] = useState(img);

    const [Data, setData] = useState({
        id: '',
        uid: '',

        email: '',
        firstName: '',
        lastName: '',

        whatsAppNo: '',
        phoneNo: '',

        age: 0,

        lookingFor: '',

        userType: '',
        education: '',

        country: '',
        state: '',
        city: '',
        pincode: '',

        freeCount: 6,
        paidCount: 0,
    });

    const handlePhone = (e) => {
        setData({ ...Data, whatsAppNo: e.target.value, phoneNo: e.target.value });
    };

    const handleEducation = (e) => {
        setErr(false);
        setData({ ...Data, education: e.target.value });
    };

    const handleUserType = (e) => {
        setErr(false);
        setData({ ...Data, userType: e.target.value });
    };

    const handleSubmit = async () => {
        if (Data?.country && Data?.userType && Data?.education) {
            const userAdded = await addUser(Data);
            if (userAdded == true) {
                router.push('/dash');
            } else {
                router.push('/');
            }
        } else {
            setErr(true);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const getL = async () => {
                const url = '/api/getL';
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const res = await response.json();
                console.log('API response:', res);

                name = window.localStorage.getItem('userName');
                fname = name?.split(' ')[0];
                lName = name?.split(' ')[1] || ''
                email = window.localStorage.getItem('userEmail');
                img = window.localStorage.getItem('userImg');
                setUserImg(img);
                uid = window.localStorage.getItem('userUid');

                setData({
                    ...Data,
                    uid: uid,
                    id: uid,
                    firstName: fname,
                    lastName: lName,
                    email: email,
                    country: res?.country || '',
                    state: res?.regionName || '',
                    city: res?.city || '',
                    pincode: res?.zip || '',
                });
            };
            getL();
        }
    }, [name, email, img, uid]);

    return (
        <div className='flex w-full bg-white h-screen'>
            <div className='hidden md:flex w-[35%] bg-blue-200  justify-center items-center'></div>
            <div className='w-full max-w-sm bg-white flex flex-col justify-center p-6 md:p-6 gap-4 text-xs'>
                <a href='/'>
                    <img
                        src='/logo.svg'
                        className='w-[200px] mb-6 ml-2'
                    />
                </a>

                <div className='flex flex-col gap-3 border border-gray-600  rounded-xl p-4'>
                    <img
                        src={userImg || '/user.png'}
                        className='w-[80px] rounded-full'
                    />
                    <label className='font-bold'>{`${Data?.firstName && Data?.firstName} ${Data?.lastName && Data?.lastName}`}</label>
                    <label className='font-bold'>{Data?.email}</label>
                </div>

                <div className='flex flex-col gap-1 '>
                    <label className='font-bold'>
                        Phone number <span className='text-xs'>(optional)</span>
                    </label>
                    <input
                        onChange={handlePhone}
                        value={Data.phone}
                        type='number'
                        className='border border-gray-600 rounded-lg p-2 placeholder:text-[9px]'
                        placeholder='+91 8898720799'
                    />
                </div>

                <div className='flex flex-col gap-1 '>
                    <label className='font-bold'>Highest eductaion?</label>
                    <select
                        className='w-full rounded-lg border border-gray-600 p-2 text-xs outline-none'
                        onChange={handleEducation}>
                        <option>Select</option>
                        <option value='10th'>10th</option>
                        <option value='12th'>12th</option>
                        <option value='Professional certificate'>
                            Professional certificate
                        </option>
                        <option value='In college (Undergraduate)'>
                            In college (Undergraduate)
                        </option>
                        <option value='Diploma'>Diploma</option>
                        <option value='Graduate'>Graduate</option>
                        <option value='Post Graduate'>Post Graduate</option>
                        <option value='Doctorate'>Doctorate</option>
                        <option value='Post-Doctorate'> Post-Doctorate</option>
                    </select>
                </div>

                <div className='flex flex-col gap-1 '>
                    <label className='font-bold'>Who are you?</label>
                    <select
                        className='w-full rounded-lg border border-gray-600 p-2  text-xs outline-none'
                        onChange={handleUserType}>
                        <option>Select</option>
                        <option>Student</option>
                        <option value='Just Graduate'>Just Graduate</option>
                        <option value='Working professional'>Working professional</option>
                        <option value='Parent'>Parent</option>
                        <option value='School'>School</option>
                        <option value='Career Counselor'>Career Counselor</option>
                    </select>
                </div>

                {err && (
                    <div className='text-xs text-rose-600'>
                        All fields are required except phone number
                    </div>
                )}
                <div
                    onClick={handleSubmit}
                    className='flex w-fit gap-2 items-center cursor-pointer justify-center rounded-full bg-blue-500 p-2 px-4 text-white  hover:bg-blue-600 '>
                    <span>Update profile</span>
                    <svg
                        className='w-5'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth={1.5}
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                        aria-hidden='true'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
                        />
                    </svg>
                </div>
                <div className='text-[9px] text-gray-400'>
                    by signing up you acknowledge to be a part of close early beta of
                    product which may contain bugs.
                </div>
            </div>
        </div>
    );
};

export default Beta;
