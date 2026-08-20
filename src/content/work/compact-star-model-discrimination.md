---
title: Compact-star model discrimination with machine learning
shortTitle: Compact-star model discrimination
description: An undergraduate synthetic study of hadronic-star and self-bound strange-quark-star model discrimination, followed by a stricter audit of what the classifier can support.
eyebrow: Undergraduate thesis
status: Thesis examined in 2026; post-thesis methodological audit available
period: '2026'
order: 2
featured: true
kind: thesis
tags:
  - Synthetic data
  - Stellar structure
  - Machine learning
  - Validation
links:
  - label: Current repository and audit
    href: https://github.com/PapathanasiouIoannis/Bachelor_Thesis_Final_Version
  - label: Submitted-version snapshot
    href: https://github.com/PapathanasiouIoannis/Bachelor_Thesis_Final_Version/tree/thesis-submitted-v1
  - label: Classification risk audit
    href: https://github.com/PapathanasiouIoannis/Bachelor_Thesis_Final_Version/blob/main/docs/CLASSIFICATION_RISK_AUDIT.md
  - label: Thesis record
    href: https://www.researchgate.net/publication/400555533_Machine_Learning_Classification_of_Neutron_Star_Composition
---

## The question

My undergraduate thesis explored whether synthetic mass–radius and tidal-deformability information could distinguish two restricted classes of compact-star models: gravity-bound hadronic stars and self-bound strange-quark stars whose macroscopic sequences can overlap.

It was an investigation of the neutron-star inverse problem under a synthetic model design—not an observational measurement of stellar composition.

The classifier was a probe of a defined synthetic distinction, not the scientific object in its own right.

## Work completed

Under supervision, I built an end-to-end computational workflow for equation-of-state ensembles, TOV and tidal calculations, feature construction, Random Forest classification, and grouped validation. The thesis was examined in February 2026 as *Machine Learning Classification of Neutron Star Composition* and received 10/10.

The submitted-version tag preserves the thesis-era code. The current repository contains substantial later work and should not be read as a frozen copy of the submitted thesis.

## What the later audit changed

A post-thesis redevelopment examined leakage, provenance, validation units, and scientific scope more critically. The controlled comparison currently distinguishes one hadronic surrogate from one fixed quark-matter baseline. Because each class has only one independent baseline, class label and baseline identity remain confounded.

Row-level classifier performance in that setting cannot establish general hadronic-versus-quark discrimination. A synthetic Gaussian error model also cannot demonstrate observational generalization, calibrated astrophysical probabilities, or performance on unseen equation-of-state families.

> **Interpretation boundary.** Earlier percentages and named-object classifier scores are not presented here as astrophysical findings. They are model-dependent outputs from a restricted synthetic design, not posterior probabilities for real stars.

## Durable methodological lesson

The most useful outcome is methodological. Validation units must respect equation-of-state family and parameter-sweep structure; effective sample size is governed by independent physical groups rather than rows; and phase-general claims require multiple independent baselines and representative observational validation.

The audit is part of the scientific record: it identifies which conclusions survive and which do not.
