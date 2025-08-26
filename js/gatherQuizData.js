const gatherQuizData = [
  {
    question: "What is a client in project requirements gathering?",
    options: [
      "A stakeholder who manages project funding",
      "A person or business needing a problem resolved",
      "An ICT professional working on the project",
      "A regulator overseeing the project",
    ],
    answer: 1,
  },
  {
    question: "What is a business domain?",
    options: [
      "The internet website of a business",
      "The type and overall nature of the business",
      "The IT infrastructure used by a company",
      "A legal contract for project delivery",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is part of analysing a business domain?",
    options: [
      "Products, services, strategic direction, and timeline",
      "Hardware, software, databases, and users",
      "Financial audits and contracts",
      "IT policies and procedures only",
    ],
    answer: 0,
  },
  {
    question: "What are business functions important for?",
    options: [
      "Determining project context and understanding requirements",
      "Allocating budget to IT hardware",
      "Designing office floor plans",
      "Ensuring internet connectivity",
    ],
    answer: 0,
  },
  {
    question: "Which question helps determine business functions?",
    options: [
      "Does the function impact the business’ image or market share?",
      "How many employees use the internet?",
      "Which software is cheapest?",
      "Is the office centrally located?",
    ],
    answer: 0,
  },
  {
    question: "What is the first step before identifying information sources?",
    options: [
      "Ask: What information do I need?",
      "Draft a project charter",
      "Install software tools",
      "Train the project team",
    ],
    answer: 0,
  },
  {
    question: "Why is good quality information important?",
    options: [
      "It ensures accurate decisions and project success",
      "It eliminates the need for IT staff",
      "It guarantees no mistakes",
      "It avoids spending on training",
    ],
    answer: 0,
  },
  {
    question: "What is quantitative data?",
    options: [
      "Data based on opinions and feelings",
      "Data that can be measured numerically",
      "Stories and interviews",
      "A collection of legal documents",
    ],
    answer: 1,
  },
  {
    question: "What is qualitative data?",
    options: [
      "Numerical data such as statistics",
      "Data from interviews and observations",
      "Budget spreadsheets",
      "Server performance logs",
    ],
    answer: 1,
  },
  {
    question: "What is the difference between data and information?",
    options: [
      "Data is raw facts; information adds context and significance",
      "They mean the same thing",
      "Information is always numbers",
      "Data cannot be used in projects",
    ],
    answer: 0,
  },
  {
    question: "Which document type communicates project details to stakeholders?",
    options: [
      "Project requirement documents",
      "Social media reports",
      "Employee contracts",
      "Email newsletters",
    ],
    answer: 0,
  },
  {
    question: "Which is NOT a type of project requirement document?",
    options: [
      "Market",
      "Software",
      "Technical",
      "Personal diary",
    ],
    answer: 3,
  },
  {
    question: "Which QA practice ensures project requirements are met?",
    options: [
      "Auditing and reporting quality against standards",
      "Hiring more staff",
      "Shortening deadlines",
      "Cutting costs on technology",
    ],
    answer: 0,
  },
  {
    question: "Quality assurance focuses on:",
    options: [
      "How processes are performed",
      "Correcting defects after testing",
      "Writing financial contracts",
      "Customer marketing campaigns",
    ],
    answer: 0,
  },
  {
    question: "Quality control focuses on:",
    options: [
      "Evaluation and correction of product quality",
      "Defining business strategy",
      "Staff recruitment",
      "Market research only",
    ],
    answer: 0,
  },
  {
    question: "Who should ideally form the QA team?",
    options: [
      "An independent team for impartial judgment",
      "The sales team",
      "External suppliers",
      "Customers only",
    ],
    answer: 0,
  },
  {
    question: "Which technology use can improve QA processes?",
    options: [
      "Automated analysis of customer interactions",
      "Manual paper-based filing",
      "Ignoring client feedback",
      "Reducing QA testing time",
    ],
    answer: 0,
  },
  {
    question: "What is quality management?",
    options: [
      "A planned approach to QA, including evaluation and improvement",
      "Hiring more managers",
      "Eliminating customer surveys",
      "Designing marketing posters",
    ],
    answer: 0,
  },
  {
    question: "Which is the first step in quality management?",
    options: [
      "Collect data for analysis",
      "Write a project proposal",
      "Hire senior management",
      "Create marketing strategies",
    ],
    answer: 0,
  },
  {
    question: "Which is an additional source of information?",
    options: [
      "Industry bodies and government organisations",
      "Personal social media posts",
      "Rumours from competitors",
      "Random internet blogs",
    ],
    answer: 0,
  },
  {
    question: "What is the purpose of developing critical questions?",
    options: [
      "To clarify the problem statement and gather more data",
      "To test software speed",
      "To reduce project cost",
      "To hire project staff",
    ],
    answer: 0,
  },
  {
    question: "What do open-ended questions provide?",
    options: [
      "Short yes/no answers",
      "Detailed insights, stories, and lists",
      "Strict numerical results",
      "Limited response options",
    ],
    answer: 1,
  },
  {
    question: "What do closed-ended questions provide?",
    options: [
      "Multiple-choice or yes/no answers",
      "Detailed feedback",
      "Open discussion",
      "Unrestricted responses",
    ],
    answer: 0,
  },
  {
    question: "Which stakeholder group is directly affected by project requirements?",
    options: [
      "Customers",
      "Weather reporters",
      "Project auditors",
      "Building inspectors",
    ],
    answer: 0,
  },
  {
    question: "Who in a business focuses on daily operations?",
    options: [
      "Staff and team leaders",
      "Government officials",
      "Customers only",
      "External auditors",
    ],
    answer: 0,
  },
  {
    question: "Which group forms the core management team?",
    options: [
      "Senior management",
      "External consultants",
      "Customers",
      "Project suppliers",
    ],
    answer: 0,
  },
  {
    question: "What role do suppliers play in business functions?",
    options: [
      "Their availability may influence business functions",
      "They design project documents",
      "They set the company’s vision",
      "They approve IT infrastructure",
    ],
    answer: 0,
  },
  {
    question: "What happens if low-quality data is used?",
    options: [
      "Poor decisions, higher costs, delays, and stress",
      "Faster project delivery",
      "Guaranteed project success",
      "Less involvement from stakeholders",
    ],
    answer: 0,
  },
  {
    question: "What is the purpose of a problem statement?",
    options: [
      "Define the issue the project aims to solve",
      "Set the company vision",
      "List all project tasks",
      "Approve the budget",
    ],
    answer: 0,
  },
  {
    question: "Who benefits from insights gained during QA?",
    options: [
      "The entire organisation, not just customer service",
      "Only IT staff",
      "Only the finance team",
      "Only external auditors",
    ],
    answer: 0,
  },
  {
    question: "What is the primary purpose of reviewing organisational documents?",
    options: [
      "To find errors in employee records",
      "To identify data required for the project",
      "To schedule meetings",
      "To create marketing materials",
    ],
    answer: 1,
  },
  {
    question: "Which document might help identify company structure and roles?",
    options: [
      "Organisational chart",
      "Meeting minutes",
      "Product brochures",
      "Website home page",
    ],
    answer: 0,
  },
  {
    question: "Why is document analysis an efficient data gathering technique?",
    options: [
      "It requires interviewing all staff",
      "It provides complete and mostly factual data",
      "It is the most expensive method",
      "It avoids any bias",
    ],
    answer: 1,
  },
  {
    question: "What type of documents include call logs and email records?",
    options: [
      "Historical documents",
      "Financial records",
      "Record-based data",
      "Policy documents",
    ],
    answer: 2,
  },
  {
    question: "What is a risk of relying solely on document analysis?",
    options: [
      "Data may be incomplete or outdated",
      "Too much data is collected",
      "It requires external consultants",
      "It is always biased",
    ],
    answer: 0,
  },
  {
    question: "What is the purpose of project records?",
    options: [
      "They track project progress and evaluations",
      "They are used for marketing",
      "They replace user manuals",
      "They list employee birthdays",
    ],
    answer: 0,
  },
  {
    question: "How do logs differ from diaries?",
    options: [
      "Logs are retrospective, diaries are real-time",
      "Logs record ongoing events, diaries are personal reflections",
      "Diaries are official, logs are personal",
      "There is no difference",
    ],
    answer: 1,
  },
  {
    question: "What are policies in an organisation?",
    options: [
      "Step-by-step instructions for tasks",
      "Guidelines outlining values and principles",
      "Employee contact lists",
      "Project budgets",
    ],
    answer: 1,
  },
  {
    question: "What do procedures provide that policies do not?",
    options: [
      "General business goals",
      "Specific instructions and steps for tasks",
      "Legal compliance",
      "Marketing strategies",
    ],
    answer: 1,
  },
  {
    question: "What is sampling in data gathering?",
    options: [
      "Collecting information from everyone",
      "Collecting data from a subset of people",
      "Ignoring data collection",
      "Using only online sources",
    ],
    answer: 1,
  },
  {
    question: "What does randomisation in sampling mean?",
    options: [
      "Selecting samples without any predetermined pattern",
      "Selecting the first available records",
      "Choosing only positive feedback",
      "Collecting data from management only",
    ],
    answer: 0,
  },
  {
    question: "How does systematic sampling reduce variance?",
    options: [
      "By selecting data spread evenly across the sample size",
      "By using only random numbers",
      "By ignoring outliers",
      "By focusing on only one department",
    ],
    answer: 0,
  },
  {
    question: "Why are questionnaires useful?",
    options: [
      "They collect feedback quickly from many respondents",
      "They require face-to-face interviews",
      "They avoid questions altogether",
      "They are used for financial data only",
    ],
    answer: 0,
  },
  {
    question: "What is an advantage of interviews over questionnaires?",
    options: [
      "Interviews are faster to conduct",
      "Interviews help validate gathered information",
      "Interviews require no preparation",
      "Interviews are anonymous",
    ],
    answer: 1,
  },
  {
    question: "What is the role of a focus group?",
    options: [
      "To provide user feedback on a product",
      "To conduct one-on-one interviews",
      "To analyse financial records",
      "To train employees",
    ],
    answer: 0,
  },
  {
    question: "What risk is associated with focus groups?",
    options: [
      "Dominance of popular opinions suppressing minority views",
      "They always produce biased results",
      "They cost too much",
      "They replace surveys",
    ],
    answer: 0,
  },
  {
    question: "What distinguishes passive observation?",
    options: [
      "No interaction with observed stakeholders",
      "Asking many questions during observation",
      "Taking notes after the event only",
      "Ignoring the observed process",
    ],
    answer: 0,
  },
  {
    question: "When is active observation preferable?",
    options: [
      "When wanting detailed process understanding with stakeholder input",
      "When you want to avoid disruptions",
      "When only automated data is used",
      "When no stakeholders are available",
    ],
    answer: 0,
  },
  {
    question: "What are internal sources of information in business?",
    options: [
      "Emails, customer data, internal reports",
      "Competitor websites",
      "Industry journals",
      "Social media posts",
    ],
    answer: 0,
  },
  {
    question: "What are external sources of business information?",
    options: [
      "Industry journals and competitor websites",
      "Employee attendance records",
      "Internal emails",
      "Project meeting minutes",
    ],
    answer: 0,
  },
  {
    question: "What are Critical Success Factors (CSFs)?",
    options: [
      "Key elements essential for business success",
      "Financial targets only",
      "Marketing slogans",
      "Staff training manuals",
    ],
    answer: 0,
  },
  {
    question: "Which dimension is NOT part of business critical factors?",
    options: [
      "Strategic",
      "Environmental",
      "Financial only",
      "Temporal",
    ],
    answer: 2,
  },
  {
    question: "Why is timely data analysis important?",
    options: [
      "It helps identify missing info and supports stakeholder decisions",
      "It delays project completion",
      "It increases costs unnecessarily",
      "It replaces project planning",
    ],
    answer: 0,
  },
  {
    question: "What should be done if discrepancies appear in gathered data?",
    options: [
      "Investigate further to clarify issues",
      "Ignore them",
      "Blame the project team",
      "Publish data immediately",
    ],
    answer: 0,
  },

  // New questions added:
  {
    question: "What is the main goal of stakeholder analysis?",
    options: [
      "To understand stakeholder interests and influence",
      "To create project budgets",
      "To recruit project staff",
      "To design user interfaces",
    ],
    answer: 0,
  },
  {
    question: "Which technique helps validate the completeness of requirements?",
    options: [
      "Requirements walkthroughs and reviews",
      "Ignoring stakeholder feedback",
      "Focusing only on technical staff",
      "Skipping documentation",
    ],
    answer: 0,
  },
  {
    question: "What is the purpose of use cases in requirements gathering?",
    options: [
      "To describe how users interact with the system",
      "To define project budgets",
      "To schedule meetings",
      "To list hardware specifications",
    ],
    answer: 0,
  },
  {
    question: "What is a common challenge in requirements elicitation?",
    options: [
      "Conflicting stakeholder needs",
      "Excessive budget allocation",
      "Overly simple project goals",
      "Too much documentation",
    ],
    answer: 0,
  },
  {
    question: "What is a prototype used for in project requirements?",
    options: [
      "To provide a visual model of the system for feedback",
      "To finalize budgets",
      "To replace user manuals",
      "To schedule training sessions",
    ],
    answer: 0,
  },
  {
    question: "How does prioritising requirements help a project?",
    options: [
      "By focusing on critical features first",
      "By increasing project scope",
      "By ignoring minor stakeholders",
      "By extending deadlines",
    ],
    answer: 0,
  },
  {
    question: "What is traceability in requirements management?",
    options: [
      "Tracking requirements from origin through implementation",
      "Deleting old project documents",
      "Assigning team members to tasks",
      "Reviewing marketing strategies",
    ],
    answer: 0,
  },
  {
    question: "Why are workshops useful in requirements gathering?",
    options: [
      "They encourage collaboration and consensus among stakeholders",
      "They reduce project budget",
      "They delay project milestones",
      "They limit communication",
    ],
    answer: 0,
  },
  {
    question: "What role does feedback play in requirements gathering?",
    options: [
      "Helps refine and improve requirements",
      "Increases project risks",
      "Eliminates the need for testing",
      "Reduces documentation quality",
    ],
    answer: 0,
  },
  {
    question: "Why is it important to document assumptions in a project?",
    options: [
      "To clarify conditions that affect project success",
      "To reduce training needs",
      "To assign more resources",
      "To create marketing content",
    ],
    answer: 0,
  },
];
