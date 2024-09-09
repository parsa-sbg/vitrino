import SelectBox from './SelectBox';
import { memo, useCallback} from 'react';
import propTypes from 'prop-types'
import CheckBox from './CheckBox';

const DynamicFieldsSelector = memo(({ catDynamicFields, newPostDynamicFields, setNewPostDynamicFields, validationObj, setValidationObj }) => {


  const fieldChangeHandler = useCallback(async (slug, value) => {

    setNewPostDynamicFields(prev => {
      prev[slug] = value    
      return prev
    })

  }, [ setNewPostDynamicFields])

  return (
    <div className='mt-5'>
      {catDynamicFields.map(field => {
        return field.type == "selectbox"
          ? <SelectBox validationObj={validationObj} setValidationObj={setValidationObj} fieldChangeHandler={fieldChangeHandler} fieldData={field} key={field._id} />
          : <CheckBox fieldChangeHandler={fieldChangeHandler} fieldData={field} key={field._id}/>
      })}
    </div>
  )
})

DynamicFieldsSelector.displayName = 'DynamicFieldsSelector'

DynamicFieldsSelector.propTyepes = {
  catDynamicFields: propTypes.array,
  setNewPostDynamicFields: propTypes.func,
  newPostDynamicFields: propTypes.object,
  validationObj: propTypes.object,
  setValidationObj: propTypes.func,
}

export default DynamicFieldsSelector