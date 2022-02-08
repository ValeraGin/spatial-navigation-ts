/*
 * A typescript definitions of Spatial Navigation implementation.
 *
 * Copyright (c) 2022 Ignatkovich Valery.
 *
 * Licensed under the MPL 2.0.
 */

declare namespace SN {

	type Restrict = 'self-first' | 'self-only' | 'none';

	type Direction = 'left' | 'right' | 'up' | 'down';

	type Selector = string

	type Filter = (elem: HTMLElement) => void

	type Cause = 'keydown' | 'api';

	interface Configuration {
		selector?: Selector,
		straightOnly?: boolean,
		straightOverlapThreshold?: number,
		rememberSource?: boolean,
		disabled?: boolean,
		defaultElement?: Selector,
		enterTo?: string,
		leaveFor?: null,
		restrict?: Restrict,
		tabIndexIgnoreList?: Selector,
		navigableFilter?: Filter
	}

	interface SpatialNavigation {
		init(): void;

		uninit(): void;

		clear(): void;

		set(config: Configuration): any;

		set(sectionId: string, config: Configuration): any;

		add(config: Configuration): any;

		add(sectionId: string, config: Configuration): any;

		remove(sectionId: string): boolean;

		disable(sectionId: string): boolean;

		enable(sectionId: string): boolean;

		pause(): void;

		resume(): void;

		focus(sectionId?: string, silent?: any): boolean;

		focus(selector?: string, silent?: any): boolean;

		move(direction: Direction, selector?: string): boolean;

		makeFocusable(sectionId?: string): void;

		setDefaultSection(sectionId?: string): void;
	}
}


interface WillMoveEvent extends Event {
	detail: {
		cause: SN.Cause
		sectionId: string,
		direction: SN.Direction
	}
}

interface WillMoveEvent extends Event {
	detail: {
		cause: SN.Cause
		sectionId: string,
		direction: SN.Direction
	}
}

interface WillMoveEvent extends Event {
	detail: {
		cause: SN.Cause
		sectionId: string,
		direction: SN.Direction
	}
}

interface WillMoveEvent extends Event {
	detail: {
		cause: SN.Cause
		sectionId: string,
		direction: SN.Direction
	}
}

interface WillUnFocusEvent extends Event {
	detail: {
		nextElement: Element
		nextSectionId: string
		direction: SN.Direction
		native: boolean
	}
}

interface UnFocusedEvent extends Event {
	detail: {
		nextElement: Element
		nextSectionId: string
		direction: SN.Direction
		native: boolean
	}
}

interface WillFocusEvent extends Event {
	detail: {
		sectionId: string,
		previousElement: Element
		direction: SN.Direction
		native: boolean
	}
}

interface NavigateFailedEvent extends Event {
	detail: {
		direction: SN.Direction
	}
}

interface SpatialNavigationEventMap {
	"sn:willmove": WillMoveEvent;
	"sn:willunfocus": WillUnFocusEvent;
	"sn:unfocused": UnFocusedEvent;
	"sn:willfocus": WillFocusEvent;
	"sn:focused": Event;
	"sn:navigatefailed": NavigateFailedEvent;
	"sn:enter-down": Event;
	"sn:enter-up": Event;
}

interface HTMLElement {
	addEventListener<K extends keyof SpatialNavigationEventMap>(type: K, listener: (this: HTMLElement, ev: SpatialNavigationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
}

interface Window {
	SpatialNavigation: SN.SpatialNavigation;
}

declare var SpatialNavigation: SN.SpatialNavigation;

export default SpatialNavigation;
