### NEUROSIGN

#Problem Statement
With mental health conditions like depression and ADHD on the rise, there is a pressing need for non-invasive, data-driven tools that can assist in early diagnosis and monitoring. Traditional methods for diagnosing these disorders often rely on subjective assessments and can take time to produce accurate results. The project aims to address these limitations by utilizing EEG data and ma

#Introduction

The project focuses on analyzing and predicting neural health conditions, specifically exploring stroke risks and related neurological issues using EEG data. Electroencephalography (EEG) is a widely used technique for monitoring brain activity through electrical signals captured by electrodes placed on the scalp. By leveraging advanced data processing and machine learning techniques, the project aims to identify patterns or anomalies in EEG data that correlate with conditions like Attention Deficit Hyperactivity Disorder (ADHD) or stroke risks. This project can provide critical insights into brain health, paving the way for early detection and better management of neurological disorders.


#Novelty
Cluster-Based Approach: Unlike existing models, this solution clusters unlabeled EEG data for depression and ADHD risk without pre-labelled datasets.
Real-Time Validation: An iterative process optimizes clusters until a validation score of 0.75+ is achieved, ensuring high reliability. Post-clustering, a Random Forest algorithm is applied to predict new inputs' mental health states with high accuracy, chain learning to predict mental health conditions based on cognitive load patterns.





#Key Features


•	EEG Signal Processing: Extraction of key signals from the frontal regions, crucial for identifying attention and emotional imbalances.


•	Unsupervised Learning: Clustering the data to separate the mental states (healthy vs. affected by depression/ADHD) without explicit labels.


•	Validation-Driven Clustering: Adjusts the clusters based on silhouette validation, ensuring the most accurate and meaningful groups.

•	Predictive Analytics: Uses a trained Random Forest model to predict the future likelihood of depression or ADHD from unseen EEG data.


Impact

Provides an efficient method for detecting early signs of ADHD and depression, potentially aiding clinicians and users in monitoring mental health conditions in real-time.

Facilitates more proactive mental health interventions based on objective EEG signal analysis.


#Potential Future Applications

This system can be expanded to detect other cognitive and neurological conditions such as anxiety, epilepsy, or even general cognitive load analysis for educational or performance monitoring applications.







By introducing unsupervised learning techniques with rigorous validation, this project offers a unique and innovative tool for mental health monitoring based on EEG data, providing a cost-effective solution that can be integrated into wearable devices for continuous tracking.


Objective
The primary objective of this project is to analyse EEG data to detect and predict neurological conditions, focusing on stroke risk assessment. The goals are:
1.	To cluster EEG data and identify patterns linked to neurological anomalies using unsupervised learning.
2.	To provide interpretable insights into brain activity based on features like Attention, Meditation, and frequency bands.
3.	To develop an automated system for detecting stroke risks and related conditions, with potential applications in early diagnosis and patient monitoring.
4.	To enhance our understanding of EEG-based brain activity analysis, facilitating further research in neuroscience and healthcare technology.
