import { PREPRINT, SITE } from './site';

export const PERSON_JSON_LD = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	'@id': `${SITE.url}/#person`,
	name: SITE.name,
	url: SITE.url,
	email: `mailto:${SITE.email}`,
	image: `${SITE.url}/images/ioannis-papathanasiou-social.jpg`,
	homeLocation: { '@type': 'Place', name: SITE.location },
	alumniOf: {
		'@type': 'CollegeOrUniversity',
		name: 'Aristotle University of Thessaloniki',
		url: 'https://www.auth.gr/en/',
	},
	sameAs: [SITE.github, SITE.linkedin],
	knowsAbout: [
		'Dense-matter physics',
		'Compact-star astrophysics',
		'Neutron-star equations of state',
		'Relativistic stellar structure',
		'Computational physics',
		'Scientific software',
	],
} as const;

export const PREPRINT_JSON_LD = {
	'@context': 'https://schema.org',
	'@type': 'ScholarlyArticle',
	'@id': `${PREPRINT.record}#article`,
	headline: PREPRINT.title,
	name: PREPRINT.title,
	author: {
		'@id': `${SITE.url}/#person`,
		name: PREPRINT.author,
		affiliation: {
			'@type': 'Organization',
			name: PREPRINT.affiliation,
		},
	},
	datePublished: PREPRINT.submitted,
	genre: 'arXiv preprint',
	identifier: PREPRINT.identifier,
	url: PREPRINT.record,
	sameAs: PREPRINT.record,
	isAccessibleForFree: true,
	about: [
		'Neutron-star equations of state',
		'Sound-speed deformations',
		'Thermodynamic consistency',
		'Tidal deformability',
	],
} as const;
