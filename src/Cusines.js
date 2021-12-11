import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
function Cusines() {
    return (
        <div className="flex flex-col space-y-4">
            <Navbar />
            <div className='flex flex-row justify-evenly '>
                <Card
                    src="https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?w=1110"
                    title="Cuisine 1"
                    description="description"
                />
                <Card
                    src="https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?w=1110"
                    title="Cuisine 1"
                    description="description"
                />
                <Card
                    src="https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?w=1110"
                    title="Cuisine 1"
                    description="description"
                />
            </div>

        </div>
    )
}

export default Cusines