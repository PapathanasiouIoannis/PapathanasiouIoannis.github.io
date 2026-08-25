export const SITE = {
	name: 'Ioannis Papathanasiou',
	shortName: 'IP',
	title: 'Ioannis Papathanasiou — Computational physicist',
	description:
		'Computational physicist working across dense-matter physics, compact-star structure, numerical modelling, and reproducible scientific software.',
	url: 'https://papathanasiouioannis.github.io',
	email: 'giannis.papathanasiou.pth@gmail.com',
	location: 'Thessaloniki, Greece',
	github: 'https://github.com/PapathanasiouIoannis',
	linkedin: 'https://www.linkedin.com/in/ioannis-papathanasiou-2990923ba/',
} as const;

export const NAV_ITEMS = [
	{ href: '/work/', label: 'Work' },
	{ href: '/apps/', label: 'Live Apps' },
	{ href: '/outputs/', label: 'Research Outputs' },
	{ href: '/about/', label: 'About' },
	{ href: '/cv/', label: 'CV' },
] as const;

export const PREPRINT = {
	title:
		'Signed Sound-Speed Deformations of BSk24-Anchored Barotropes: Neutron-Star Response',
	author: 'Ioannis Papathanasiou',
	identifier: 'arXiv:2608.23033v1',
	primaryCategory: 'nucl-th',
	crossList: 'astro-ph.HE',
	submitted: '2026-08-24',
	record: 'https://arxiv.org/abs/2608.23033v1',
	pdf: 'https://arxiv.org/pdf/2608.23033v1',
	bibtex: 'https://arxiv.org/bibtex/2608.23033',
	affiliation:
		'Department of Theoretical Physics, School of Physics, Aristotle University of Thessaloniki, 54124 Thessaloniki, Greece',
} as const;

export const REPOSITORIES = {
	eosGeneration: 'https://github.com/PapathanasiouIoannis/EoS-generation',
	eosGenerationRelease:
		'https://github.com/PapathanasiouIoannis/EoS-generation/releases/tag/v1.0.0',
	eosCampaignRelease:
		'https://github.com/PapathanasiouIoannis/EoS-generation/releases/tag/bsk24-campaign-data-v1.0.0',
} as const;

export const LIVE_APPS = {
	clean: 'https://eoslab-clean-inference.streamlit.app/',
	perturbed: 'https://eoslab-perturbed-inference.streamlit.app/',
} as const;
