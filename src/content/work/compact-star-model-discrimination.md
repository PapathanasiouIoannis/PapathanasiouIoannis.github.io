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
  - label: Post-thesis redevelopment repository
    href: https://github.com/PapathanasiouIoannis/Bachelor_Thesis_Final_Version
  - label: Later historical code snapshot
    href: https://github.com/PapathanasiouIoannis/Bachelor_Thesis_Final_Version/tree/thesis-submitted-v1
  - label: Classification risk audit
    href: https://github.com/PapathanasiouIoannis/Bachelor_Thesis_Final_Version/blob/main/docs/CLASSIFICATION_RISK_AUDIT.md
  - label: Live demonstration overview
    href: https://papathanasiouioannis.github.io/apps/
  - label: Thesis record
    href: https://www.researchgate.net/publication/400555533_Machine_Learning_Classification_of_Neutron_Star_Composition
---

## The question

My undergraduate thesis explored whether synthetic mass–radius and tidal-deformability information could distinguish two restricted classes of compact-star models: gravity-bound hadronic stars and self-bound strange-quark stars whose macroscopic sequences can overlap.

It was an investigation of the neutron-star inverse problem under a synthetic model design—not an observational measurement of stellar composition.

The classifier was a probe of a defined synthetic distinction, not the scientific object in its own right.

## Work completed

Under the supervision of Charalampos Moustakidis and Theodoros Diakonidis, I built an end-to-end computational workflow for equation-of-state ensembles, TOV and tidal calculations, feature construction, Random Forest classification, and grouped validation. The thesis was examined in February 2026 as *Machine Learning Classification of Neutron Star Composition* and received 10/10. The examining committee comprised Charalampos Moustakidis, Theodoros Diakonidis, and Theodoros Gaitanos.

The repository and its `thesis-submitted-v1` tag were created after the examination. The tag is a later historical code snapshot associated with the thesis-era workflow; it is not verified as the exact examined code package and does not contain the official thesis document.

## Separate post-thesis redevelopment

The current repository contains substantial later audit and redevelopment work. It adds stricter configuration and artifact controls, physical-family partitioning, and explicit interpretation limits. It should be read as a post-thesis research-software record—not as a frozen copy of the examined thesis.

This redevelopment was completed under the supervision of Charalampos Moustakidis and Theodoros Diakonidis. Codex assisted with software development; scientific interpretation and responsibility remain with me.

## What the later audit changed

A post-thesis redevelopment examined leakage, provenance, validation units, and scientific scope more critically. The controlled comparison currently distinguishes one hadronic surrogate from one fixed quark-matter baseline. Because each class has only one independent baseline, class label and baseline identity remain confounded.

Row-level classifier performance in that setting cannot establish general hadronic-versus-quark discrimination. A synthetic Gaussian error model also cannot demonstrate observational generalization, calibrated astrophysical probabilities, or performance on unseen equation-of-state families.

> **Interpretation boundary.** Earlier percentages and named-object classifier scores are not presented here as astrophysical findings. They are model-dependent outputs from a restricted synthetic design, not posterior probabilities for real stars.

## Durable methodological lesson

The most useful outcome is methodological. Validation units must respect equation-of-state family and parameter-sweep structure; effective sample size is governed by independent physical groups rather than rows; and phase-general claims require multiple independent baselines and representative observational validation.

The audit is part of the scientific record: it identifies which conclusions survive and which do not.

## Interactive demonstrations

Two lasting public applications provide interactive views of retained classifier artifacts: a [baseline synthetic-classifier demonstration](https://eoslab-clean-inference.streamlit.app/) and a [perturbation-sensitivity demonstration](https://eoslab-perturbed-inference.streamlit.app/). They are independent post-thesis extensions, not thesis-submission artifacts or observational inference services.

Their displayed values are uncalibrated model scores from restricted synthetic comparisons. They are not composition probabilities, observational measurements, or posterior statements about real stars. The [live-app overview](/apps/) records the assumptions, development boundary, and wake-time note before launch.
