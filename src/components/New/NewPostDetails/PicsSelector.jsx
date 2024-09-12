import { BiSolidImageAdd } from "react-icons/bi";
import propTypes from 'prop-types'
import { useCallback, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";


export default function PicsSelector({ postPics, setPostPics }) {
    const [images, setImages] = useState([]);

    useEffect(() => {        
        postPics?.forEach((file, index) => {
            const fileReader = new FileReader();
            
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                setImages(prevImages => {
                    const newImages = [...prevImages];
                    newImages[index] = fileReader.result;
                    return newImages;
                });
            };
        });
    }, [postPics]);

    const inputChangehsndler = async (e) => {        
        await setPostPics(prevPics =>  [...prevPics, e.target.files[0]] )
        e.target.value = null
    }

    const removePic = useCallback((removeIndex) => {
        setPostPics(prev => prev.filter((_, index) => index !== removeIndex))
    }, [setPostPics])


    return (
        <div className="mt-10">
            <h5 className='text-lg mb-5 mt-5 font-semibold'>عکس آگهی</h5>

            <div className="grid grid-cols-3 sm:grid-cols-4 w-full flex-wrap gap-3">

                <div className="group col-span-1 mt-3 border-2 mx-auto w-24 h-24 !border-opacity-50 hover:!border-opacity-100 transition-colors border-dashed relative dark:border-gray-500 cursor-pointer rounded-lg ">
                    <input
                        onChange={inputChangehsndler}
                        className="w-full h-full absolute bg-red-300 cursor-pointer z-20 opacity-0 hover:file:cursor-pointer"
                        type="file"
                        accept="image/png,image/jpeg"
                    />
                    <BiSolidImageAdd className="absolute top-0 bottom-0 right-0 left-0 m-auto opacity-50 transition-all group-hover:opacity-100" size={35} />
                </div>

                {postPics.map((file, index) => (
                    <div key={file?.lastModified + index} className="col-span-1 mx-auto w-24 h-24 mt-3 border-2 !border-opacity-50 hover:!border-opacity-100 transition-colors overflow-hidden relative dark:border-gray-500 cursor-pointer rounded-lg ">
                        <MdDelete
                            onClick={() => { removePic(index) }}
                            className="absolute top-1 left-1 bg-[#333] bg-opacity-80 p-0.5 rounded-sm hover:bg-red-700 transition-colors" size={25} />
                        {images[index] ? <img className="h-full w-full object-cover" src={images[index]} alt="" /> : 'Loading...'}
                    </div>
                ))}

            </div>
        </div>
    );
}

PicsSelector.propTypes = {
    postPics: propTypes.array,
    setPostPics: propTypes.func
};
