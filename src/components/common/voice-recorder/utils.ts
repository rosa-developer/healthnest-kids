
export const getRecordingTime = (recordingDuration: number): string => {
  const minutes = Math.floor(recordingDuration / 60);
  const seconds = Math.floor(recordingDuration % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export const formatAudioTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
