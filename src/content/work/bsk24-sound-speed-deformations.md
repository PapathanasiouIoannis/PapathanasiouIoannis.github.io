---
title: 'Signed Sound-Speed Deformations of BSk24-Anchored Barotropes: Neutron-Star Response'
shortTitle: Signed BSk24 sound-speed deformations
description: A controlled study of how positive and negative local sound-speed changes propagate through thermodynamic reconstruction and into fixed-mass neutron-star structure and tidal response.
eyebrow: Research and reproducibility
status: Sole-authored arXiv preprint · software and campaign data public
period: 2026–present
order: 1
featured: true
kind: research
tags:
  - Dense matter
  - Thermodynamics
  - TOV and tides
  - Reproducibility
links:
  - label: arXiv preprint
    href: https://arxiv.org/abs/2608.23033v1
  - label: Preprint PDF
    href: https://arxiv.org/pdf/2608.23033v1
  - label: BibTeX citation
    href: https://arxiv.org/bibtex/2608.23033
  - label: Source repository
    href: https://github.com/PapathanasiouIoannis/EoS-generation
  - label: Software v1.0.0
    href: https://github.com/PapathanasiouIoannis/EoS-generation/releases/tag/v1.0.0
  - label: Campaign data v1.0.0
    href: https://github.com/PapathanasiouIoannis/EoS-generation/releases/tag/bsk24-campaign-data-v1.0.0
  - label: Method documentation
    href: https://github.com/PapathanasiouIoannis/EoS-generation/blob/main/docs/method.md
---

## The question

Within one analytical BSk24 baseline, how does a controlled local change in sound speed alter the reconstructed thermodynamics, and what follows for stellar structure and tides when the proposal passes every admissibility gate?

The aim is not to manufacture arbitrary equations of state. It is to isolate a signed local change, retain a well-defined low-density anchor, and make the consequences auditable from the raw proposal through the reported observables.

## Preprint

**Ioannis Papathanasiou (sole author).** “Signed Sound-Speed Deformations of BSk24-Anchored Barotropes: Neutron-Star Response.” **arXiv:2608.23033v1 [nucl-th]**, submitted 2026-08-24; cross-listed in astro-ph.HE. 19 pages, 10 figures, and 6 tables.

The preprint finds that a local change in the equilibrium squared sound speed leaves a persistent pressure offset, relocates the fixed-mass central state, and produces a mass-dependent, nonlinear, sign-asymmetric stellar response. The calculation describes phenomenological BSk24-anchored effective barotropes; it is not a prediction of the BSk24 functional or evidence for a microscopic composition or phase transition.

Affiliation in the preprint: Department of Theoretical Physics, School of Physics, Aristotle University of Thessaloniki, 54124 Thessaloniki, Greece.

## Method

The deformation is defined in total energy density and introduced smoothly above the retained anchor. Every raw proposal is assessed across its declared finite domain before reconstruction. A failed proposal remains rejected with its exact reasons: it is not clipped, clamped, smoothed, or silently repaired and then called admissible.

Accepted proposals are reconstructed as effective cold one-fluid barotropes. Optional TOV and tidal calculations run only after the thermodynamic gate and only when the required numerical capabilities are established. The zero-amplitude case is governed by an explicit baseline-identity policy.

## My contribution

I conceived the study, developed and implemented the method, performed the calculations, analysed the results, prepared the figures and data products, and wrote the sole-authored preprint. I also developed and maintain the public **EoS Generation** package and prepared the versioned, checksum-verified campaign evidence and reproducibility release.

The maintained package and the historical campaign driver are identified separately in the release. This distinction matters: the package is the supported interface, while the release capsule records how the published campaign evidence was produced.

## Current status

The sole-authored public research output is arXiv:2608.23033v1, submitted on 2026-08-24. It is an arXiv preprint: it has not been peer reviewed, is not a journal publication or journal-accepted work, and no journal submission is planned.

Software v1.0.0 and the immutable campaign-data release v1.0.0 are public. The data release contains the analysis-ready records behind the displayed figures and tables, the exact campaign declaration and registry, checksums, verification notes, and a sanitized source capsule. The maintained software and the historical campaign driver are identified separately so the supported interface is not confused with the exact production record.

> **Scientific boundary.** The released campaign concerns one analytical BSk24 baseline and one fixed deformation construction. The reconstruction is an effective one-fluid description. It does not establish microscopic composition, species chemical potentials, beta equilibrium, a phase transition, observational preference, or a universal response.

## Why it is useful

The work is strongest as a reproducible method and evidence trail. It makes accepted and rejected cases inspectable, keeps calculation and reporting provenance together, and limits stellar claims to quantities whose numerical prerequisites have actually been demonstrated. The public preprint and release metadata do not constitute peer review or independent scientific validation.
