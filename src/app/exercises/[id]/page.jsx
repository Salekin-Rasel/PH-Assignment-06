import React from 'react';
import ExerciseDetaileCard from '@/components/ExerciseDetaileCard';

const ExerciseDetailePage = async ({params}) => {
    const {id} = await params

    const data = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    const detaileCard = await data.json()

    return (
        <div>
            {
                <ExerciseDetaileCard exercise={detaileCard} />
            }
        </div>
    );
};

export default ExerciseDetailePage;