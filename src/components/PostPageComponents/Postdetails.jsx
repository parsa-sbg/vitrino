import { memo } from "react";
import propTypes from 'prop-types'
import PostDetailsItem from "./PostDetailsItem";

const Postdetails = memo(({ dynamicFields, price }) => {
    return (
        <div className="">
            {dynamicFields?.map(item => (
                <PostDetailsItem dynamicField={item} key={item._id} />
            ))}
            <PostDetailsItem dynamicField={{name:'قیمت', data: price?.toLocaleString() + ' تومان'}} />

        </div>
    )
})


Postdetails.displayName = 'Postdetails'

export default Postdetails

Postdetails.propTypes = {
    dynamicFields: propTypes.array,
    price: propTypes.number
}