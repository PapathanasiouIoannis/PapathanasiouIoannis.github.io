---
title: Neutron-star equation-of-state toolkit
shortTitle: Neutron-star EoS toolkit
description: Early-stage software for loading analytical, tabulated, and one-dimensional CompOSE equations of state, reporting source capabilities, and computing continuous TOV backgrounds without silently extending an input beyond its declared boundary.
eyebrow: Scientific software
status: Alpha repository; no formal release
period: 2026–present
order: 3
featured: false
kind: software
tags:
  - EoS ingestion
  - CompOSE
  - TOV backgrounds
  - Capability reporting
links:
  - label: Source repository
    href: https://github.com/PapathanasiouIoannis/neutron-star-eos-toolkit
---

## Purpose

This small Python toolkit opens analytical, CSV, and cold one-dimensional CompOSE equations of state, reports what each source can support, and—where the input permits it—calculates continuous source-boundary TOV backgrounds.

It keeps native source thermodynamics separate from an optional continuous stellar barotrope. Inputs are not silently sorted, clipped, smoothed, repaired, spliced, or extrapolated to make a calculation succeed.

## Present scope

The repository includes an installable package and command-line interface, citation metadata, tests, beginner examples, and explicit capability reporting. The stellar solver presently covers continuous background models and stops at the source's lowest selected positive pressure rather than silently identifying that boundary with a vacuum surface.

## Maturity

The project is explicitly alpha software. It has no tagged public release, public benchmark result packet, demonstrated external adoption, or independent validation. It is included here as ongoing engineering work—not as a finished research output.

> **Current limits.** Tidal observables, physical density jumps, resolved maximum-mass claims, finite-temperature reductions, automatic crust splicing, and two-fluid models remain outside the supported scope.

Its role differs from **EoS Generation**: this toolkit is general input and background infrastructure, while the BSk24 project implements one specialized deformation-and-reconstruction method with a released campaign.
