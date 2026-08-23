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
	{ href: '/outputs/', label: 'Outputs' },
	{ href: '/about/', label: 'About' },
	{ href: '/cv/', label: 'CV' },
] as const;

export const REPOSITORIES = {
	eosGeneration: 'https://github.com/PapathanasiouIoannis/EoS-generation',
	eosGenerationRelease:
		'https://github.com/PapathanasiouIoannis/EoS-generation/releases/tag/v1.0.0',
	eosCampaignRelease:
		'https://github.com/PapathanasiouIoannis/EoS-generation/releases/tag/bsk24-campaign-data-v1.0.0',
	thesis: 'https://github.com/PapathanasiouIoannis/Bachelor_Thesis_Final_Version',
	thesisSnapshot:
		'https://github.com/PapathanasiouIoannis/Bachelor_Thesis_Final_Version/tree/thesis-submitted-v1',
	thesisAudit:
		'https://github.com/PapathanasiouIoannis/Bachelor_Thesis_Final_Version/blob/main/docs/CLASSIFICATION_RISK_AUDIT.md',
	thesisRecord:
		'https://www.researchgate.net/publication/400555533_Machine_Learning_Classification_of_Neutron_Star_Composition',
	eosToolkit: 'https://github.com/PapathanasiouIoannis/neutron-star-eos-toolkit',
} as const;

export const LIVE_APPS = {
	clean: 'https://eoslab-clean-inference.streamlit.app/',
	perturbed: 'https://eoslab-perturbed-inference.streamlit.app/',
} as const;
