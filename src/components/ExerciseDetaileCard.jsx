import Image from "next/image";

const DetailedCard = ({ exercise }) => {
  return (
    <div className="grid grid-cols-1 gap-8 bg-[#0d0f12] p-4 sm:p-6 lg:grid-cols-2 lg:p-8">

      {/* Exercise Image */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-xl sm:h-[500px] lg:h-[620px]">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          className="object-cover"
        />
      </div>


      {/* Details */}
      <div className="flex flex-col">

        {/* Name */}
        <h1 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
          {exercise.name}
        </h1>


        {/* Description */}
        <p className="mt-2 max-w-xl text-sm leading-5 text-gray-400">
          {exercise.description}
        </p>


        {/* Muscle Groups */}
        <div className="mt-4 flex flex-wrap gap-2">
          {exercise.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-lime-400 px-3 py-1 text-[10px] font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>


        {/* Exercise Information */}
        <div className="mt-4 overflow-hidden rounded-xl border border-[#24272d] bg-[#15181e]">

          {/* Equipment */}
          <div className="flex items-center justify-between border-b border-[#24272d] px-4 py-3">
            <span className="text-[10px] font-bold uppercase text-gray-500">
              Equipment
            </span>

            <span className="text-xs text-gray-300">
              {exercise.equipment}
            </span>
          </div>


          {/* Difficulty */}
          <div className="flex items-center justify-between border-b border-[#24272d] px-4 py-3">
            <span className="text-[10px] font-bold uppercase text-gray-500">
              Difficulty
            </span>

            <span className="text-xs text-gray-300">
              {exercise.difficulty}
            </span>
          </div>


          {/* Sets */}
          <div className="flex items-center justify-between border-b border-[#24272d] px-4 py-3">
            <span className="text-[10px] font-bold uppercase text-gray-500">
              Sets
            </span>

            <span className="text-xs text-gray-300">
              {exercise.sets}
            </span>
          </div>


          {/* Reps */}
          <div className="flex items-center justify-between border-b border-[#24272d] px-4 py-3">
            <span className="text-[10px] font-bold uppercase text-gray-500">
              Reps
            </span>

            <span className="text-xs text-gray-300">
              {exercise.reps}
            </span>
          </div>


          {/* Duration */}
          <div className="flex items-center justify-between border-b border-[#24272d] px-4 py-3">
            <span className="text-[10px] font-bold uppercase text-gray-500">
              Duration
            </span>

            <span className="text-xs text-gray-300">
              {exercise.duration} min
            </span>
          </div>


          {/* Calories */}
          <div className="flex items-center justify-between border-b border-[#24272d] px-4 py-3">
            <span className="text-[10px] font-bold uppercase text-gray-500">
              Calories
            </span>

            <span className="text-xs text-gray-300">
              {exercise.caloriesBurned} kcal
            </span>
          </div>


          {/* Rating */}
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-[10px] font-bold uppercase text-gray-500">
              Rating
            </span>

            <span className="text-xs text-gray-300">
              {exercise.rating}
            </span>
          </div>

        </div>


        {/* Instructions */}
        <div className="mt-5">

          <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-white">
            Instructions
          </h2>

          <ol className="space-y-2 text-xs leading-5 text-gray-400">
            {exercise.instructions.map((instruction, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-gray-500">
                  {index + 1}.
                </span>

                <span>
                  {instruction}
                </span>
              </li>
            ))}
          </ol>

        </div>


        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">

          <button className="btn border-none bg-lime-400 text-xs font-bold text-black hover:bg-lime-300">
            + Add to today's plan
          </button>

          <button className="btn border border-[#343840] bg-transparent text-xs text-gray-300 hover:border-lime-400 hover:bg-transparent hover:text-lime-400">
            ♡ Save for later
          </button>

        </div>

      </div>

    </div>
  );
};

export default DetailedCard;