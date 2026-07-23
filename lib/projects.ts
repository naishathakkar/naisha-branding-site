export interface ProjectLink {
  label: string;
  url?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  overview: string;
  problem: string;
  methodology: string;
  results: string;
  skills: string[];
  futureDirections: string;
  publications?: ProjectLink[];
  resources?: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: "bioactivity-prediction-pipeline",
    title: "Bioactivity Prediction & Cheminformatics Pipeline",
    summary:
      "A machine learning pipeline built with RDKit and Python to predict IC50 bioactivity values against target proteins using molecular fingerprints.",
    overview:
      "This project explores how small molecule structure-activity relationships can be modeled quantitatively. Using bioactivity data retrieved from ChEMBL, the pipeline converts SMILES strings into molecular descriptors and trains machine learning models to predict target affinity.",
    problem:
      "Assessing compound bioactivity experimentally is time- and resource-intensive. Computational filtering of virtual libraries can prioritize promising drug candidates before lab testing.",
    methodology:
      "I used ChEMBL's web API to fetch bioactivity data for target proteins, calculated Lipinski descriptors and Morgan fingerprints via RDKit, and trained Random Forest and XGBoost regression models to predict IC50 values.",
    results:
      "The model achieved a strong coefficient of determination (R²) on test compound sets, demonstrating how molecular fingerprints capture key structural features driving target binding.",
    skills: ["Python", "RDKit", "scikit-learn", "Pandas", "Cheminformatics"],
    futureDirections:
      "Next steps include testing Graph Neural Networks (GNNs) directly on molecular graphs and incorporating 3D conformational features.",
  },
  {
    slug: "molecular-docking-reproduction",
    title: "Paper Reproduction: Molecular Docking Benchmarks",
    summary:
      "A reproducible Jupyter notebook evaluating protein-ligand binding pose accuracy and binding affinities using AutoDock Vina.",
    overview:
      "A computational study focused on reproducing published benchmark datasets for protein-ligand molecular docking, comparing predicted binding poses against crystal structures from the Protein Data Bank (PDB).",
    problem:
      "Published computational chemistry papers often lack fully automated, open-source execution pipelines, making independent verification of docking accuracy challenging.",
    methodology:
      "I set up a Python workflow utilizing Biopython and PyMOL to prepare target PDB structures and ligands, ran docking simulations using AutoDock Vina, and calculated RMSD values between predicted and experimental poses.",
    results:
      "Successfully reproduced published docking score trends for tested receptor-ligand complexes, identifying key sensitivity factors like active site flexibility and grid box positioning.",
    skills: ["AutoDock Vina", "PyMOL", "Biopython", "Jupyter", "Structural Biology"],
    futureDirections:
      "Expanding the benchmark suite to evaluate machine-learning-based scoring functions alongside traditional force-field scoring.",
  },
  {
    slug: "sequence-alignment-tool",
    title: "Sequence Alignment & Gene Analysis Tool",
    summary:
      "A lightweight Python toolkit for analyzing pairwise gene/protein sequence alignments and parsing PDB structural metadata.",
    overview:
      "An open-source Python tool built to explore biological sequence comparison algorithms (Needleman-Wunsch & Smith-Waterman) and parse structural biological data.",
    problem:
      "Understanding basic bioinformatics algorithms requires getting hands-on with sequence scoring matrices and gap penalties rather than treating tools as black boxes.",
    methodology:
      "Implemented dynamic programming algorithms in Python for global and local sequence alignment, integrated with Biopython for fast FASTA file handling and PDB metadata extraction.",
    results:
      "The tool cleanly calculates alignment scores and highlights conserved residue regions across variant sequences.",
    skills: ["Python", "Biopython", "Algorithms", "Bioinformatics"],
    futureDirections:
      "Adding interactive visual outputs for sequence conservation maps using Matplotlib and Seaborn.",
  },
];
