import handleEvents from '../utils/handleEvents';
import { useRef, useEffect } from 'react';

export default function useArrowKeyNavigation(props) {
    const { selectors } = props || {};
    const parentNode = useRef();

    useEffect(() => {
        const eventHandler = (event) => {
            handleEvents({ event, parentNode: parentNode.current, selectors });
        };
        document.addEventListener('keydown', eventHandler);
        return () => document.removeEventListener('keydown', eventHandler);
    }, []);

    return parentNode;
}
