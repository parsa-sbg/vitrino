import propTypes from 'prop-types' 
import FiltersList from "../Filters/FiltersList"

export default function MobileFiltersSelectorModal({setIsFiltesListShow}) {
    return (
        <div className="!opacity-100 !visible transition-all duration-200 fixed top-0 bottom-0 right-0 left-0 w-screen h-screen z-[500] flex items-center justify-center">

            <div className="flex flex-col gap-4 z-50 bg-white dark:bg-[#242424] w-full h-full md:max-w-[490px] md:max-h-[590px] md:rounded-lg p-7">
                <h2 className="font-semibold text-xl mb-5">فیلتر ها</h2>
                <FiltersList />


                <div className="mt-auto w-full flex justify-center">
                    <button onClick={() => {setIsFiltesListShow(false)}} className="bg-green-700 text-white w-full mx-2 rounded-lg py-1.5 px-5 max-w-72">ثبت</button>
                </div>
            </div>
        </div>
    )
}

MobileFiltersSelectorModal.propTypes = {
    setIsFiltesListShow: propTypes.func
}