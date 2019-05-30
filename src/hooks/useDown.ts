import React from 'react';

export default function useDown(ref) {
    const [value, setValue] = React.useState(false);

    const handleMouseDown = () => setValue(true);
    const handleMouseUp = () => setValue(false);

    React.useEffect(
        () => {
            const node = ref.current;
            if (node) {
                node.addEventListener('mousedown', handleMouseDown);
                window.addEventListener('mouseup', handleMouseUp);

                return () => {
                    node.removeEventListener('mousedown', handleMouseDown);
                    window.removeEventListener('mouseup', handleMouseUp);
                };
            }
        },
        [ref.current]
    );

    return [value];
}