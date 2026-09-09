/**
 * Packages. Pricing is deliberately not published — every tier routes to the
 * same inquiry, which is also how large prints are sold in v1
 * (docs/project-brief.md decision 8).
 *
 * Inclusions are a first draft. Brandon owns the final wording.
 */

export interface Package {
	name: string;
	summary: string;
	includes: string[];
	/** Marks the tier the eye should land on first. Exactly one, or none. */
	emphasis?: boolean;
}

export const packages: Package[] = [
	{
		name: 'Future Star',
		summary: 'One session, one finished portrait. The place most families start.',
		includes: [
			'Full one-on-one session, art-directed for your athlete',
			'One finished hero composite',
			'High-resolution file, ready for print',
			'Web and social sized copies',
		],
	},
	{
		name: 'Future Legend',
		summary: 'A longer session, three concepts, and the first piece on the wall.',
		includes: [
			'Everything in Future Star',
			'Extended session with multiple looks',
			'Three finished hero composites, each a different concept',
			'One large archival print, 16×20',
		],
		emphasis: true,
	},
	{
		name: 'Champions Legacy',
		summary: 'The full season captured, framed and ready to hang.',
		includes: [
			'Everything in Future Legend',
			'Five finished hero composites',
			'Framed archival print with anti-reflection glass',
			'Full edited digital set from the session',
		],
	},
];
