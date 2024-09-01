import propTypes from 'prop-types'

export default function Cover({onClickCallBack}) {
  return (
    <div onClick={onClickCallBack} className="fixed right-0 left-0 bottom-0 top-0 w-full h-full dark:bg-white bg-black opacity-50"></div>
)
}

Cover.propTypes = {
    onClickCallBack: propTypes.func
}