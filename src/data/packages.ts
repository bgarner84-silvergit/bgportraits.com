/**
 * Packages. Each tier shows a starting price (brief decision 23, 2026-09-09 —
 * supersedes decision 18's "no public prices"); the exact figure is still
 * confirmed per inquiry because session length and travel vary. Large prints
 * and framing outside the tiers stay quote-on-request (brief decision 8).
 *
 * Inclusions are a first draft. Brandon owns the final wording.
 */

export interface Package {
	name: string;
	/** Starting price, formatted for display, e.g. "$399". Shown as "From $399". */
	price: string;
	summary: string;
	includes: string[];
	/** Marks the tier the eye should land on first. Exactly one, or none. */
	emphasis?: boolean;
}

export const packages: Package[] = [
	{
		name: 'Future Star',
		price: '$399',
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
		price: '$599',
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
		name: "Champion's Legacy",
		price: '$849',
		summary: 'Five finished concepts from the session, one framed and ready for the wall.',
		includes: [
			'Everything in Future Legend',
			'Five finished hero composites in total',
			'Framed archival print with anti-reflection glass',
			'Full edited digital set from the session',
		],
	},
];
