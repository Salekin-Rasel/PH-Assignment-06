import ExerciseCard from '@/components/ExerciseCard';
import React from 'react';
import Link from 'next/link';

const getData = async()=> {
    const data = await fetch('https://api.abcz.workers.dev/api/fitlog')
    return data.json()
}

const ExercisesPage = async() => {
    const exerciseData = await getData()

    return (
     <div>
        <div className='ml-20 mb-5'>
            <h1 className='text-4xl font-bold'>THE LIBRARY</h1>
            <p>Twelve lifts covering every major muscle group.</p>
        </div>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-20'>
            {
                exerciseData.map(exercise=>  <Link 
      href={`/exercises/${exercise.id}`} 
      key={exercise.id} 
      className="block"
    >
      <ExerciseCard exercise={exercise} />
    </Link>)
            }
        </div>
    </div>
    );
};

export default ExercisesPage;