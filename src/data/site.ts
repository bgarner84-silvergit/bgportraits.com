/**
 * Business facts and site-wide config.
 *
 * The name, address and phone here are the registered business details that
 * appear in the footer. A2P 10DLC review checks that these are present and
 * consistent with the brand registration — do not change them without checking
 * reference/a2p-10dlc-playbook.md first.
 */

export const site = {
	name: 'Brandon Garner Photography',
	shortName: 'Brandon Garner',
	url: 'https://bgportraits.com',
	tagline: 'Custom athlete portraits, built to outlast the season.',
	description:
		'Art-directed hero portraits for individual athletes in Dallas–Fort Worth. One athlete, one portrait, built by hand and printed to last.',
	locality: 'North Richland Hills',
	region: 'TX',
	address: '7921 Ember Oaks Dr, North Richland Hills, TX 76182',
	phone: '817-919-7658',
	phoneHref: 'tel:8179197658',
	email: 'bgarner84@gmail.com',
	emailHref: 'mailto:bgarner84@gmail.com',
	/**
	 * LeadConnector (GoHighLevel) chat widget. This exact widget carries the
	 * SMS-consent wording that passed A2P review, with both consent checkboxes
	 * unchecked by default. Do not swap it or edit its copy.
	 */
	chatWidgetId: '6a94ed46852536cc91868a08',
} as const;

export const nav = [
	{ label: 'Work', href: '#work' },
	{ label: 'Approach', href: '#approach' },
	{ label: 'Packages', href: '#packages' },
	{ label: 'About', href: '#about' },
] as const;

export const legalNav = [
	{ label: 'Privacy Policy', href: '/privacy' },
	{ label: 'Terms of Service', href: '/terms' },
] as const;
