const PrimaryButton = ({name}) => {
  return (
    <button className="w-1/3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
      {name}
    </button>
  )
}

export default PrimaryButton
