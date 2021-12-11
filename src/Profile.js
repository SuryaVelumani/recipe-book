import React from 'react'

function Profile() {
    return (
        <div className='flex space-x-40 center space-y-20'>
            <div className='flex justify-left gap-20 p-10 place-items-center'>
                <img className='rounded-full object-cover h-80 w-80 ' src='https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?w=1110' />

            </div>

            <div className=''>
                <div className='flex justify-center space-y-4'>
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Name
                            </label>
                            <input class="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"></input>
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Email
                            </label>
                            <input class="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"></input>
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Total Recipes:
                            </label>
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Total Cusines:
                            </label>
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="bg-tertiary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" >
                                Edit
                            </button>
                            <button class="bg-tertiary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" >
                                Logout
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Profile