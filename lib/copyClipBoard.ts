const copyClipBoard = async (value: string) => {
  await navigator.clipboard.writeText(value);
};



export default copyClipBoard
