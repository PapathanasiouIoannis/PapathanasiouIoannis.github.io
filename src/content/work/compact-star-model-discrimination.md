---
title: Compact-star model discrimination with machine learning
shortTitle: Compact-star model discrimination
description: An undergraduate synthetic study of hadronic-star and self-bound strange-quark-star model discrimination, followed by a stricter audit of what the classifier can support.
eyebrow: Undergraduate thesis
status: Thesis examined in 2026; distinct post-thesis redevelopment documented
period: '2026'
order: 2
featured: true
kind: thesis
tags:
  - Synthetic data
  - Stellar structure
  - Machine learning
  - Validation
links: []
---

## The question

My undergraduate thesis explored whether synthetic mass–radius and tidal-deformability information could distinguish two restricted classes of compact-star models: gravity-bound hadronic stars and self-bound strange-quark stars whose macroscopic sequences can overlap.

It was an investigation of the neutron-star inverse problem under a synthetic model design—not an observational measurement of stellar composition.

The classifier was a probe of a defined synthetic distinction, not the scientific object in its own right.

## Work completed

For the thesis-era study, I investigated restricted synthetic compact-star model discrimination using equation-of-state generation, TOV and tidal calculations, and Random Forest models. I developed computational components for the equation-of-state and stellar calculations used in that workflow. The thesis was examined on 2026-02-18 as *Machine Learning Classification of Neutron Star Composition*, carried 8 ECTS, and received 10/10. The official examiners were Charalampos Moustakidis, Theodoros Diakonidis, and Theodoros Gaitanos.

The examined undergraduate thesis and the later public redevelopment are distinct works. The post-thesis repository was created after the examination, does not contain the official examined thesis PDF, and is not linked here while its public scope, provenance, licensing, and contribution boundaries remain under review.

## Separate post-thesis redevelopment

The current repository contains substantial later audit and redevelopment work. It adds stricter configuration and artifact controls, physical-family partitioning, and explicit interpretation limits. It should be read as a post-thesis research-software record—not as a frozen copy of the examined thesis.

This later work is a methodological redevelopment, not a thesis publication or a frozen copy of the examined thesis. Direct repository and audit links are intentionally omitted from this public portfolio pending a bounded public-scope review.

## What the later audit changed

A post-thesis redevelopment examined leakage, provenance, validation units, and scientific scope more critically. The controlled comparison currently distinguishes one hadronic surrogate from one fixed quark-matter baseline. Because each class has only one independent baseline, class label and baseline identity remain confounded.

Row-level classifier performance in that setting cannot establish general hadronic-versus-quark discrimination. A synthetic Gaussian error model also cannot demonstrate observational generalization, calibrated astrophysical probabilities, or performance on unseen equation-of-state families.

> **Interpretation boundary.** Earlier percentages and named-object classifier scores are not presented here as astrophysical findings. They are model-dependent outputs from a restricted synthetic design, not posterior probabilities for real stars.

## Durable methodological lesson

The most useful outcome is methodological. Validation units must respect equation-of-state family and parameter-sweep structure; effective sample size is governed by independent physical groups rather than rows; and phase-general claims require multiple independent baselines and representative observational validation.

The audit is part of the scientific record: it identifies which conclusions survive and which do not.

## Interactive demonstrations

Two public applications provide interactive views of retained classifier artifacts: a [baseline synthetic-classifier demonstration](https://eoslab-clean-inference.streamlit.app/) and a [perturbation-sensitivity demonstration](https://eoslab-perturbed-inference.streamlit.app/). They are independent post-thesis extensions, not thesis-submission artifacts, products of the BSk24 preprint, or observational inference services.

Their displayed values are uncalibrated model scores from restricted synthetic comparisons. They are not composition probabilities, observational measurements, or posterior statements about real stars. The [live-app overview](/apps/) records the assumptions, development boundary, and wake-time note before launch.
