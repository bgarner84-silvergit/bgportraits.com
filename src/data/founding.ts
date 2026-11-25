/**
 * Founding Families (brief decision 24, 2026-11-25 — supersedes decision 23's
 * published "From" prices). The three priced tiers are gone. The site now
 * describes one founding commission and what founding families give in return,
 * with no figures anywhere on the page.
 *
 * Pricing is sent in writing after the first conversation, never shown here and
 * never spoken first (pricing-offer-board.md: "price goes in writing"). Two
 * reasons it stays off the site: the founding price must not leak into a closed
 * school network as the community price, and a public number would anchor the
 * parent conversations that are meant to measure willingness to pay.
 *
 * Keep every inclusion true of what Brandon can deliver today. No composite
 * counts and no seat count until fulfillment has been rehearsed once.
 */

export interface FoundingBlock {
	title: string;
	summary: string;
	lines: string[];
	/** Lifted background, same treatment the emphasis tier used. */
	emphasis?: boolean;
}

export const founding = {
	season: 'Season One',
	intro:
		'I am taking on a small number of founding families this season: the first commissions under my name. Each one is planned and built for one athlete, start to finish, and each family gets founding terms in return for helping me show the work.',
	pricingNote:
		'Every commission is planned individually, so there is no price list. After we talk through the piece, I send the plan and your founding terms in writing, so you can look them over on your own time.',
};

export const foundingBlocks: FoundingBlock[] = [
	{
		title: 'The commission',
		summary: 'What every founding family receives.',
		lines: [
			'A planning conversation first: we agree on the finished piece before the camera comes out',
			'A one-on-one session, art-directed for your athlete, covering static portraits and action frames',
			'Finished hero composites, built for your athlete and no one else',
			'One piece for the wall, printed and framed to conservation standard',
		],
		emphasis: true,
	},
	{
		title: 'What I ask in return',
		summary: 'Founding terms are a trade, agreed in writing before the session.',
		lines: [
			'Permission to show the finished piece as part of my portfolio',
			'Letting me film the moment you first see it',
			'A few honest sentences about the experience, good or bad',
			'If you loved it, an introduction to a family you think would too',
		],
	},
];
