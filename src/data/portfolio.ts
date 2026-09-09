/**
 * The gallery. Reordering this array reorders the page — the `NN-` filename
 * prefix is only there to keep the asset folder readable.
 *
 * `span` controls how the item sits in the grid:
 *   'feature' — full width of the grid, used sparingly
 *   'half'    — one of two columns
 * `caption` follows the poster grammar in docs/brand.md: athlete, role, year.
 */

import type { ImageMetadata } from 'astro';

import hero from '../assets/portfolio/01-jack-hero.jpg';
import stadium from '../assets/portfolio/02-jack-stadium.jpg';
import portrait from '../assets/portfolio/03-jack-portrait.jpg';
import throne from '../assets/portfolio/04-jack-throne.jpg';
import crouch from '../assets/portfolio/05-jack-crouch.jpg';
import block from '../assets/portfolio/06-jack-block.jpg';
import run from '../assets/portfolio/07-jack-run.jpg';
import visor from '../assets/portfolio/08-jack-visor.jpg';
import drive from '../assets/portfolio/09-jack-drive.jpg';
import katch from '../assets/portfolio/10-jack-catch.jpg';
import lean from '../assets/portfolio/11-jack-lean.jpg';

export interface PortfolioItem {
	image: ImageMetadata;
	/** Describes the picture for someone who cannot see it. */
	alt: string;
	athlete: string;
	role: string;
	year: string;
	span: 'feature' | 'half';
}

/** The signature image. Used in the hero, so it is not repeated in the grid. */
export const signatureWork = {
	image: hero,
	alt: 'Finished hero portrait of Jack Shepherd: a large monochrome portrait of the athlete behind a full-colour cutout of him running with the ball, with his name set across the piece.',
	athlete: 'Jack Shepherd',
	role: 'Wide Receiver, #13',
	year: 'Class of 2026',
} satisfies Omit<PortfolioItem, 'span'>;

export const portfolio: PortfolioItem[] = [
	{
		image: stadium,
		alt: 'Jack Shepherd under stadium lights — a monochrome standing portrait holding his helmet beside a full-colour figure of him running with the ball through haze.',
		athlete: 'Jack Shepherd',
		role: 'Wide Receiver, #13',
		year: 'Class of 2026',
		span: 'feature',
	},
	{
		image: portrait,
		alt: 'Jack Shepherd in his maroon Rattlers jersey, helmet held low in both gloved hands, looking directly into the camera.',
		athlete: 'Jack Shepherd',
		role: 'Wide Receiver, #13',
		year: 'Class of 2026',
		span: 'half',
	},
	{
		image: throne,
		alt: 'Jack Shepherd seated in a wide stance, both gloved hands framing his helmet visor.',
		athlete: 'Jack Shepherd',
		role: 'Wide Receiver, #13',
		year: 'Class of 2026',
		span: 'half',
	},
	{
		image: block,
		alt: 'Jack Shepherd square to camera, forearms crossed low, one finger raised beside his visor, the number thirteen across his chest.',
		athlete: 'Jack Shepherd',
		role: 'Wide Receiver, #13',
		year: 'Class of 2026',
		span: 'half',
	},
	{
		image: crouch,
		alt: 'Jack Shepherd crouched low with one knee down, forearms braced on his thigh, rim light along his shoulders.',
		athlete: 'Jack Shepherd',
		role: 'Wide Receiver, #13',
		year: 'Class of 2026',
		span: 'half',
	},
	{
		image: katch,
		alt: 'Jack Shepherd at full extension, one arm stretched out to take the ball at his fingertips.',
		athlete: 'Jack Shepherd',
		role: 'Wide Receiver, #13',
		year: 'Class of 2026',
		span: 'feature',
	},
	{
		image: drive,
		alt: 'Jack Shepherd running straight at the camera with the ball tucked, knee driving high.',
		athlete: 'Jack Shepherd',
		role: 'Wide Receiver, #13',
		year: 'Class of 2026',
		span: 'half',
	},
	{
		image: visor,
		alt: 'Jack Shepherd with one gloved finger raised to his visor, the number thirteen bright across his jersey.',
		athlete: 'Jack Shepherd',
		role: 'Wide Receiver, #13',
		year: 'Class of 2026',
		span: 'half',
	},
	{
		image: run,
		alt: 'Jack Shepherd carrying the ball in stride, both arms wrapped around it.',
		athlete: 'Jack Shepherd',
		role: 'Wide Receiver, #13',
		year: 'Class of 2026',
		span: 'half',
	},
	{
		image: lean,
		alt: 'Jack Shepherd leaning in hard toward the camera, hands braced on his knees, helmet driving forward.',
		athlete: 'Jack Shepherd',
		role: 'Wide Receiver, #13',
		year: 'Class of 2026',
		span: 'half',
	},
];
