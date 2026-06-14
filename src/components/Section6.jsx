import { InfiniteSlider } from './motion-primitives/infinite-slider';

export function InfiniteSliderHoverSpeed() {
    return (
        <InfiniteSlider speedOnHover={20} gap={24} className='h-24 sm:h-32 md:h-40 bg-black text-white'>
            <h1 className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold'>-Let's</h1>
            <h1 className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold'>Build</h1>
            <h1 className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold'>Something</h1>
            <h1 className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold'>Amazing</h1>
            <h1 className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold'>Together</h1>

        </InfiniteSlider>
    );
}
