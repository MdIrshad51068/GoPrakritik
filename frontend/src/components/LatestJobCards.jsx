import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { toast } from 'sonner'

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();
    const { user } = useSelector(store => store.auth);
    return (
        <div onClick={() => {
            if (user) {
                navigate(`/description/${job?._id}`);
            } else {
                toast.error("You must be logged in to view job details.");
                navigate("/");
            }
        }}
            className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
            <div>
                <h1 className='font-medium text-lg'>GoPrakritik</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
            </div>

        </div>
    )
}

export default LatestJobCards