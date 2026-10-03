'use client';

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { UserDetailConext } from '@/context/UserDetailContext';



const Provider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const [userDetail, setUserDetail] = useState<any>();


    const CreateNewUser = async () => {
        const result = await axios.post('/api/users', {});
        console.log(result);
        setUserDetail(result.data?.user);
    }
    useEffect(() => {
        CreateNewUser();
    }, []);

    return (
        <UserDetailConext.Provider value={{ userDetail, setUserDetail }}>
            <div>
                {children}
            </div>
        </UserDetailConext.Provider>
    )

}

export default Provider