
export default function ConfirmBtn({validateInputs}) {
    return (
        <button
            onClick={validateInputs}
            className='w-full rounded-lg hover:bg-blue-700 transition-colors duration-300 py-2 px-6 font-bold bg-main text-white disabled:text-inherit disabled:bg-gray-100 dark:disabled:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-80' >
            ثبت آگهی
        </button>
    )
}
