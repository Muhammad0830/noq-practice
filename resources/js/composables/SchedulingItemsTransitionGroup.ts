export interface UseSchedulingItemsTransitionGroup {
    onBeforeLeave: (el: Element) => void,
    onLeave: (el: Element) => void,
    onAfterEnter: (el: Element) => void,
    onAfterLeave: (el: Element) => void,
    onBeforeEnter: (el: Element) => void,
    onEnter: (el: Element) => void,
}

export function useSchedulingTransitionGroup(): UseSchedulingItemsTransitionGroup {
    const onBeforeLeave = (el: Element) => {
        const parent = el.parentElement;
        if (parent) {
            parent.style.height = `${parent.offsetHeight}px`;
        }
    };

    const onLeave = (el: Element) => {
        const parent = el.parentElement;
        if (!parent) return;

        const startHeight = parent.offsetHeight;

        // Disable transition during measurement to prevent the auto -> 0px glitch
        parent.style.transition = 'none';
        parent.style.height = '';
        const endHeight = parent.offsetHeight;

        parent.style.height = `${startHeight}px`;
        parent.offsetHeight; // Force reflow

        parent.style.transition = '';
        parent.style.height = `${endHeight}px`;
    };

    const onAfterLeave = (el: Element) => {
        const parent = el.parentElement;
        if (parent) {
            parent.style.transition = 'none';
            parent.style.height = 'auto';
            requestAnimationFrame(() => {
                if (parent) parent.style.transition = '';
            });
        }
    };

    const onBeforeEnter = (el: Element) => {
        const parent = el.parentElement;
        if (parent) {
            parent.dataset.startHeight = `${parent.offsetHeight}px`;
        }
    };

    const onEnter = (el: Element) => {
        const parent = el.parentElement;
        if (!parent) return;

        const startHeight = parent.dataset.startHeight || `${parent.offsetHeight}px`;

        // Disable transition while calculating the target height with the new element
        parent.style.transition = 'none';
        parent.style.height = '';
        const endHeight = parent.offsetHeight;

        parent.style.height = startHeight;
        parent.offsetHeight; // Force reflow

        // Re-enable transition to smoothly animate to the larger end height
        parent.style.transition = '';
        parent.style.height = `${endHeight}px`;
    };

    const onAfterEnter = (el: Element) => {
        const parent = el.parentElement;
        if (parent) {
            parent.style.transition = 'none';
            parent.style.height = 'auto';
            delete parent.dataset.startHeight;
            requestAnimationFrame(() => {
                if (parent) parent.style.transition = '';
            });
        }
    };

    return { onBeforeLeave, onLeave, onAfterEnter, onAfterLeave, onBeforeEnter, onEnter }
}