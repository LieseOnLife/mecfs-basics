---
title: "Rethinking the treatment of chronic fatigue syndrome—a reanalysis and evaluation of findings from a recent major trial of graded exercise and CBT"
link: https://doi.org/10.1186/s40359-018-0218-3
doi: 10.1186/s40359-018-0218-3
published: 2018-03-22
---
## Summary
This paper reanalyses individual participant data from the PACE trial ([[PACE trial of adaptive pacing, CBT, graded exercise and specialist medical care for CFS|Comparison of adaptive pacing therapy, cognitive behaviour therapy, graded exercise therapy, and specialist medical care for chronic fatigue syndrome (PACE): a randomised trial]]). The data were released under a UK Freedom of Information (FOI) request. The authors apply the primary outcome ("overall improvement") and the recovery definition set out in the 2007 published protocol, rather than the revised definitions used in the 2011 and 2013 trial reports. On the protocol measures, the CBT and GET groups improved numerically more often than the control (specialist medical care) group. After correcting for the number of planned comparisons, those differences mostly fell short of significance. Recovery rates were low and did not differ between arms. The authors conclude that PACE's modest self-reported effects could be explained by reporting bias in an unblinded trial.

## Methods
- **Design:** secondary reanalysis of a randomised trial's data, not a new trial. The tier is `rct` because the comparisons are still randomised arms of PACE.
- **Data:** the FOI dataset released by Queen Mary University of London. Some stratification variables were not in the dataset, so the analyses do not adjust for them. Missing 52-week Chalder scores could be inferred from other variables in the dataset.
- **Cohort:** the PACE cohort of 641 adults with mild-to-moderate CFS by the Oxford criteria, which do not require PEM. The reanalysis focuses on the CBT, GET, and control arms. Adaptive pacing therapy is included in the omnibus tests but not discussed further, because it did not differ from control on any outcome considered.
- **Protocol definitions ("Definition A"):**
  - *Improvement:* SF-36 physical function of at least 75 or a rise of 50% or more, plus a fatigue criterion of three or fewer Chalder items worse than before illness or a 50% drop in such items.
  - *Recovery:* SF-36 at least 85, three or fewer Chalder items worse, a clinical global impression of "very much better", and no longer meeting the Oxford, CDC, and London case definitions.
- **Published definitions ("Definition B"):** the 2011/2013 reports used continuous scores or thresholds such as an 8-point SF-36 gain, a 2-point Chalder drop, and an SF-36 recovery threshold of 60.
- **Analysis:** intention-to-treat (missing counted as non-improvers) and available-case analyses, using Bonferroni-corrected thresholds. The threshold was p=.008 for the six comparisons listed in the protocol and p=.010 for the five in the statistical analysis plan. Long-term follow-up (median 31 months) was examined informally from published summary data for participants who had no further CBT or GET.
- **Funding and disclosures:** the UK ME Association contributed to the open-access fee and part-funds KG. DT's position is partly crowdfunded. TK is a volunteer committee member of the Irish ME/CFS Association. The authors declare no competing interests.

## Findings
**Protocol-defined overall improvement at 52 weeks (intention-to-treat):**
- Rates were 20% with CBT, 21% with GET, and 10% with control. The omnibus test was significant (p=.003).
- Pairwise tests gave CBT vs control p=.015 and GET vs control p=.010, so neither met the protocol-based corrected threshold. In the available-case analysis (22% CBT, 21% GET, 11% control), neither comparison met the protocol-based threshold either.

**Single-criterion improvement:**
- *SF-36 criterion:* 44% control, 48% CBT, 61% GET. GET vs control was p=.002; CBT vs control was not significant.
- *Chalder criterion:* 13% control, 26% CBT, 24% GET. CBT vs control survived correction (p=.004); GET vs control did not (p=.015).

**Protocol-defined recovery:**
- Recovery rates were 7% CBT, 4% GET, and 3% control (intention-to-treat), with no significant group effect (p=0.14). The available-case analysis gave 8%, 5%, and 3% (p=0.10).
- For comparison, the 2013 published definition gave about 22% recovery in the CBT and GET groups and 7% in control.

**Long-term follow-up:** among participants who had no further CBT or GET after the trial, group differences in self-rated fatigue and physical function were no longer evident.

**Objective and secondary measures (from published PACE reports, as summarised by the authors):**
- Only the 6-minute walk favoured GET, by about 30 m over control at 52 weeks.
- Step-test fitness, work days lost, and receipt of illness or disability benefits showed no treatment effect.
- Serious adverse events were more common with GET (8%) than with control (4%).

**Authors' conclusion:** the effects were modest, almost entirely limited to self-report measures, and did not last beyond two years. The authors say this raises "serious concerns about the robustness" of the claims for CBT and GET.

## Limitations / flags
- **Cohort:** the underlying cohort is Oxford-defined (`no-pem-criterion`).
- **Lineage flag:** the paper analyses PACE trial data, which is why it carries `pace-lineage`. The flag marks the data lineage; the paper itself is a critique of PACE's conclusions.
- **Reconstruction limits:** the reanalysis approximates the protocol procedures from the FOI dataset, without some stratification variables. The long-term analysis is informal and uses published summary data.
- **Opposing view:** the PACE investigators have defended the outcome changes as approved before outcome data were examined. The paper cites their responses.
- **Authors' affiliations:** several authors have ties to patient organisations, and the open-access fee was partly paid by a patient charity. The authors declare no competing interests, so no `conflict-of-interest` flag is applied; the ties are recorded here for transparency.
- **Corrections:** no retraction or correction is listed in Crossref or PubMed as of 2026-11-06.

## Abstract
BACKGROUND: The PACE trial was a well-powered randomised trial designed to examine the efficacy of graded exercise therapy (GET) and cognitive behavioural therapy (CBT) for chronic fatigue syndrome. Reports concluded that both treatments were moderately effective, each leading to recovery in over a fifth of patients. However, the reported analyses did not consistently follow the procedures set out in the published protocol, and it is unclear whether the conclusions are fully justified by the evidence.

METHODS: Here, we present results based on the original protocol-specified procedures. Data from a recent Freedom of Information request enabled us to closely approximate these procedures. We also evaluate the conclusions from the trial as a whole. ^q1

RESULTS: On the original protocol-specified primary outcome measure - overall improvement rates - there was a significant effect of treatment group. However, the groups receiving CBT or GET did not significantly outperform the Control group after correcting for the number of comparisons specified in the trial protocol. Also, rates of recovery were consistently low and not significantly different across treatment groups. Finally, on secondary measures, significant effects were almost entirely confined to self-report measures. These effects did not endure beyond two years. ^q2

CONCLUSIONS: These findings raise serious concerns about the robustness of the claims made about the efficacy of CBT and GET. The modest treatment effects obtained on self-report measures in the PACE trial do not exceed what could be reasonably accounted for by participant reporting biases. ^q3

## Full text
![[wilshire-pace-reanalysis.pdf]]

### Methods
Using the FOIA dataset, we first calculated rates of improvement at the primary 52-week endpoint according to the definition specified in the trial protocol (Definition A in Table [1](#Tab1)). We used an intent-to-treat approach, again as specified in the protocol: if the 52-week score was missing, that case was counted as a non-improver (there were no missing scores at baseline; missing scores had been replaced with scores at screening as described in [[14](#CR14)]). However, for comparison, we also repeated the analysis based on an available case sample: participants with missing scores at 52 weeks were simply excluded from the dataset. ^q4

The trial protocol lists six planned comparisons. The statistical analysis plan, published some years later, lists only five. Here, we report outcomes based on both scenarios. No method of correction was specified in the trial protocol, but in the statistical analysis plan, the Bonferroni method was stipulated, so this was the method we applied. ^q5

### Results
Based on the protocol-specified definition of improvement, 20% of CBT patients and 21% of GET patients improved, and 10% of the Control patients. There was a statistically significant effect of treatment on improvement rates, χ2(3) = 14.24, *p* = .003. The *p*-value associated with the contrast between CBT and Control was *p* = .015 and that for the contrast between GET and Control was *p* = .010. If we take into account all six planned comparisons listed in the protocol, the Bonferroni-adjusted *p* threshold for both pairwise comparisons is 0.008. Neither comparison reaches this threshold. ^q6

Using the protocol-specified definition of recovery, and applying an intention-to-treat approach, the rates of recovery were 7%, 4% and 3% for the CBT, GET and Control groups respectively. Applying an available-case approach, these rates were 8%, 5%, and 3% respectively. In neither instance was there a statistically significant effect of treatment on recovery rates (*p* values were 0.14 and 0.10, respectively, for the intent-to-treat and available case approaches). ^q7

The trial protocol specified that various stratification variables would also be included in the primary outcome analysis (e.g., treatment centre, therapist, presence/absence of co-morbid depression). These variables were not available in the FOIA dataset, so we were unable to include them. Nonetheless, they were approximately evenly distributed across groups, and therefore their inclusion would be unlikely to change outcomes substantially. ^q8

### Long-term outcomes
The pattern of results presented here mirrors that obtained for the entire cohort: the small group differences apparent on these measures at 52 weeks are no longer evident at long-term follow-up. A one-way analysis of variance revealed that there were no statistically reliable effects of treatment group on either outcome measure (Physical function: F(3,291) = 0.70, *ns*; Fatigue F(3,291) = 0.17, *ns*). ^q9
