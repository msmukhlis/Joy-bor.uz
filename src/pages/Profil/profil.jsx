import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

// Define schema using Yup
const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  phoneNumber: yup.string().required('Phone number is required').matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Phone number must be numeric').min(10, 'Phone number must be at least 10 digits long').max(15, 'Phone number must be at most 15 digits long'),
});

const Profile = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate("/home/main");
    // Handle form submission logic here
  };

  return (

    <div className="px-[10%] py-[5%] m-0">
        <h2 className="text-3xl font-semibold mb-[5%] ">Profil ma'lumotlari</h2>

    <div className="flex justify-start items-start min-h-screen gap-[10%] ">
        <h2 className="text-xl font-bold mb-6 text-center">Shaxsiy ma'lumotlar</h2>
        <form className='w-[40%] m-0' onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              {...register('username')}
              className={`w-full px-3 py-2 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <div className="relative">
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                {...register('phoneNumber')}
                className={`w-full px-3 py-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-20`}
              />
              <button
                type="button"
                className="absolute right-3 top-2 py-1  bg-indigo-500 text-white px-3 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Raqamni o'zgartirish
              </button>
            </div>
            {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>}
          </div>
          {/* <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            submit
          </button> */}
        </form>
    </div>
    </div>
  );
};

export default Profile;
