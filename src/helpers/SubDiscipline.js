const getSubdisciplines = discipline => {
    switch (discipline) {
        case 'earth_space':
            return [
                'Edaphology',
                'Environmental chemistry',
                'Environmental science',
                'Gemology',
                'Geochemistry',
                'Geodesy',
                'Geography',
                'Geology',
                'Geomorphology',
                'Geophysics',
                'Glaciology',
                'Hydrogeology',
                'Hydrology',
                'Meteorology',
                'Mineralogy',
                'Oceanography',
                'Paleontology',
                'Paleobiology',
                'Paleoecology',
                'Pedology',
                'Petrology',
                'Sedimentology',
                'Soil science',
                'Speleology',
                'Tectonics',
                'Volcanology',
                'Astrobiology',
                'Astronomy',
                'Astrophysics',
                'Interstellar Medium',
                'Numerical simulations',
                'Physical cosmology',
                'Stellar astrophysics',
                'Planetary science'
            ];
        case 'chemical':
            return [
                'Agrochemistry',
                'Analytical chemistry',
                'Astrochemistry',
                'Atmospheric chemistry',
                'Biochemistry',
                'Chemical biology',
                'Chemical engineering',
                'Cheminformatics',
                'Computational chemistry',
                'Cosmochemistry',
                'Electrochemistry',
                'Environmental chemistry',
                'Femtochemistry',
                'Flavor',
                'Flow chemistry',
                'Geochemistry',
                'Green chemistry',
                'Histochemistry',
                'Hydrogenation',
                'Immunochemistry',
                'Inorganic chemistry',
                'Marine chemistry',
                'Mathematical chemistry',
                'Mechanochemistry',
                'Medicinal chemistry',
                'Molecular biology',
                'Molecular mechanics',
                'Nanotechnology',
                'Natural product chemistry',
                'Neurochemistry',
                'Oenology',
                'Organic chemistry',
                'Organometallic chemistry',
                'Petrochemistry',
                'Pharmacology',
                'Photochemistry',
                'Physical chemistry',
                'Physical organic chemistry',
                'Phytochemistry',
                'Polymer chemistry',
                'Quantum chemistry',
                'Radiochemistry',
                'Solid-state chemistry',
                'Sonochemistry',
                'Supramolecular chemistry',
                'Surface chemistry',
                'Synthetic chemistry',
                'Theoretical chemistry',
                'Thermochemistry'
            ];
        case 'medical':
            return [
                'Alternative medicine',
                'Cardiology',
                'Cardiac electrophysiology',
                'Clinical pathology',
                'Laboratory medicine',
                'Clinical laboratory sciences',
                'Clinical biochemistry',
                'Cytogenetics',
                'Cytohematology',
                'Cytology',
                'Haemostasiology',
                'Histology',
                'Clinical immunology',
                'Clinical microbiology',
                'Molecular genetics',
                'Parasitology',
                'Clinical physiology',
                'Dentistry',
                'Dental hygiene and epidemiology',
                'Dental surgery',
                'Endodontics',
                'Implantology',
                'Oral and maxillofacial surgery',
                'Orthodontics',
                'Periodontics',
                'Prosthodontics',
                'Dermatology',
                'Emergency medicine',
                'Endocrinology',
                'Gastroenterology',
                'Hepatology',
                'Geriatrics',
                'Gynaecology',
                'Health informatics',
                'Clinical informatics',
                'Hematology',
                'Infectious disease',
                'Intensive care medicine',
                'Internal medicine',
                'Medical toxicology',
                'Music therapy',
                'Nephrology',
                'Neurology',
                'Nursing',
                'Nutrition and dietetics',
                'Obstetrics',
                'Occupational hygiene',
                'Occupational therapy',
                'Occupational toxicology',
                'Oncology',
                'Ophthalmology',
                'Neuro-ophthalmology',
                'Optometry',
                'Orthoptics',
                'Otolaryngology',
                'Pathology',
                'Pediatrics',
                'Pharmaceutical sciences',
                'Pharmacy',
                'Physical fitness',
                'Group Fitness / aerobics',
                'Kinesiology / Exercise science',
                'Personal fitness training',
                'Physical therapy',
                'Physiotherapy',
                'Podiatry',
                'Preventive medicine',
                'Primary care',
                'General practice',
                'Psychiatry',
                'Forensic psychiatry',
                'Psychology',
                'Public health',
                'Pulmonology',
                'Radiology',
                'Recreational therapy',
                'Rehabilitation medicine',
                'Respiratory therapy',
                'Rheumatology',
                'Sleep medicine',
                'Speech-language pathology',
                'Sports medicine',
                'Surgery',
                'Bariatric surgery',
                'Cardiothoracic surgery',
                'Neurosurgery',
                'Orthopedic surgery',
                'Plastic surgery',
                'Trauma surgery',
                'Traumatology',
                'Urology',
                'Andrology',
                'Veterinary medicine'
            ];
        case 'biological':
            return [
                'Aerobiology',
                'Anatomy',
                'Comparative anatomy',
                'Human anatomy',
                'Biochemistry',
                'Bioinformatics',
                'Biophysics',
                'Biotechnology',
                'Botany',
                'Ethnobotany',
                'Phycology',
                'Cell biology',
                'Chronobiology',
                'Computational biology',
                'Cryobiology',
                'Developmental biology',
                'Embryology',
                'Teratology',
                'Ecology',
                'Agroecology',
                'Ethnoecology',
                'Human ecology',
                'Landscape ecology',
                'Endocrinology',
                'Evolutionary biology',
                'Genetics',
                'Behavioural genetics',
                'Molecular genetics',
                'Population genetics',
                'Histology',
                'Human biology',
                'Immunology',
                'Limnology',
                'Linnaean taxonomy',
                'Marine biology',
                'Mathematical biology',
                'Microbiology',
                'Molecular biology',
                'Mycology',
                'Neuroscience',
                'Behavioral neuroscience',
                'Nutrition',
                'Paleobiology',
                'Paleontology',
                'Parasitology',
                'Pathology',
                'Anatomical pathology',
                'Clinical pathology',
                'Dermatopathology',
                'Forensic pathology',
                'Hematopathology',
                'Histopathology',
                'Molecular pathology',
                'Surgical pathology',
                'Physiology',
                'Human physiology',
                'Exercise physiology',
                'Structural Biology',
                'Systematics',
                'Systems biology',
                'Virology',
                'Molecular virology',
                'Xenobiology',
                'Zoology',
                'Animal communications',
                'Apiology',
                'Arachnology',
                'Carcinology',
                'Cetology',
                'Entomology',
                'Forensic entomology',
                'Ethnozoology',
                'Ethology',
                'Helminthology',
                'Herpetology',
                'Ichthyology',
                'Mammalogy',
                'Malacology',
                'Conchology',
                'Myrmecology',
                'Nematology',
                'Neuroethology',
                'Oology',
                'Ornithology',
                'Planktology',
                'Primatology',
                'Zootomy',
                'Zoosemiotics'
            ];
        case 'economics':
            return [
                'Agricultural economics',
                'Anarchist economics',
                'Applied economics',
                'Behavioural economics',
                'Bioeconomics',
                'Complexity economics',
                'Computational economics',
                'Consumer economics',
                'Development economics',
                'Ecological economics',
                'Econometrics',
                'Economic geography',
                'Economic history',
                'Economic sociology',
                'Economic systems',
                'Energy economics',
                'Entrepreneurial economics',
                'Environmental economics',
                'Evolutionary economics',
                'Experimental economics',
                'Feminist economics',
                'Financial econometrics',
                'Financial economics',
                'Green economics',
                'Growth economics',
                'Human development theory',
                'Industrial organization',
                'Information economics',
                'Institutional economics',
                'International economics',
                'Islamic economics',
                'Labor economics',
                'Law and economics',
                'Macroeconomics',
                'Managerial economics',
                'Marxian economics',
                'Mathematical economics',
                'Microeconomics',
                'Monetary economics',
                'Neuroeconomics',
                'Participatory economics',
                'Political economy',
                'Public economics',
                'Public finance',
                'Real estate economics',
                'Resource economics',
                'Social choice theory',
                'Socialist economics',
                'Socioeconomics',
                'Transport economics',
                'Welfare economics'
            ];
        case 'engineering':
            return [
                'Biomolecular engineering',
                'Materials engineering',
                'Molecular engineering',
                'Process engineering',
                'Corrosion engineering',
                'Environmental engineering',
                'Geotechnical engineering',
                'Structural engineering',
                'Mining engineering',
                'Transport engineering',
                'Water resources engineering',
                'Computer engineering',
                'Electronic engineering',
                'Optical engineering',
                'Power engineering',
                'Acoustical engineering',
                'Optomechanical engineering',
                'Thermal engineering',
                'Sports engineering',
                'Vehicle engineering',
                'Power plant engineering',
                'Energy engineering',
                'Computer-aided engineering',
                'Cryptographic engineering',
                'Teletraffic engineering',
                'Web engineering',
                'Aerospace engineering',
                'Agricultural engineering',
                'Applied engineering',
                'Biomedical engineering',
                'Biological engineering',
                'Building services engineering',
                'Energy engineering',
                'Railway engineering',
                'Industrial engineering',
                'Mechatronics engineering',
                'Management engineering',
                'Military engineering',
                'Nanoengineering',
                'Nuclear engineering',
                'Petroleum engineering',
                'Textile engineering'
            ];
        case 'mathematics':
            return [
                'Mathematical logic',
                'Algebra',
                'Analysis',
                'Probability theory',
                'Geometry',
                'Number theory',
                'Approximation theory',
                'Combinatorics',
                'Cryptography',
                'Dynamical systems',
                'Game theory',
                'Graph theory',
                'Information theory',
                'Mathematical physics',
                'Numerical analysis',
                'Operations research',
                'Statistics',
                'Theory of computation'
            ];
        case 'physics':
            return [
                'Acoustics',
                'Applied physics',
                'Astrophysics',
                'Atomic, molecular, and optical physics',
                'Biophysics',
                'Computational physics',
                'Condensed matter physics',
                'Cryogenics',
                'Electromagnetism',
                'Elementary particle physics',
                'Experimental physics',
                'Fluid dynamics',
                'Geophysics',
                'Mathematical physics',
                'Mechanics',
                'Medical physics',
                'Molecular physics',
                'Newtonian dynamics',
                'Nuclear physics',
                'Optics',
                'Plasma physics',
                'Quantum physics',
                'Solid mechanics',
                'Solid state physics',
                'Statistical mechanics',
                'Theoretical physics',
                'Thermodynamics',
                'Vehicle dynamics'
            ];
        case 'psychology':
            return [
                'Abnormal psychology',
                'Applied psychology',
                'Asian psychology',
                'Biological psychology',
                'Black psychology',
                'Clinical neuropsychology',
                'Clinical psychology',
                'Cognitive psychology',
                'Community psychology',
                'Comparative psychology',
                'Conservation psychology',
                'Consumer psychology',
                'Counseling psychology',
                'Criminal psychology',
                'Cultural psychology',
                'Developmental psychology',
                'Differential psychology',
                'Ecological psychology',
                'Educational psychology',
                'Environmental psychology',
                'Evolutionary psychology',
                'Experimental psychology',
                'Group psychology',
                'Family psychology',
                'Feminine psychology',
                'Forensic developmental psychology',
                'Forensic psychology',
                'Health psychology',
                'Humanistic psychology',
                'Indigenous psychology',
                'Legal psychology',
                'Masculine psychology',
                'Mathematical psychology',
                'Media psychology',
                'Medical psychology',
                'Military psychology',
                'Moral psychology and Descriptive ethics',
                'Music psychology',
                'Neuropsychology',
                'Occupational health psychology',
                'Occupational psychology',
                'Organizational psychology',
                'Parapsychology',
                'Pediatric psychology',
                'Pedology',
                'Personality psychology',
                'Phenomenology',
                'Political psychology',
                'Positive psychology',
                'Psychoanalysis',
                'Psychobiology',
                'Psychology of religion',
                'Psychometrics',
                'Psychopathology',
                'Child psychopathology',
                'Psychophysics',
                'Quantitative psychology',
                'Rehabilitation psychology',
                'School psychology',
                'Social psychology',
                'Sport psychology',
                'Traffic psychology',
                'Transpersonal psychology'
            ];
        case 'sociology':
            return [
                'Analytical sociology',
                'Applied sociology',
                'Leisure studies',
                'Political sociology',
                'Public sociology',
                'Social engineering',
                'Architectural sociology',
                'Area studies',
                'African studies',
                'American studies',
                'Appalachian studies',
                'Canadian studies',
                'Latin American studies',
                'Asian studies',
                'Central Asian studies',
                'East Asian studies',
                'Indology',
                'Iranian studies',
                'Japanese studies',
                'Korean studies',
                'Pakistan studies',
                'Sindhology',
                'Sinology ',
                'Southeast Asian studies',
                'Australian studies',
                'European studies',
                'Celtic studies',
                'German studies',
                'Scandinavian studies',
                'Slavic studies',
                'Middle Eastern studies',
                'Behavioral sociology',
                'Chinese sociology',
                'Collective behavior',
                'Social movements',
                'Community informatics',
                'Social network analysis',
                'Comparative sociology',
                'Conflict theory',
                'Criminology/Criminal justice',
                'Critical management studies',
                'Critical sociology',
                'Cultural sociology',
                'Cultural studies/ethnic studies',
                'Africana studies',
                'Cross-cultural studies',
                'Culturology',
                'Ethnology',
                'Whiteness studies',
                'Demography/Population',
                'Digital sociology',
                'Dramaturgical sociology',
                'Economic sociology',
                'Educational sociology',
                'Empirical sociology',
                'Environmental sociology',
                'Evolutionary sociology',
                'Feminist sociology',
                'Figurational sociology',
                'Futures studies',
                'Gender studies',
                "Men's studies",
                "Women's studies",
                'Historical sociology',
                'Human ecology',
                'Humanistic sociology',
                'Industrial sociology',
                'Interactionism',
                'Interpretive sociology',
                'Ethnomethodology',
                'Phenomenology',
                'Social constructionism',
                'Symbolic interactionism',
                'Jealousy sociology',
                'Macrosociology',
                'Marxist sociology',
                'Mathematical sociology',
                'Medical sociology',
                'Mesosociology',
                'Microsociology',
                'Military sociology',
                'Natural resource sociology',
                'Organizational studies',
                'Phenomenological sociology',
                'Policy sociology',
                'Polish sociology',
                'Psychoanalytic sociology',
                'Science studies',
                'Science and technology studies',
                'Sexology',
                'Heterosexism',
                'Human sexual behavior',
                'Human sexuality',
                'Queer studies/Queer theory',
                'Sex education',
                'Social capital',
                'Social change',
                'Social conflict theory',
                'Social control',
                'Pure sociology',
                'Social economy',
                'Social philosophy',
                'Social policy',
                'Social psychology',
                'Social research',
                'Social stratification',
                'Social theory',
                'Social transformation',
                'Computational sociology',
                'Economic sociology',
                'Socioeconomics',
                'Economic development',
                'Social development',
                'Sociobiology',
                'Sociocybernetics',
                'Sociolinguistics',
                'Sociological theory',
                'Sociology of aging',
                'Sociology of agriculture',
                'Sociology of art',
                'Sociology of autism',
                'Sociology of childhood',
                'Sociology of conflict',
                'Sociology of culture',
                'Sociology of cyberspace',
                'Sociology of development',
                'Sociology of deviance',
                'Sociology of disaster',
                'Sociology of education',
                'Sociology of emotions',
                'Sociology of fatherhood',
                'Sociology of film',
                'Sociology of finance',
                'Sociology of food',
                'Sociology of gender',
                'Sociology of generations',
                'Sociology of globalization',
                'Sociology of government',
                'Sociology of health and illness',
                'Sociology of human consciousness',
                'Sociology of immigration',
                'Sociology of knowledge',
                'Sociology of language',
                'Sociology of law',
                'Sociology of leisure',
                'Sociology of literature',
                'Sociology of markets',
                'Sociology of marriage',
                'Sociology of motherhood',
                'Sociology of music',
                'Sociology of natural resources',
                'Sociology of organizations',
                'Sociology of peace, war, and social conflict',
                'Sociology of punishment',
                'Sociology of race and ethnic relations',
                'Sociology of religion',
                'Sociology of risk',
                'Sociology of science',
                'Sociology of scientific knowledge',
                'Sociology of social change',
                'Sociology of social movements',
                'Sociology of space',
                'Sociology of sport',
                'Sociology of technology',
                'Sociology of terrorism',
                'Sociology of the body',
                'Sociology of the family',
                'Sociology of the history of science',
                'Sociology of the Internet',
                'Sociology of work',
                'Sociomusicology',
                'Structural sociology',
                'Theoretical sociology',
                'Urban studies or Urban sociology/Rural sociology',
                'Victimology',
                'Visual sociology'
            ];
        default:
            return [];
    }
};

export default getSubdisciplines;