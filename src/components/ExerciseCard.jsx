import Image from "next/image";

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-[#292b30] bg-[#15171D]">

      {/* Image */}
      <div className="relative h-70 w-full">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-5">

        {/* Muscle Groups */}
        <div className="mb-3 flex gap-2">
          {exercise.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-lime-400 px-3 py-1 text-[11px] font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Exercise Name */}
        <h2 className="mb-1 text-lg font-bold uppercase tracking-wide text-white">
          {exercise.name}
        </h2>

        {/* Equipment */}
        <p className="text-sm text-gray-500">
          {exercise.equipment}
        </p>

        {/* Divider */}
        <div className="my-4 border-t border-[#292b30]"></div>

        {/* Bottom Information */}
        <div className="flex items-center gap-5 text-xs text-gray-400">

          {/* Duration */}
          <div className="flex items-center gap-1.5">
            <span>◷</span>
            <span>{exercise.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5">
            <span>●</span>
            <span>{exercise.caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <span>☆</span>
            <span>{exercise.rating}</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ExerciseCard;