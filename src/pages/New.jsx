import Header from "../components/Header/Header";
import MobileHeader from "../components/New/MobileHeader";

export default function New() {
    return (
        <div className="min-h-screen">

            <div className="hidden md:block">
                <Header noInput />
            </div>
            <div className="md:hidden">
                <MobileHeader />
            </div>

        </div>
    )
}
