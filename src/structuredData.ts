import { SITE } from './site';

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
