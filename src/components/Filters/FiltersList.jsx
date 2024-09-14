import { memo, useCallback } from "react"
import RangeFilter from "./RangeFilter"
import Accordion from "./Accordion"
import CheckBoxFilter from "./CheckBoxFilter"
import { useFilters } from "../../hooks/useFilters"


export default memo(function FiltersList() {

    const { setFilter } = useFilters();

    const priceChangeHandler = useCallback((res) => {
        setFilter('price', res)
    }, [setFilter])


    const withPhotoChangeHandler = useCallback((res) => {
        setFilter('withPhoto', res.isChecked)
    }, [setFilter])


    return (
        <div className="flex flex-col gap-4">
            <Accordion name={'قیمت'} >
                <RangeFilter callBack={priceChangeHandler} minPlaceHolder={"مثلاً ۱۰,۰۰۰,۰۰۰"} maxPlaceHolder={'مثلاً ۱۰۰,۰۰۰,۰۰۰'} />
            </Accordion>

            <Accordion name={'وضعیت آگهی'}>
                <div className="my-4"><CheckBoxFilter name={'عکس دار'} callBack={withPhotoChangeHandler} /></div>
            </Accordion>
        </div>
    )
})


