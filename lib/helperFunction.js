export const DivideSlotsIntoTimeFrame = (timeSlots, timeFrame) => {
  // Convert time frame to milliseconds
  const timeFrameMs = timeFrame * 60 * 1000;

  // New array to store divided time slots
  const dividedSlots = [];

  // Iterate through each original time slot
  for (const slot of timeSlots) {
    const { start_time, end_time } = slot;

    // Calculate the duration of the original slot
    const originalDuration = new Date(end_time) - new Date(start_time);

    // Calculate the number of slots needed to divide the original slot
    const numDividedSlots = Math.ceil(originalDuration / timeFrameMs);

    // Calculate the duration of each divided slot
    const dividedSlotDuration = originalDuration / numDividedSlots;

    // Divide the original slot into smaller slots
    for (let i = 0; i < numDividedSlots; i++) {
      const newStartTime = new Date(
        new Date(start_time).getTime() + i * dividedSlotDuration
      );
      const newEndTime = new Date(
        newStartTime.getTime() +
          Math.min(
            dividedSlotDuration,
            originalDuration - i * dividedSlotDuration
          )
      );

      // Add the divided slot to the new array
      dividedSlots.push({
        start_time: newStartTime.toISOString(),
        end_time: newEndTime.toISOString(),
      });
    }
  }

  return dividedSlots;
};
