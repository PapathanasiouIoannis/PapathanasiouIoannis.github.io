---
title: Controlled sound-speed deformations of analytical BSk24
shortTitle: Controlled BSk24 deformations
description: A governed workflow for changing the sound speed smoothly, rejecting thermodynamically inadmissible proposals, and tracing accepted cases to stellar observables.
eyebrow: Methods and software
status: Software and campaign data released; manuscript submitted
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

This project asks a deliberately narrow question: how do controlled, smooth changes to the sound speed in an analytical BSk24 equation of state propagate through thermodynamics and—when the proposal is admissible—through stellar structure?

The aim is not to manufacture arbitrary equations of state. It is to isolate a signed local change, retain a well-defined low-density anchor, and make the consequences auditable from the raw proposal through the reported observables.

## Method

The deformation is defined in total energy density and introduced smoothly above the retained anchor. Every raw proposal is assessed across its declared finite domain before reconstruction. A failed proposal remains rejected with its exact reasons: it is not clipped, clamped, smoothed, or silently repaired and then called admissible.

Accepted proposals are reconstructed as effective cold one-fluid barotropes. Optional TOV and tidal calculations run only after the thermodynamic gate and only when the required numerical capabilities are established. The zero-amplitude case is governed by an explicit baseline-identity policy.

## My contribution

I developed and maintain the public **EoS Generation** package and its focused workflow: passive experiment planning, explicit execution, deterministic case identities, source and environment provenance, strict result manifests, read-only validation, and plotting from saved tables. I also prepared the versioned, checksummed public campaign evidence and reproducibility release.

The maintained package and the historical campaign driver are identified separately in the release. This distinction matters: the package is the supported interface, while the release capsule records how the published campaign evidence was produced.

## Current status

Software v1.0.0 and campaign data v1.0.0 are public. The campaign release includes analysis-ready tables, figures, provenance records, checksums, and a sanitized source capsule. A related manuscript has been submitted separately; there is not yet a public preprint or peer-reviewed publication to cite.

> **Scientific boundary.** The released campaign concerns one analytical BSk24 baseline and one fixed deformation construction. The reconstruction is an effective one-fluid description. It does not establish microscopic composition, species chemical potentials, beta equilibrium, a phase transition, observational preference, or a universal response.

## Why it is useful

The work is strongest as a reproducible method and evidence trail. It makes accepted and rejected cases inspectable, keeps calculation and reporting provenance together, and limits stellar claims to quantities whose numerical prerequisites have actually been demonstrated.

Independent scientific review and comparison against additional stellar references remain important next steps.
