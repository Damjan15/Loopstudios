import { topItems } from "../db/top"
import { bottomItems } from "../db/bottom"
import Item from "./Item"

const Creations = () => {
  return (
    <section>
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
            {/* Creations Header */}
            <div className="flex justify-center mb-20 md:justify-between">
                <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">Our Creations</h2>

                <button className="hidden btn md:block">See All</button>
            </div>

            {/* Items Container Top */}
            <div className="item-container">
                { topItems.map((item) => <Item desktopImage={item.desktopImage} mobileImage={item.mobileImage} title={item.title} key={item.id} />)}
            </div>


            {/* Item Container Bottom */}
            <div className="item-container mt-10">
                { bottomItems.map((item) => <Item desktopImage={item.desktopImage} mobileImage={item.mobileImage} title={item.title} key={item.id} />)}
            </div>

            <div className="flex justify-center mt-10 md:hidden">
                <button className="btn w-full md:hidden">See All</button>
            </div>
        </div>
    </section>
  )
}

export default Creations