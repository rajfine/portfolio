import React from 'react';
import { cn } from '@/utils/cn';

export function InfiniteSlider({
    children,
    className,
    duration = 20,
    gap = 48,
    reverse = false,
}) {
    const style = {
        '--duration': `${duration}s`,
        '--gap': `${gap}px`,
    };

    return (
        <div
            className={cn('overflow-hidden w-full', className)}
            style={style}
        >
            <div
                className={cn(
                    'flex w-max',
                    reverse ? 'animate-slide-reverse' : 'animate-slide'
                )}
                style={{ gap: 'var(--gap)' }}
            >
                {/* First copy */}
                {React.Children.map(children, (child, i) =>
                    React.cloneElement(child, { key: `a-${i}` })
                )}
                {/* Duplicate copy — makes the loop seamless */}
                {React.Children.map(children, (child, i) =>
                    React.cloneElement(child, { key: `b-${i}`, 'aria-hidden': true })
                )}
            </div>
        </div>
    );
}
