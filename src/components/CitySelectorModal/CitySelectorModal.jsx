import propTypes from 'prop-types'
import SelectedCitiesSlider from './SelectedCitiesSlider/SelectedCitiesSlider'
import CitiesList from './CitiesList/CitiesList'
import Cover from './Cover'
import CancelBtn from './CancelBtn'
import ConfirmBtn from './ConfirmBtn'
import SearchInput from './SearchInput'
import RemoveAllCitiesBtn from './RemoveAllCitiesBtn'


export default function CitySelectorModal() {


    return (
        <div className={`fixed top-0 bottom-0 right-0 left-0 w-screen h-screen z-50 flex items-center justify-center`}>


            <div className="flex flex-col gap-4 z-50 bg-white dark:bg-[#242424] w-full h-full md:max-w-[490px] md:max-h-[590px] md:rounded-lg p-7">

                {/* title and remove all btn*/}
                <div className='flex justify-between items-center'>
                    <span className='dark:text-white text-[#333] text-xl font-semibold'>انتخاب شهر</span>
                    <RemoveAllCitiesBtn />
                </div>

                <SelectedCitiesSlider />

                <SearchInput />

                <CitiesList />


                <div className='flex gap-5 justify-between'>
                    <CancelBtn />
                    <ConfirmBtn />
                </div>
            </div>


            <Cover />

        </div>
    )
}

CitySelectorModal.propTypes = {
    setIsCitySelectorModalOpen: propTypes.func
}