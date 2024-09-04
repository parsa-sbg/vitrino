import { memo, useEffect, useRef, useState } from "react"
import { useLoginValidation } from "../../hooks/useLoginValidation"
import propTypes from 'prop-types'
import { useAuth } from "../../hooks/useAuth"
import { addNote, deleteNote, updateNote } from "../../services/api"


const PostNote = memo(({ postId, storedNote, getDatasFromServer }) => {

  const [note, setNote] = useState('')
  const [isSaveBtnShow, setIsSaveBtnShow] = useState(true)
  const saveBtnRef = useRef()

  const runWithCheckLogin = useLoginValidation()
  const { userToken } = useAuth()


  useEffect(() => {
    setNote(storedNote?.content)
  }, [storedNote])


  useEffect(() => {
    note !== storedNote?.content ? setIsSaveBtnShow(true) : setIsSaveBtnShow(false)
  }, [note, storedNote])


  const saveBtnClickHandler = () => {
    if (!storedNote) {

      addNote(userToken, postId, note)

    } else if (note) {

      updateNote(userToken, storedNote._id, note)

    } else {

      deleteNote(userToken, storedNote._id)

    }

    saveBtnRef.current.textContent = 'ثبت شد.'
    saveBtnRef.current.classList.add('bg-green-900')
    setTimeout(() => {
      getDatasFromServer()
      saveBtnRef.current.classList.remove('bg-green-900')
      saveBtnRef.current.textContent = 'ثبت'
      setIsSaveBtnShow(false)
    }, 1000);

  }

  return (
    <div className="relative mt-4 h-28">

      <textarea
        onFocus={() => { runWithCheckLogin(() => { }) }} className="w-full h-full bg-transparent border-2 hover:border-gray-400 focus:hover:border-main dark:hover:border-white dark:border-gray-500 outline-none rounded-lg p-2 transition-colors focus:border-main resize-none overflow-y-scroll custom-scrollbar" dir="rtl" placeholder="یادداشت شما..." name="" id=""
        value={note}
        onChange={(e) => { setNote(e.target.value) }}>
      </textarea>

      <button
        ref={saveBtnRef}
        onClick={saveBtnClickHandler}
        className={`${isSaveBtnShow && '!block'} hidden text-sm absolute bottom-3 left-3 bg-green-700 text-white rounded-md px-4 py-0.5`}>
        ثبت
      </button>

    </div>
  )
})

PostNote.displayName = 'PostNote'

PostNote.propTypes = {
  postId: propTypes.string,
  storedNote: propTypes.object,
  getDatasFromServer: propTypes.func
}

export default PostNote
