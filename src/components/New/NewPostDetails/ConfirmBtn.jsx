import propTypes from 'prop-types'
import { useCallback } from 'react';

export default function ConfirmBtn({ validateInputs, creationIsLoading }) {


    const clickHandler = useCallback(async () => {
        await validateInputs()
    }, [validateInputs])

    console.log(creationIsLoading);

    return (
        <button
            onClick={clickHandler}
            className='w-full rounded-lg hover:bg-blue-700 transition-colors duration-300 py-2 px-6 font-bold bg-main text-white disabled:text-inherit disabled:bg-gray-100 dark:disabled:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-80' >
            {creationIsLoading ? <div className='h-5 w-5 mx-auto animate-spin rounded-full border-4 border-gray-500 border-r-transparent'></div> : 'ثبت آگهی'}
        </button>
    )
}

ConfirmBtn.propTypes = {
    validateInputs: propTypes.func,
    isAllInputsValid: propTypes.bool,
    creationIsLoading: propTypes.bool
}