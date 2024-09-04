import { memo } from "react"
import { useLoginValidation } from "../../hooks/useLoginValidation"


const PostNote = memo(() => {
  const runWithCheckLogin = useLoginValidation()

  const inputFocusHandler = () => {
    runWithCheckLogin(() => {
    })
  }

  return (
    <div>
      <textarea onFocus={inputFocusHandler} className="w-full bg-transparent border-2 hover:border-gray-400 focus:hover:border-main dark:hover:border-white dark:border-gray-500 outline-none rounded-lg mt-4 p-2 transition-colors focus:border-main resize-none overflow-y-scroll h-28 custom-scrollbar" dir="rtl" placeholder="یادداشت شما..." name="" id=""></textarea>
    </div>
  )
})

PostNote.displayName = 'PostNote'



export default PostNote
