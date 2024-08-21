import { Link } from "react-router-dom";
import { useLocations } from '../../hooks/useLocations'

export default function PopularCities() {


    const { popularCities, setSingleCityAsConfirmed } = useLocations()
    console.log(popularCities);


    return (
        <div className="w-full text-sm border-b-2 pb-4">
            <h4 className="font-bold">شهرهای پربازدید</h4>
            <div className="grid grid-cols-6 sm:grid-cols-5 mt-10 gap-y-16">

                {popularCities.map((city, index) => (
                    <Link
                        onClick={() => { setSingleCityAsConfirmed(city.name, city.id) }}
                        key={city.id}
                        to={'/posts'}
                        className={` ${index + 1 == popularCities.length && 'col-start-3' } text-center transition-colors hover:text-gray-950 dark:hover:text-white font-medium col-span-2 sm:col-span-1`} >

                        {city.name}
                        
                    </Link>
                ))}

            </div>
        </div>)
}
