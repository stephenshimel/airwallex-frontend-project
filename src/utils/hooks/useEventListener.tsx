import { useRef, useEffect } from "react";

// attach an event listener to an element
export function useEventListener(
	eventName: string,
	handler: Function,
	element = window
) {
	const savedHandler = useRef<Function>();

	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(() => {
		const isSupported = element && element.addEventListener;
		if (!isSupported) return;

		const eventListener = (event: Event) => savedHandler.current!(event);
		element.addEventListener(eventName, eventListener);

		return () => {
			element.removeEventListener(eventName, eventListener);
		};
	}, [eventName, element]);
}
