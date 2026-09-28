window.PRELEARNING = {
  "1.1": {
    "bridge": "You already know locks, guards, cameras, and access rules from physical security. The new skill is classifying a control on two independent axes.",
    "teach": "First ask what implements the control: technology, management, people/process, or a physical barrier. Then ask what it does: prevent, detect, correct, deter, compensate, or direct. A control can belong to a category and a function at the same time. MFA means Multifactor Authentication: authentication using different factor categories.",
    "example": "An electronic access rule can be technical and preventive; a recorded door alarm can be technical and detective. If a preferred safeguard cannot be implemented, an approved alternative may compensate. Restoring damage after an incident is corrective, not compensating.",
    "watch": [
      "Which axis is the question asking about?",
      "Is the action before an event, during detection, or after damage?",
      "What makes a substitute compensating?"
    ],
    "questions": [
      {
        "id": "PRE-1.1-1",
        "phase": "pre",
        "objective": "1.1",
        "concept": "Technical control",
        "prompt": "A mail gateway automatically rejects executable attachments. When classifying HOW the safeguard is implemented, which category fits?",
        "options": [
          "Managerial control",
          "Physical control",
          "Technical control",
          "Operational control"
        ],
        "correct": 2,
        "explanations": [
          "Managerial control: Management directs and oversees security. The scenario instead calls for Technical control: Technology enforces policy.",
          "Physical control: A tangible safeguard protects assets. The scenario instead calls for Technical control: Technology enforces policy.",
          "Technical control: Technology enforces policy. This is the role or property required by the scenario.",
          "Operational control: People perform security processes. The scenario instead calls for Technical control: Technology enforces policy."
        ]
      },
      {
        "id": "PRE-1.1-2",
        "phase": "pre",
        "objective": "1.1",
        "concept": "Managerial control",
        "prompt": "A security steering group establishes the organization's risk-review requirements. Which implementation category describes that oversight?",
        "options": [
          "Physical control",
          "Technical control",
          "Operational control",
          "Managerial control"
        ],
        "correct": 3,
        "explanations": [
          "Physical control: A tangible safeguard protects assets. The scenario instead calls for Managerial control: Management directs and oversees security.",
          "Technical control: Technology enforces policy. The scenario instead calls for Managerial control: Management directs and oversees security.",
          "Operational control: People perform security processes. The scenario instead calls for Managerial control: Management directs and oversees security.",
          "Managerial control: Management directs and oversees security. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-1.1-3",
        "phase": "pre",
        "objective": "1.1",
        "concept": "Operational control",
        "prompt": "Reception staff perform a daily visitor-list reconciliation. Which implementation category best describes the staff-performed process?",
        "options": [
          "Managerial control",
          "Physical control",
          "Operational control",
          "Technical control"
        ],
        "correct": 2,
        "explanations": [
          "Managerial control: Management directs and oversees security. The scenario instead calls for Operational control: People perform security processes.",
          "Physical control: A tangible safeguard protects assets. The scenario instead calls for Operational control: People perform security processes.",
          "Operational control: People perform security processes. This is the role or property required by the scenario.",
          "Technical control: Technology enforces policy. The scenario instead calls for Operational control: People perform security processes."
        ]
      },
      {
        "id": "PRE-1.1-4",
        "phase": "pre",
        "objective": "1.1",
        "concept": "Physical control",
        "prompt": "A steel enclosure prevents direct contact with exposed communications equipment. Which implementation category fits the enclosure?",
        "options": [
          "Physical control",
          "Operational control",
          "Technical control",
          "Managerial control"
        ],
        "correct": 0,
        "explanations": [
          "Physical control: A tangible safeguard protects assets. This is the role or property required by the scenario.",
          "Operational control: People perform security processes. The scenario instead calls for Physical control: A tangible safeguard protects assets.",
          "Technical control: Technology enforces policy. The scenario instead calls for Physical control: A tangible safeguard protects assets.",
          "Managerial control: Management directs and oversees security. The scenario instead calls for Physical control: A tangible safeguard protects assets."
        ]
      },
      {
        "id": "PRE-1.1-5",
        "phase": "pre",
        "objective": "1.1",
        "concept": "Preventive control",
        "prompt": "A service refuses an invalid request before it can change a record. Which control function is its primary purpose?",
        "options": [
          "Directive control",
          "Detective control",
          "Preventive control",
          "Corrective control"
        ],
        "correct": 2,
        "explanations": [
          "Directive control: Specifies required behavior. The scenario instead calls for Preventive control: Stops an unwanted event before success.",
          "Detective control: Discovers or records events. The scenario instead calls for Preventive control: Stops an unwanted event before success.",
          "Preventive control: Stops an unwanted event before success. This is the role or property required by the scenario.",
          "Corrective control: Repairs damage or restores an acceptable state. The scenario instead calls for Preventive control: Stops an unwanted event before success."
        ]
      },
      {
        "id": "PRE-1.1-6",
        "phase": "pre",
        "objective": "1.1",
        "concept": "Detective control",
        "prompt": "A database monitor reports an unexpected privilege change after it occurs. Which control function is emphasized?",
        "options": [
          "Compensating control",
          "Preventive control",
          "Corrective control",
          "Detective control"
        ],
        "correct": 3,
        "explanations": [
          "Compensating control: Substitutes for a preferred unavailable safeguard. The scenario instead calls for Detective control: Discovers or records events.",
          "Preventive control: Stops an unwanted event before success. The scenario instead calls for Detective control: Discovers or records events.",
          "Corrective control: Repairs damage or restores an acceptable state. The scenario instead calls for Detective control: Discovers or records events.",
          "Detective control: Discovers or records events. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-1.1-7",
        "phase": "pre",
        "objective": "1.1",
        "concept": "Corrective control",
        "prompt": "After malicious settings are removed, an administrator restores the approved configuration. Which control function describes this restoration?",
        "options": [
          "Deterrent control",
          "Directive control",
          "Preventive control",
          "Corrective control"
        ],
        "correct": 3,
        "explanations": [
          "Deterrent control: Discourages attempts through visible consequences. The scenario instead calls for Corrective control: Repairs damage or restores an acceptable state.",
          "Directive control: Specifies required behavior. The scenario instead calls for Corrective control: Repairs damage or restores an acceptable state.",
          "Preventive control: Stops an unwanted event before success. The scenario instead calls for Corrective control: Repairs damage or restores an acceptable state.",
          "Corrective control: Repairs damage or restores an acceptable state. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-1.1-8",
        "phase": "pre",
        "objective": "1.1",
        "concept": "Deterrent control",
        "prompt": "A facility prominently announces that unauthorized access results in investigation and disciplinary action. Which function is intended to discourage the attempt?",
        "options": [
          "Deterrent control",
          "Directive control",
          "Preventive control",
          "Detective control"
        ],
        "correct": 0,
        "explanations": [
          "Deterrent control: Discourages attempts through visible consequences. This is the role or property required by the scenario.",
          "Directive control: Specifies required behavior. The scenario instead calls for Deterrent control: Discourages attempts through visible consequences.",
          "Preventive control: Stops an unwanted event before success. The scenario instead calls for Deterrent control: Discourages attempts through visible consequences.",
          "Detective control: Discovers or records events. The scenario instead calls for Deterrent control: Discourages attempts through visible consequences."
        ]
      },
      {
        "id": "PRE-1.1-9",
        "phase": "pre",
        "objective": "1.1",
        "concept": "Compensating control",
        "prompt": "A required security feature cannot run on a specialized medical appliance. An approved substitute provides comparable risk reduction until replacement. Which control function describes the substitute?",
        "options": [
          "Detective control",
          "Directive control",
          "Corrective control",
          "Compensating control"
        ],
        "correct": 3,
        "explanations": [
          "Detective control: Discovers or records events. The scenario instead calls for Compensating control: Substitutes for a preferred unavailable safeguard.",
          "Directive control: Specifies required behavior. The scenario instead calls for Compensating control: Substitutes for a preferred unavailable safeguard.",
          "Corrective control: Repairs damage or restores an acceptable state. The scenario instead calls for Compensating control: Substitutes for a preferred unavailable safeguard.",
          "Compensating control: Substitutes for a preferred unavailable safeguard. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-1.1-10",
        "phase": "pre",
        "objective": "1.1",
        "concept": "Directive control",
        "prompt": "A written instruction tells all employees to report suspected data exposure immediately. Which control function specifies the required behavior?",
        "options": [
          "Preventive control",
          "Directive control",
          "Detective control",
          "Compensating control"
        ],
        "correct": 1,
        "explanations": [
          "Preventive control: Stops an unwanted event before success. The scenario instead calls for Directive control: Specifies required behavior.",
          "Directive control: Specifies required behavior. This is the role or property required by the scenario.",
          "Detective control: Discovers or records events. The scenario instead calls for Directive control: Specifies required behavior.",
          "Compensating control: Substitutes for a preferred unavailable safeguard. The scenario instead calls for Directive control: Specifies required behavior."
        ]
      }
    ]
  },
  "1.2": {
    "bridge": "Think in terms of a valuable resource, a person requesting it, and evidence about what happened.",
    "teach": "CIA means Confidentiality, Integrity, and Availability: keep secrets, prevent unauthorized changes, and keep service usable. Authentication proves identity; authorization decides rights; accounting records actions. Non-repudiation adds evidence of origin, beyond merely detecting change. Zero trust separates access decisions from enforcement and rechecks context.",
    "example": "For a sensitive engineering drawing, limiting readers protects confidentiality and detecting unauthorized edits protects integrity. A verifiable signer can also establish who approved it. A policy engine decides access; an enforcement point carries out that decision. Decoys reveal interaction that legitimate work should never require.",
    "watch": [
      "Is the problem disclosure, modification, or outage?",
      "Who decides versus enforces access?",
      "Is a decoy a system, a network, a file, or a token?"
    ],
    "questions": [
      {
        "id": "PRE-1.2-1",
        "phase": "pre",
        "objective": "1.2",
        "concept": "Confidentiality",
        "prompt": "A planning document must be unreadable to anyone outside a small project team. Which security property is the primary goal?",
        "options": [
          "Policy enforcement point",
          "Non-repudiation",
          "Accounting",
          "Confidentiality"
        ],
        "correct": 3,
        "explanations": [
          "Policy enforcement point: Enforces access decisions. The scenario instead calls for Confidentiality: Prevents unauthorized disclosure.",
          "Non-repudiation: Provides evidence linking an action to its signer. The scenario instead calls for Confidentiality: Prevents unauthorized disclosure.",
          "Accounting: Records activity for accountability. The scenario instead calls for Confidentiality: Prevents unauthorized disclosure.",
          "Confidentiality: Prevents unauthorized disclosure. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-1.2-2",
        "phase": "pre",
        "objective": "1.2",
        "concept": "Integrity",
        "prompt": "An accounting system must prevent someone from silently changing a finalized invoice amount. Which security property is the primary goal?",
        "options": [
          "Zero trust",
          "Integrity",
          "Authorization",
          "Honeypot"
        ],
        "correct": 1,
        "explanations": [
          "Zero trust: No implicit trust based on location; access is continually evaluated. The scenario instead calls for Integrity: Protects against unauthorized alteration.",
          "Integrity: Protects against unauthorized alteration. This is the role or property required by the scenario.",
          "Authorization: Determines permitted actions. The scenario instead calls for Integrity: Protects against unauthorized alteration.",
          "Honeypot: A decoy attracts and reveals unauthorized activity. The scenario instead calls for Integrity: Protects against unauthorized alteration."
        ]
      },
      {
        "id": "PRE-1.2-3",
        "phase": "pre",
        "objective": "1.2",
        "concept": "Availability",
        "prompt": "A registration service must remain usable during its busiest enrollment period. Which security property is the primary goal?",
        "options": [
          "Availability",
          "Authentication",
          "Non-repudiation",
          "Accounting"
        ],
        "correct": 0,
        "explanations": [
          "Availability: Keeps services accessible when needed. This is the role or property required by the scenario.",
          "Authentication: Verifies a claimed identity. The scenario instead calls for Availability: Keeps services accessible when needed.",
          "Non-repudiation: Provides evidence linking an action to its signer. The scenario instead calls for Availability: Keeps services accessible when needed.",
          "Accounting: Records activity for accountability. The scenario instead calls for Availability: Keeps services accessible when needed."
        ]
      },
      {
        "id": "PRE-1.2-4",
        "phase": "pre",
        "objective": "1.2",
        "concept": "Authentication",
        "prompt": "A service challenges a claimed user to prove control of an enrolled credential before establishing a session. Which access function is this?",
        "options": [
          "Confidentiality",
          "Zero trust",
          "Authentication",
          "Accounting"
        ],
        "correct": 2,
        "explanations": [
          "Confidentiality: Prevents unauthorized disclosure. The scenario instead calls for Authentication: Verifies a claimed identity.",
          "Zero trust: No implicit trust based on location; access is continually evaluated. The scenario instead calls for Authentication: Verifies a claimed identity.",
          "Authentication: Verifies a claimed identity. This is the role or property required by the scenario.",
          "Accounting: Records activity for accountability. The scenario instead calls for Authentication: Verifies a claimed identity."
        ]
      },
      {
        "id": "PRE-1.2-5",
        "phase": "pre",
        "objective": "1.2",
        "concept": "Authorization",
        "prompt": "A signed-in researcher requests the ability to publish a dataset, and the service checks the researcher's assigned rights. Which function makes that permission decision?",
        "options": [
          "Non-repudiation",
          "Accounting",
          "Authorization",
          "Availability"
        ],
        "correct": 2,
        "explanations": [
          "Non-repudiation: Provides evidence linking an action to its signer. The scenario instead calls for Authorization: Determines permitted actions.",
          "Accounting: Records activity for accountability. The scenario instead calls for Authorization: Determines permitted actions.",
          "Authorization: Determines permitted actions. This is the role or property required by the scenario.",
          "Availability: Keeps services accessible when needed. The scenario instead calls for Authorization: Determines permitted actions."
        ]
      },
      {
        "id": "PRE-1.2-6",
        "phase": "pre",
        "objective": "1.2",
        "concept": "Accounting",
        "prompt": "A platform needs an attributable history of who created, exported, and removed research datasets. Which access-related function supplies this record?",
        "options": [
          "Zero trust",
          "Honeypot",
          "Accounting",
          "Policy enforcement point"
        ],
        "correct": 2,
        "explanations": [
          "Zero trust: No implicit trust based on location; access is continually evaluated. The scenario instead calls for Accounting: Records activity for accountability.",
          "Honeypot: A decoy attracts and reveals unauthorized activity. The scenario instead calls for Accounting: Records activity for accountability.",
          "Accounting: Records activity for accountability. This is the role or property required by the scenario.",
          "Policy enforcement point: Enforces access decisions. The scenario instead calls for Accounting: Records activity for accountability."
        ]
      },
      {
        "id": "PRE-1.2-7",
        "phase": "pre",
        "objective": "1.2",
        "concept": "Non-repudiation",
        "prompt": "A publisher needs durable evidence linking an approved manuscript to its signer when authorship of the approval is disputed. Which property goes beyond detecting document changes?",
        "options": [
          "Accounting",
          "Honeypot",
          "Availability",
          "Non-repudiation"
        ],
        "correct": 3,
        "explanations": [
          "Accounting: Records activity for accountability. The scenario instead calls for Non-repudiation: Provides evidence linking an action to its signer.",
          "Honeypot: A decoy attracts and reveals unauthorized activity. The scenario instead calls for Non-repudiation: Provides evidence linking an action to its signer.",
          "Availability: Keeps services accessible when needed. The scenario instead calls for Non-repudiation: Provides evidence linking an action to its signer.",
          "Non-repudiation: Provides evidence linking an action to its signer. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-1.2-8",
        "phase": "pre",
        "objective": "1.2",
        "concept": "Zero trust",
        "prompt": "A design explicitly rejects the assumption that a trusted network address makes every request trustworthy. Which security approach does this describe?",
        "options": [
          "Policy enforcement point",
          "Authentication",
          "Integrity",
          "Zero trust"
        ],
        "correct": 3,
        "explanations": [
          "Policy enforcement point: Enforces access decisions. The scenario instead calls for Zero trust: No implicit trust based on location; access is continually evaluated.",
          "Authentication: Verifies a claimed identity. The scenario instead calls for Zero trust: No implicit trust based on location; access is continually evaluated.",
          "Integrity: Protects against unauthorized alteration. The scenario instead calls for Zero trust: No implicit trust based on location; access is continually evaluated.",
          "Zero trust: No implicit trust based on location; access is continually evaluated. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-1.2-9",
        "phase": "pre",
        "objective": "1.2",
        "concept": "Policy enforcement point",
        "prompt": "A gateway receives an access decision from a separate decision service and then blocks the requested connection. Which component role does the gateway perform?",
        "options": [
          "Authorization",
          "Policy enforcement point",
          "Confidentiality",
          "Zero trust"
        ],
        "correct": 1,
        "explanations": [
          "Authorization: Determines permitted actions. The scenario instead calls for Policy enforcement point: Enforces access decisions.",
          "Policy enforcement point: Enforces access decisions. This is the role or property required by the scenario.",
          "Confidentiality: Prevents unauthorized disclosure. The scenario instead calls for Policy enforcement point: Enforces access decisions.",
          "Zero trust: No implicit trust based on location; access is continually evaluated. The scenario instead calls for Policy enforcement point: Enforces access decisions."
        ]
      },
      {
        "id": "PRE-1.2-10",
        "phase": "pre",
        "objective": "1.2",
        "concept": "Honeypot",
        "prompt": "A defender deploys one fake file-transfer service with no legitimate users to observe intrusion attempts. Which defensive resource is this?",
        "options": [
          "Accounting",
          "Honeypot",
          "Authentication",
          "Policy enforcement point"
        ],
        "correct": 1,
        "explanations": [
          "Accounting: Records activity for accountability. The scenario instead calls for Honeypot: A decoy attracts and reveals unauthorized activity.",
          "Honeypot: A decoy attracts and reveals unauthorized activity. This is the role or property required by the scenario.",
          "Authentication: Verifies a claimed identity. The scenario instead calls for Honeypot: A decoy attracts and reveals unauthorized activity.",
          "Policy enforcement point: Enforces access decisions. The scenario instead calls for Honeypot: A decoy attracts and reveals unauthorized activity."
        ]
      }
    ]
  },
  "1.3": {
    "bridge": "A working technical change can still fail as a project if it disrupts another service or happens without authorization.",
    "teach": "Change management turns a request into a controlled transition. Identify affected services and dependencies, evaluate impact, obtain required approval, test, schedule, communicate, implement, verify, and update records. Maintain a practical backout plan. The exact workflow may vary, but technical confidence is not permission.",
    "example": "Before retiring a network service, discover what calls it. That is dependency analysis. Estimate the effect of interrupting those callers: impact analysis. Tell affected users when disruption will occur: communication. Record the final configuration afterward: documentation.",
    "watch": [
      "What must happen before implementation?",
      "How do dependency and impact analysis differ?",
      "What evidence will show success or trigger rollback?"
    ],
    "questions": [
      {
        "id": "PRE-1.3-1",
        "phase": "pre",
        "objective": "1.3",
        "concept": "Impact analysis",
        "prompt": "Before changing authentication requirements, a team estimates effects on contractors, customer support, and emergency operations. Which change activity evaluates those consequences?",
        "options": [
          "Testing",
          "Change approval",
          "Impact analysis",
          "Maintenance window"
        ],
        "correct": 2,
        "explanations": [
          "Testing: Checks behavior before broad implementation. The scenario instead calls for Impact analysis: Evaluates a change's consequences.",
          "Change approval: The authorized body permits implementation. The scenario instead calls for Impact analysis: Evaluates a change's consequences.",
          "Impact analysis: Evaluates a change's consequences. This is the role or property required by the scenario.",
          "Maintenance window: An approved period for potentially disruptive work. The scenario instead calls for Impact analysis: Evaluates a change's consequences."
        ]
      },
      {
        "id": "PRE-1.3-2",
        "phase": "pre",
        "objective": "1.3",
        "concept": "Change approval",
        "prompt": "A change has passed testing, but production work requires a decision from the designated change authority. Which activity is still required?",
        "options": [
          "Documentation update",
          "Dependency analysis",
          "Change approval",
          "Version control"
        ],
        "correct": 2,
        "explanations": [
          "Documentation update: Aligns records with implemented changes. The scenario instead calls for Change approval: The authorized body permits implementation.",
          "Dependency analysis: Finds components that rely on each other. The scenario instead calls for Change approval: The authorized body permits implementation.",
          "Change approval: The authorized body permits implementation. This is the role or property required by the scenario.",
          "Version control: Tracks revisions and supports recovery. The scenario instead calls for Change approval: The authorized body permits implementation."
        ]
      },
      {
        "id": "PRE-1.3-3",
        "phase": "pre",
        "objective": "1.3",
        "concept": "Backout plan",
        "prompt": "An upgrade checklist specifies the old package, database restore point, and exact steps to reverse a failed deployment. What does that part of the checklist constitute?",
        "options": [
          "Impact analysis",
          "Maintenance window",
          "Backout plan",
          "Version control"
        ],
        "correct": 2,
        "explanations": [
          "Impact analysis: Evaluates a change's consequences. The scenario instead calls for Backout plan: Defines how to restore the previous working state.",
          "Maintenance window: An approved period for potentially disruptive work. The scenario instead calls for Backout plan: Defines how to restore the previous working state.",
          "Backout plan: Defines how to restore the previous working state. This is the role or property required by the scenario.",
          "Version control: Tracks revisions and supports recovery. The scenario instead calls for Backout plan: Defines how to restore the previous working state."
        ]
      },
      {
        "id": "PRE-1.3-4",
        "phase": "pre",
        "objective": "1.3",
        "concept": "Maintenance window",
        "prompt": "Engineers must perform disruptive maintenance within an agreed Saturday interval. What is that approved interval called?",
        "options": [
          "Backout plan",
          "Impact analysis",
          "Maintenance window",
          "Testing"
        ],
        "correct": 2,
        "explanations": [
          "Backout plan: Defines how to restore the previous working state. The scenario instead calls for Maintenance window: An approved period for potentially disruptive work.",
          "Impact analysis: Evaluates a change's consequences. The scenario instead calls for Maintenance window: An approved period for potentially disruptive work.",
          "Maintenance window: An approved period for potentially disruptive work. This is the role or property required by the scenario.",
          "Testing: Checks behavior before broad implementation. The scenario instead calls for Maintenance window: An approved period for potentially disruptive work."
        ]
      },
      {
        "id": "PRE-1.3-5",
        "phase": "pre",
        "objective": "1.3",
        "concept": "Version control",
        "prompt": "A team must identify the exact configuration revision used by each deployment and compare its differences from the prior release. Which practice provides that history?",
        "options": [
          "Documentation update",
          "Standard operating procedure",
          "Maintenance window",
          "Version control"
        ],
        "correct": 3,
        "explanations": [
          "Documentation update: Aligns records with implemented changes. The scenario instead calls for Version control: Tracks revisions and supports recovery.",
          "Standard operating procedure: Provides repeatable instructions. The scenario instead calls for Version control: Tracks revisions and supports recovery.",
          "Maintenance window: An approved period for potentially disruptive work. The scenario instead calls for Version control: Tracks revisions and supports recovery.",
          "Version control: Tracks revisions and supports recovery. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-1.3-6",
        "phase": "pre",
        "objective": "1.3",
        "concept": "Standard operating procedure",
        "prompt": "New operators need a repeatable approved sequence for carrying out routine certificate renewal. Which resource should guide them?",
        "options": [
          "Maintenance window",
          "Version control",
          "Testing",
          "Standard operating procedure"
        ],
        "correct": 3,
        "explanations": [
          "Maintenance window: An approved period for potentially disruptive work. The scenario instead calls for Standard operating procedure: Provides repeatable instructions.",
          "Version control: Tracks revisions and supports recovery. The scenario instead calls for Standard operating procedure: Provides repeatable instructions.",
          "Testing: Checks behavior before broad implementation. The scenario instead calls for Standard operating procedure: Provides repeatable instructions.",
          "Standard operating procedure: Provides repeatable instructions. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-1.3-7",
        "phase": "pre",
        "objective": "1.3",
        "concept": "Dependency analysis",
        "prompt": "A storage platform will be replaced. Engineers first identify every workload that relies on its mounts and interfaces. Which activity is being performed?",
        "options": [
          "Dependency analysis",
          "Backout plan",
          "Change approval",
          "Maintenance window"
        ],
        "correct": 0,
        "explanations": [
          "Dependency analysis: Finds components that rely on each other. This is the role or property required by the scenario.",
          "Backout plan: Defines how to restore the previous working state. The scenario instead calls for Dependency analysis: Finds components that rely on each other.",
          "Change approval: The authorized body permits implementation. The scenario instead calls for Dependency analysis: Finds components that rely on each other.",
          "Maintenance window: An approved period for potentially disruptive work. The scenario instead calls for Dependency analysis: Finds components that rely on each other."
        ]
      },
      {
        "id": "PRE-1.3-8",
        "phase": "pre",
        "objective": "1.3",
        "concept": "Testing",
        "prompt": "A team rehearses a new access rule against representative permitted and prohibited transactions before deploying it. Which change activity is this?",
        "options": [
          "Testing",
          "Dependency analysis",
          "Impact analysis",
          "Documentation update"
        ],
        "correct": 0,
        "explanations": [
          "Testing: Checks behavior before broad implementation. This is the role or property required by the scenario.",
          "Dependency analysis: Finds components that rely on each other. The scenario instead calls for Testing: Checks behavior before broad implementation.",
          "Impact analysis: Evaluates a change's consequences. The scenario instead calls for Testing: Checks behavior before broad implementation.",
          "Documentation update: Aligns records with implemented changes. The scenario instead calls for Testing: Checks behavior before broad implementation."
        ]
      },
      {
        "id": "PRE-1.3-9",
        "phase": "pre",
        "objective": "1.3",
        "concept": "Stakeholder communication",
        "prompt": "A project lead informs affected departments about a cutover's schedule, symptoms, and support contacts. Which change activity is this?",
        "options": [
          "Dependency analysis",
          "Stakeholder communication",
          "Backout plan",
          "Standard operating procedure"
        ],
        "correct": 1,
        "explanations": [
          "Dependency analysis: Finds components that rely on each other. The scenario instead calls for Stakeholder communication: Informs affected parties.",
          "Stakeholder communication: Informs affected parties. This is the role or property required by the scenario.",
          "Backout plan: Defines how to restore the previous working state. The scenario instead calls for Stakeholder communication: Informs affected parties.",
          "Standard operating procedure: Provides repeatable instructions. The scenario instead calls for Stakeholder communication: Informs affected parties."
        ]
      },
      {
        "id": "PRE-1.3-10",
        "phase": "pre",
        "objective": "1.3",
        "concept": "Documentation update",
        "prompt": "After a migration is verified, the team aligns operating instructions and asset diagrams with the implemented design. Which activity completes that record alignment?",
        "options": [
          "Dependency analysis",
          "Version control",
          "Documentation update",
          "Standard operating procedure"
        ],
        "correct": 2,
        "explanations": [
          "Dependency analysis: Finds components that rely on each other. The scenario instead calls for Documentation update: Aligns records with implemented changes.",
          "Version control: Tracks revisions and supports recovery. The scenario instead calls for Documentation update: Aligns records with implemented changes.",
          "Documentation update: Aligns records with implemented changes. This is the role or property required by the scenario.",
          "Standard operating procedure: Provides repeatable instructions. The scenario instead calls for Documentation update: Aligns records with implemented changes."
        ]
      }
    ]
  },
  "1.4": {
    "bridge": "Start with the security goal, not the name of an algorithm. Secrecy, tamper detection, signer evidence, and protected key storage are different needs.",
    "teach": "Symmetric encryption uses a shared secret for efficient bulk protection. Asymmetric cryptography uses related public/private keys. Hashing produces a digest; a signature combines cryptographic operations with a private signing key to support integrity and origin. Password salts prevent identical-password hash matching; stretching increases the cost per guess. Certificates bind identities to public keys under a trust model.",
    "example": "To request a server certificate, generate and protect the private key locally, then send a CSR (Certificate Signing Request) containing the public key. Validate names, trust, validity, and revocation when using a certificate. A TPM (Trusted Platform Module) anchors device trust; an HSM (Hardware Security Module) provides protected key operations.",
    "watch": [
      "What property is required?",
      "Which key is public and which must stay secret?",
      "Is the password defense uniqueness or computational cost?"
    ],
    "questions": [
      {
        "id": "PRE-1.4-1",
        "phase": "pre",
        "objective": "1.4",
        "concept": "Symmetric encryption",
        "prompt": "Two authorized services already share a protected secret and need efficient encryption of a very large data stream. Which cryptographic approach fits?",
        "options": [
          "Certificate signing request (CSR)",
          "Hashing",
          "Hardware security module (HSM)",
          "Symmetric encryption"
        ],
        "correct": 3,
        "explanations": [
          "Certificate signing request (CSR): Carries a public key and identity information for an issuer. The scenario instead calls for Symmetric encryption: Uses a shared secret efficiently for bulk protection.",
          "Hashing: Produces a one-way digest for integrity comparison. The scenario instead calls for Symmetric encryption: Uses a shared secret efficiently for bulk protection.",
          "Hardware security module (HSM): Dedicated hardware protects keys and cryptographic operations. The scenario instead calls for Symmetric encryption: Uses a shared secret efficiently for bulk protection.",
          "Symmetric encryption: Uses a shared secret efficiently for bulk protection. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-1.4-2",
        "phase": "pre",
        "objective": "1.4",
        "concept": "Asymmetric encryption",
        "prompt": "A cryptographic design uses a related public key and private key rather than one shared secret. Which approach is being described?",
        "options": [
          "Asymmetric encryption",
          "Certificate signing request (CSR)",
          "Digital signature",
          "Symmetric encryption"
        ],
        "correct": 0,
        "explanations": [
          "Asymmetric encryption: Uses a public and private key pair. This is the role or property required by the scenario.",
          "Certificate signing request (CSR): Carries a public key and identity information for an issuer. The scenario instead calls for Asymmetric encryption: Uses a public and private key pair.",
          "Digital signature: Supports integrity and origin using private signing and public verification keys. The scenario instead calls for Asymmetric encryption: Uses a public and private key pair.",
          "Symmetric encryption: Uses a shared secret efficiently for bulk protection. The scenario instead calls for Asymmetric encryption: Uses a public and private key pair."
        ]
      },
      {
        "id": "PRE-1.4-3",
        "phase": "pre",
        "objective": "1.4",
        "concept": "Hashing",
        "prompt": "A repository needs a fixed-length digest for comparing file contents, without a requirement to recover the contents from that digest. Which operation fits?",
        "options": [
          "Symmetric encryption",
          "Hashing",
          "Salting",
          "Certificate signing request (CSR)"
        ],
        "correct": 1,
        "explanations": [
          "Symmetric encryption: Uses a shared secret efficiently for bulk protection. The scenario instead calls for Hashing: Produces a one-way digest for integrity comparison.",
          "Hashing: Produces a one-way digest for integrity comparison. This is the role or property required by the scenario.",
          "Salting: Adds unique random input before password hashing. The scenario instead calls for Hashing: Produces a one-way digest for integrity comparison.",
          "Certificate signing request (CSR): Carries a public key and identity information for an issuer. The scenario instead calls for Hashing: Produces a one-way digest for integrity comparison."
        ]
      },
      {
        "id": "PRE-1.4-4",
        "phase": "pre",
        "objective": "1.4",
        "concept": "Digital signature",
        "prompt": "A release publisher needs verifiable origin evidence and detection of changes to a software package. Which mechanism combines those requirements?",
        "options": [
          "Symmetric encryption",
          "Asymmetric encryption",
          "Certificate revocation",
          "Digital signature"
        ],
        "correct": 3,
        "explanations": [
          "Symmetric encryption: Uses a shared secret efficiently for bulk protection. The scenario instead calls for Digital signature: Supports integrity and origin using private signing and public verification keys.",
          "Asymmetric encryption: Uses a public and private key pair. The scenario instead calls for Digital signature: Supports integrity and origin using private signing and public verification keys.",
          "Certificate revocation: Invalidates a certificate before expiration. The scenario instead calls for Digital signature: Supports integrity and origin using private signing and public verification keys.",
          "Digital signature: Supports integrity and origin using private signing and public verification keys. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-1.4-5",
        "phase": "pre",
        "objective": "1.4",
        "concept": "Salting",
        "prompt": "A password database should avoid producing matching stored results merely because two users chose the same password. Which per-password addition addresses this?",
        "options": [
          "Hardware security module (HSM)",
          "Hashing",
          "Trusted platform module (TPM)",
          "Salting"
        ],
        "correct": 3,
        "explanations": [
          "Hardware security module (HSM): Dedicated hardware protects keys and cryptographic operations. The scenario instead calls for Salting: Adds unique random input before password hashing.",
          "Hashing: Produces a one-way digest for integrity comparison. The scenario instead calls for Salting: Adds unique random input before password hashing.",
          "Trusted platform module (TPM): Device-bound hardware root of trust and key protection. The scenario instead calls for Salting: Adds unique random input before password hashing.",
          "Salting: Adds unique random input before password hashing. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-1.4-6",
        "phase": "pre",
        "objective": "1.4",
        "concept": "Key stretching",
        "prompt": "A password-verification design deliberately increases the computational work required for each password guess. Which technique is this?",
        "options": [
          "Key stretching",
          "Symmetric encryption",
          "Salting",
          "Hashing"
        ],
        "correct": 0,
        "explanations": [
          "Key stretching: Makes password derivation deliberately expensive. This is the role or property required by the scenario.",
          "Symmetric encryption: Uses a shared secret efficiently for bulk protection. The scenario instead calls for Key stretching: Makes password derivation deliberately expensive.",
          "Salting: Adds unique random input before password hashing. The scenario instead calls for Key stretching: Makes password derivation deliberately expensive.",
          "Hashing: Produces a one-way digest for integrity comparison. The scenario instead calls for Key stretching: Makes password derivation deliberately expensive."
        ]
      },
      {
        "id": "PRE-1.4-7",
        "phase": "pre",
        "objective": "1.4",
        "concept": "Certificate signing request (CSR)",
        "prompt": "A server has generated a protected key pair and needs to send its public key and identifying details for certificate issuance. What should it submit?",
        "options": [
          "Certificate revocation",
          "Trusted platform module (TPM)",
          "Salting",
          "Certificate signing request (CSR)"
        ],
        "correct": 3,
        "explanations": [
          "Certificate revocation: Invalidates a certificate before expiration. The scenario instead calls for Certificate signing request (CSR): Carries a public key and identity information for an issuer.",
          "Trusted platform module (TPM): Device-bound hardware root of trust and key protection. The scenario instead calls for Certificate signing request (CSR): Carries a public key and identity information for an issuer.",
          "Salting: Adds unique random input before password hashing. The scenario instead calls for Certificate signing request (CSR): Carries a public key and identity information for an issuer.",
          "Certificate signing request (CSR): Carries a public key and identity information for an issuer. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-1.4-8",
        "phase": "pre",
        "objective": "1.4",
        "concept": "Certificate revocation",
        "prompt": "A certificate's private key is exposed before its expiration date. Which certificate lifecycle action tells relying parties it should no longer be trusted?",
        "options": [
          "Symmetric encryption",
          "Digital signature",
          "Certificate signing request (CSR)",
          "Certificate revocation"
        ],
        "correct": 3,
        "explanations": [
          "Symmetric encryption: Uses a shared secret efficiently for bulk protection. The scenario instead calls for Certificate revocation: Invalidates a certificate before expiration.",
          "Digital signature: Supports integrity and origin using private signing and public verification keys. The scenario instead calls for Certificate revocation: Invalidates a certificate before expiration.",
          "Certificate signing request (CSR): Carries a public key and identity information for an issuer. The scenario instead calls for Certificate revocation: Invalidates a certificate before expiration.",
          "Certificate revocation: Invalidates a certificate before expiration. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-1.4-9",
        "phase": "pre",
        "objective": "1.4",
        "concept": "Hardware security module (HSM)",
        "prompt": "A central signing service needs dedicated hardware that protects signing keys and performs cryptographic operations. Which device is the best fit?",
        "options": [
          "Key stretching",
          "Symmetric encryption",
          "Hardware security module (HSM)",
          "Hashing"
        ],
        "correct": 2,
        "explanations": [
          "Key stretching: Makes password derivation deliberately expensive. The scenario instead calls for Hardware security module (HSM): Dedicated hardware protects keys and cryptographic operations.",
          "Symmetric encryption: Uses a shared secret efficiently for bulk protection. The scenario instead calls for Hardware security module (HSM): Dedicated hardware protects keys and cryptographic operations.",
          "Hardware security module (HSM): Dedicated hardware protects keys and cryptographic operations. This is the role or property required by the scenario.",
          "Hashing: Produces a one-way digest for integrity comparison. The scenario instead calls for Hardware security module (HSM): Dedicated hardware protects keys and cryptographic operations."
        ]
      },
      {
        "id": "PRE-1.4-10",
        "phase": "pre",
        "objective": "1.4",
        "concept": "Trusted platform module (TPM)",
        "prompt": "A computer needs a device-bound hardware root of trust for boot measurements and protected secrets. Which component is the best fit?",
        "options": [
          "Certificate revocation",
          "Key stretching",
          "Trusted platform module (TPM)",
          "Certificate signing request (CSR)"
        ],
        "correct": 2,
        "explanations": [
          "Certificate revocation: Invalidates a certificate before expiration. The scenario instead calls for Trusted platform module (TPM): Device-bound hardware root of trust and key protection.",
          "Key stretching: Makes password derivation deliberately expensive. The scenario instead calls for Trusted platform module (TPM): Device-bound hardware root of trust and key protection.",
          "Trusted platform module (TPM): Device-bound hardware root of trust and key protection. This is the role or property required by the scenario.",
          "Certificate signing request (CSR): Carries a public key and identity information for an issuer. The scenario instead calls for Trusted platform module (TPM): Device-bound hardware root of trust and key protection."
        ]
      }
    ]
  },
  "2.1": {
    "bridge": "An attack is an action; an actor is the party behind it. Do not infer an actor from a single tool.",
    "teach": "Build a profile using access, capability, resources, and motivation. A trusted employee can become an insider threat; a nation-state may pursue strategic intelligence; criminals often pursue profit; hacktivists may seek ideological impact. These are patterns, not guarantees. Shadow IT means technology adopted outside authorized oversight, not automatically malicious activity.",
    "example": "Two attackers can use the same malware for different reasons: one steals research, another extorts payment. The tool alone does not settle whether the motivation is espionage or profit. An employee with valid access can still misuse that access.",
    "watch": [
      "What evidence supports attribution?",
      "Are you being asked about actor or motivation?",
      "Is the access trusted, external, or outside oversight?"
    ],
    "questions": [
      {
        "id": "PRE-2.1-1",
        "phase": "pre",
        "objective": "2.1",
        "concept": "Nation-state actor",
        "prompt": "An investigation finds a well-funded campaign directed by a foreign government toward long-term strategic access. Which actor category is supported by this evidence?",
        "options": [
          "Nation-state actor",
          "Espionage motivation",
          "Insider threat",
          "Hacktivist"
        ],
        "correct": 0,
        "explanations": [
          "Nation-state actor: Pursues strategic goals with substantial resources. This is the role or property required by the scenario.",
          "Espionage motivation: Seeks confidential information for strategic advantage. The scenario instead calls for Nation-state actor: Pursues strategic goals with substantial resources.",
          "Insider threat: Someone with authorized access or knowledge causes harm. The scenario instead calls for Nation-state actor: Pursues strategic goals with substantial resources.",
          "Hacktivist: Attacks promote ideological or political causes. The scenario instead calls for Nation-state actor: Pursues strategic goals with substantial resources."
        ]
      },
      {
        "id": "PRE-2.1-2",
        "phase": "pre",
        "objective": "2.1",
        "concept": "Organized crime",
        "prompt": "A coordinated criminal enterprise operates extortion infrastructure and processes ransom payments as a business. Which actor category best fits?",
        "options": [
          "Hacktivist",
          "Organized crime",
          "Nation-state actor",
          "Financial motivation"
        ],
        "correct": 1,
        "explanations": [
          "Hacktivist: Attacks promote ideological or political causes. The scenario instead calls for Organized crime: Coordinated criminal operations seek profit.",
          "Organized crime: Coordinated criminal operations seek profit. This is the role or property required by the scenario.",
          "Nation-state actor: Pursues strategic goals with substantial resources. The scenario instead calls for Organized crime: Coordinated criminal operations seek profit.",
          "Financial motivation: Seeks money or saleable assets. The scenario instead calls for Organized crime: Coordinated criminal operations seek profit."
        ]
      },
      {
        "id": "PRE-2.1-3",
        "phase": "pre",
        "objective": "2.1",
        "concept": "Hacktivist",
        "prompt": "An intrusion campaign publicly claims an ideological cause and uses disruption to draw attention to that cause. Which actor category best fits?",
        "options": [
          "Organized crime",
          "Shadow IT",
          "Unskilled attacker",
          "Hacktivist"
        ],
        "correct": 3,
        "explanations": [
          "Organized crime: Coordinated criminal operations seek profit. The scenario instead calls for Hacktivist: Attacks promote ideological or political causes.",
          "Shadow IT: Unapproved technology operates outside normal oversight. The scenario instead calls for Hacktivist: Attacks promote ideological or political causes.",
          "Unskilled attacker: Relies on existing tools with limited understanding. The scenario instead calls for Hacktivist: Attacks promote ideological or political causes.",
          "Hacktivist: Attacks promote ideological or political causes. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-2.1-4",
        "phase": "pre",
        "objective": "2.1",
        "concept": "Insider threat",
        "prompt": "A trusted staff member deliberately uses existing authorized access to take data for an unauthorized purpose. Which threat category describes this relationship?",
        "options": [
          "Nation-state actor",
          "Shadow IT",
          "Insider threat",
          "Disruption motivation"
        ],
        "correct": 2,
        "explanations": [
          "Nation-state actor: Pursues strategic goals with substantial resources. The scenario instead calls for Insider threat: Someone with authorized access or knowledge causes harm.",
          "Shadow IT: Unapproved technology operates outside normal oversight. The scenario instead calls for Insider threat: Someone with authorized access or knowledge causes harm.",
          "Insider threat: Someone with authorized access or knowledge causes harm. This is the role or property required by the scenario.",
          "Disruption motivation: Seeks interruption or destruction. The scenario instead calls for Insider threat: Someone with authorized access or knowledge causes harm."
        ]
      },
      {
        "id": "PRE-2.1-5",
        "phase": "pre",
        "objective": "2.1",
        "concept": "Unskilled attacker",
        "prompt": "An attacker has little technical expertise and relies on a downloaded attack kit without understanding its operation. Which actor category best fits?",
        "options": [
          "Disruption motivation",
          "Unskilled attacker",
          "Insider threat",
          "Financial motivation"
        ],
        "correct": 1,
        "explanations": [
          "Disruption motivation: Seeks interruption or destruction. The scenario instead calls for Unskilled attacker: Relies on existing tools with limited understanding.",
          "Unskilled attacker: Relies on existing tools with limited understanding. This is the role or property required by the scenario.",
          "Insider threat: Someone with authorized access or knowledge causes harm. The scenario instead calls for Unskilled attacker: Relies on existing tools with limited understanding.",
          "Financial motivation: Seeks money or saleable assets. The scenario instead calls for Unskilled attacker: Relies on existing tools with limited understanding."
        ]
      },
      {
        "id": "PRE-2.1-6",
        "phase": "pre",
        "objective": "2.1",
        "concept": "Shadow IT",
        "prompt": "A department starts using an unapproved file-sharing platform without IT oversight. No malicious intent has been established. Which organizational issue is this?",
        "options": [
          "External actor",
          "Espionage motivation",
          "Shadow IT",
          "Disruption motivation"
        ],
        "correct": 2,
        "explanations": [
          "External actor: Acts from outside the authorized workforce or trust boundary. The scenario instead calls for Shadow IT: Unapproved technology operates outside normal oversight.",
          "Espionage motivation: Seeks confidential information for strategic advantage. The scenario instead calls for Shadow IT: Unapproved technology operates outside normal oversight.",
          "Shadow IT: Unapproved technology operates outside normal oversight. This is the role or property required by the scenario.",
          "Disruption motivation: Seeks interruption or destruction. The scenario instead calls for Shadow IT: Unapproved technology operates outside normal oversight."
        ]
      },
      {
        "id": "PRE-2.1-7",
        "phase": "pre",
        "objective": "2.1",
        "concept": "Financial motivation",
        "prompt": "An attacker offers to stop an ongoing attack only after receiving payment. Which motivation is most directly evidenced?",
        "options": [
          "Hacktivist",
          "Nation-state actor",
          "Financial motivation",
          "Unskilled attacker"
        ],
        "correct": 2,
        "explanations": [
          "Hacktivist: Attacks promote ideological or political causes. The scenario instead calls for Financial motivation: Seeks money or saleable assets.",
          "Nation-state actor: Pursues strategic goals with substantial resources. The scenario instead calls for Financial motivation: Seeks money or saleable assets.",
          "Financial motivation: Seeks money or saleable assets. This is the role or property required by the scenario.",
          "Unskilled attacker: Relies on existing tools with limited understanding. The scenario instead calls for Financial motivation: Seeks money or saleable assets."
        ]
      },
      {
        "id": "PRE-2.1-8",
        "phase": "pre",
        "objective": "2.1",
        "concept": "Espionage motivation",
        "prompt": "An intruder quietly gathers confidential negotiating plans over several months instead of demanding money. Which motivation is most directly evidenced?",
        "options": [
          "Nation-state actor",
          "Unskilled attacker",
          "External actor",
          "Espionage motivation"
        ],
        "correct": 3,
        "explanations": [
          "Nation-state actor: Pursues strategic goals with substantial resources. The scenario instead calls for Espionage motivation: Seeks confidential information for strategic advantage.",
          "Unskilled attacker: Relies on existing tools with limited understanding. The scenario instead calls for Espionage motivation: Seeks confidential information for strategic advantage.",
          "External actor: Acts from outside the authorized workforce or trust boundary. The scenario instead calls for Espionage motivation: Seeks confidential information for strategic advantage.",
          "Espionage motivation: Seeks confidential information for strategic advantage. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-2.1-9",
        "phase": "pre",
        "objective": "2.1",
        "concept": "Disruption motivation",
        "prompt": "An attacker states that the objective is to make a public service unusable, without seeking data or payment. Which motivation is most directly evidenced?",
        "options": [
          "Insider threat",
          "Organized crime",
          "Hacktivist",
          "Disruption motivation"
        ],
        "correct": 3,
        "explanations": [
          "Insider threat: Someone with authorized access or knowledge causes harm. The scenario instead calls for Disruption motivation: Seeks interruption or destruction.",
          "Organized crime: Coordinated criminal operations seek profit. The scenario instead calls for Disruption motivation: Seeks interruption or destruction.",
          "Hacktivist: Attacks promote ideological or political causes. The scenario instead calls for Disruption motivation: Seeks interruption or destruction.",
          "Disruption motivation: Seeks interruption or destruction. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-2.1-10",
        "phase": "pre",
        "objective": "2.1",
        "concept": "External actor",
        "prompt": "An investigator can establish only that the attacker has no trusted affiliation or authorized organizational access. Which broad actor classification is supported?",
        "options": [
          "External actor",
          "Unskilled attacker",
          "Financial motivation",
          "Espionage motivation"
        ],
        "correct": 0,
        "explanations": [
          "External actor: Acts from outside the authorized workforce or trust boundary. This is the role or property required by the scenario.",
          "Unskilled attacker: Relies on existing tools with limited understanding. The scenario instead calls for External actor: Acts from outside the authorized workforce or trust boundary.",
          "Financial motivation: Seeks money or saleable assets. The scenario instead calls for External actor: Acts from outside the authorized workforce or trust boundary.",
          "Espionage motivation: Seeks confidential information for strategic advantage. The scenario instead calls for External actor: Acts from outside the authorized workforce or trust boundary."
        ]
      }
    ]
  },
  "2.2": {
    "bridge": "The attack surface is what can be reached or exploited. A vector is the path used to attempt entry.",
    "teach": "Follow an attacker’s route: message, voice call, website, removable device, vulnerable service, or supplier. Social engineering manipulates trust, urgency, or authority. Targeting a known individual is different from sending generic bait. A believable story is a pretext; it may be delivered through several communication channels.",
    "example": "A caller pretending to be a service technician uses a pretext over a voice channel. A compromised supplier update uses a supply-chain route. Verify sensitive requests through a known independent channel instead of using the contact information supplied by the requester.",
    "watch": [
      "What is the delivery channel?",
      "Is the lure broadly distributed or carefully targeted?",
      "Which trusted relationship is being abused?"
    ],
    "questions": [
      {
        "id": "PRE-2.2-1",
        "phase": "pre",
        "objective": "2.2",
        "concept": "Phishing",
        "prompt": "A large untargeted email campaign imitates a parcel service and asks recipients to enter account credentials. Which delivery-based social engineering technique fits?",
        "options": [
          "Typosquatting",
          "Business email compromise",
          "Phishing",
          "Spear phishing"
        ],
        "correct": 2,
        "explanations": [
          "Typosquatting: Uses mistyped or lookalike domains. The scenario instead calls for Phishing: Deceptive messages induce harmful actions.",
          "Business email compromise: Abuses trusted business email or workflows. The scenario instead calls for Phishing: Deceptive messages induce harmful actions.",
          "Phishing: Deceptive messages induce harmful actions. This is the role or property required by the scenario.",
          "Spear phishing: Targets a specific individual or group with tailored content. The scenario instead calls for Phishing: Deceptive messages induce harmful actions."
        ]
      },
      {
        "id": "PRE-2.2-2",
        "phase": "pre",
        "objective": "2.2",
        "concept": "Smishing",
        "prompt": "A fraudulent account warning arrives by text message on a mobile phone and directs the recipient to a credential form. Which technique fits the channel?",
        "options": [
          "Smishing",
          "Supply chain vector",
          "Removable media vector",
          "Business email compromise"
        ],
        "correct": 0,
        "explanations": [
          "Smishing: Phishing via text messages. This is the role or property required by the scenario.",
          "Supply chain vector: Trusted suppliers or dependencies carry the attack. The scenario instead calls for Smishing: Phishing via text messages.",
          "Removable media vector: Portable storage introduces an attack. The scenario instead calls for Smishing: Phishing via text messages.",
          "Business email compromise: Abuses trusted business email or workflows. The scenario instead calls for Smishing: Phishing via text messages."
        ]
      },
      {
        "id": "PRE-2.2-3",
        "phase": "pre",
        "objective": "2.2",
        "concept": "Vishing",
        "prompt": "A caller impersonates a support agent and verbally asks a user to disclose a one-time login code. Which technique fits the channel?",
        "options": [
          "Pretexting",
          "Typosquatting",
          "Spear phishing",
          "Vishing"
        ],
        "correct": 3,
        "explanations": [
          "Pretexting: A fabricated role or story persuades the target. The scenario instead calls for Vishing: Social engineering via voice.",
          "Typosquatting: Uses mistyped or lookalike domains. The scenario instead calls for Vishing: Social engineering via voice.",
          "Spear phishing: Targets a specific individual or group with tailored content. The scenario instead calls for Vishing: Social engineering via voice.",
          "Vishing: Social engineering via voice. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-2.2-4",
        "phase": "pre",
        "objective": "2.2",
        "concept": "Spear phishing",
        "prompt": "A forged message uses one employee's current project, manager, and responsibilities to make a credential request convincing. Which targeted technique fits?",
        "options": [
          "Typosquatting",
          "Business email compromise",
          "Pretexting",
          "Spear phishing"
        ],
        "correct": 3,
        "explanations": [
          "Typosquatting: Uses mistyped or lookalike domains. The scenario instead calls for Spear phishing: Targets a specific individual or group with tailored content.",
          "Business email compromise: Abuses trusted business email or workflows. The scenario instead calls for Spear phishing: Targets a specific individual or group with tailored content.",
          "Pretexting: A fabricated role or story persuades the target. The scenario instead calls for Spear phishing: Targets a specific individual or group with tailored content.",
          "Spear phishing: Targets a specific individual or group with tailored content. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-2.2-5",
        "phase": "pre",
        "objective": "2.2",
        "concept": "Business email compromise",
        "prompt": "An attacker controls an executive's actual email account and uses it to instruct finance staff to redirect a payment. Which attack category best describes the business process abuse?",
        "options": [
          "Pretexting",
          "Business email compromise",
          "Spear phishing",
          "Watering hole"
        ],
        "correct": 1,
        "explanations": [
          "Pretexting: A fabricated role or story persuades the target. The scenario instead calls for Business email compromise: Abuses trusted business email or workflows.",
          "Business email compromise: Abuses trusted business email or workflows. This is the role or property required by the scenario.",
          "Spear phishing: Targets a specific individual or group with tailored content. The scenario instead calls for Business email compromise: Abuses trusted business email or workflows.",
          "Watering hole: Compromises a site intended victims regularly visit. The scenario instead calls for Business email compromise: Abuses trusted business email or workflows."
        ]
      },
      {
        "id": "PRE-2.2-6",
        "phase": "pre",
        "objective": "2.2",
        "concept": "Watering hole",
        "prompt": "Attackers compromise a specialist news site frequently visited by their intended victim organization. Which attack approach uses that shared destination?",
        "options": [
          "Watering hole",
          "Removable media vector",
          "Business email compromise",
          "Phishing"
        ],
        "correct": 0,
        "explanations": [
          "Watering hole: Compromises a site intended victims regularly visit. This is the role or property required by the scenario.",
          "Removable media vector: Portable storage introduces an attack. The scenario instead calls for Watering hole: Compromises a site intended victims regularly visit.",
          "Business email compromise: Abuses trusted business email or workflows. The scenario instead calls for Watering hole: Compromises a site intended victims regularly visit.",
          "Phishing: Deceptive messages induce harmful actions. The scenario instead calls for Watering hole: Compromises a site intended victims regularly visit."
        ]
      },
      {
        "id": "PRE-2.2-7",
        "phase": "pre",
        "objective": "2.2",
        "concept": "Typosquatting",
        "prompt": "A fraudulent site uses a domain differing by one commonly mistyped character from a legitimate service. Which technique is this?",
        "options": [
          "Phishing",
          "Typosquatting",
          "Vishing",
          "Smishing"
        ],
        "correct": 1,
        "explanations": [
          "Phishing: Deceptive messages induce harmful actions. The scenario instead calls for Typosquatting: Uses mistyped or lookalike domains.",
          "Typosquatting: Uses mistyped or lookalike domains. This is the role or property required by the scenario.",
          "Vishing: Social engineering via voice. The scenario instead calls for Typosquatting: Uses mistyped or lookalike domains.",
          "Smishing: Phishing via text messages. The scenario instead calls for Typosquatting: Uses mistyped or lookalike domains."
        ]
      },
      {
        "id": "PRE-2.2-8",
        "phase": "pre",
        "objective": "2.2",
        "concept": "Removable media vector",
        "prompt": "An intruder leaves a malicious USB storage device where staff are likely to connect it to a work computer. Which entry vector is being used?",
        "options": [
          "Smishing",
          "Business email compromise",
          "Removable media vector",
          "Spear phishing"
        ],
        "correct": 2,
        "explanations": [
          "Smishing: Phishing via text messages. The scenario instead calls for Removable media vector: Portable storage introduces an attack.",
          "Business email compromise: Abuses trusted business email or workflows. The scenario instead calls for Removable media vector: Portable storage introduces an attack.",
          "Removable media vector: Portable storage introduces an attack. This is the role or property required by the scenario.",
          "Spear phishing: Targets a specific individual or group with tailored content. The scenario instead calls for Removable media vector: Portable storage introduces an attack."
        ]
      },
      {
        "id": "PRE-2.2-9",
        "phase": "pre",
        "objective": "2.2",
        "concept": "Supply chain vector",
        "prompt": "A trusted software supplier's distribution process is altered so customers receive a malicious update. Which entry vector is being used?",
        "options": [
          "Vishing",
          "Watering hole",
          "Supply chain vector",
          "Smishing"
        ],
        "correct": 2,
        "explanations": [
          "Vishing: Social engineering via voice. The scenario instead calls for Supply chain vector: Trusted suppliers or dependencies carry the attack.",
          "Watering hole: Compromises a site intended victims regularly visit. The scenario instead calls for Supply chain vector: Trusted suppliers or dependencies carry the attack.",
          "Supply chain vector: Trusted suppliers or dependencies carry the attack. This is the role or property required by the scenario.",
          "Smishing: Phishing via text messages. The scenario instead calls for Supply chain vector: Trusted suppliers or dependencies carry the attack."
        ]
      },
      {
        "id": "PRE-2.2-10",
        "phase": "pre",
        "objective": "2.2",
        "concept": "Pretexting",
        "prompt": "A person invents a detailed story about an urgent audit to persuade an employee to disclose information. Which social engineering element is the fabricated story?",
        "options": [
          "Pretexting",
          "Removable media vector",
          "Business email compromise",
          "Typosquatting"
        ],
        "correct": 0,
        "explanations": [
          "Pretexting: A fabricated role or story persuades the target. This is the role or property required by the scenario.",
          "Removable media vector: Portable storage introduces an attack. The scenario instead calls for Pretexting: A fabricated role or story persuades the target.",
          "Business email compromise: Abuses trusted business email or workflows. The scenario instead calls for Pretexting: A fabricated role or story persuades the target.",
          "Typosquatting: Uses mistyped or lookalike domains. The scenario instead calls for Pretexting: A fabricated role or story persuades the target."
        ]
      }
    ]
  },
  "2.3": {
    "bridge": "A vulnerability is a weakness; an exploit is a way of taking advantage of it. Exposure and configuration determine whether a weakness is reachable.",
    "teach": "Group weaknesses by their cause: unsafe memory handling, timing, untrusted input, missing fixes, unsupported components, weak defaults, or broken isolation. Injection changes how input is interpreted. A zero-day lacks the usual advance opportunity to patch; it is not simply any old unpatched flaw.",
    "example": "An input should be treated as data. If it becomes executable database syntax, the trust boundary failed. In virtualization, a guest reaching its host breaks a different boundary. Match the mechanism rather than choosing whichever attack name sounds most severe.",
    "watch": [
      "Where is the boundary?",
      "Does input become code, exceed memory, or race a state change?",
      "Is a fix missing, unavailable, or no longer supported?"
    ],
    "questions": [
      {
        "id": "PRE-2.3-1",
        "phase": "pre",
        "objective": "2.3",
        "concept": "Buffer overflow",
        "prompt": "A program copies more user-supplied bytes into a memory area than the area can hold. Which vulnerability mechanism fits?",
        "options": [
          "Buffer overflow",
          "Cloud misconfiguration",
          "End-of-life system",
          "Cross-site scripting (XSS)"
        ],
        "correct": 0,
        "explanations": [
          "Buffer overflow: Excess input overwrites adjacent memory. This is the role or property required by the scenario.",
          "Cloud misconfiguration: Insecure cloud settings expose resources. The scenario instead calls for Buffer overflow: Excess input overwrites adjacent memory.",
          "End-of-life system: Normal vendor security support has ended. The scenario instead calls for Buffer overflow: Excess input overwrites adjacent memory.",
          "Cross-site scripting (XSS): Injected script runs in a victim's browser. The scenario instead calls for Buffer overflow: Excess input overwrites adjacent memory."
        ]
      },
      {
        "id": "PRE-2.3-2",
        "phase": "pre",
        "objective": "2.3",
        "concept": "Race condition",
        "prompt": "A program checks that an object is safe, but an attacker changes its state before the program uses it. Which vulnerability mechanism fits?",
        "options": [
          "VM escape",
          "Race condition",
          "Cloud misconfiguration",
          "Buffer overflow"
        ],
        "correct": 1,
        "explanations": [
          "VM escape: A guest breaks isolation into its host. The scenario instead calls for Race condition: Timing between concurrent operations changes the outcome.",
          "Race condition: Timing between concurrent operations changes the outcome. This is the role or property required by the scenario.",
          "Cloud misconfiguration: Insecure cloud settings expose resources. The scenario instead calls for Race condition: Timing between concurrent operations changes the outcome.",
          "Buffer overflow: Excess input overwrites adjacent memory. The scenario instead calls for Race condition: Timing between concurrent operations changes the outcome."
        ]
      },
      {
        "id": "PRE-2.3-3",
        "phase": "pre",
        "objective": "2.3",
        "concept": "SQL injection",
        "prompt": "An application concatenates untrusted input into a database statement, allowing the input to change query behavior. Which vulnerability mechanism fits?",
        "options": [
          "Race condition",
          "SQL injection",
          "Cross-site scripting (XSS)",
          "Zero-day vulnerability"
        ],
        "correct": 1,
        "explanations": [
          "Race condition: Timing between concurrent operations changes the outcome. The scenario instead calls for SQL injection: Input changes database query logic.",
          "SQL injection: Input changes database query logic. This is the role or property required by the scenario.",
          "Cross-site scripting (XSS): Injected script runs in a victim's browser. The scenario instead calls for SQL injection: Input changes database query logic.",
          "Zero-day vulnerability: An exploited weakness lacks an available effective vendor fix. The scenario instead calls for SQL injection: Input changes database query logic."
        ]
      },
      {
        "id": "PRE-2.3-4",
        "phase": "pre",
        "objective": "2.3",
        "concept": "Cross-site scripting (XSS)",
        "prompt": "A web application allows attacker-supplied script to execute in another user's browser. Which vulnerability mechanism fits?",
        "options": [
          "Default credentials",
          "Cross-site scripting (XSS)",
          "End-of-life system",
          "VM escape"
        ],
        "correct": 1,
        "explanations": [
          "Default credentials: Factory credentials remain active. The scenario instead calls for Cross-site scripting (XSS): Injected script runs in a victim's browser.",
          "Cross-site scripting (XSS): Injected script runs in a victim's browser. This is the role or property required by the scenario.",
          "End-of-life system: Normal vendor security support has ended. The scenario instead calls for Cross-site scripting (XSS): Injected script runs in a victim's browser.",
          "VM escape: A guest breaks isolation into its host. The scenario instead calls for Cross-site scripting (XSS): Injected script runs in a victim's browser."
        ]
      },
      {
        "id": "PRE-2.3-5",
        "phase": "pre",
        "objective": "2.3",
        "concept": "Unpatched software",
        "prompt": "A vendor has already released a fix for a known flaw, but the affected installed version has not received it. Which condition is present?",
        "options": [
          "SQL injection",
          "End-of-life system",
          "Unpatched software",
          "Cross-site scripting (XSS)"
        ],
        "correct": 2,
        "explanations": [
          "SQL injection: Input changes database query logic. The scenario instead calls for Unpatched software: Available security fixes are missing.",
          "End-of-life system: Normal vendor security support has ended. The scenario instead calls for Unpatched software: Available security fixes are missing.",
          "Unpatched software: Available security fixes are missing. This is the role or property required by the scenario.",
          "Cross-site scripting (XSS): Injected script runs in a victim's browser. The scenario instead calls for Unpatched software: Available security fixes are missing."
        ]
      },
      {
        "id": "PRE-2.3-6",
        "phase": "pre",
        "objective": "2.3",
        "concept": "End-of-life system",
        "prompt": "A manufacturer no longer provides security fixes for a device that remains in production. Which lifecycle condition increases its risk?",
        "options": [
          "Default credentials",
          "Buffer overflow",
          "Race condition",
          "End-of-life system"
        ],
        "correct": 3,
        "explanations": [
          "Default credentials: Factory credentials remain active. The scenario instead calls for End-of-life system: Normal vendor security support has ended.",
          "Buffer overflow: Excess input overwrites adjacent memory. The scenario instead calls for End-of-life system: Normal vendor security support has ended.",
          "Race condition: Timing between concurrent operations changes the outcome. The scenario instead calls for End-of-life system: Normal vendor security support has ended.",
          "End-of-life system: Normal vendor security support has ended. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-2.3-7",
        "phase": "pre",
        "objective": "2.3",
        "concept": "Default credentials",
        "prompt": "An internet-reachable appliance still accepts the manufacturer's original administrator username and password. Which weakness is present?",
        "options": [
          "Default credentials",
          "Buffer overflow",
          "Zero-day vulnerability",
          "Cross-site scripting (XSS)"
        ],
        "correct": 0,
        "explanations": [
          "Default credentials: Factory credentials remain active. This is the role or property required by the scenario.",
          "Buffer overflow: Excess input overwrites adjacent memory. The scenario instead calls for Default credentials: Factory credentials remain active.",
          "Zero-day vulnerability: An exploited weakness lacks an available effective vendor fix. The scenario instead calls for Default credentials: Factory credentials remain active.",
          "Cross-site scripting (XSS): Injected script runs in a victim's browser. The scenario instead calls for Default credentials: Factory credentials remain active."
        ]
      },
      {
        "id": "PRE-2.3-8",
        "phase": "pre",
        "objective": "2.3",
        "concept": "Cloud misconfiguration",
        "prompt": "A storage service unintentionally allows public access because its permissions were set incorrectly. Which weakness is present?",
        "options": [
          "Cloud misconfiguration",
          "Race condition",
          "Buffer overflow",
          "Unpatched software"
        ],
        "correct": 0,
        "explanations": [
          "Cloud misconfiguration: Insecure cloud settings expose resources. This is the role or property required by the scenario.",
          "Race condition: Timing between concurrent operations changes the outcome. The scenario instead calls for Cloud misconfiguration: Insecure cloud settings expose resources.",
          "Buffer overflow: Excess input overwrites adjacent memory. The scenario instead calls for Cloud misconfiguration: Insecure cloud settings expose resources.",
          "Unpatched software: Available security fixes are missing. The scenario instead calls for Cloud misconfiguration: Insecure cloud settings expose resources."
        ]
      },
      {
        "id": "PRE-2.3-9",
        "phase": "pre",
        "objective": "2.3",
        "concept": "VM escape",
        "prompt": "Code running inside a guest virtual machine reaches resources on the underlying host outside the intended boundary. Which vulnerability outcome is this?",
        "options": [
          "Buffer overflow",
          "Race condition",
          "VM escape",
          "Zero-day vulnerability"
        ],
        "correct": 2,
        "explanations": [
          "Buffer overflow: Excess input overwrites adjacent memory. The scenario instead calls for VM escape: A guest breaks isolation into its host.",
          "Race condition: Timing between concurrent operations changes the outcome. The scenario instead calls for VM escape: A guest breaks isolation into its host.",
          "VM escape: A guest breaks isolation into its host. This is the role or property required by the scenario.",
          "Zero-day vulnerability: An exploited weakness lacks an available effective vendor fix. The scenario instead calls for VM escape: A guest breaks isolation into its host."
        ]
      },
      {
        "id": "PRE-2.3-10",
        "phase": "pre",
        "objective": "2.3",
        "concept": "Zero-day vulnerability",
        "prompt": "An attacker exploits a newly discovered flaw before the vendor has made a fix available. Which vulnerability category best fits that timing?",
        "options": [
          "Unpatched software",
          "End-of-life system",
          "Zero-day vulnerability",
          "Race condition"
        ],
        "correct": 2,
        "explanations": [
          "Unpatched software: Available security fixes are missing. The scenario instead calls for Zero-day vulnerability: An exploited weakness lacks an available effective vendor fix.",
          "End-of-life system: Normal vendor security support has ended. The scenario instead calls for Zero-day vulnerability: An exploited weakness lacks an available effective vendor fix.",
          "Zero-day vulnerability: An exploited weakness lacks an available effective vendor fix. This is the role or property required by the scenario.",
          "Race condition: Timing between concurrent operations changes the outcome. The scenario instead calls for Zero-day vulnerability: An exploited weakness lacks an available effective vendor fix."
        ]
      }
    ]
  },
  "2.4": {
    "bridge": "Indicators are observations that suggest a problem, not automatic proof of a specific attacker.",
    "teach": "Identify behavior before labeling it. A worm propagates itself; a trojan appears useful; a rootkit hides presence; a logic bomb waits for a condition. Password spraying tries a few passwords across many accounts; credential stuffing reuses stolen username/password pairs. Session theft avoids having to perform a fresh login.",
    "example": "A spike in failed logins may have several explanations. Compare account distribution, password pattern, sources, and timing. Many accounts each receiving the same candidate password suggest spraying; known leaked credential pairs suggest stuffing. Corroborate before acting.",
    "watch": [
      "What behavior distinguishes the attack?",
      "Is the evidence sufficient?",
      "Is the attacker guessing credentials, replaying them, or stealing an existing session?"
    ],
    "questions": [
      {
        "id": "PRE-2.4-1",
        "phase": "pre",
        "objective": "2.4",
        "concept": "Ransomware",
        "prompt": "Malicious software encrypts business files and demands money for their restoration. Which malware category best fits?",
        "options": [
          "Session hijacking",
          "Ransomware",
          "Worm",
          "On-path attack"
        ],
        "correct": 1,
        "explanations": [
          "Session hijacking: A valid session token is reused to impersonate a user. The scenario instead calls for Ransomware: Extorts through encryption or threatened disclosure.",
          "Ransomware: Extorts through encryption or threatened disclosure. This is the role or property required by the scenario.",
          "Worm: Self-propagates between systems. The scenario instead calls for Ransomware: Extorts through encryption or threatened disclosure.",
          "On-path attack: An intermediary intercepts or modifies communications. The scenario instead calls for Ransomware: Extorts through encryption or threatened disclosure."
        ]
      },
      {
        "id": "PRE-2.4-2",
        "phase": "pre",
        "objective": "2.4",
        "concept": "Worm",
        "prompt": "Malicious software independently copies itself from host to host by exploiting reachable services. Which malware category best fits?",
        "options": [
          "Worm",
          "Ransomware",
          "Password spraying",
          "Credential stuffing"
        ],
        "correct": 0,
        "explanations": [
          "Worm: Self-propagates between systems. This is the role or property required by the scenario.",
          "Ransomware: Extorts through encryption or threatened disclosure. The scenario instead calls for Worm: Self-propagates between systems.",
          "Password spraying: Few passwords are tried across many users. The scenario instead calls for Worm: Self-propagates between systems.",
          "Credential stuffing: Previously stolen username-password pairs are reused. The scenario instead calls for Worm: Self-propagates between systems."
        ]
      },
      {
        "id": "PRE-2.4-3",
        "phase": "pre",
        "objective": "2.4",
        "concept": "Trojan",
        "prompt": "A program presented as a useful utility performs hidden malicious actions when the user runs it. Which malware category best fits?",
        "options": [
          "Worm",
          "Trojan",
          "Logic bomb",
          "Credential stuffing"
        ],
        "correct": 1,
        "explanations": [
          "Worm: Self-propagates between systems. The scenario instead calls for Trojan: Malware is disguised as useful software.",
          "Trojan: Malware is disguised as useful software. This is the role or property required by the scenario.",
          "Logic bomb: Malicious action is triggered by a condition. The scenario instead calls for Trojan: Malware is disguised as useful software.",
          "Credential stuffing: Previously stolen username-password pairs are reused. The scenario instead calls for Trojan: Malware is disguised as useful software."
        ]
      },
      {
        "id": "PRE-2.4-4",
        "phase": "pre",
        "objective": "2.4",
        "concept": "Rootkit",
        "prompt": "Malware modifies low-level system behavior to conceal its files and processes from normal inspection. Which malware category best fits?",
        "options": [
          "Session hijacking",
          "Password spraying",
          "On-path attack",
          "Rootkit"
        ],
        "correct": 3,
        "explanations": [
          "Session hijacking: A valid session token is reused to impersonate a user. The scenario instead calls for Rootkit: Privileged manipulation hides malicious activity.",
          "Password spraying: Few passwords are tried across many users. The scenario instead calls for Rootkit: Privileged manipulation hides malicious activity.",
          "On-path attack: An intermediary intercepts or modifies communications. The scenario instead calls for Rootkit: Privileged manipulation hides malicious activity.",
          "Rootkit: Privileged manipulation hides malicious activity. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-2.4-5",
        "phase": "pre",
        "objective": "2.4",
        "concept": "Logic bomb",
        "prompt": "Malicious code remains dormant until a specified date or business condition occurs. Which malware category best fits?",
        "options": [
          "Trojan",
          "Password spraying",
          "Logic bomb",
          "Session hijacking"
        ],
        "correct": 2,
        "explanations": [
          "Trojan: Malware is disguised as useful software. The scenario instead calls for Logic bomb: Malicious action is triggered by a condition.",
          "Password spraying: Few passwords are tried across many users. The scenario instead calls for Logic bomb: Malicious action is triggered by a condition.",
          "Logic bomb: Malicious action is triggered by a condition. This is the role or property required by the scenario.",
          "Session hijacking: A valid session token is reused to impersonate a user. The scenario instead calls for Logic bomb: Malicious action is triggered by a condition."
        ]
      },
      {
        "id": "PRE-2.4-6",
        "phase": "pre",
        "objective": "2.4",
        "concept": "Password spraying",
        "prompt": "An attacker tries the same small list of common passwords against many different accounts. Which credential attack fits?",
        "options": [
          "Distributed denial of service (DDoS)",
          "Logic bomb",
          "Password spraying",
          "Trojan"
        ],
        "correct": 2,
        "explanations": [
          "Distributed denial of service (DDoS): Many sources overwhelm a service. The scenario instead calls for Password spraying: Few passwords are tried across many users.",
          "Logic bomb: Malicious action is triggered by a condition. The scenario instead calls for Password spraying: Few passwords are tried across many users.",
          "Password spraying: Few passwords are tried across many users. This is the role or property required by the scenario.",
          "Trojan: Malware is disguised as useful software. The scenario instead calls for Password spraying: Few passwords are tried across many users."
        ]
      },
      {
        "id": "PRE-2.4-7",
        "phase": "pre",
        "objective": "2.4",
        "concept": "Credential stuffing",
        "prompt": "An attacker automates login attempts using username/password pairs stolen from another service. Which credential attack fits?",
        "options": [
          "Worm",
          "Session hijacking",
          "Rootkit",
          "Credential stuffing"
        ],
        "correct": 3,
        "explanations": [
          "Worm: Self-propagates between systems. The scenario instead calls for Credential stuffing: Previously stolen username-password pairs are reused.",
          "Session hijacking: A valid session token is reused to impersonate a user. The scenario instead calls for Credential stuffing: Previously stolen username-password pairs are reused.",
          "Rootkit: Privileged manipulation hides malicious activity. The scenario instead calls for Credential stuffing: Previously stolen username-password pairs are reused.",
          "Credential stuffing: Previously stolen username-password pairs are reused. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-2.4-8",
        "phase": "pre",
        "objective": "2.4",
        "concept": "On-path attack",
        "prompt": "An attacker places a system between two communicating parties to intercept and potentially modify their traffic. Which attack position is this?",
        "options": [
          "Session hijacking",
          "Password spraying",
          "On-path attack",
          "Worm"
        ],
        "correct": 2,
        "explanations": [
          "Session hijacking: A valid session token is reused to impersonate a user. The scenario instead calls for On-path attack: An intermediary intercepts or modifies communications.",
          "Password spraying: Few passwords are tried across many users. The scenario instead calls for On-path attack: An intermediary intercepts or modifies communications.",
          "On-path attack: An intermediary intercepts or modifies communications. This is the role or property required by the scenario.",
          "Worm: Self-propagates between systems. The scenario instead calls for On-path attack: An intermediary intercepts or modifies communications."
        ]
      },
      {
        "id": "PRE-2.4-9",
        "phase": "pre",
        "objective": "2.4",
        "concept": "Session hijacking",
        "prompt": "An attacker obtains an existing session token and uses it to act as the logged-in user. Which attack fits?",
        "options": [
          "Rootkit",
          "Session hijacking",
          "Password spraying",
          "Ransomware"
        ],
        "correct": 1,
        "explanations": [
          "Rootkit: Privileged manipulation hides malicious activity. The scenario instead calls for Session hijacking: A valid session token is reused to impersonate a user.",
          "Session hijacking: A valid session token is reused to impersonate a user. This is the role or property required by the scenario.",
          "Password spraying: Few passwords are tried across many users. The scenario instead calls for Session hijacking: A valid session token is reused to impersonate a user.",
          "Ransomware: Extorts through encryption or threatened disclosure. The scenario instead calls for Session hijacking: A valid session token is reused to impersonate a user."
        ]
      },
      {
        "id": "PRE-2.4-10",
        "phase": "pre",
        "objective": "2.4",
        "concept": "Distributed denial of service (DDoS)",
        "prompt": "A large collection of separate systems overwhelms a service with coordinated traffic. Which availability attack best fits?",
        "options": [
          "Worm",
          "Distributed denial of service (DDoS)",
          "Ransomware",
          "Logic bomb"
        ],
        "correct": 1,
        "explanations": [
          "Worm: Self-propagates between systems. The scenario instead calls for Distributed denial of service (DDoS): Many sources overwhelm a service.",
          "Distributed denial of service (DDoS): Many sources overwhelm a service. This is the role or property required by the scenario.",
          "Ransomware: Extorts through encryption or threatened disclosure. The scenario instead calls for Distributed denial of service (DDoS): Many sources overwhelm a service.",
          "Logic bomb: Malicious action is triggered by a condition. The scenario instead calls for Distributed denial of service (DDoS): Many sources overwhelm a service."
        ]
      }
    ]
  },
  "2.5": {
    "bridge": "Mitigation lowers risk; it does not necessarily remove every weakness. Pick the measure that interrupts the stated attack path.",
    "teach": "Use least privilege to narrow permissions, segmentation to narrow reachability, allowlisting to narrow executable software, and patching to repair known flaws. Isolation contains an immediate exposure; decommissioning removes a system from service. Encryption protects data but does not make a compromised endpoint trustworthy.",
    "example": "An unsupported controller cannot receive a fix immediately. Restrict its network paths and management access as a compensating measure, monitor it, and plan replacement. Do not assume that encrypting its disk fixes a remotely exploitable service.",
    "watch": [
      "What can be changed now?",
      "Does the control repair, restrict, contain, or retire?",
      "Which business function must remain available?"
    ],
    "questions": [
      {
        "id": "PRE-2.5-1",
        "phase": "pre",
        "objective": "2.5",
        "concept": "Network segmentation",
        "prompt": "A business separates workstation networks from industrial equipment so compromise of one does not provide unrestricted access to the other. Which mitigation is emphasized?",
        "options": [
          "Encryption",
          "Application allowlisting",
          "Decommissioning",
          "Network segmentation"
        ],
        "correct": 3,
        "explanations": [
          "Encryption: Protects confidentiality through cryptographic keys. The scenario instead calls for Network segmentation: Separates systems and restricts cross-group traffic.",
          "Application allowlisting: Only approved applications may run. The scenario instead calls for Network segmentation: Separates systems and restricts cross-group traffic.",
          "Decommissioning: Securely retires systems, access, and data. The scenario instead calls for Network segmentation: Separates systems and restricts cross-group traffic.",
          "Network segmentation: Separates systems and restricts cross-group traffic. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-2.5-2",
        "phase": "pre",
        "objective": "2.5",
        "concept": "Least privilege",
        "prompt": "A service account is reduced from administrator rights to only the permissions its scheduled task needs. Which mitigation principle is applied?",
        "options": [
          "Access control list (ACL)",
          "Least privilege",
          "Decommissioning",
          "Application allowlisting"
        ],
        "correct": 1,
        "explanations": [
          "Access control list (ACL): Rules permit or deny subjects or traffic. The scenario instead calls for Least privilege: Limits permissions to required tasks.",
          "Least privilege: Limits permissions to required tasks. This is the role or property required by the scenario.",
          "Decommissioning: Securely retires systems, access, and data. The scenario instead calls for Least privilege: Limits permissions to required tasks.",
          "Application allowlisting: Only approved applications may run. The scenario instead calls for Least privilege: Limits permissions to required tasks."
        ]
      },
      {
        "id": "PRE-2.5-3",
        "phase": "pre",
        "objective": "2.5",
        "concept": "Application allowlisting",
        "prompt": "A workstation may execute only programs on an explicitly approved list. Which mitigation is applied?",
        "options": [
          "Application allowlisting",
          "Encryption",
          "Patching",
          "Network segmentation"
        ],
        "correct": 0,
        "explanations": [
          "Application allowlisting: Only approved applications may run. This is the role or property required by the scenario.",
          "Encryption: Protects confidentiality through cryptographic keys. The scenario instead calls for Application allowlisting: Only approved applications may run.",
          "Patching: Installs fixes for known weaknesses. The scenario instead calls for Application allowlisting: Only approved applications may run.",
          "Network segmentation: Separates systems and restricts cross-group traffic. The scenario instead calls for Application allowlisting: Only approved applications may run."
        ]
      },
      {
        "id": "PRE-2.5-4",
        "phase": "pre",
        "objective": "2.5",
        "concept": "Patching",
        "prompt": "A supported product's known vulnerability is repaired by installing the vendor's corrective update. Which mitigation is applied?",
        "options": [
          "Patching",
          "Encryption",
          "Isolation",
          "Configuration enforcement"
        ],
        "correct": 0,
        "explanations": [
          "Patching: Installs fixes for known weaknesses. This is the role or property required by the scenario.",
          "Encryption: Protects confidentiality through cryptographic keys. The scenario instead calls for Patching: Installs fixes for known weaknesses.",
          "Isolation: Contains a suspect system to limit spread. The scenario instead calls for Patching: Installs fixes for known weaknesses.",
          "Configuration enforcement: Maintains approved secure settings. The scenario instead calls for Patching: Installs fixes for known weaknesses."
        ]
      },
      {
        "id": "PRE-2.5-5",
        "phase": "pre",
        "objective": "2.5",
        "concept": "Isolation",
        "prompt": "A suspected compromised host is removed from normal communication while responders investigate it. Which immediate mitigation is applied?",
        "options": [
          "Isolation",
          "Least privilege",
          "Encryption",
          "Application allowlisting"
        ],
        "correct": 0,
        "explanations": [
          "Isolation: Contains a suspect system to limit spread. This is the role or property required by the scenario.",
          "Least privilege: Limits permissions to required tasks. The scenario instead calls for Isolation: Contains a suspect system to limit spread.",
          "Encryption: Protects confidentiality through cryptographic keys. The scenario instead calls for Isolation: Contains a suspect system to limit spread.",
          "Application allowlisting: Only approved applications may run. The scenario instead calls for Isolation: Contains a suspect system to limit spread."
        ]
      },
      {
        "id": "PRE-2.5-6",
        "phase": "pre",
        "objective": "2.5",
        "concept": "Configuration enforcement",
        "prompt": "A management platform repeatedly checks endpoint settings and returns unauthorized changes to the approved values. Which mitigation maintains the desired state?",
        "options": [
          "Patching",
          "Isolation",
          "Configuration enforcement",
          "Access control list (ACL)"
        ],
        "correct": 2,
        "explanations": [
          "Patching: Installs fixes for known weaknesses. The scenario instead calls for Configuration enforcement: Maintains approved secure settings.",
          "Isolation: Contains a suspect system to limit spread. The scenario instead calls for Configuration enforcement: Maintains approved secure settings.",
          "Configuration enforcement: Maintains approved secure settings. This is the role or property required by the scenario.",
          "Access control list (ACL): Rules permit or deny subjects or traffic. The scenario instead calls for Configuration enforcement: Maintains approved secure settings."
        ]
      },
      {
        "id": "PRE-2.5-7",
        "phase": "pre",
        "objective": "2.5",
        "concept": "Decommissioning",
        "prompt": "An obsolete appliance is permanently removed from service and its access is terminated. Which mitigation is this?",
        "options": [
          "Decommissioning",
          "Application allowlisting",
          "Access control list (ACL)",
          "Disable unnecessary services"
        ],
        "correct": 0,
        "explanations": [
          "Decommissioning: Securely retires systems, access, and data. This is the role or property required by the scenario.",
          "Application allowlisting: Only approved applications may run. The scenario instead calls for Decommissioning: Securely retires systems, access, and data.",
          "Access control list (ACL): Rules permit or deny subjects or traffic. The scenario instead calls for Decommissioning: Securely retires systems, access, and data.",
          "Disable unnecessary services: Removes unused functionality and exposure. The scenario instead calls for Decommissioning: Securely retires systems, access, and data."
        ]
      },
      {
        "id": "PRE-2.5-8",
        "phase": "pre",
        "objective": "2.5",
        "concept": "Encryption",
        "prompt": "A company transforms backup contents so they are unreadable without the appropriate key. Which mitigation protects their confidentiality?",
        "options": [
          "Decommissioning",
          "Configuration enforcement",
          "Encryption",
          "Least privilege"
        ],
        "correct": 2,
        "explanations": [
          "Decommissioning: Securely retires systems, access, and data. The scenario instead calls for Encryption: Protects confidentiality through cryptographic keys.",
          "Configuration enforcement: Maintains approved secure settings. The scenario instead calls for Encryption: Protects confidentiality through cryptographic keys.",
          "Encryption: Protects confidentiality through cryptographic keys. This is the role or property required by the scenario.",
          "Least privilege: Limits permissions to required tasks. The scenario instead calls for Encryption: Protects confidentiality through cryptographic keys."
        ]
      },
      {
        "id": "PRE-2.5-9",
        "phase": "pre",
        "objective": "2.5",
        "concept": "Access control list (ACL)",
        "prompt": "A router uses ordered permit and deny entries based on traffic attributes to restrict communication. Which configuration object enforces those entries?",
        "options": [
          "Application allowlisting",
          "Access control list (ACL)",
          "Least privilege",
          "Encryption"
        ],
        "correct": 1,
        "explanations": [
          "Application allowlisting: Only approved applications may run. The scenario instead calls for Access control list (ACL): Rules permit or deny subjects or traffic.",
          "Access control list (ACL): Rules permit or deny subjects or traffic. This is the role or property required by the scenario.",
          "Least privilege: Limits permissions to required tasks. The scenario instead calls for Access control list (ACL): Rules permit or deny subjects or traffic.",
          "Encryption: Protects confidentiality through cryptographic keys. The scenario instead calls for Access control list (ACL): Rules permit or deny subjects or traffic."
        ]
      },
      {
        "id": "PRE-2.5-10",
        "phase": "pre",
        "objective": "2.5",
        "concept": "Disable unnecessary services",
        "prompt": "A server has no business need for an installed remote-management daemon, so the administrator turns that daemon off. Which hardening action is this?",
        "options": [
          "Least privilege",
          "Disable unnecessary services",
          "Encryption",
          "Configuration enforcement"
        ],
        "correct": 1,
        "explanations": [
          "Least privilege: Limits permissions to required tasks. The scenario instead calls for Disable unnecessary services: Removes unused functionality and exposure.",
          "Disable unnecessary services: Removes unused functionality and exposure. This is the role or property required by the scenario.",
          "Encryption: Protects confidentiality through cryptographic keys. The scenario instead calls for Disable unnecessary services: Removes unused functionality and exposure.",
          "Configuration enforcement: Maintains approved secure settings. The scenario instead calls for Disable unnecessary services: Removes unused functionality and exposure."
        ]
      }
    ]
  },
  "3.1": {
    "bridge": "Architecture assigns responsibilities and creates trust boundaries. Deployment labels matter because they change what you must secure.",
    "teach": "IaaS (Infrastructure as a Service) exposes infrastructure for you to manage; PaaS (Platform as a Service) manages more of the runtime; SaaS (Software as a Service) delivers an application. Responsibility remains shared. Containers package workloads while sharing a host kernel; virtual machines have guest operating systems. Serverless still runs on servers, but the provider manages much of that infrastructure.",
    "example": "Moving an application to SaaS does not remove your responsibility for users, permissions, data handling, and configuration. Moving to containers does not create the same isolation boundary as separate physical hosts. In industrial systems, safety and uptime can constrain patching.",
    "watch": [
      "Who secures each layer?",
      "Which components share failure or trust boundaries?",
      "What tradeoffs exist among security, cost, performance, and availability?"
    ],
    "questions": [
      {
        "id": "PRE-3.1-1",
        "phase": "pre",
        "objective": "3.1",
        "concept": "Infrastructure as a service (IaaS)",
        "prompt": "A cloud customer receives virtual machines and networks but remains responsible for installing and securing the guest operating systems. Which service model fits?",
        "options": [
          "Infrastructure as a service (IaaS)",
          "Platform as a service (PaaS)",
          "Industrial control system (ICS)",
          "Containerization"
        ],
        "correct": 0,
        "explanations": [
          "Infrastructure as a service (IaaS): Provider supplies infrastructure; customer manages guest OS and applications. This is the role or property required by the scenario.",
          "Platform as a service (PaaS): Provider manages the application platform; customer supplies code and data. The scenario instead calls for Infrastructure as a service (IaaS): Provider supplies infrastructure; customer manages guest OS and applications.",
          "Industrial control system (ICS): Controls physical industrial processes with safety and availability constraints. The scenario instead calls for Infrastructure as a service (IaaS): Provider supplies infrastructure; customer manages guest OS and applications.",
          "Containerization: Applications share a host kernel while isolating runtime environments. The scenario instead calls for Infrastructure as a service (IaaS): Provider supplies infrastructure; customer manages guest OS and applications."
        ]
      },
      {
        "id": "PRE-3.1-2",
        "phase": "pre",
        "objective": "3.1",
        "concept": "Platform as a service (PaaS)",
        "prompt": "A development team deploys application code to a provider-managed runtime without administering the underlying operating system. Which service model fits?",
        "options": [
          "Microservices",
          "Platform as a service (PaaS)",
          "Shared responsibility model",
          "Software as a service (SaaS)"
        ],
        "correct": 1,
        "explanations": [
          "Microservices: Small independently deployable services form an application. The scenario instead calls for Platform as a service (PaaS): Provider manages the application platform; customer supplies code and data.",
          "Platform as a service (PaaS): Provider manages the application platform; customer supplies code and data. This is the role or property required by the scenario.",
          "Shared responsibility model: Security duties are divided between customer and provider. The scenario instead calls for Platform as a service (PaaS): Provider manages the application platform; customer supplies code and data.",
          "Software as a service (SaaS): Provider operates a complete application. The scenario instead calls for Platform as a service (PaaS): Provider manages the application platform; customer supplies code and data."
        ]
      },
      {
        "id": "PRE-3.1-3",
        "phase": "pre",
        "objective": "3.1",
        "concept": "Software as a service (SaaS)",
        "prompt": "A business subscribes to a complete hosted expense-management application and configures its users and data settings. Which service model fits?",
        "options": [
          "Software as a service (SaaS)",
          "Air gap",
          "Containerization",
          "Platform as a service (PaaS)"
        ],
        "correct": 0,
        "explanations": [
          "Software as a service (SaaS): Provider operates a complete application. This is the role or property required by the scenario.",
          "Air gap: Physical separation removes direct network connectivity. The scenario instead calls for Software as a service (SaaS): Provider operates a complete application.",
          "Containerization: Applications share a host kernel while isolating runtime environments. The scenario instead calls for Software as a service (SaaS): Provider operates a complete application.",
          "Platform as a service (PaaS): Provider manages the application platform; customer supplies code and data. The scenario instead calls for Software as a service (SaaS): Provider operates a complete application."
        ]
      },
      {
        "id": "PRE-3.1-4",
        "phase": "pre",
        "objective": "3.1",
        "concept": "Shared responsibility model",
        "prompt": "A cloud planning document assigns some security duties to the provider and others to the customer. Which model explains that division?",
        "options": [
          "Microservices",
          "Infrastructure as a service (IaaS)",
          "Shared responsibility model",
          "Software as a service (SaaS)"
        ],
        "correct": 2,
        "explanations": [
          "Microservices: Small independently deployable services form an application. The scenario instead calls for Shared responsibility model: Security duties are divided between customer and provider.",
          "Infrastructure as a service (IaaS): Provider supplies infrastructure; customer manages guest OS and applications. The scenario instead calls for Shared responsibility model: Security duties are divided between customer and provider.",
          "Shared responsibility model: Security duties are divided between customer and provider. This is the role or property required by the scenario.",
          "Software as a service (SaaS): Provider operates a complete application. The scenario instead calls for Shared responsibility model: Security duties are divided between customer and provider."
        ]
      },
      {
        "id": "PRE-3.1-5",
        "phase": "pre",
        "objective": "3.1",
        "concept": "Infrastructure as code (IaC)",
        "prompt": "A team declares required cloud resources in versioned configuration files and deploys them through tooling. Which architecture practice is this?",
        "options": [
          "Serverless architecture",
          "Shared responsibility model",
          "Platform as a service (PaaS)",
          "Infrastructure as code (IaC)"
        ],
        "correct": 3,
        "explanations": [
          "Serverless architecture: Provider executes event-driven functions and manages underlying servers. The scenario instead calls for Infrastructure as code (IaC): Versioned definitions provision infrastructure.",
          "Shared responsibility model: Security duties are divided between customer and provider. The scenario instead calls for Infrastructure as code (IaC): Versioned definitions provision infrastructure.",
          "Platform as a service (PaaS): Provider manages the application platform; customer supplies code and data. The scenario instead calls for Infrastructure as code (IaC): Versioned definitions provision infrastructure.",
          "Infrastructure as code (IaC): Versioned definitions provision infrastructure. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-3.1-6",
        "phase": "pre",
        "objective": "3.1",
        "concept": "Microservices",
        "prompt": "An application is divided into small independently deployable services that communicate through defined interfaces. Which architecture approach fits?",
        "options": [
          "Microservices",
          "Air gap",
          "Infrastructure as a service (IaaS)",
          "Infrastructure as code (IaC)"
        ],
        "correct": 0,
        "explanations": [
          "Microservices: Small independently deployable services form an application. This is the role or property required by the scenario.",
          "Air gap: Physical separation removes direct network connectivity. The scenario instead calls for Microservices: Small independently deployable services form an application.",
          "Infrastructure as a service (IaaS): Provider supplies infrastructure; customer manages guest OS and applications. The scenario instead calls for Microservices: Small independently deployable services form an application.",
          "Infrastructure as code (IaC): Versioned definitions provision infrastructure. The scenario instead calls for Microservices: Small independently deployable services form an application."
        ]
      },
      {
        "id": "PRE-3.1-7",
        "phase": "pre",
        "objective": "3.1",
        "concept": "Containerization",
        "prompt": "A workload is packaged with its dependencies while sharing the host operating system kernel with other isolated workloads. Which deployment approach fits?",
        "options": [
          "Infrastructure as a service (IaaS)",
          "Serverless architecture",
          "Industrial control system (ICS)",
          "Containerization"
        ],
        "correct": 3,
        "explanations": [
          "Infrastructure as a service (IaaS): Provider supplies infrastructure; customer manages guest OS and applications. The scenario instead calls for Containerization: Applications share a host kernel while isolating runtime environments.",
          "Serverless architecture: Provider executes event-driven functions and manages underlying servers. The scenario instead calls for Containerization: Applications share a host kernel while isolating runtime environments.",
          "Industrial control system (ICS): Controls physical industrial processes with safety and availability constraints. The scenario instead calls for Containerization: Applications share a host kernel while isolating runtime environments.",
          "Containerization: Applications share a host kernel while isolating runtime environments. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-3.1-8",
        "phase": "pre",
        "objective": "3.1",
        "concept": "Serverless architecture",
        "prompt": "A developer supplies event-triggered functions while the cloud provider manages the execution infrastructure and scaling. Which architecture approach fits?",
        "options": [
          "Infrastructure as code (IaC)",
          "Air gap",
          "Infrastructure as a service (IaaS)",
          "Serverless architecture"
        ],
        "correct": 3,
        "explanations": [
          "Infrastructure as code (IaC): Versioned definitions provision infrastructure. The scenario instead calls for Serverless architecture: Provider executes event-driven functions and manages underlying servers.",
          "Air gap: Physical separation removes direct network connectivity. The scenario instead calls for Serverless architecture: Provider executes event-driven functions and manages underlying servers.",
          "Infrastructure as a service (IaaS): Provider supplies infrastructure; customer manages guest OS and applications. The scenario instead calls for Serverless architecture: Provider executes event-driven functions and manages underlying servers.",
          "Serverless architecture: Provider executes event-driven functions and manages underlying servers. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-3.1-9",
        "phase": "pre",
        "objective": "3.1",
        "concept": "Air gap",
        "prompt": "A sensitive system has no physical or logical network connection to other networks. Which isolation approach is this?",
        "options": [
          "Air gap",
          "Software as a service (SaaS)",
          "Containerization",
          "Infrastructure as a service (IaaS)"
        ],
        "correct": 0,
        "explanations": [
          "Air gap: Physical separation removes direct network connectivity. This is the role or property required by the scenario.",
          "Software as a service (SaaS): Provider operates a complete application. The scenario instead calls for Air gap: Physical separation removes direct network connectivity.",
          "Containerization: Applications share a host kernel while isolating runtime environments. The scenario instead calls for Air gap: Physical separation removes direct network connectivity.",
          "Infrastructure as a service (IaaS): Provider supplies infrastructure; customer manages guest OS and applications. The scenario instead calls for Air gap: Physical separation removes direct network connectivity."
        ]
      },
      {
        "id": "PRE-3.1-10",
        "phase": "pre",
        "objective": "3.1",
        "concept": "Industrial control system (ICS)",
        "prompt": "A computing environment directly monitors and controls manufacturing equipment. Which system category best fits?",
        "options": [
          "Industrial control system (ICS)",
          "Containerization",
          "Software as a service (SaaS)",
          "Air gap"
        ],
        "correct": 0,
        "explanations": [
          "Industrial control system (ICS): Controls physical industrial processes with safety and availability constraints. This is the role or property required by the scenario.",
          "Containerization: Applications share a host kernel while isolating runtime environments. The scenario instead calls for Industrial control system (ICS): Controls physical industrial processes with safety and availability constraints.",
          "Software as a service (SaaS): Provider operates a complete application. The scenario instead calls for Industrial control system (ICS): Controls physical industrial processes with safety and availability constraints.",
          "Air gap: Physical separation removes direct network connectivity. The scenario instead calls for Industrial control system (ICS): Controls physical industrial processes with safety and availability constraints."
        ]
      }
    ]
  },
  "3.2": {
    "bridge": "Follow a request from the outside to its destination. Each security device should have a clear job along that path.",
    "teach": "A WAF (Web Application Firewall) inspects web requests; an IPS (Intrusion Prevention System) can block detected attacks; an IDS (Intrusion Detection System) observes and alerts. NAC (Network Access Control) controls admission. A jump server centralizes administration. Proxies act on behalf of clients or servers. Failure behavior must be chosen deliberately.",
    "example": "If an inline security appliance fails closed, access stops rather than bypassing the control. If it fails open, service may continue without the inspection. The right choice depends on safety, availability, and security requirements, not a universal rule.",
    "watch": [
      "What traffic can the device actually inspect?",
      "Is it inline or observing?",
      "What happens when it fails?"
    ],
    "questions": [
      {
        "id": "PRE-3.2-1",
        "phase": "pre",
        "objective": "3.2",
        "concept": "Web application firewall (WAF)",
        "prompt": "A public application's defense must inspect web request parameters for application-layer attack patterns. Which specialized device fits?",
        "options": [
          "Intrusion detection system (IDS)",
          "Intrusion prevention system (IPS)",
          "Screened subnet",
          "Web application firewall (WAF)"
        ],
        "correct": 3,
        "explanations": [
          "Intrusion detection system (IDS): Detects suspicious activity and alerts without directly blocking. The scenario instead calls for Web application firewall (WAF): Inspects application-layer web requests.",
          "Intrusion prevention system (IPS): Detects and actively blocks suspicious network activity. The scenario instead calls for Web application firewall (WAF): Inspects application-layer web requests.",
          "Screened subnet: An isolated network hosts externally accessible services. The scenario instead calls for Web application firewall (WAF): Inspects application-layer web requests.",
          "Web application firewall (WAF): Inspects application-layer web requests. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-3.2-2",
        "phase": "pre",
        "objective": "3.2",
        "concept": "Intrusion prevention system (IPS)",
        "prompt": "A sensor is placed inline and actively rejects traffic matching exploit signatures. Which security device role fits?",
        "options": [
          "Intrusion prevention system (IPS)",
          "Screened subnet",
          "Web application firewall (WAF)",
          "Forward proxy"
        ],
        "correct": 0,
        "explanations": [
          "Intrusion prevention system (IPS): Detects and actively blocks suspicious network activity. This is the role or property required by the scenario.",
          "Screened subnet: An isolated network hosts externally accessible services. The scenario instead calls for Intrusion prevention system (IPS): Detects and actively blocks suspicious network activity.",
          "Web application firewall (WAF): Inspects application-layer web requests. The scenario instead calls for Intrusion prevention system (IPS): Detects and actively blocks suspicious network activity.",
          "Forward proxy: Acts on behalf of clients making outbound requests. The scenario instead calls for Intrusion prevention system (IPS): Detects and actively blocks suspicious network activity."
        ]
      },
      {
        "id": "PRE-3.2-3",
        "phase": "pre",
        "objective": "3.2",
        "concept": "Intrusion detection system (IDS)",
        "prompt": "A sensor observes mirrored traffic and generates security alerts without blocking the original packets. Which security device role fits?",
        "options": [
          "Intrusion detection system (IDS)",
          "Web application firewall (WAF)",
          "Screened subnet",
          "Forward proxy"
        ],
        "correct": 0,
        "explanations": [
          "Intrusion detection system (IDS): Detects suspicious activity and alerts without directly blocking. This is the role or property required by the scenario.",
          "Web application firewall (WAF): Inspects application-layer web requests. The scenario instead calls for Intrusion detection system (IDS): Detects suspicious activity and alerts without directly blocking.",
          "Screened subnet: An isolated network hosts externally accessible services. The scenario instead calls for Intrusion detection system (IDS): Detects suspicious activity and alerts without directly blocking.",
          "Forward proxy: Acts on behalf of clients making outbound requests. The scenario instead calls for Intrusion detection system (IDS): Detects suspicious activity and alerts without directly blocking."
        ]
      },
      {
        "id": "PRE-3.2-4",
        "phase": "pre",
        "objective": "3.2",
        "concept": "Network access control (NAC)",
        "prompt": "A network admission process checks an endpoint's identity and security posture before granting normal connectivity. Which capability fits?",
        "options": [
          "Jump server",
          "Forward proxy",
          "Network access control (NAC)",
          "Fail-open"
        ],
        "correct": 2,
        "explanations": [
          "Jump server: Provides a controlled intermediary for administrative access. The scenario instead calls for Network access control (NAC): Controls network admission based on identity or device posture.",
          "Forward proxy: Acts on behalf of clients making outbound requests. The scenario instead calls for Network access control (NAC): Controls network admission based on identity or device posture.",
          "Network access control (NAC): Controls network admission based on identity or device posture. This is the role or property required by the scenario.",
          "Fail-open: Failure permits access to preserve availability or safety. The scenario instead calls for Network access control (NAC): Controls network admission based on identity or device posture."
        ]
      },
      {
        "id": "PRE-3.2-5",
        "phase": "pre",
        "objective": "3.2",
        "concept": "Jump server",
        "prompt": "Administrators must first enter a hardened intermediary host before managing sensitive servers. Which architecture component is this?",
        "options": [
          "Fail-open",
          "Forward proxy",
          "Intrusion prevention system (IPS)",
          "Jump server"
        ],
        "correct": 3,
        "explanations": [
          "Fail-open: Failure permits access to preserve availability or safety. The scenario instead calls for Jump server: Provides a controlled intermediary for administrative access.",
          "Forward proxy: Acts on behalf of clients making outbound requests. The scenario instead calls for Jump server: Provides a controlled intermediary for administrative access.",
          "Intrusion prevention system (IPS): Detects and actively blocks suspicious network activity. The scenario instead calls for Jump server: Provides a controlled intermediary for administrative access.",
          "Jump server: Provides a controlled intermediary for administrative access. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-3.2-6",
        "phase": "pre",
        "objective": "3.2",
        "concept": "Screened subnet",
        "prompt": "Public-facing services are placed on a network segment separated from the internal network by security controls. Which architecture zone fits?",
        "options": [
          "Intrusion prevention system (IPS)",
          "Screened subnet",
          "Fail-open",
          "Web application firewall (WAF)"
        ],
        "correct": 1,
        "explanations": [
          "Intrusion prevention system (IPS): Detects and actively blocks suspicious network activity. The scenario instead calls for Screened subnet: An isolated network hosts externally accessible services.",
          "Screened subnet: An isolated network hosts externally accessible services. This is the role or property required by the scenario.",
          "Fail-open: Failure permits access to preserve availability or safety. The scenario instead calls for Screened subnet: An isolated network hosts externally accessible services.",
          "Web application firewall (WAF): Inspects application-layer web requests. The scenario instead calls for Screened subnet: An isolated network hosts externally accessible services."
        ]
      },
      {
        "id": "PRE-3.2-7",
        "phase": "pre",
        "objective": "3.2",
        "concept": "Forward proxy",
        "prompt": "Employees' outbound web requests pass through a service that acts on behalf of those clients. Which proxy role is this?",
        "options": [
          "Web application firewall (WAF)",
          "Forward proxy",
          "Screened subnet",
          "Intrusion detection system (IDS)"
        ],
        "correct": 1,
        "explanations": [
          "Web application firewall (WAF): Inspects application-layer web requests. The scenario instead calls for Forward proxy: Acts on behalf of clients making outbound requests.",
          "Forward proxy: Acts on behalf of clients making outbound requests. This is the role or property required by the scenario.",
          "Screened subnet: An isolated network hosts externally accessible services. The scenario instead calls for Forward proxy: Acts on behalf of clients making outbound requests.",
          "Intrusion detection system (IDS): Detects suspicious activity and alerts without directly blocking. The scenario instead calls for Forward proxy: Acts on behalf of clients making outbound requests."
        ]
      },
      {
        "id": "PRE-3.2-8",
        "phase": "pre",
        "objective": "3.2",
        "concept": "Reverse proxy",
        "prompt": "External requests reach a service that fronts internal application servers and forwards requests to them. Which proxy role is this?",
        "options": [
          "Network access control (NAC)",
          "Screened subnet",
          "Forward proxy",
          "Reverse proxy"
        ],
        "correct": 3,
        "explanations": [
          "Network access control (NAC): Controls network admission based on identity or device posture. The scenario instead calls for Reverse proxy: Acts on behalf of servers receiving inbound requests.",
          "Screened subnet: An isolated network hosts externally accessible services. The scenario instead calls for Reverse proxy: Acts on behalf of servers receiving inbound requests.",
          "Forward proxy: Acts on behalf of clients making outbound requests. The scenario instead calls for Reverse proxy: Acts on behalf of servers receiving inbound requests.",
          "Reverse proxy: Acts on behalf of servers receiving inbound requests. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-3.2-9",
        "phase": "pre",
        "objective": "3.2",
        "concept": "Fail-closed",
        "prompt": "A failed security gateway must stop traffic rather than allow uninspected access. Which failure behavior is required?",
        "options": [
          "Web application firewall (WAF)",
          "Fail-closed",
          "Screened subnet",
          "Jump server"
        ],
        "correct": 1,
        "explanations": [
          "Web application firewall (WAF): Inspects application-layer web requests. The scenario instead calls for Fail-closed: Failure denies access to preserve security.",
          "Fail-closed: Failure denies access to preserve security. This is the role or property required by the scenario.",
          "Screened subnet: An isolated network hosts externally accessible services. The scenario instead calls for Fail-closed: Failure denies access to preserve security.",
          "Jump server: Provides a controlled intermediary for administrative access. The scenario instead calls for Fail-closed: Failure denies access to preserve security."
        ]
      },
      {
        "id": "PRE-3.2-10",
        "phase": "pre",
        "objective": "3.2",
        "concept": "Fail-open",
        "prompt": "A failed inline device is configured to let traffic continue to preserve service, accepting loss of that device's inspection. Which failure behavior is this?",
        "options": [
          "Fail-closed",
          "Web application firewall (WAF)",
          "Intrusion detection system (IDS)",
          "Fail-open"
        ],
        "correct": 3,
        "explanations": [
          "Fail-closed: Failure denies access to preserve security. The scenario instead calls for Fail-open: Failure permits access to preserve availability or safety.",
          "Web application firewall (WAF): Inspects application-layer web requests. The scenario instead calls for Fail-open: Failure permits access to preserve availability or safety.",
          "Intrusion detection system (IDS): Detects suspicious activity and alerts without directly blocking. The scenario instead calls for Fail-open: Failure permits access to preserve availability or safety.",
          "Fail-open: Failure permits access to preserve availability or safety. This is the role or property required by the scenario."
        ]
      }
    ]
  },
  "3.3": {
    "bridge": "Before selecting a protection, identify the data, where it is, and why the organization needs it.",
    "teach": "Data at rest is stored; data in transit crosses a communication path; data in use is being processed. Classification drives handling rules. Masking obscures displayed values; tokenization replaces sensitive values with substitutes. DLP (Data Loss Prevention) detects or restricts inappropriate movement. Minimization removes unnecessary collection or retention.",
    "example": "A support screen may show only the last four digits while the protected original remains elsewhere: masking. A business system may store a substitute linked to an original in a vault: tokenization. Neither label alone proves the entire workflow is secure.",
    "watch": [
      "Which data state is involved?",
      "Is the value hidden, replaced, encrypted, or removed?",
      "Are location and legal requirements relevant?"
    ],
    "questions": [
      {
        "id": "PRE-3.3-1",
        "phase": "pre",
        "objective": "3.3",
        "concept": "Data at rest",
        "prompt": "A confidential report is stored on an idle disk. Which data state describes it at that moment?",
        "options": [
          "Data at rest",
          "Data in use",
          "Data classification",
          "Data masking"
        ],
        "correct": 0,
        "explanations": [
          "Data at rest: Data is stored on a medium. This is the role or property required by the scenario.",
          "Data in use: Data is actively being processed. The scenario instead calls for Data at rest: Data is stored on a medium.",
          "Data classification: Labels information according to sensitivity and handling requirements. The scenario instead calls for Data at rest: Data is stored on a medium.",
          "Data masking: Obscures selected data elements for display or limited use. The scenario instead calls for Data at rest: Data is stored on a medium."
        ]
      },
      {
        "id": "PRE-3.3-2",
        "phase": "pre",
        "objective": "3.3",
        "concept": "Data in transit",
        "prompt": "A confidential report crosses a network from a client to a server. Which data state describes it during transfer?",
        "options": [
          "Data in transit",
          "Geographic restrictions",
          "Data at rest",
          "Data minimization"
        ],
        "correct": 0,
        "explanations": [
          "Data in transit: Data is moving between endpoints. This is the role or property required by the scenario.",
          "Geographic restrictions: Limit where data may reside or be accessed. The scenario instead calls for Data in transit: Data is moving between endpoints.",
          "Data at rest: Data is stored on a medium. The scenario instead calls for Data in transit: Data is moving between endpoints.",
          "Data minimization: Collects and retains only necessary data. The scenario instead calls for Data in transit: Data is moving between endpoints."
        ]
      },
      {
        "id": "PRE-3.3-3",
        "phase": "pre",
        "objective": "3.3",
        "concept": "Data in use",
        "prompt": "A running process is manipulating confidential report contents in memory. Which data state describes that processing?",
        "options": [
          "Data in use",
          "Data sovereignty",
          "Data at rest",
          "Data classification"
        ],
        "correct": 0,
        "explanations": [
          "Data in use: Data is actively being processed. This is the role or property required by the scenario.",
          "Data sovereignty: Data is subject to laws associated with its location or jurisdiction. The scenario instead calls for Data in use: Data is actively being processed.",
          "Data at rest: Data is stored on a medium. The scenario instead calls for Data in use: Data is actively being processed.",
          "Data classification: Labels information according to sensitivity and handling requirements. The scenario instead calls for Data in use: Data is actively being processed."
        ]
      },
      {
        "id": "PRE-3.3-4",
        "phase": "pre",
        "objective": "3.3",
        "concept": "Tokenization",
        "prompt": "A payment system replaces stored card numbers with substitute values linked to originals in a protected vault. Which technique fits?",
        "options": [
          "Data sovereignty",
          "Data classification",
          "Data in transit",
          "Tokenization"
        ],
        "correct": 3,
        "explanations": [
          "Data sovereignty: Data is subject to laws associated with its location or jurisdiction. The scenario instead calls for Tokenization: Replaces sensitive values with surrogates linked through a protected mapping.",
          "Data classification: Labels information according to sensitivity and handling requirements. The scenario instead calls for Tokenization: Replaces sensitive values with surrogates linked through a protected mapping.",
          "Data in transit: Data is moving between endpoints. The scenario instead calls for Tokenization: Replaces sensitive values with surrogates linked through a protected mapping.",
          "Tokenization: Replaces sensitive values with surrogates linked through a protected mapping. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-3.3-5",
        "phase": "pre",
        "objective": "3.3",
        "concept": "Data masking",
        "prompt": "A support screen displays only the final characters of an account number while hiding the rest. Which technique fits?",
        "options": [
          "Data masking",
          "Tokenization",
          "Data sovereignty",
          "Data in use"
        ],
        "correct": 0,
        "explanations": [
          "Data masking: Obscures selected data elements for display or limited use. This is the role or property required by the scenario.",
          "Tokenization: Replaces sensitive values with surrogates linked through a protected mapping. The scenario instead calls for Data masking: Obscures selected data elements for display or limited use.",
          "Data sovereignty: Data is subject to laws associated with its location or jurisdiction. The scenario instead calls for Data masking: Obscures selected data elements for display or limited use.",
          "Data in use: Data is actively being processed. The scenario instead calls for Data masking: Obscures selected data elements for display or limited use."
        ]
      },
      {
        "id": "PRE-3.3-6",
        "phase": "pre",
        "objective": "3.3",
        "concept": "Data loss prevention (DLP)",
        "prompt": "A control identifies sensitive records in an outbound upload and blocks unauthorized disclosure. Which capability fits?",
        "options": [
          "Tokenization",
          "Data minimization",
          "Data in use",
          "Data loss prevention (DLP)"
        ],
        "correct": 3,
        "explanations": [
          "Tokenization: Replaces sensitive values with surrogates linked through a protected mapping. The scenario instead calls for Data loss prevention (DLP): Detects or blocks unauthorized movement of sensitive data.",
          "Data minimization: Collects and retains only necessary data. The scenario instead calls for Data loss prevention (DLP): Detects or blocks unauthorized movement of sensitive data.",
          "Data in use: Data is actively being processed. The scenario instead calls for Data loss prevention (DLP): Detects or blocks unauthorized movement of sensitive data.",
          "Data loss prevention (DLP): Detects or blocks unauthorized movement of sensitive data. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-3.3-7",
        "phase": "pre",
        "objective": "3.3",
        "concept": "Data minimization",
        "prompt": "A form stops collecting a birth date because no business function requires it. Which data-handling principle is applied?",
        "options": [
          "Data in use",
          "Data minimization",
          "Data loss prevention (DLP)",
          "Geographic restrictions"
        ],
        "correct": 1,
        "explanations": [
          "Data in use: Data is actively being processed. The scenario instead calls for Data minimization: Collects and retains only necessary data.",
          "Data minimization: Collects and retains only necessary data. This is the role or property required by the scenario.",
          "Data loss prevention (DLP): Detects or blocks unauthorized movement of sensitive data. The scenario instead calls for Data minimization: Collects and retains only necessary data.",
          "Geographic restrictions: Limit where data may reside or be accessed. The scenario instead calls for Data minimization: Collects and retains only necessary data."
        ]
      },
      {
        "id": "PRE-3.3-8",
        "phase": "pre",
        "objective": "3.3",
        "concept": "Data classification",
        "prompt": "A company labels information according to its sensitivity so handling requirements can be assigned. Which process is this?",
        "options": [
          "Data in transit",
          "Geographic restrictions",
          "Data at rest",
          "Data classification"
        ],
        "correct": 3,
        "explanations": [
          "Data in transit: Data is moving between endpoints. The scenario instead calls for Data classification: Labels information according to sensitivity and handling requirements.",
          "Geographic restrictions: Limit where data may reside or be accessed. The scenario instead calls for Data classification: Labels information according to sensitivity and handling requirements.",
          "Data at rest: Data is stored on a medium. The scenario instead calls for Data classification: Labels information according to sensitivity and handling requirements.",
          "Data classification: Labels information according to sensitivity and handling requirements. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-3.3-9",
        "phase": "pre",
        "objective": "3.3",
        "concept": "Data sovereignty",
        "prompt": "A company must account for the laws of the jurisdiction where its information resides. Which data-location concept is involved?",
        "options": [
          "Tokenization",
          "Data sovereignty",
          "Data at rest",
          "Data in use"
        ],
        "correct": 1,
        "explanations": [
          "Tokenization: Replaces sensitive values with surrogates linked through a protected mapping. The scenario instead calls for Data sovereignty: Data is subject to laws associated with its location or jurisdiction.",
          "Data sovereignty: Data is subject to laws associated with its location or jurisdiction. This is the role or property required by the scenario.",
          "Data at rest: Data is stored on a medium. The scenario instead calls for Data sovereignty: Data is subject to laws associated with its location or jurisdiction.",
          "Data in use: Data is actively being processed. The scenario instead calls for Data sovereignty: Data is subject to laws associated with its location or jurisdiction."
        ]
      },
      {
        "id": "PRE-3.3-10",
        "phase": "pre",
        "objective": "3.3",
        "concept": "Geographic restrictions",
        "prompt": "A policy permits access to a dataset only from approved geographic locations. Which access restriction is this?",
        "options": [
          "Data sovereignty",
          "Geographic restrictions",
          "Data loss prevention (DLP)",
          "Data masking"
        ],
        "correct": 1,
        "explanations": [
          "Data sovereignty: Data is subject to laws associated with its location or jurisdiction. The scenario instead calls for Geographic restrictions: Limit where data may reside or be accessed.",
          "Geographic restrictions: Limit where data may reside or be accessed. This is the role or property required by the scenario.",
          "Data loss prevention (DLP): Detects or blocks unauthorized movement of sensitive data. The scenario instead calls for Geographic restrictions: Limit where data may reside or be accessed.",
          "Data masking: Obscures selected data elements for display or limited use. The scenario instead calls for Geographic restrictions: Limit where data may reside or be accessed."
        ]
      }
    ]
  },
  "3.4": {
    "bridge": "Recovery is a business requirement translated into technical design and verified by exercises.",
    "teach": "RTO (Recovery Time Objective) is the target restoration interval; RPO (Recovery Point Objective) is acceptable data loss measured in time. Site readiness affects restoration speed. Redundancy, diverse dependencies, tested backups, and failover address different failure modes. A backup is not proven recoverable until restoration is tested.",
    "example": "If an outage begins at noon and the newest usable backup is from 11:45, fifteen minutes of records may be lost. That is a data-loss concern, separate from how long service takes to return. Two power feeds sharing an upstream source are not fully independent.",
    "watch": [
      "How much downtime and data loss are acceptable?",
      "What dependency could defeat both copies?",
      "Is the exercise discussion-only or an actual switch?"
    ],
    "questions": [
      {
        "id": "PRE-3.4-1",
        "phase": "pre",
        "objective": "3.4",
        "concept": "Recovery time objective (RTO)",
        "prompt": "A business requires a service to return within forty-five minutes after disruption. Which recovery target expresses that requirement?",
        "options": [
          "Cold site",
          "Diverse power sources",
          "Recovery time objective (RTO)",
          "Recovery point objective (RPO)"
        ],
        "correct": 2,
        "explanations": [
          "Cold site: A location provides basic space and utilities but little configured equipment. The scenario instead calls for Recovery time objective (RTO): Target maximum time to restore a service.",
          "Diverse power sources: Reduces common-mode power failure risk. The scenario instead calls for Recovery time objective (RTO): Target maximum time to restore a service.",
          "Recovery time objective (RTO): Target maximum time to restore a service. This is the role or property required by the scenario.",
          "Recovery point objective (RPO): Maximum acceptable data loss measured in time. The scenario instead calls for Recovery time objective (RTO): Target maximum time to restore a service."
        ]
      },
      {
        "id": "PRE-3.4-2",
        "phase": "pre",
        "objective": "3.4",
        "concept": "Recovery point objective (RPO)",
        "prompt": "A business accepts losing no more than five minutes of recent transactions after an outage. Which recovery target expresses that requirement?",
        "options": [
          "Cold site",
          "Recovery point objective (RPO)",
          "Load balancing",
          "Warm site"
        ],
        "correct": 1,
        "explanations": [
          "Cold site: A location provides basic space and utilities but little configured equipment. The scenario instead calls for Recovery point objective (RPO): Maximum acceptable data loss measured in time.",
          "Recovery point objective (RPO): Maximum acceptable data loss measured in time. This is the role or property required by the scenario.",
          "Load balancing: Distributes requests across multiple resources. The scenario instead calls for Recovery point objective (RPO): Maximum acceptable data loss measured in time.",
          "Warm site: Partially equipped recovery location requires further setup or restoration. The scenario instead calls for Recovery point objective (RPO): Maximum acceptable data loss measured in time."
        ]
      },
      {
        "id": "PRE-3.4-3",
        "phase": "pre",
        "objective": "3.4",
        "concept": "Hot site",
        "prompt": "An alternate facility has operating equipment and current replicated data ready for a rapid takeover. Which recovery site category fits?",
        "options": [
          "Cold site",
          "Hot site",
          "Recovery time objective (RTO)",
          "Immutable backup"
        ],
        "correct": 1,
        "explanations": [
          "Cold site: A location provides basic space and utilities but little configured equipment. The scenario instead calls for Hot site: An operational recovery location can take over rapidly.",
          "Hot site: An operational recovery location can take over rapidly. This is the role or property required by the scenario.",
          "Recovery time objective (RTO): Target maximum time to restore a service. The scenario instead calls for Hot site: An operational recovery location can take over rapidly.",
          "Immutable backup: Backup data cannot be altered during a defined retention period. The scenario instead calls for Hot site: An operational recovery location can take over rapidly."
        ]
      },
      {
        "id": "PRE-3.4-4",
        "phase": "pre",
        "objective": "3.4",
        "concept": "Warm site",
        "prompt": "An alternate facility has equipment and connectivity but requires additional preparation and data restoration before service begins. Which recovery site category fits?",
        "options": [
          "Warm site",
          "Hot site",
          "Cold site",
          "Tabletop exercise"
        ],
        "correct": 0,
        "explanations": [
          "Warm site: Partially equipped recovery location requires further setup or restoration. This is the role or property required by the scenario.",
          "Hot site: An operational recovery location can take over rapidly. The scenario instead calls for Warm site: Partially equipped recovery location requires further setup or restoration.",
          "Cold site: A location provides basic space and utilities but little configured equipment. The scenario instead calls for Warm site: Partially equipped recovery location requires further setup or restoration.",
          "Tabletop exercise: Discussion walks participants through a scenario. The scenario instead calls for Warm site: Partially equipped recovery location requires further setup or restoration."
        ]
      },
      {
        "id": "PRE-3.4-5",
        "phase": "pre",
        "objective": "3.4",
        "concept": "Cold site",
        "prompt": "An alternate location provides space and utilities but still requires computing equipment to be installed. Which recovery site category fits?",
        "options": [
          "Recovery time objective (RTO)",
          "Warm site",
          "Failover test",
          "Cold site"
        ],
        "correct": 3,
        "explanations": [
          "Recovery time objective (RTO): Target maximum time to restore a service. The scenario instead calls for Cold site: A location provides basic space and utilities but little configured equipment.",
          "Warm site: Partially equipped recovery location requires further setup or restoration. The scenario instead calls for Cold site: A location provides basic space and utilities but little configured equipment.",
          "Failover test: Validates transfer to redundant resources. The scenario instead calls for Cold site: A location provides basic space and utilities but little configured equipment.",
          "Cold site: A location provides basic space and utilities but little configured equipment. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-3.4-6",
        "phase": "pre",
        "objective": "3.4",
        "concept": "Immutable backup",
        "prompt": "A backup copy cannot be changed or deleted during its enforced retention interval. Which backup property is being used?",
        "options": [
          "Recovery point objective (RPO)",
          "Tabletop exercise",
          "Hot site",
          "Immutable backup"
        ],
        "correct": 3,
        "explanations": [
          "Recovery point objective (RPO): Maximum acceptable data loss measured in time. The scenario instead calls for Immutable backup: Backup data cannot be altered during a defined retention period.",
          "Tabletop exercise: Discussion walks participants through a scenario. The scenario instead calls for Immutable backup: Backup data cannot be altered during a defined retention period.",
          "Hot site: An operational recovery location can take over rapidly. The scenario instead calls for Immutable backup: Backup data cannot be altered during a defined retention period.",
          "Immutable backup: Backup data cannot be altered during a defined retention period. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-3.4-7",
        "phase": "pre",
        "objective": "3.4",
        "concept": "Tabletop exercise",
        "prompt": "Incident participants discuss their decisions against a fictional outage without switching production systems. Which exercise is this?",
        "options": [
          "Recovery time objective (RTO)",
          "Tabletop exercise",
          "Hot site",
          "Warm site"
        ],
        "correct": 1,
        "explanations": [
          "Recovery time objective (RTO): Target maximum time to restore a service. The scenario instead calls for Tabletop exercise: Discussion walks participants through a scenario.",
          "Tabletop exercise: Discussion walks participants through a scenario. This is the role or property required by the scenario.",
          "Hot site: An operational recovery location can take over rapidly. The scenario instead calls for Tabletop exercise: Discussion walks participants through a scenario.",
          "Warm site: Partially equipped recovery location requires further setup or restoration. The scenario instead calls for Tabletop exercise: Discussion walks participants through a scenario."
        ]
      },
      {
        "id": "PRE-3.4-8",
        "phase": "pre",
        "objective": "3.4",
        "concept": "Failover test",
        "prompt": "A team deliberately switches service to its standby environment to verify that it actually works. Which exercise is this?",
        "options": [
          "Load balancing",
          "Immutable backup",
          "Hot site",
          "Failover test"
        ],
        "correct": 3,
        "explanations": [
          "Load balancing: Distributes requests across multiple resources. The scenario instead calls for Failover test: Validates transfer to redundant resources.",
          "Immutable backup: Backup data cannot be altered during a defined retention period. The scenario instead calls for Failover test: Validates transfer to redundant resources.",
          "Hot site: An operational recovery location can take over rapidly. The scenario instead calls for Failover test: Validates transfer to redundant resources.",
          "Failover test: Validates transfer to redundant resources. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-3.4-9",
        "phase": "pre",
        "objective": "3.4",
        "concept": "Load balancing",
        "prompt": "Requests are distributed across multiple operating servers so no single server must handle the entire demand. Which resilience technique fits?",
        "options": [
          "Tabletop exercise",
          "Failover test",
          "Immutable backup",
          "Load balancing"
        ],
        "correct": 3,
        "explanations": [
          "Tabletop exercise: Discussion walks participants through a scenario. The scenario instead calls for Load balancing: Distributes requests across multiple resources.",
          "Failover test: Validates transfer to redundant resources. The scenario instead calls for Load balancing: Distributes requests across multiple resources.",
          "Immutable backup: Backup data cannot be altered during a defined retention period. The scenario instead calls for Load balancing: Distributes requests across multiple resources.",
          "Load balancing: Distributes requests across multiple resources. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-3.4-10",
        "phase": "pre",
        "objective": "3.4",
        "concept": "Diverse power sources",
        "prompt": "A facility designs its power paths to avoid dependence on the same upstream supply. Which resilience consideration is emphasized?",
        "options": [
          "Failover test",
          "Diverse power sources",
          "Warm site",
          "Tabletop exercise"
        ],
        "correct": 1,
        "explanations": [
          "Failover test: Validates transfer to redundant resources. The scenario instead calls for Diverse power sources: Reduces common-mode power failure risk.",
          "Diverse power sources: Reduces common-mode power failure risk. This is the role or property required by the scenario.",
          "Warm site: Partially equipped recovery location requires further setup or restoration. The scenario instead calls for Diverse power sources: Reduces common-mode power failure risk.",
          "Tabletop exercise: Discussion walks participants through a scenario. The scenario instead calls for Diverse power sources: Reduces common-mode power failure risk."
        ]
      }
    ]
  },
  "4.1": {
    "bridge": "Hardening starts with a known, approved configuration and then controls drift over time.",
    "teach": "A secure baseline defines required settings. Encryption protects stored data, while endpoint monitoring detects behavior. MDM (Mobile Device Management) manages devices; MAM (Mobile Application Management) targets apps and their data. Ownership models affect privacy and administrative scope. Input validation protects application boundaries.",
    "example": "A personally owned tablet may need a managed work application without a device-wide wipe. A corporate tablet may have centrally enforced device settings. Choose management scope from the requirement rather than assuming every mobile control is interchangeable.",
    "watch": [
      "What is being managed: device, app, account, or traffic?",
      "Who owns it?",
      "How will the secure baseline remain enforced?"
    ],
    "questions": [
      {
        "id": "PRE-4.1-1",
        "phase": "pre",
        "objective": "4.1",
        "concept": "Secure baseline",
        "prompt": "A company defines approved operating system settings that every new endpoint must match. Which hardening reference is this?",
        "options": [
          "Input validation",
          "Corporate-owned personally enabled (COPE)",
          "Bring your own device (BYOD)",
          "Secure baseline"
        ],
        "correct": 3,
        "explanations": [
          "Input validation: Checks submitted data against expected format and constraints. The scenario instead calls for Secure baseline: Defines approved minimum configuration.",
          "Corporate-owned personally enabled (COPE): The organization owns devices and permits personal use. The scenario instead calls for Secure baseline: Defines approved minimum configuration.",
          "Bring your own device (BYOD): Employees use personally owned devices for work. The scenario instead calls for Secure baseline: Defines approved minimum configuration.",
          "Secure baseline: Defines approved minimum configuration. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.1-2",
        "phase": "pre",
        "objective": "4.1",
        "concept": "Full-disk encryption",
        "prompt": "A lost laptop's entire storage volume should remain unreadable without the authorized unlock material. Which protection best fits that storage scope?",
        "options": [
          "Mobile device management (MDM)",
          "WPA3",
          "Full-disk encryption",
          "Bring your own device (BYOD)"
        ],
        "correct": 2,
        "explanations": [
          "Mobile device management (MDM): Centrally enforces mobile-device configuration and lifecycle controls. The scenario instead calls for Full-disk encryption: Protects stored disk contents from offline access.",
          "WPA3: Modern Wi-Fi security with stronger authentication protections. The scenario instead calls for Full-disk encryption: Protects stored disk contents from offline access.",
          "Full-disk encryption: Protects stored disk contents from offline access. This is the role or property required by the scenario.",
          "Bring your own device (BYOD): Employees use personally owned devices for work. The scenario instead calls for Full-disk encryption: Protects stored disk contents from offline access."
        ]
      },
      {
        "id": "PRE-4.1-3",
        "phase": "pre",
        "objective": "4.1",
        "concept": "Mobile device management (MDM)",
        "prompt": "A company centrally enforces device-wide passcode, encryption, and remote-wipe settings on its tablets. Which management capability fits?",
        "options": [
          "Bring your own device (BYOD)",
          "Input validation",
          "Mobile device management (MDM)",
          "Secure baseline"
        ],
        "correct": 2,
        "explanations": [
          "Bring your own device (BYOD): Employees use personally owned devices for work. The scenario instead calls for Mobile device management (MDM): Centrally enforces mobile-device configuration and lifecycle controls.",
          "Input validation: Checks submitted data against expected format and constraints. The scenario instead calls for Mobile device management (MDM): Centrally enforces mobile-device configuration and lifecycle controls.",
          "Mobile device management (MDM): Centrally enforces mobile-device configuration and lifecycle controls. This is the role or property required by the scenario.",
          "Secure baseline: Defines approved minimum configuration. The scenario instead calls for Mobile device management (MDM): Centrally enforces mobile-device configuration and lifecycle controls."
        ]
      },
      {
        "id": "PRE-4.1-4",
        "phase": "pre",
        "objective": "4.1",
        "concept": "Mobile application management (MAM)",
        "prompt": "A company restricts copying and selectively removes data inside managed business apps without wiping the personal device. Which management capability fits?",
        "options": [
          "Mobile application management (MAM)",
          "Corporate-owned personally enabled (COPE)",
          "Mobile device management (MDM)",
          "802.1X"
        ],
        "correct": 0,
        "explanations": [
          "Mobile application management (MAM): Manages corporate applications and their data. This is the role or property required by the scenario.",
          "Corporate-owned personally enabled (COPE): The organization owns devices and permits personal use. The scenario instead calls for Mobile application management (MAM): Manages corporate applications and their data.",
          "Mobile device management (MDM): Centrally enforces mobile-device configuration and lifecycle controls. The scenario instead calls for Mobile application management (MAM): Manages corporate applications and their data.",
          "802.1X: Port-based access authentication. The scenario instead calls for Mobile application management (MAM): Manages corporate applications and their data."
        ]
      },
      {
        "id": "PRE-4.1-5",
        "phase": "pre",
        "objective": "4.1",
        "concept": "Bring your own device (BYOD)",
        "prompt": "Employees use phones they personally own for work activities. Which ownership model is this?",
        "options": [
          "Bring your own device (BYOD)",
          "WPA3",
          "Endpoint detection and response (EDR)",
          "Corporate-owned personally enabled (COPE)"
        ],
        "correct": 0,
        "explanations": [
          "Bring your own device (BYOD): Employees use personally owned devices for work. This is the role or property required by the scenario.",
          "WPA3: Modern Wi-Fi security with stronger authentication protections. The scenario instead calls for Bring your own device (BYOD): Employees use personally owned devices for work.",
          "Endpoint detection and response (EDR): Monitors endpoint behavior and supports investigation and containment. The scenario instead calls for Bring your own device (BYOD): Employees use personally owned devices for work.",
          "Corporate-owned personally enabled (COPE): The organization owns devices and permits personal use. The scenario instead calls for Bring your own device (BYOD): Employees use personally owned devices for work."
        ]
      },
      {
        "id": "PRE-4.1-6",
        "phase": "pre",
        "objective": "4.1",
        "concept": "Corporate-owned personally enabled (COPE)",
        "prompt": "The employer owns the phones but allows approved personal use. Which ownership model is this?",
        "options": [
          "Mobile application management (MAM)",
          "Endpoint detection and response (EDR)",
          "Corporate-owned personally enabled (COPE)",
          "Input validation"
        ],
        "correct": 2,
        "explanations": [
          "Mobile application management (MAM): Manages corporate applications and their data. The scenario instead calls for Corporate-owned personally enabled (COPE): The organization owns devices and permits personal use.",
          "Endpoint detection and response (EDR): Monitors endpoint behavior and supports investigation and containment. The scenario instead calls for Corporate-owned personally enabled (COPE): The organization owns devices and permits personal use.",
          "Corporate-owned personally enabled (COPE): The organization owns devices and permits personal use. This is the role or property required by the scenario.",
          "Input validation: Checks submitted data against expected format and constraints. The scenario instead calls for Corporate-owned personally enabled (COPE): The organization owns devices and permits personal use."
        ]
      },
      {
        "id": "PRE-4.1-7",
        "phase": "pre",
        "objective": "4.1",
        "concept": "WPA3",
        "prompt": "A wireless deployment is upgrading to the newer Wi-Fi security generation that supports SAE for personal authentication. Which named generation fits?",
        "options": [
          "Bring your own device (BYOD)",
          "Secure baseline",
          "WPA3",
          "Corporate-owned personally enabled (COPE)"
        ],
        "correct": 2,
        "explanations": [
          "Bring your own device (BYOD): Employees use personally owned devices for work. The scenario instead calls for WPA3: Modern Wi-Fi security with stronger authentication protections.",
          "Secure baseline: Defines approved minimum configuration. The scenario instead calls for WPA3: Modern Wi-Fi security with stronger authentication protections.",
          "WPA3: Modern Wi-Fi security with stronger authentication protections. This is the role or property required by the scenario.",
          "Corporate-owned personally enabled (COPE): The organization owns devices and permits personal use. The scenario instead calls for WPA3: Modern Wi-Fi security with stronger authentication protections."
        ]
      },
      {
        "id": "PRE-4.1-8",
        "phase": "pre",
        "objective": "4.1",
        "concept": "802.1X",
        "prompt": "A wired switch requires a supplicant to authenticate through an authenticator before normal port access is permitted. Which standard provides this model?",
        "options": [
          "Mobile device management (MDM)",
          "802.1X",
          "Endpoint detection and response (EDR)",
          "Input validation"
        ],
        "correct": 1,
        "explanations": [
          "Mobile device management (MDM): Centrally enforces mobile-device configuration and lifecycle controls. The scenario instead calls for 802.1X: Port-based access authentication.",
          "802.1X: Port-based access authentication. This is the role or property required by the scenario.",
          "Endpoint detection and response (EDR): Monitors endpoint behavior and supports investigation and containment. The scenario instead calls for 802.1X: Port-based access authentication.",
          "Input validation: Checks submitted data against expected format and constraints. The scenario instead calls for 802.1X: Port-based access authentication."
        ]
      },
      {
        "id": "PRE-4.1-9",
        "phase": "pre",
        "objective": "4.1",
        "concept": "Input validation",
        "prompt": "A service rejects an entered quantity outside the allowed numeric range before processing it. Which application protection is applied?",
        "options": [
          "Input validation",
          "Secure baseline",
          "Mobile device management (MDM)",
          "Bring your own device (BYOD)"
        ],
        "correct": 0,
        "explanations": [
          "Input validation: Checks submitted data against expected format and constraints. This is the role or property required by the scenario.",
          "Secure baseline: Defines approved minimum configuration. The scenario instead calls for Input validation: Checks submitted data against expected format and constraints.",
          "Mobile device management (MDM): Centrally enforces mobile-device configuration and lifecycle controls. The scenario instead calls for Input validation: Checks submitted data against expected format and constraints.",
          "Bring your own device (BYOD): Employees use personally owned devices for work. The scenario instead calls for Input validation: Checks submitted data against expected format and constraints."
        ]
      },
      {
        "id": "PRE-4.1-10",
        "phase": "pre",
        "objective": "4.1",
        "concept": "Endpoint detection and response (EDR)",
        "prompt": "A host agent records suspicious process activity and can isolate the endpoint during investigation. Which endpoint capability fits?",
        "options": [
          "Endpoint detection and response (EDR)",
          "WPA3",
          "Input validation",
          "Mobile device management (MDM)"
        ],
        "correct": 0,
        "explanations": [
          "Endpoint detection and response (EDR): Monitors endpoint behavior and supports investigation and containment. This is the role or property required by the scenario.",
          "WPA3: Modern Wi-Fi security with stronger authentication protections. The scenario instead calls for Endpoint detection and response (EDR): Monitors endpoint behavior and supports investigation and containment.",
          "Input validation: Checks submitted data against expected format and constraints. The scenario instead calls for Endpoint detection and response (EDR): Monitors endpoint behavior and supports investigation and containment.",
          "Mobile device management (MDM): Centrally enforces mobile-device configuration and lifecycle controls. The scenario instead calls for Endpoint detection and response (EDR): Monitors endpoint behavior and supports investigation and containment."
        ]
      }
    ]
  },
  "4.2": {
    "bridge": "You cannot protect assets reliably if you do not know what exists, who owns it, and where it is in its lifecycle.",
    "teach": "Manage acquisition, assignment, operation, retention, and disposal. Owners make accountability and classification decisions; custodians perform care and maintenance. An inventory records assets; a tag ties a physical item to its record. Retention is not indefinite storage. Sanitization must suit the medium and sensitivity.",
    "example": "Before a leased device leaves the organization, verify the asset record, retention obligations, approved sanitization, and evidence of disposal. Deleting a file name is not equivalent to removing recoverable data from the storage medium.",
    "watch": [
      "Who is accountable versus maintaining the asset?",
      "What records must be retained?",
      "What evidence proves safe disposition?"
    ],
    "questions": [
      {
        "id": "PRE-4.2-1",
        "phase": "pre",
        "objective": "4.2",
        "concept": "Asset inventory",
        "prompt": "A team needs a maintained record of deployed hardware, software versions, and assigned locations. Which asset-management resource supplies it?",
        "options": [
          "Cryptographic erase",
          "Software license management",
          "Asset owner",
          "Asset inventory"
        ],
        "correct": 3,
        "explanations": [
          "Cryptographic erase: Destroys encryption keys so encrypted data becomes inaccessible. The scenario instead calls for Asset inventory: Records organizational assets.",
          "Software license management: Tracks authorized software entitlements and use. The scenario instead calls for Asset inventory: Records organizational assets.",
          "Asset owner: Is accountable for an asset's business use and protection decisions. The scenario instead calls for Asset inventory: Records organizational assets.",
          "Asset inventory: Records organizational assets. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.2-2",
        "phase": "pre",
        "objective": "4.2",
        "concept": "Asset owner",
        "prompt": "A person is accountable for deciding an asset's business use and required protection. Which asset role fits?",
        "options": [
          "Asset owner",
          "Software license management",
          "Asset custodian",
          "Sanitization"
        ],
        "correct": 0,
        "explanations": [
          "Asset owner: Is accountable for an asset's business use and protection decisions. This is the role or property required by the scenario.",
          "Software license management: Tracks authorized software entitlements and use. The scenario instead calls for Asset owner: Is accountable for an asset's business use and protection decisions.",
          "Asset custodian: Performs day-to-day handling and technical protection. The scenario instead calls for Asset owner: Is accountable for an asset's business use and protection decisions.",
          "Sanitization: Makes stored data unrecoverable according to its sensitivity and media. The scenario instead calls for Asset owner: Is accountable for an asset's business use and protection decisions."
        ]
      },
      {
        "id": "PRE-4.2-3",
        "phase": "pre",
        "objective": "4.2",
        "concept": "Asset custodian",
        "prompt": "A team performs routine maintenance and applies the protection decisions made by the asset owner. Which role does it perform?",
        "options": [
          "Asset inventory",
          "Asset custodian",
          "Data retention",
          "Certificate of destruction"
        ],
        "correct": 1,
        "explanations": [
          "Asset inventory: Records organizational assets. The scenario instead calls for Asset custodian: Performs day-to-day handling and technical protection.",
          "Asset custodian: Performs day-to-day handling and technical protection. This is the role or property required by the scenario.",
          "Data retention: Defines how long information must be kept. The scenario instead calls for Asset custodian: Performs day-to-day handling and technical protection.",
          "Certificate of destruction: Documents that a destruction service completed disposal. The scenario instead calls for Asset custodian: Performs day-to-day handling and technical protection."
        ]
      },
      {
        "id": "PRE-4.2-4",
        "phase": "pre",
        "objective": "4.2",
        "concept": "Asset tagging",
        "prompt": "A laptop receives a unique physical identifier linked to its inventory record. Which asset practice is this?",
        "options": [
          "Asset tagging",
          "Sanitization",
          "Cryptographic erase",
          "Asset inventory"
        ],
        "correct": 0,
        "explanations": [
          "Asset tagging: Attaches identifiers that support tracking. This is the role or property required by the scenario.",
          "Sanitization: Makes stored data unrecoverable according to its sensitivity and media. The scenario instead calls for Asset tagging: Attaches identifiers that support tracking.",
          "Cryptographic erase: Destroys encryption keys so encrypted data becomes inaccessible. The scenario instead calls for Asset tagging: Attaches identifiers that support tracking.",
          "Asset inventory: Records organizational assets. The scenario instead calls for Asset tagging: Attaches identifiers that support tracking."
        ]
      },
      {
        "id": "PRE-4.2-5",
        "phase": "pre",
        "objective": "4.2",
        "concept": "Procurement review",
        "prompt": "A team evaluates a product's security and support requirements before approving its purchase. Which acquisition activity is this?",
        "options": [
          "Procurement review",
          "Asset inventory",
          "Asset owner",
          "Cryptographic erase"
        ],
        "correct": 0,
        "explanations": [
          "Procurement review: Evaluates requirements and risk before acquisition. This is the role or property required by the scenario.",
          "Asset inventory: Records organizational assets. The scenario instead calls for Procurement review: Evaluates requirements and risk before acquisition.",
          "Asset owner: Is accountable for an asset's business use and protection decisions. The scenario instead calls for Procurement review: Evaluates requirements and risk before acquisition.",
          "Cryptographic erase: Destroys encryption keys so encrypted data becomes inaccessible. The scenario instead calls for Procurement review: Evaluates requirements and risk before acquisition."
        ]
      },
      {
        "id": "PRE-4.2-6",
        "phase": "pre",
        "objective": "4.2",
        "concept": "Software license management",
        "prompt": "A business tracks purchased software entitlements against installed copies. Which asset-management activity is this?",
        "options": [
          "Procurement review",
          "Asset custodian",
          "Software license management",
          "Asset owner"
        ],
        "correct": 2,
        "explanations": [
          "Procurement review: Evaluates requirements and risk before acquisition. The scenario instead calls for Software license management: Tracks authorized software entitlements and use.",
          "Asset custodian: Performs day-to-day handling and technical protection. The scenario instead calls for Software license management: Tracks authorized software entitlements and use.",
          "Software license management: Tracks authorized software entitlements and use. This is the role or property required by the scenario.",
          "Asset owner: Is accountable for an asset's business use and protection decisions. The scenario instead calls for Software license management: Tracks authorized software entitlements and use."
        ]
      },
      {
        "id": "PRE-4.2-7",
        "phase": "pre",
        "objective": "4.2",
        "concept": "Data retention",
        "prompt": "A record schedule defines how long business documents must be kept before approved disposition. Which lifecycle concern is this?",
        "options": [
          "Asset custodian",
          "Sanitization",
          "Procurement review",
          "Data retention"
        ],
        "correct": 3,
        "explanations": [
          "Asset custodian: Performs day-to-day handling and technical protection. The scenario instead calls for Data retention: Defines how long information must be kept.",
          "Sanitization: Makes stored data unrecoverable according to its sensitivity and media. The scenario instead calls for Data retention: Defines how long information must be kept.",
          "Procurement review: Evaluates requirements and risk before acquisition. The scenario instead calls for Data retention: Defines how long information must be kept.",
          "Data retention: Defines how long information must be kept. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.2-8",
        "phase": "pre",
        "objective": "4.2",
        "concept": "Sanitization",
        "prompt": "A storage device must have sensitive information removed using an approved method suitable for its medium. Which general disposal process is required?",
        "options": [
          "Asset custodian",
          "Cryptographic erase",
          "Asset tagging",
          "Sanitization"
        ],
        "correct": 3,
        "explanations": [
          "Asset custodian: Performs day-to-day handling and technical protection. The scenario instead calls for Sanitization: Makes stored data unrecoverable according to its sensitivity and media.",
          "Cryptographic erase: Destroys encryption keys so encrypted data becomes inaccessible. The scenario instead calls for Sanitization: Makes stored data unrecoverable according to its sensitivity and media.",
          "Asset tagging: Attaches identifiers that support tracking. The scenario instead calls for Sanitization: Makes stored data unrecoverable according to its sensitivity and media.",
          "Sanitization: Makes stored data unrecoverable according to its sensitivity and media. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.2-9",
        "phase": "pre",
        "objective": "4.2",
        "concept": "Cryptographic erase",
        "prompt": "A device's data is encrypted with a properly managed key, and an approved process securely destroys the necessary key material to make the data inaccessible. Which sanitization method is this?",
        "options": [
          "Procurement review",
          "Sanitization",
          "Asset owner",
          "Cryptographic erase"
        ],
        "correct": 3,
        "explanations": [
          "Procurement review: Evaluates requirements and risk before acquisition. The scenario instead calls for Cryptographic erase: Destroys encryption keys so encrypted data becomes inaccessible.",
          "Sanitization: Makes stored data unrecoverable according to its sensitivity and media. The scenario instead calls for Cryptographic erase: Destroys encryption keys so encrypted data becomes inaccessible.",
          "Asset owner: Is accountable for an asset's business use and protection decisions. The scenario instead calls for Cryptographic erase: Destroys encryption keys so encrypted data becomes inaccessible.",
          "Cryptographic erase: Destroys encryption keys so encrypted data becomes inaccessible. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.2-10",
        "phase": "pre",
        "objective": "4.2",
        "concept": "Certificate of destruction",
        "prompt": "A disposal provider issues a record confirming that specified assets were physically destroyed. What evidence document is this?",
        "options": [
          "Asset tagging",
          "Certificate of destruction",
          "Software license management",
          "Procurement review"
        ],
        "correct": 1,
        "explanations": [
          "Asset tagging: Attaches identifiers that support tracking. The scenario instead calls for Certificate of destruction: Documents that a destruction service completed disposal.",
          "Certificate of destruction: Documents that a destruction service completed disposal. This is the role or property required by the scenario.",
          "Software license management: Tracks authorized software entitlements and use. The scenario instead calls for Certificate of destruction: Documents that a destruction service completed disposal.",
          "Procurement review: Evaluates requirements and risk before acquisition. The scenario instead calls for Certificate of destruction: Documents that a destruction service completed disposal."
        ]
      }
    ]
  },
  "4.3": {
    "bridge": "A scanner produces findings, not an automatically correct remediation order.",
    "teach": "Validate findings, prioritize by severity plus exposure and business impact, choose treatment, implement it, and rescan. Credentialed scans can inspect authenticated configuration. A false positive reports a problem that is not present; a false negative misses one that is. SAST (Static Application Security Testing) examines code without execution; DAST (Dynamic Application Security Testing) tests running behavior.",
    "example": "A critical flaw on an isolated test host may be less urgent than a lower-scored flaw actively exploited on a public business service. If a patch cannot be applied, document a compensating mitigation and verify it rather than declaring the flaw nonexistent.",
    "watch": [
      "Is the finding real?",
      "What changes its business priority?",
      "What evidence will confirm remediation?"
    ],
    "questions": [
      {
        "id": "PRE-4.3-1",
        "phase": "pre",
        "objective": "4.3",
        "concept": "Credentialed scanning",
        "prompt": "A scanner is given valid system credentials so it can inspect internal settings and installed patches. Which scanning approach is this?",
        "options": [
          "Static application security testing (SAST)",
          "Noncredentialed scanning",
          "Compensating mitigation",
          "Credentialed scanning"
        ],
        "correct": 3,
        "explanations": [
          "Static application security testing (SAST): Examines code without running the application. The scenario instead calls for Credentialed scanning: Uses authorized credentials for deeper system inspection.",
          "Noncredentialed scanning: Examines externally visible behavior without logging in. The scenario instead calls for Credentialed scanning: Uses authorized credentials for deeper system inspection.",
          "Compensating mitigation: Reduces exposure while a direct fix is unavailable. The scenario instead calls for Credentialed scanning: Uses authorized credentials for deeper system inspection.",
          "Credentialed scanning: Uses authorized credentials for deeper system inspection. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.3-2",
        "phase": "pre",
        "objective": "4.3",
        "concept": "Noncredentialed scanning",
        "prompt": "A scanner evaluates a host only from what is exposed over the network, without logging into it. Which scanning approach is this?",
        "options": [
          "Noncredentialed scanning",
          "Dynamic application security testing (DAST)",
          "Compensating mitigation",
          "CVSS severity"
        ],
        "correct": 0,
        "explanations": [
          "Noncredentialed scanning: Examines externally visible behavior without logging in. This is the role or property required by the scenario.",
          "Dynamic application security testing (DAST): Tests a running application from the outside. The scenario instead calls for Noncredentialed scanning: Examines externally visible behavior without logging in.",
          "Compensating mitigation: Reduces exposure while a direct fix is unavailable. The scenario instead calls for Noncredentialed scanning: Examines externally visible behavior without logging in.",
          "CVSS severity: Standardized technical vulnerability severity scoring. The scenario instead calls for Noncredentialed scanning: Examines externally visible behavior without logging in."
        ]
      },
      {
        "id": "PRE-4.3-3",
        "phase": "pre",
        "objective": "4.3",
        "concept": "False positive",
        "prompt": "A scanner reports a vulnerability, but validation establishes that the vulnerable condition is not present. What kind of detection error occurred?",
        "options": [
          "Risk-based prioritization",
          "Dynamic application security testing (DAST)",
          "Credentialed scanning",
          "False positive"
        ],
        "correct": 3,
        "explanations": [
          "Risk-based prioritization: Combines severity with exposure, exploitation, and business impact. The scenario instead calls for False positive: A reported issue is not actually present.",
          "Dynamic application security testing (DAST): Tests a running application from the outside. The scenario instead calls for False positive: A reported issue is not actually present.",
          "Credentialed scanning: Uses authorized credentials for deeper system inspection. The scenario instead calls for False positive: A reported issue is not actually present.",
          "False positive: A reported issue is not actually present. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.3-4",
        "phase": "pre",
        "objective": "4.3",
        "concept": "False negative",
        "prompt": "A vulnerable condition exists, but the scanner fails to report it. What kind of detection error occurred?",
        "options": [
          "False positive",
          "Compensating mitigation",
          "False negative",
          "CVSS severity"
        ],
        "correct": 2,
        "explanations": [
          "False positive: A reported issue is not actually present. The scenario instead calls for False negative: A real issue is missed.",
          "Compensating mitigation: Reduces exposure while a direct fix is unavailable. The scenario instead calls for False negative: A real issue is missed.",
          "False negative: A real issue is missed. This is the role or property required by the scenario.",
          "CVSS severity: Standardized technical vulnerability severity scoring. The scenario instead calls for False negative: A real issue is missed."
        ]
      },
      {
        "id": "PRE-4.3-5",
        "phase": "pre",
        "objective": "4.3",
        "concept": "CVSS severity",
        "prompt": "An analyst needs a standardized measure of a vulnerability's technical severity, rather than a complete business-risk decision. Which measure fits?",
        "options": [
          "Compensating mitigation",
          "Risk-based prioritization",
          "Credentialed scanning",
          "CVSS severity"
        ],
        "correct": 3,
        "explanations": [
          "Compensating mitigation: Reduces exposure while a direct fix is unavailable. The scenario instead calls for CVSS severity: Standardized technical vulnerability severity scoring.",
          "Risk-based prioritization: Combines severity with exposure, exploitation, and business impact. The scenario instead calls for CVSS severity: Standardized technical vulnerability severity scoring.",
          "Credentialed scanning: Uses authorized credentials for deeper system inspection. The scenario instead calls for CVSS severity: Standardized technical vulnerability severity scoring.",
          "CVSS severity: Standardized technical vulnerability severity scoring. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.3-6",
        "phase": "pre",
        "objective": "4.3",
        "concept": "Risk-based prioritization",
        "prompt": "A team orders remediation using exploitation evidence, external exposure, service importance, and severity together. Which prioritization approach is this?",
        "options": [
          "Noncredentialed scanning",
          "False negative",
          "Risk-based prioritization",
          "Dynamic application security testing (DAST)"
        ],
        "correct": 2,
        "explanations": [
          "Noncredentialed scanning: Examines externally visible behavior without logging in. The scenario instead calls for Risk-based prioritization: Combines severity with exposure, exploitation, and business impact.",
          "False negative: A real issue is missed. The scenario instead calls for Risk-based prioritization: Combines severity with exposure, exploitation, and business impact.",
          "Risk-based prioritization: Combines severity with exposure, exploitation, and business impact. This is the role or property required by the scenario.",
          "Dynamic application security testing (DAST): Tests a running application from the outside. The scenario instead calls for Risk-based prioritization: Combines severity with exposure, exploitation, and business impact."
        ]
      },
      {
        "id": "PRE-4.3-7",
        "phase": "pre",
        "objective": "4.3",
        "concept": "Compensating mitigation",
        "prompt": "A vendor fix cannot be deployed immediately, so the team uses a documented alternative restriction to reduce exploitation risk. Which treatment is this?",
        "options": [
          "Compensating mitigation",
          "Static application security testing (SAST)",
          "False positive",
          "Dynamic application security testing (DAST)"
        ],
        "correct": 0,
        "explanations": [
          "Compensating mitigation: Reduces exposure while a direct fix is unavailable. This is the role or property required by the scenario.",
          "Static application security testing (SAST): Examines code without running the application. The scenario instead calls for Compensating mitigation: Reduces exposure while a direct fix is unavailable.",
          "False positive: A reported issue is not actually present. The scenario instead calls for Compensating mitigation: Reduces exposure while a direct fix is unavailable.",
          "Dynamic application security testing (DAST): Tests a running application from the outside. The scenario instead calls for Compensating mitigation: Reduces exposure while a direct fix is unavailable."
        ]
      },
      {
        "id": "PRE-4.3-8",
        "phase": "pre",
        "objective": "4.3",
        "concept": "Rescanning",
        "prompt": "A team runs the relevant vulnerability checks again after remediation to verify the finding is resolved. Which validation activity is this?",
        "options": [
          "False positive",
          "Credentialed scanning",
          "CVSS severity",
          "Rescanning"
        ],
        "correct": 3,
        "explanations": [
          "False positive: A reported issue is not actually present. The scenario instead calls for Rescanning: Verifies remediation effectiveness.",
          "Credentialed scanning: Uses authorized credentials for deeper system inspection. The scenario instead calls for Rescanning: Verifies remediation effectiveness.",
          "CVSS severity: Standardized technical vulnerability severity scoring. The scenario instead calls for Rescanning: Verifies remediation effectiveness.",
          "Rescanning: Verifies remediation effectiveness. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.3-9",
        "phase": "pre",
        "objective": "4.3",
        "concept": "Static application security testing (SAST)",
        "prompt": "A testing tool inspects application source code for weaknesses without running the application. Which testing approach fits?",
        "options": [
          "Noncredentialed scanning",
          "Static application security testing (SAST)",
          "Credentialed scanning",
          "False negative"
        ],
        "correct": 1,
        "explanations": [
          "Noncredentialed scanning: Examines externally visible behavior without logging in. The scenario instead calls for Static application security testing (SAST): Examines code without running the application.",
          "Static application security testing (SAST): Examines code without running the application. This is the role or property required by the scenario.",
          "Credentialed scanning: Uses authorized credentials for deeper system inspection. The scenario instead calls for Static application security testing (SAST): Examines code without running the application.",
          "False negative: A real issue is missed. The scenario instead calls for Static application security testing (SAST): Examines code without running the application."
        ]
      },
      {
        "id": "PRE-4.3-10",
        "phase": "pre",
        "objective": "4.3",
        "concept": "Dynamic application security testing (DAST)",
        "prompt": "A testing tool sends crafted input to an executing application and observes its responses. Which testing approach fits?",
        "options": [
          "Risk-based prioritization",
          "Rescanning",
          "Dynamic application security testing (DAST)",
          "Static application security testing (SAST)"
        ],
        "correct": 2,
        "explanations": [
          "Risk-based prioritization: Combines severity with exposure, exploitation, and business impact. The scenario instead calls for Dynamic application security testing (DAST): Tests a running application from the outside.",
          "Rescanning: Verifies remediation effectiveness. The scenario instead calls for Dynamic application security testing (DAST): Tests a running application from the outside.",
          "Dynamic application security testing (DAST): Tests a running application from the outside. This is the role or property required by the scenario.",
          "Static application security testing (SAST): Examines code without running the application. The scenario instead calls for Dynamic application security testing (DAST): Tests a running application from the outside."
        ]
      }
    ]
  },
  "4.4": {
    "bridge": "Useful monitoring requires trustworthy collection, context, and a response path—not simply more alerts.",
    "teach": "Aggregate records, synchronize time, establish normal behavior, correlate events, and tune detections. SIEM (Security Information and Event Management) correlates security data; SOAR (Security Orchestration, Automation, and Response) coordinates workflows. Flow metadata summarizes communications; a packet capture contains more detailed traffic evidence.",
    "example": "An outbound connection by itself may be normal. Connect it with an unusual sign-in, a new process, and the same timestamps to build an investigation. Tune a noisy detection carefully so reducing false alerts does not hide the behavior you intended to detect.",
    "watch": [
      "Which source contains the needed detail?",
      "Are clocks aligned?",
      "Is the tool collecting, correlating, or acting?"
    ],
    "questions": [
      {
        "id": "PRE-4.4-1",
        "phase": "pre",
        "objective": "4.4",
        "concept": "Security information and event management (SIEM)",
        "prompt": "A security platform combines records from identity, network, and host systems to correlate suspicious events. Which capability fits?",
        "options": [
          "Baseline behavior",
          "Security information and event management (SIEM)",
          "Alert tuning",
          "NetFlow metadata"
        ],
        "correct": 1,
        "explanations": [
          "Baseline behavior: Describes normal activity for comparison. The scenario instead calls for Security information and event management (SIEM): Aggregates and correlates security logs.",
          "Security information and event management (SIEM): Aggregates and correlates security logs. This is the role or property required by the scenario.",
          "Alert tuning: Adjusts detection rules to improve useful signal. The scenario instead calls for Security information and event management (SIEM): Aggregates and correlates security logs.",
          "NetFlow metadata: Summarizes communication endpoints and volumes without full payloads. The scenario instead calls for Security information and event management (SIEM): Aggregates and correlates security logs."
        ]
      },
      {
        "id": "PRE-4.4-2",
        "phase": "pre",
        "objective": "4.4",
        "concept": "Security orchestration automation and response (SOAR)",
        "prompt": "A platform coordinates a response playbook across ticketing, endpoint isolation, and network blocking tools. Which capability fits?",
        "options": [
          "Packet capture",
          "Security orchestration automation and response (SOAR)",
          "Security information and event management (SIEM)",
          "Alert tuning"
        ],
        "correct": 1,
        "explanations": [
          "Packet capture: Records network packets for detailed inspection. The scenario instead calls for Security orchestration automation and response (SOAR): Automates response workflows across tools.",
          "Security orchestration automation and response (SOAR): Automates response workflows across tools. This is the role or property required by the scenario.",
          "Security information and event management (SIEM): Aggregates and correlates security logs. The scenario instead calls for Security orchestration automation and response (SOAR): Automates response workflows across tools.",
          "Alert tuning: Adjusts detection rules to improve useful signal. The scenario instead calls for Security orchestration automation and response (SOAR): Automates response workflows across tools."
        ]
      },
      {
        "id": "PRE-4.4-3",
        "phase": "pre",
        "objective": "4.4",
        "concept": "Log aggregation",
        "prompt": "A team forwards records from many systems into one collection point without yet describing correlation or response. Which data-handling activity is this?",
        "options": [
          "Threat intelligence",
          "Log aggregation",
          "Security information and event management (SIEM)",
          "Security orchestration automation and response (SOAR)"
        ],
        "correct": 1,
        "explanations": [
          "Threat intelligence: Context about threats and indicators informs detection. The scenario instead calls for Log aggregation: Collects logs from many sources.",
          "Log aggregation: Collects logs from many sources. This is the role or property required by the scenario.",
          "Security information and event management (SIEM): Aggregates and correlates security logs. The scenario instead calls for Log aggregation: Collects logs from many sources.",
          "Security orchestration automation and response (SOAR): Automates response workflows across tools. The scenario instead calls for Log aggregation: Collects logs from many sources."
        ]
      },
      {
        "id": "PRE-4.4-4",
        "phase": "pre",
        "objective": "4.4",
        "concept": "Alert tuning",
        "prompt": "A detection rule repeatedly flags a legitimate scheduled task, so analysts refine its conditions while preserving detection of malicious behavior. Which activity is this?",
        "options": [
          "Security orchestration automation and response (SOAR)",
          "Baseline behavior",
          "Alert tuning",
          "File integrity monitoring"
        ],
        "correct": 2,
        "explanations": [
          "Security orchestration automation and response (SOAR): Automates response workflows across tools. The scenario instead calls for Alert tuning: Adjusts detection rules to improve useful signal.",
          "Baseline behavior: Describes normal activity for comparison. The scenario instead calls for Alert tuning: Adjusts detection rules to improve useful signal.",
          "Alert tuning: Adjusts detection rules to improve useful signal. This is the role or property required by the scenario.",
          "File integrity monitoring: Detects unauthorized file changes. The scenario instead calls for Alert tuning: Adjusts detection rules to improve useful signal."
        ]
      },
      {
        "id": "PRE-4.4-5",
        "phase": "pre",
        "objective": "4.4",
        "concept": "File integrity monitoring",
        "prompt": "A tool compares protected configuration files with trusted versions and alerts when their contents change. Which monitoring capability fits?",
        "options": [
          "Log aggregation",
          "File integrity monitoring",
          "Packet capture",
          "Threat intelligence"
        ],
        "correct": 1,
        "explanations": [
          "Log aggregation: Collects logs from many sources. The scenario instead calls for File integrity monitoring: Detects unauthorized file changes.",
          "File integrity monitoring: Detects unauthorized file changes. This is the role or property required by the scenario.",
          "Packet capture: Records network packets for detailed inspection. The scenario instead calls for File integrity monitoring: Detects unauthorized file changes.",
          "Threat intelligence: Context about threats and indicators informs detection. The scenario instead calls for File integrity monitoring: Detects unauthorized file changes."
        ]
      },
      {
        "id": "PRE-4.4-6",
        "phase": "pre",
        "objective": "4.4",
        "concept": "NetFlow metadata",
        "prompt": "An analyst needs conversation summaries containing source, destination, ports, and traffic volume, rather than packet contents. Which telemetry type fits?",
        "options": [
          "Threat intelligence",
          "NetFlow metadata",
          "Baseline behavior",
          "Log aggregation"
        ],
        "correct": 1,
        "explanations": [
          "Threat intelligence: Context about threats and indicators informs detection. The scenario instead calls for NetFlow metadata: Summarizes communication endpoints and volumes without full payloads.",
          "NetFlow metadata: Summarizes communication endpoints and volumes without full payloads. This is the role or property required by the scenario.",
          "Baseline behavior: Describes normal activity for comparison. The scenario instead calls for NetFlow metadata: Summarizes communication endpoints and volumes without full payloads.",
          "Log aggregation: Collects logs from many sources. The scenario instead calls for NetFlow metadata: Summarizes communication endpoints and volumes without full payloads."
        ]
      },
      {
        "id": "PRE-4.4-7",
        "phase": "pre",
        "objective": "4.4",
        "concept": "Packet capture",
        "prompt": "An analyst needs recorded network packets for detailed inspection, subject to encryption and capture limits. Which evidence collection fits?",
        "options": [
          "Security orchestration automation and response (SOAR)",
          "NetFlow metadata",
          "Packet capture",
          "Security information and event management (SIEM)"
        ],
        "correct": 2,
        "explanations": [
          "Security orchestration automation and response (SOAR): Automates response workflows across tools. The scenario instead calls for Packet capture: Records network packets for detailed inspection.",
          "NetFlow metadata: Summarizes communication endpoints and volumes without full payloads. The scenario instead calls for Packet capture: Records network packets for detailed inspection.",
          "Packet capture: Records network packets for detailed inspection. This is the role or property required by the scenario.",
          "Security information and event management (SIEM): Aggregates and correlates security logs. The scenario instead calls for Packet capture: Records network packets for detailed inspection."
        ]
      },
      {
        "id": "PRE-4.4-8",
        "phase": "pre",
        "objective": "4.4",
        "concept": "Baseline behavior",
        "prompt": "A team documents normal login times and traffic patterns before deciding what counts as unusual. What reference is it establishing?",
        "options": [
          "Baseline behavior",
          "Security information and event management (SIEM)",
          "Packet capture",
          "Security orchestration automation and response (SOAR)"
        ],
        "correct": 0,
        "explanations": [
          "Baseline behavior: Describes normal activity for comparison. This is the role or property required by the scenario.",
          "Security information and event management (SIEM): Aggregates and correlates security logs. The scenario instead calls for Baseline behavior: Describes normal activity for comparison.",
          "Packet capture: Records network packets for detailed inspection. The scenario instead calls for Baseline behavior: Describes normal activity for comparison.",
          "Security orchestration automation and response (SOAR): Automates response workflows across tools. The scenario instead calls for Baseline behavior: Describes normal activity for comparison."
        ]
      },
      {
        "id": "PRE-4.4-9",
        "phase": "pre",
        "objective": "4.4",
        "concept": "Threat intelligence",
        "prompt": "A team incorporates external information about attacker techniques and known malicious infrastructure into detections. Which information category is this?",
        "options": [
          "Threat intelligence",
          "File integrity monitoring",
          "Security information and event management (SIEM)",
          "Alert tuning"
        ],
        "correct": 0,
        "explanations": [
          "Threat intelligence: Context about threats and indicators informs detection. This is the role or property required by the scenario.",
          "File integrity monitoring: Detects unauthorized file changes. The scenario instead calls for Threat intelligence: Context about threats and indicators informs detection.",
          "Security information and event management (SIEM): Aggregates and correlates security logs. The scenario instead calls for Threat intelligence: Context about threats and indicators informs detection.",
          "Alert tuning: Adjusts detection rules to improve useful signal. The scenario instead calls for Threat intelligence: Context about threats and indicators informs detection."
        ]
      },
      {
        "id": "PRE-4.4-10",
        "phase": "pre",
        "objective": "4.4",
        "concept": "Time synchronization",
        "prompt": "Investigators cannot correlate events because source devices disagree about the current time. Which foundational monitoring requirement needs correction?",
        "options": [
          "Packet capture",
          "Security information and event management (SIEM)",
          "Time synchronization",
          "Threat intelligence"
        ],
        "correct": 2,
        "explanations": [
          "Packet capture: Records network packets for detailed inspection. The scenario instead calls for Time synchronization: Aligns timestamps across systems.",
          "Security information and event management (SIEM): Aggregates and correlates security logs. The scenario instead calls for Time synchronization: Aligns timestamps across systems.",
          "Time synchronization: Aligns timestamps across systems. This is the role or property required by the scenario.",
          "Threat intelligence: Context about threats and indicators informs detection. The scenario instead calls for Time synchronization: Aligns timestamps across systems."
        ]
      }
    ]
  },
  "4.5": {
    "bridge": "A security capability should be selected from the risk and the point where enforcement is possible.",
    "teach": "DNS filtering blocks resolution of prohibited names; web filtering applies browsing policies; firewalls control network flows; endpoint tools inspect host behavior. Email authentication evaluates sending-domain assertions. DLP (Data Loss Prevention) addresses sensitive data handling. Layer controls so a single bypass does not expose everything.",
    "example": "Blocking a malicious hostname is useful, but a direct-IP connection may not involve DNS. A host control and network policy can cover other parts of the path. Choosing an encrypted protocol protects transport only when negotiation and identity checks are properly enforced.",
    "watch": [
      "Where is the control enforced?",
      "What path bypasses it?",
      "Is the requirement identity, traffic, content, behavior, or data protection?"
    ],
    "questions": [
      {
        "id": "PRE-4.5-1",
        "phase": "pre",
        "objective": "4.5",
        "concept": "DNS filtering",
        "prompt": "A security service refuses to resolve names associated with known malicious destinations. Which capability is being used?",
        "options": [
          "Email authentication (DMARC)",
          "Data loss prevention (DLP)",
          "DNS filtering",
          "Firewall rules"
        ],
        "correct": 2,
        "explanations": [
          "Email authentication (DMARC): Applies domain policy using SPF and DKIM alignment. The scenario instead calls for DNS filtering: Blocks resolution of prohibited or malicious names.",
          "Data loss prevention (DLP): Controls movement of sensitive information. The scenario instead calls for DNS filtering: Blocks resolution of prohibited or malicious names.",
          "DNS filtering: Blocks resolution of prohibited or malicious names. This is the role or property required by the scenario.",
          "Firewall rules: Permit or deny network traffic according to policy. The scenario instead calls for DNS filtering: Blocks resolution of prohibited or malicious names."
        ]
      },
      {
        "id": "PRE-4.5-2",
        "phase": "pre",
        "objective": "4.5",
        "concept": "Email authentication (DMARC)",
        "prompt": "A domain owner publishes how receivers should handle messages that fail aligned SPF or DKIM checks. Which named email-authentication policy mechanism fits?",
        "options": [
          "Secure protocol selection",
          "Email authentication (DMARC)",
          "User behavior analytics",
          "DNS filtering"
        ],
        "correct": 1,
        "explanations": [
          "Secure protocol selection: Replaces unprotected communication with protected alternatives. The scenario instead calls for Email authentication (DMARC): Applies domain policy using SPF and DKIM alignment.",
          "Email authentication (DMARC): Applies domain policy using SPF and DKIM alignment. This is the role or property required by the scenario.",
          "User behavior analytics: Detects deviations in identity activity. The scenario instead calls for Email authentication (DMARC): Applies domain policy using SPF and DKIM alignment.",
          "DNS filtering: Blocks resolution of prohibited or malicious names. The scenario instead calls for Email authentication (DMARC): Applies domain policy using SPF and DKIM alignment."
        ]
      },
      {
        "id": "PRE-4.5-3",
        "phase": "pre",
        "objective": "4.5",
        "concept": "Data loss prevention (DLP)",
        "prompt": "A system detects sensitive identifiers in a document leaving the company and applies a handling policy. Which capability fits?",
        "options": [
          "Secure protocol selection",
          "Endpoint detection and response (EDR)",
          "Email authentication (DMARC)",
          "Data loss prevention (DLP)"
        ],
        "correct": 3,
        "explanations": [
          "Secure protocol selection: Replaces unprotected communication with protected alternatives. The scenario instead calls for Data loss prevention (DLP): Controls movement of sensitive information.",
          "Endpoint detection and response (EDR): Detects and investigates malicious endpoint behavior. The scenario instead calls for Data loss prevention (DLP): Controls movement of sensitive information.",
          "Email authentication (DMARC): Applies domain policy using SPF and DKIM alignment. The scenario instead calls for Data loss prevention (DLP): Controls movement of sensitive information.",
          "Data loss prevention (DLP): Controls movement of sensitive information. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.5-4",
        "phase": "pre",
        "objective": "4.5",
        "concept": "Network access control (NAC)",
        "prompt": "A network verifies a connecting device's identity and posture before placing it on an authorized network segment. Which admission capability fits?",
        "options": [
          "Network access control (NAC)",
          "Email authentication (DMARC)",
          "Web filtering",
          "Firewall rules"
        ],
        "correct": 0,
        "explanations": [
          "Network access control (NAC): Validates identity and posture before network access. This is the role or property required by the scenario.",
          "Email authentication (DMARC): Applies domain policy using SPF and DKIM alignment. The scenario instead calls for Network access control (NAC): Validates identity and posture before network access.",
          "Web filtering: Restricts web destinations or content categories. The scenario instead calls for Network access control (NAC): Validates identity and posture before network access.",
          "Firewall rules: Permit or deny network traffic according to policy. The scenario instead calls for Network access control (NAC): Validates identity and posture before network access."
        ]
      },
      {
        "id": "PRE-4.5-5",
        "phase": "pre",
        "objective": "4.5",
        "concept": "Web filtering",
        "prompt": "A gateway enforces browsing restrictions based on website categories and requested web content. Which capability fits?",
        "options": [
          "Network segmentation",
          "Secure protocol selection",
          "DNS filtering",
          "Web filtering"
        ],
        "correct": 3,
        "explanations": [
          "Network segmentation: Limits communication and lateral movement between groups. The scenario instead calls for Web filtering: Restricts web destinations or content categories.",
          "Secure protocol selection: Replaces unprotected communication with protected alternatives. The scenario instead calls for Web filtering: Restricts web destinations or content categories.",
          "DNS filtering: Blocks resolution of prohibited or malicious names. The scenario instead calls for Web filtering: Restricts web destinations or content categories.",
          "Web filtering: Restricts web destinations or content categories. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.5-6",
        "phase": "pre",
        "objective": "4.5",
        "concept": "Endpoint detection and response (EDR)",
        "prompt": "A security team investigates a suspicious process tree and isolates the affected workstation through its agent. Which capability fits?",
        "options": [
          "Network access control (NAC)",
          "Email authentication (DMARC)",
          "User behavior analytics",
          "Endpoint detection and response (EDR)"
        ],
        "correct": 3,
        "explanations": [
          "Network access control (NAC): Validates identity and posture before network access. The scenario instead calls for Endpoint detection and response (EDR): Detects and investigates malicious endpoint behavior.",
          "Email authentication (DMARC): Applies domain policy using SPF and DKIM alignment. The scenario instead calls for Endpoint detection and response (EDR): Detects and investigates malicious endpoint behavior.",
          "User behavior analytics: Detects deviations in identity activity. The scenario instead calls for Endpoint detection and response (EDR): Detects and investigates malicious endpoint behavior.",
          "Endpoint detection and response (EDR): Detects and investigates malicious endpoint behavior. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.5-7",
        "phase": "pre",
        "objective": "4.5",
        "concept": "User behavior analytics",
        "prompt": "A platform flags account activity because it differs significantly from that user's established behavior. Which analytic capability fits?",
        "options": [
          "Secure protocol selection",
          "User behavior analytics",
          "Firewall rules",
          "Endpoint detection and response (EDR)"
        ],
        "correct": 1,
        "explanations": [
          "Secure protocol selection: Replaces unprotected communication with protected alternatives. The scenario instead calls for User behavior analytics: Detects deviations in identity activity.",
          "User behavior analytics: Detects deviations in identity activity. This is the role or property required by the scenario.",
          "Firewall rules: Permit or deny network traffic according to policy. The scenario instead calls for User behavior analytics: Detects deviations in identity activity.",
          "Endpoint detection and response (EDR): Detects and investigates malicious endpoint behavior. The scenario instead calls for User behavior analytics: Detects deviations in identity activity."
        ]
      },
      {
        "id": "PRE-4.5-8",
        "phase": "pre",
        "objective": "4.5",
        "concept": "Firewall rules",
        "prompt": "A network device evaluates an ordered list of source, destination, service, and permit-or-deny conditions. Which control configuration is this?",
        "options": [
          "Data loss prevention (DLP)",
          "Web filtering",
          "Firewall rules",
          "Secure protocol selection"
        ],
        "correct": 2,
        "explanations": [
          "Data loss prevention (DLP): Controls movement of sensitive information. The scenario instead calls for Firewall rules: Permit or deny network traffic according to policy.",
          "Web filtering: Restricts web destinations or content categories. The scenario instead calls for Firewall rules: Permit or deny network traffic according to policy.",
          "Firewall rules: Permit or deny network traffic according to policy. This is the role or property required by the scenario.",
          "Secure protocol selection: Replaces unprotected communication with protected alternatives. The scenario instead calls for Firewall rules: Permit or deny network traffic according to policy."
        ]
      },
      {
        "id": "PRE-4.5-9",
        "phase": "pre",
        "objective": "4.5",
        "concept": "Secure protocol selection",
        "prompt": "A team replaces cleartext administration with a correctly configured encrypted management service. Which improvement is being made?",
        "options": [
          "DNS filtering",
          "User behavior analytics",
          "Network segmentation",
          "Secure protocol selection"
        ],
        "correct": 3,
        "explanations": [
          "DNS filtering: Blocks resolution of prohibited or malicious names. The scenario instead calls for Secure protocol selection: Replaces unprotected communication with protected alternatives.",
          "User behavior analytics: Detects deviations in identity activity. The scenario instead calls for Secure protocol selection: Replaces unprotected communication with protected alternatives.",
          "Network segmentation: Limits communication and lateral movement between groups. The scenario instead calls for Secure protocol selection: Replaces unprotected communication with protected alternatives.",
          "Secure protocol selection: Replaces unprotected communication with protected alternatives. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.5-10",
        "phase": "pre",
        "objective": "4.5",
        "concept": "Network segmentation",
        "prompt": "A flat network is divided so user devices cannot directly reach sensitive backend services without an approved path. Which architecture control is this?",
        "options": [
          "Data loss prevention (DLP)",
          "Firewall rules",
          "Endpoint detection and response (EDR)",
          "Network segmentation"
        ],
        "correct": 3,
        "explanations": [
          "Data loss prevention (DLP): Controls movement of sensitive information. The scenario instead calls for Network segmentation: Limits communication and lateral movement between groups.",
          "Firewall rules: Permit or deny network traffic according to policy. The scenario instead calls for Network segmentation: Limits communication and lateral movement between groups.",
          "Endpoint detection and response (EDR): Detects and investigates malicious endpoint behavior. The scenario instead calls for Network segmentation: Limits communication and lateral movement between groups.",
          "Network segmentation: Limits communication and lateral movement between groups. This is the role or property required by the scenario."
        ]
      }
    ]
  },
  "4.6": {
    "bridge": "Identity management spans joining, moving roles, using privileges, and leaving—not just the login screen.",
    "teach": "RBAC (Role-Based Access Control) assigns rights by role; ABAC (Attribute-Based Access Control) uses contextual attributes. MFA (Multifactor Authentication) requires different factor categories. SSO (Single Sign-On) reduces repeated sign-ins; federation crosses identity trust boundaries. PAM (Privileged Access Management) controls elevated access. Review and remove rights as circumstances change.",
    "example": "A staff transfer should remove old rights as well as add new ones. An emergency administrator may receive time-limited access rather than permanent privilege. Two remembered secrets remain one factor category even when the interface asks twice.",
    "watch": [
      "Who should have which rights, for how long?",
      "Are factors truly different?",
      "What ends or revalidates access?"
    ],
    "questions": [
      {
        "id": "PRE-4.6-1",
        "phase": "pre",
        "objective": "4.6",
        "concept": "Role-based access control (RBAC)",
        "prompt": "Permissions are assigned to the job role of warehouse supervisor rather than separately granting each user individual rights. Which access model fits?",
        "options": [
          "Just-in-time access",
          "Attribute-based access control (ABAC)",
          "Account deprovisioning",
          "Role-based access control (RBAC)"
        ],
        "correct": 3,
        "explanations": [
          "Just-in-time access: Grants access only for the approved period. The scenario instead calls for Role-based access control (RBAC): Assigns permissions through job roles.",
          "Attribute-based access control (ABAC): Evaluates attributes of subject, resource, action, and environment. The scenario instead calls for Role-based access control (RBAC): Assigns permissions through job roles.",
          "Account deprovisioning: Removes access when it is no longer authorized. The scenario instead calls for Role-based access control (RBAC): Assigns permissions through job roles.",
          "Role-based access control (RBAC): Assigns permissions through job roles. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.6-2",
        "phase": "pre",
        "objective": "4.6",
        "concept": "Attribute-based access control (ABAC)",
        "prompt": "An access decision evaluates department, device compliance, data classification, and time of day together. Which access model fits?",
        "options": [
          "Just-in-time access",
          "Privileged access management (PAM)",
          "Multifactor authentication (MFA)",
          "Attribute-based access control (ABAC)"
        ],
        "correct": 3,
        "explanations": [
          "Just-in-time access: Grants access only for the approved period. The scenario instead calls for Attribute-based access control (ABAC): Evaluates attributes of subject, resource, action, and environment.",
          "Privileged access management (PAM): Controls, monitors, and limits elevated access. The scenario instead calls for Attribute-based access control (ABAC): Evaluates attributes of subject, resource, action, and environment.",
          "Multifactor authentication (MFA): Requires factors from different categories. The scenario instead calls for Attribute-based access control (ABAC): Evaluates attributes of subject, resource, action, and environment.",
          "Attribute-based access control (ABAC): Evaluates attributes of subject, resource, action, and environment. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.6-3",
        "phase": "pre",
        "objective": "4.6",
        "concept": "Multifactor authentication (MFA)",
        "prompt": "A login requires a memorized secret and proof of possession of a registered hardware key. Which authentication approach is used?",
        "options": [
          "Attribute-based access control (ABAC)",
          "Access recertification",
          "Passwordless authentication",
          "Multifactor authentication (MFA)"
        ],
        "correct": 3,
        "explanations": [
          "Attribute-based access control (ABAC): Evaluates attributes of subject, resource, action, and environment. The scenario instead calls for Multifactor authentication (MFA): Requires factors from different categories.",
          "Access recertification: Periodically verifies that access remains appropriate. The scenario instead calls for Multifactor authentication (MFA): Requires factors from different categories.",
          "Passwordless authentication: Authenticates without a reusable typed password. The scenario instead calls for Multifactor authentication (MFA): Requires factors from different categories.",
          "Multifactor authentication (MFA): Requires factors from different categories. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.6-4",
        "phase": "pre",
        "objective": "4.6",
        "concept": "Single sign-on (SSO)",
        "prompt": "A user authenticates once and can then access several approved applications without repeated sign-in prompts. Which user-facing capability is this?",
        "options": [
          "Federation",
          "Access recertification",
          "Single sign-on (SSO)",
          "Role-based access control (RBAC)"
        ],
        "correct": 2,
        "explanations": [
          "Federation: Trust relationships allow identities across organizational boundaries. The scenario instead calls for Single sign-on (SSO): One authentication grants access to multiple applications.",
          "Access recertification: Periodically verifies that access remains appropriate. The scenario instead calls for Single sign-on (SSO): One authentication grants access to multiple applications.",
          "Single sign-on (SSO): One authentication grants access to multiple applications. This is the role or property required by the scenario.",
          "Role-based access control (RBAC): Assigns permissions through job roles. The scenario instead calls for Single sign-on (SSO): One authentication grants access to multiple applications."
        ]
      },
      {
        "id": "PRE-4.6-5",
        "phase": "pre",
        "objective": "4.6",
        "concept": "Federation",
        "prompt": "An application trusts an authentication assertion from an identity provider in another organization. Which identity relationship is this?",
        "options": [
          "Multifactor authentication (MFA)",
          "Federation",
          "Account deprovisioning",
          "Role-based access control (RBAC)"
        ],
        "correct": 1,
        "explanations": [
          "Multifactor authentication (MFA): Requires factors from different categories. The scenario instead calls for Federation: Trust relationships allow identities across organizational boundaries.",
          "Federation: Trust relationships allow identities across organizational boundaries. This is the role or property required by the scenario.",
          "Account deprovisioning: Removes access when it is no longer authorized. The scenario instead calls for Federation: Trust relationships allow identities across organizational boundaries.",
          "Role-based access control (RBAC): Assigns permissions through job roles. The scenario instead calls for Federation: Trust relationships allow identities across organizational boundaries."
        ]
      },
      {
        "id": "PRE-4.6-6",
        "phase": "pre",
        "objective": "4.6",
        "concept": "Privileged access management (PAM)",
        "prompt": "A service secures administrative credentials and monitors elevated sessions. Which access-management capability fits?",
        "options": [
          "Attribute-based access control (ABAC)",
          "Privileged access management (PAM)",
          "Access recertification",
          "Passwordless authentication"
        ],
        "correct": 1,
        "explanations": [
          "Attribute-based access control (ABAC): Evaluates attributes of subject, resource, action, and environment. The scenario instead calls for Privileged access management (PAM): Controls, monitors, and limits elevated access.",
          "Privileged access management (PAM): Controls, monitors, and limits elevated access. This is the role or property required by the scenario.",
          "Access recertification: Periodically verifies that access remains appropriate. The scenario instead calls for Privileged access management (PAM): Controls, monitors, and limits elevated access.",
          "Passwordless authentication: Authenticates without a reusable typed password. The scenario instead calls for Privileged access management (PAM): Controls, monitors, and limits elevated access."
        ]
      },
      {
        "id": "PRE-4.6-7",
        "phase": "pre",
        "objective": "4.6",
        "concept": "Just-in-time access",
        "prompt": "An engineer receives elevated permissions only for an approved two-hour maintenance task, after which they expire. Which privilege approach fits?",
        "options": [
          "Federation",
          "Passwordless authentication",
          "Just-in-time access",
          "Multifactor authentication (MFA)"
        ],
        "correct": 2,
        "explanations": [
          "Federation: Trust relationships allow identities across organizational boundaries. The scenario instead calls for Just-in-time access: Grants access only for the approved period.",
          "Passwordless authentication: Authenticates without a reusable typed password. The scenario instead calls for Just-in-time access: Grants access only for the approved period.",
          "Just-in-time access: Grants access only for the approved period. This is the role or property required by the scenario.",
          "Multifactor authentication (MFA): Requires factors from different categories. The scenario instead calls for Just-in-time access: Grants access only for the approved period."
        ]
      },
      {
        "id": "PRE-4.6-8",
        "phase": "pre",
        "objective": "4.6",
        "concept": "Account deprovisioning",
        "prompt": "After an employee leaves, the organization disables the identity and removes associated access. Which lifecycle action is this?",
        "options": [
          "Account deprovisioning",
          "Privileged access management (PAM)",
          "Single sign-on (SSO)",
          "Multifactor authentication (MFA)"
        ],
        "correct": 0,
        "explanations": [
          "Account deprovisioning: Removes access when it is no longer authorized. This is the role or property required by the scenario.",
          "Privileged access management (PAM): Controls, monitors, and limits elevated access. The scenario instead calls for Account deprovisioning: Removes access when it is no longer authorized.",
          "Single sign-on (SSO): One authentication grants access to multiple applications. The scenario instead calls for Account deprovisioning: Removes access when it is no longer authorized.",
          "Multifactor authentication (MFA): Requires factors from different categories. The scenario instead calls for Account deprovisioning: Removes access when it is no longer authorized."
        ]
      },
      {
        "id": "PRE-4.6-9",
        "phase": "pre",
        "objective": "4.6",
        "concept": "Access recertification",
        "prompt": "Managers periodically confirm that existing users still need their assigned rights. Which access-governance activity is this?",
        "options": [
          "Federation",
          "Role-based access control (RBAC)",
          "Access recertification",
          "Single sign-on (SSO)"
        ],
        "correct": 2,
        "explanations": [
          "Federation: Trust relationships allow identities across organizational boundaries. The scenario instead calls for Access recertification: Periodically verifies that access remains appropriate.",
          "Role-based access control (RBAC): Assigns permissions through job roles. The scenario instead calls for Access recertification: Periodically verifies that access remains appropriate.",
          "Access recertification: Periodically verifies that access remains appropriate. This is the role or property required by the scenario.",
          "Single sign-on (SSO): One authentication grants access to multiple applications. The scenario instead calls for Access recertification: Periodically verifies that access remains appropriate."
        ]
      },
      {
        "id": "PRE-4.6-10",
        "phase": "pre",
        "objective": "4.6",
        "concept": "Passwordless authentication",
        "prompt": "A user signs in with an approved cryptographic authenticator instead of supplying an account password. Which authentication approach is this?",
        "options": [
          "Access recertification",
          "Passwordless authentication",
          "Single sign-on (SSO)",
          "Just-in-time access"
        ],
        "correct": 1,
        "explanations": [
          "Access recertification: Periodically verifies that access remains appropriate. The scenario instead calls for Passwordless authentication: Authenticates without a reusable typed password.",
          "Passwordless authentication: Authenticates without a reusable typed password. This is the role or property required by the scenario.",
          "Single sign-on (SSO): One authentication grants access to multiple applications. The scenario instead calls for Passwordless authentication: Authenticates without a reusable typed password.",
          "Just-in-time access: Grants access only for the approved period. The scenario instead calls for Passwordless authentication: Authenticates without a reusable typed password."
        ]
      }
    ]
  },
  "4.7": {
    "bridge": "Automation turns a decision into repeatable execution. A mistake can repeat as efficiently as a correct action.",
    "teach": "Define inputs, conditions, permissions, actions, failures, and records. Guardrails constrain unsafe operations. Least privilege limits the automation identity. Idempotent actions reach the desired state without creating additional effects each time. Orchestration connects multiple tasks and systems into a workflow.",
    "example": "An onboarding workflow creates an account, assigns approved access, and opens a tracking ticket. If rerun after a partial failure, it should not create a duplicate identity. Errors need explicit handling and visibility, not silent retries forever.",
    "watch": [
      "What happens on the second run?",
      "What happens halfway through failure?",
      "How are permissions, approvals, and audit records enforced?"
    ],
    "questions": [
      {
        "id": "PRE-4.7-1",
        "phase": "pre",
        "objective": "4.7",
        "concept": "User provisioning",
        "prompt": "An approved HR event causes a workflow to create an employee identity and assign initial access. Which automated task is this?",
        "options": [
          "User provisioning",
          "Least privilege for automation",
          "Guardrails",
          "Continuous integration checks"
        ],
        "correct": 0,
        "explanations": [
          "User provisioning: Automates creation and assignment of approved access. This is the role or property required by the scenario.",
          "Least privilege for automation: Restricts service identities to necessary actions. The scenario instead calls for User provisioning: Automates creation and assignment of approved access.",
          "Guardrails: Limit what automated workflows may do. The scenario instead calls for User provisioning: Automates creation and assignment of approved access.",
          "Continuous integration checks: Automated checks evaluate changes before merge or release. The scenario instead calls for User provisioning: Automates creation and assignment of approved access."
        ]
      },
      {
        "id": "PRE-4.7-2",
        "phase": "pre",
        "objective": "4.7",
        "concept": "Resource provisioning",
        "prompt": "An approved deployment request causes a workflow to create virtual machines, storage, and networks. Which automated task is this?",
        "options": [
          "Security group automation",
          "Resource provisioning",
          "Ticket integration",
          "Least privilege for automation"
        ],
        "correct": 1,
        "explanations": [
          "Security group automation: Applies network permissions through policy-driven workflows. The scenario instead calls for Resource provisioning: Creates required infrastructure consistently.",
          "Resource provisioning: Creates required infrastructure consistently. This is the role or property required by the scenario.",
          "Ticket integration: Connects automation with tracked work records. The scenario instead calls for Resource provisioning: Creates required infrastructure consistently.",
          "Least privilege for automation: Restricts service identities to necessary actions. The scenario instead calls for Resource provisioning: Creates required infrastructure consistently."
        ]
      },
      {
        "id": "PRE-4.7-3",
        "phase": "pre",
        "objective": "4.7",
        "concept": "Security group automation",
        "prompt": "A workflow updates cloud traffic-permission groups according to an approved application template. Which automated task is this?",
        "options": [
          "Resource provisioning",
          "Security group automation",
          "Ticket integration",
          "Automation monitoring"
        ],
        "correct": 1,
        "explanations": [
          "Resource provisioning: Creates required infrastructure consistently. The scenario instead calls for Security group automation: Applies network permissions through policy-driven workflows.",
          "Security group automation: Applies network permissions through policy-driven workflows. This is the role or property required by the scenario.",
          "Ticket integration: Connects automation with tracked work records. The scenario instead calls for Security group automation: Applies network permissions through policy-driven workflows.",
          "Automation monitoring: Observes automated operations and detects failures. The scenario instead calls for Security group automation: Applies network permissions through policy-driven workflows."
        ]
      },
      {
        "id": "PRE-4.7-4",
        "phase": "pre",
        "objective": "4.7",
        "concept": "Guardrails",
        "prompt": "An automation platform refuses deployments that would expose restricted storage publicly. Which safety mechanism constrains the workflow?",
        "options": [
          "Exception handling",
          "Resource provisioning",
          "Guardrails",
          "Idempotence"
        ],
        "correct": 2,
        "explanations": [
          "Exception handling: Deals explicitly with failed or unexpected conditions. The scenario instead calls for Guardrails: Limit what automated workflows may do.",
          "Resource provisioning: Creates required infrastructure consistently. The scenario instead calls for Guardrails: Limit what automated workflows may do.",
          "Guardrails: Limit what automated workflows may do. This is the role or property required by the scenario.",
          "Idempotence: Repeated execution converges on the same desired state. The scenario instead calls for Guardrails: Limit what automated workflows may do."
        ]
      },
      {
        "id": "PRE-4.7-5",
        "phase": "pre",
        "objective": "4.7",
        "concept": "Least privilege for automation",
        "prompt": "A deployment identity can modify only the resources needed for its specific job, rather than holding global administrator rights. Which design principle is applied?",
        "options": [
          "Exception handling",
          "Idempotence",
          "Least privilege for automation",
          "Continuous integration checks"
        ],
        "correct": 2,
        "explanations": [
          "Exception handling: Deals explicitly with failed or unexpected conditions. The scenario instead calls for Least privilege for automation: Restricts service identities to necessary actions.",
          "Idempotence: Repeated execution converges on the same desired state. The scenario instead calls for Least privilege for automation: Restricts service identities to necessary actions.",
          "Least privilege for automation: Restricts service identities to necessary actions. This is the role or property required by the scenario.",
          "Continuous integration checks: Automated checks evaluate changes before merge or release. The scenario instead calls for Least privilege for automation: Restricts service identities to necessary actions."
        ]
      },
      {
        "id": "PRE-4.7-6",
        "phase": "pre",
        "objective": "4.7",
        "concept": "Idempotence",
        "prompt": "Running the same desired-state operation twice produces the same intended state without creating duplicate resources. Which property is this?",
        "options": [
          "Exception handling",
          "Idempotence",
          "Ticket integration",
          "Automation monitoring"
        ],
        "correct": 1,
        "explanations": [
          "Exception handling: Deals explicitly with failed or unexpected conditions. The scenario instead calls for Idempotence: Repeated execution converges on the same desired state.",
          "Idempotence: Repeated execution converges on the same desired state. This is the role or property required by the scenario.",
          "Ticket integration: Connects automation with tracked work records. The scenario instead calls for Idempotence: Repeated execution converges on the same desired state.",
          "Automation monitoring: Observes automated operations and detects failures. The scenario instead calls for Idempotence: Repeated execution converges on the same desired state."
        ]
      },
      {
        "id": "PRE-4.7-7",
        "phase": "pre",
        "objective": "4.7",
        "concept": "Exception handling",
        "prompt": "A workflow detects a failed step, records the problem, and follows an explicit recovery path instead of silently continuing. Which design concern is addressed?",
        "options": [
          "Resource provisioning",
          "Least privilege for automation",
          "Exception handling",
          "Guardrails"
        ],
        "correct": 2,
        "explanations": [
          "Resource provisioning: Creates required infrastructure consistently. The scenario instead calls for Exception handling: Deals explicitly with failed or unexpected conditions.",
          "Least privilege for automation: Restricts service identities to necessary actions. The scenario instead calls for Exception handling: Deals explicitly with failed or unexpected conditions.",
          "Exception handling: Deals explicitly with failed or unexpected conditions. This is the role or property required by the scenario.",
          "Guardrails: Limit what automated workflows may do. The scenario instead calls for Exception handling: Deals explicitly with failed or unexpected conditions."
        ]
      },
      {
        "id": "PRE-4.7-8",
        "phase": "pre",
        "objective": "4.7",
        "concept": "Ticket integration",
        "prompt": "An automated response opens and updates a service-management record so humans can track ownership and resolution. Which integration is this?",
        "options": [
          "User provisioning",
          "Guardrails",
          "Ticket integration",
          "Idempotence"
        ],
        "correct": 2,
        "explanations": [
          "User provisioning: Automates creation and assignment of approved access. The scenario instead calls for Ticket integration: Connects automation with tracked work records.",
          "Guardrails: Limit what automated workflows may do. The scenario instead calls for Ticket integration: Connects automation with tracked work records.",
          "Ticket integration: Connects automation with tracked work records. This is the role or property required by the scenario.",
          "Idempotence: Repeated execution converges on the same desired state. The scenario instead calls for Ticket integration: Connects automation with tracked work records."
        ]
      },
      {
        "id": "PRE-4.7-9",
        "phase": "pre",
        "objective": "4.7",
        "concept": "Continuous integration checks",
        "prompt": "A build pipeline checks code and dependencies for security problems before allowing the next deployment stage. Which automation practice is this?",
        "options": [
          "Continuous integration checks",
          "Security group automation",
          "Guardrails",
          "Least privilege for automation"
        ],
        "correct": 0,
        "explanations": [
          "Continuous integration checks: Automated checks evaluate changes before merge or release. This is the role or property required by the scenario.",
          "Security group automation: Applies network permissions through policy-driven workflows. The scenario instead calls for Continuous integration checks: Automated checks evaluate changes before merge or release.",
          "Guardrails: Limit what automated workflows may do. The scenario instead calls for Continuous integration checks: Automated checks evaluate changes before merge or release.",
          "Least privilege for automation: Restricts service identities to necessary actions. The scenario instead calls for Continuous integration checks: Automated checks evaluate changes before merge or release."
        ]
      },
      {
        "id": "PRE-4.7-10",
        "phase": "pre",
        "objective": "4.7",
        "concept": "Automation monitoring",
        "prompt": "A team watches scheduled workflows for failed runs, unusual actions, and unexpected resource changes. Which ongoing control is this?",
        "options": [
          "Automation monitoring",
          "Idempotence",
          "Security group automation",
          "Ticket integration"
        ],
        "correct": 0,
        "explanations": [
          "Automation monitoring: Observes automated operations and detects failures. This is the role or property required by the scenario.",
          "Idempotence: Repeated execution converges on the same desired state. The scenario instead calls for Automation monitoring: Observes automated operations and detects failures.",
          "Security group automation: Applies network permissions through policy-driven workflows. The scenario instead calls for Automation monitoring: Observes automated operations and detects failures.",
          "Ticket integration: Connects automation with tracked work records. The scenario instead calls for Automation monitoring: Observes automated operations and detects failures."
        ]
      }
    ]
  },
  "4.8": {
    "bridge": "Incident response is a coordinated decision process. A fast action can still be wrong if it destroys evidence or expands the impact.",
    "teach": "Prepare roles and tools, detect and analyze activity, contain spread, eradicate the cause, recover safely, and capture lessons. Evidence handling tracks custody and integrity. Volatile evidence can disappear quickly; legal holds preserve relevant material beyond ordinary deletion schedules. Follow the authorized response plan.",
    "example": "Disconnecting a host may contain harm, while wiping it may remove evidence. Choose actions based on the incident, business impact, evidence requirements, and response authority. Restoring service is not enough if the original access path remains open.",
    "watch": [
      "What phase and objective are you in?",
      "What evidence could be lost?",
      "Has the cause been removed before recovery?"
    ],
    "questions": [
      {
        "id": "PRE-4.8-1",
        "phase": "pre",
        "objective": "4.8",
        "concept": "Preparation",
        "prompt": "Before any incident occurs, a team assigns response roles, prepares contact lists, and tests required tools. Which response phase is this?",
        "options": [
          "Preparation",
          "Analysis",
          "Eradication",
          "Order of volatility"
        ],
        "correct": 0,
        "explanations": [
          "Preparation: Establishes plans, capabilities, roles, and tools before incidents. This is the role or property required by the scenario.",
          "Analysis: Investigates scope, cause, and impact. The scenario instead calls for Preparation: Establishes plans, capabilities, roles, and tools before incidents.",
          "Eradication: Removes the cause and malicious artifacts. The scenario instead calls for Preparation: Establishes plans, capabilities, roles, and tools before incidents.",
          "Order of volatility: Collects short-lived evidence before it disappears. The scenario instead calls for Preparation: Establishes plans, capabilities, roles, and tools before incidents."
        ]
      },
      {
        "id": "PRE-4.8-2",
        "phase": "pre",
        "objective": "4.8",
        "concept": "Detection",
        "prompt": "A monitoring system first identifies activity that may represent a compromise. Which response phase does this initial recognition support?",
        "options": [
          "Containment",
          "Analysis",
          "Chain of custody",
          "Detection"
        ],
        "correct": 3,
        "explanations": [
          "Containment: Limits spread and immediate damage. The scenario instead calls for Detection: Recognizes potential security incidents.",
          "Analysis: Investigates scope, cause, and impact. The scenario instead calls for Detection: Recognizes potential security incidents.",
          "Chain of custody: Documents evidence possession and handling. The scenario instead calls for Detection: Recognizes potential security incidents.",
          "Detection: Recognizes potential security incidents. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.8-3",
        "phase": "pre",
        "objective": "4.8",
        "concept": "Analysis",
        "prompt": "Responders determine the incident's scope, likely cause, and affected assets from available evidence. Which response activity is this?",
        "options": [
          "Analysis",
          "Preparation",
          "Detection",
          "Containment"
        ],
        "correct": 0,
        "explanations": [
          "Analysis: Investigates scope, cause, and impact. This is the role or property required by the scenario.",
          "Preparation: Establishes plans, capabilities, roles, and tools before incidents. The scenario instead calls for Analysis: Investigates scope, cause, and impact.",
          "Detection: Recognizes potential security incidents. The scenario instead calls for Analysis: Investigates scope, cause, and impact.",
          "Containment: Limits spread and immediate damage. The scenario instead calls for Analysis: Investigates scope, cause, and impact."
        ]
      },
      {
        "id": "PRE-4.8-4",
        "phase": "pre",
        "objective": "4.8",
        "concept": "Containment",
        "prompt": "A response team limits an affected account's access to stop further harm while investigation continues. Which response objective is this?",
        "options": [
          "Legal hold",
          "Containment",
          "Preparation",
          "Detection"
        ],
        "correct": 1,
        "explanations": [
          "Legal hold: Suspends routine destruction for relevant evidence. The scenario instead calls for Containment: Limits spread and immediate damage.",
          "Containment: Limits spread and immediate damage. This is the role or property required by the scenario.",
          "Preparation: Establishes plans, capabilities, roles, and tools before incidents. The scenario instead calls for Containment: Limits spread and immediate damage.",
          "Detection: Recognizes potential security incidents. The scenario instead calls for Containment: Limits spread and immediate damage."
        ]
      },
      {
        "id": "PRE-4.8-5",
        "phase": "pre",
        "objective": "4.8",
        "concept": "Eradication",
        "prompt": "Responders remove malicious persistence and close the exploited access path. Which response objective is this?",
        "options": [
          "Chain of custody",
          "Recovery",
          "Detection",
          "Eradication"
        ],
        "correct": 3,
        "explanations": [
          "Chain of custody: Documents evidence possession and handling. The scenario instead calls for Eradication: Removes the cause and malicious artifacts.",
          "Recovery: Restores normal operation and verifies it is safe. The scenario instead calls for Eradication: Removes the cause and malicious artifacts.",
          "Detection: Recognizes potential security incidents. The scenario instead calls for Eradication: Removes the cause and malicious artifacts.",
          "Eradication: Removes the cause and malicious artifacts. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.8-6",
        "phase": "pre",
        "objective": "4.8",
        "concept": "Recovery",
        "prompt": "After the cause is addressed, a team restores service and validates that normal operation is safe. Which response phase is this?",
        "options": [
          "Analysis",
          "Recovery",
          "Eradication",
          "Lessons learned"
        ],
        "correct": 1,
        "explanations": [
          "Analysis: Investigates scope, cause, and impact. The scenario instead calls for Recovery: Restores normal operation and verifies it is safe.",
          "Recovery: Restores normal operation and verifies it is safe. This is the role or property required by the scenario.",
          "Eradication: Removes the cause and malicious artifacts. The scenario instead calls for Recovery: Restores normal operation and verifies it is safe.",
          "Lessons learned: Improves future prevention and response after an event. The scenario instead calls for Recovery: Restores normal operation and verifies it is safe."
        ]
      },
      {
        "id": "PRE-4.8-7",
        "phase": "pre",
        "objective": "4.8",
        "concept": "Lessons learned",
        "prompt": "After an incident, the team reviews what worked and changes procedures to address identified shortcomings. Which phase is this?",
        "options": [
          "Containment",
          "Lessons learned",
          "Legal hold",
          "Chain of custody"
        ],
        "correct": 1,
        "explanations": [
          "Containment: Limits spread and immediate damage. The scenario instead calls for Lessons learned: Improves future prevention and response after an event.",
          "Lessons learned: Improves future prevention and response after an event. This is the role or property required by the scenario.",
          "Legal hold: Suspends routine destruction for relevant evidence. The scenario instead calls for Lessons learned: Improves future prevention and response after an event.",
          "Chain of custody: Documents evidence possession and handling. The scenario instead calls for Lessons learned: Improves future prevention and response after an event."
        ]
      },
      {
        "id": "PRE-4.8-8",
        "phase": "pre",
        "objective": "4.8",
        "concept": "Chain of custody",
        "prompt": "Investigators document each person who handled an evidence drive and every transfer of that drive. Which evidence practice is this?",
        "options": [
          "Chain of custody",
          "Analysis",
          "Recovery",
          "Detection"
        ],
        "correct": 0,
        "explanations": [
          "Chain of custody: Documents evidence possession and handling. This is the role or property required by the scenario.",
          "Analysis: Investigates scope, cause, and impact. The scenario instead calls for Chain of custody: Documents evidence possession and handling.",
          "Recovery: Restores normal operation and verifies it is safe. The scenario instead calls for Chain of custody: Documents evidence possession and handling.",
          "Detection: Recognizes potential security incidents. The scenario instead calls for Chain of custody: Documents evidence possession and handling."
        ]
      },
      {
        "id": "PRE-4.8-9",
        "phase": "pre",
        "objective": "4.8",
        "concept": "Order of volatility",
        "prompt": "An examiner prioritizes data that will disappear fastest before collecting more persistent evidence. Which collection principle is being applied?",
        "options": [
          "Chain of custody",
          "Containment",
          "Legal hold",
          "Order of volatility"
        ],
        "correct": 3,
        "explanations": [
          "Chain of custody: Documents evidence possession and handling. The scenario instead calls for Order of volatility: Collects short-lived evidence before it disappears.",
          "Containment: Limits spread and immediate damage. The scenario instead calls for Order of volatility: Collects short-lived evidence before it disappears.",
          "Legal hold: Suspends routine destruction for relevant evidence. The scenario instead calls for Order of volatility: Collects short-lived evidence before it disappears.",
          "Order of volatility: Collects short-lived evidence before it disappears. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.8-10",
        "phase": "pre",
        "objective": "4.8",
        "concept": "Legal hold",
        "prompt": "Relevant records must be preserved despite a scheduled deletion because they may be needed in a legal proceeding. Which preservation requirement is this?",
        "options": [
          "Analysis",
          "Legal hold",
          "Eradication",
          "Lessons learned"
        ],
        "correct": 1,
        "explanations": [
          "Analysis: Investigates scope, cause, and impact. The scenario instead calls for Legal hold: Suspends routine destruction for relevant evidence.",
          "Legal hold: Suspends routine destruction for relevant evidence. This is the role or property required by the scenario.",
          "Eradication: Removes the cause and malicious artifacts. The scenario instead calls for Legal hold: Suspends routine destruction for relevant evidence.",
          "Lessons learned: Improves future prevention and response after an event. The scenario instead calls for Legal hold: Suspends routine destruction for relevant evidence."
        ]
      }
    ]
  },
  "4.9": {
    "bridge": "An investigation question should drive the choice of data source.",
    "teach": "Authentication logs show sign-ins; firewall records show network decisions; endpoint logs show host activity; application logs show application behavior; DNS logs show name queries. Flows summarize conversations, while packet captures can reveal detailed traffic subject to encryption and capture scope. Dashboards summarize underlying sources rather than replacing them.",
    "example": "To establish whether a process launched, start with endpoint evidence rather than a firewall summary. To learn why a connection was denied, inspect the enforcing firewall. Correlate sources using timestamps, addresses, accounts, and identifiers.",
    "watch": [
      "Which source directly records the event?",
      "Is it a summary or raw evidence?",
      "What can you conclude—and what remains unknown?"
    ],
    "questions": [
      {
        "id": "PRE-4.9-1",
        "phase": "pre",
        "objective": "4.9",
        "concept": "Authentication logs",
        "prompt": "An investigator needs to determine when an account successfully signed in and which source address it used. Which source is the best starting point?",
        "options": [
          "Packet capture",
          "Endpoint logs",
          "Metadata",
          "Authentication logs"
        ],
        "correct": 3,
        "explanations": [
          "Packet capture: Contains detailed packets and potentially payloads. The scenario instead calls for Authentication logs: Record sign-in attempts and identity events.",
          "Endpoint logs: Record host activity and local security events. The scenario instead calls for Authentication logs: Record sign-in attempts and identity events.",
          "Metadata: Describes data such as timestamps, authors, or properties. The scenario instead calls for Authentication logs: Record sign-in attempts and identity events.",
          "Authentication logs: Record sign-in attempts and identity events. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.9-2",
        "phase": "pre",
        "objective": "4.9",
        "concept": "Firewall logs",
        "prompt": "An investigator needs to confirm which network rule denied a connection. Which source is the best starting point?",
        "options": [
          "Authentication logs",
          "Vulnerability scan report",
          "Firewall logs",
          "Flow records"
        ],
        "correct": 2,
        "explanations": [
          "Authentication logs: Record sign-in attempts and identity events. The scenario instead calls for Firewall logs: Record traffic allowed or denied by network policy.",
          "Vulnerability scan report: Lists detected weaknesses and affected assets. The scenario instead calls for Firewall logs: Record traffic allowed or denied by network policy.",
          "Firewall logs: Record traffic allowed or denied by network policy. This is the role or property required by the scenario.",
          "Flow records: Summarize endpoints, timing, and traffic volume. The scenario instead calls for Firewall logs: Record traffic allowed or denied by network policy."
        ]
      },
      {
        "id": "PRE-4.9-3",
        "phase": "pre",
        "objective": "4.9",
        "concept": "Application logs",
        "prompt": "An investigator needs the business application's recorded error and transaction identifier for a failed order. Which source is the best starting point?",
        "options": [
          "DNS logs",
          "Flow records",
          "Dashboard",
          "Application logs"
        ],
        "correct": 3,
        "explanations": [
          "DNS logs: Record name queries and responses. The scenario instead calls for Application logs: Record events specific to an application's behavior.",
          "Flow records: Summarize endpoints, timing, and traffic volume. The scenario instead calls for Application logs: Record events specific to an application's behavior.",
          "Dashboard: Summarizes metrics and current state. The scenario instead calls for Application logs: Record events specific to an application's behavior.",
          "Application logs: Record events specific to an application's behavior. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.9-4",
        "phase": "pre",
        "objective": "4.9",
        "concept": "Endpoint logs",
        "prompt": "An investigator needs evidence of process execution and local host activity on a workstation. Which source is the best starting point?",
        "options": [
          "Application logs",
          "Endpoint logs",
          "Metadata",
          "Packet capture"
        ],
        "correct": 1,
        "explanations": [
          "Application logs: Record events specific to an application's behavior. The scenario instead calls for Endpoint logs: Record host activity and local security events.",
          "Endpoint logs: Record host activity and local security events. This is the role or property required by the scenario.",
          "Metadata: Describes data such as timestamps, authors, or properties. The scenario instead calls for Endpoint logs: Record host activity and local security events.",
          "Packet capture: Contains detailed packets and potentially payloads. The scenario instead calls for Endpoint logs: Record host activity and local security events."
        ]
      },
      {
        "id": "PRE-4.9-5",
        "phase": "pre",
        "objective": "4.9",
        "concept": "DNS logs",
        "prompt": "An investigator needs to identify which host requested resolution of a suspicious domain name. Which source is the best starting point?",
        "options": [
          "Endpoint logs",
          "Dashboard",
          "Firewall logs",
          "DNS logs"
        ],
        "correct": 3,
        "explanations": [
          "Endpoint logs: Record host activity and local security events. The scenario instead calls for DNS logs: Record name queries and responses.",
          "Dashboard: Summarizes metrics and current state. The scenario instead calls for DNS logs: Record name queries and responses.",
          "Firewall logs: Record traffic allowed or denied by network policy. The scenario instead calls for DNS logs: Record name queries and responses.",
          "DNS logs: Record name queries and responses. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.9-6",
        "phase": "pre",
        "objective": "4.9",
        "concept": "Packet capture",
        "prompt": "An investigator needs detailed recorded network traffic beyond a summary of connection volumes. Which source best fits that requirement?",
        "options": [
          "Packet capture",
          "Dashboard",
          "Vulnerability scan report",
          "Metadata"
        ],
        "correct": 0,
        "explanations": [
          "Packet capture: Contains detailed packets and potentially payloads. This is the role or property required by the scenario.",
          "Dashboard: Summarizes metrics and current state. The scenario instead calls for Packet capture: Contains detailed packets and potentially payloads.",
          "Vulnerability scan report: Lists detected weaknesses and affected assets. The scenario instead calls for Packet capture: Contains detailed packets and potentially payloads.",
          "Metadata: Describes data such as timestamps, authors, or properties. The scenario instead calls for Packet capture: Contains detailed packets and potentially payloads."
        ]
      },
      {
        "id": "PRE-4.9-7",
        "phase": "pre",
        "objective": "4.9",
        "concept": "Flow records",
        "prompt": "An investigator needs an efficient summary of conversations and bytes transferred between hosts, without payload detail. Which source best fits?",
        "options": [
          "Application logs",
          "Metadata",
          "Packet capture",
          "Flow records"
        ],
        "correct": 3,
        "explanations": [
          "Application logs: Record events specific to an application's behavior. The scenario instead calls for Flow records: Summarize endpoints, timing, and traffic volume.",
          "Metadata: Describes data such as timestamps, authors, or properties. The scenario instead calls for Flow records: Summarize endpoints, timing, and traffic volume.",
          "Packet capture: Contains detailed packets and potentially payloads. The scenario instead calls for Flow records: Summarize endpoints, timing, and traffic volume.",
          "Flow records: Summarize endpoints, timing, and traffic volume. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.9-8",
        "phase": "pre",
        "objective": "4.9",
        "concept": "Vulnerability scan report",
        "prompt": "An investigator needs findings about known weaknesses detected on an asset during its last vulnerability assessment. Which source best fits?",
        "options": [
          "Application logs",
          "Vulnerability scan report",
          "Authentication logs",
          "Firewall logs"
        ],
        "correct": 1,
        "explanations": [
          "Application logs: Record events specific to an application's behavior. The scenario instead calls for Vulnerability scan report: Lists detected weaknesses and affected assets.",
          "Vulnerability scan report: Lists detected weaknesses and affected assets. This is the role or property required by the scenario.",
          "Authentication logs: Record sign-in attempts and identity events. The scenario instead calls for Vulnerability scan report: Lists detected weaknesses and affected assets.",
          "Firewall logs: Record traffic allowed or denied by network policy. The scenario instead calls for Vulnerability scan report: Lists detected weaknesses and affected assets."
        ]
      },
      {
        "id": "PRE-4.9-9",
        "phase": "pre",
        "objective": "4.9",
        "concept": "Dashboard",
        "prompt": "A manager needs a consolidated visual summary of current security measurements, with drill-down to underlying evidence. Which presentation source fits?",
        "options": [
          "Flow records",
          "Authentication logs",
          "Metadata",
          "Dashboard"
        ],
        "correct": 3,
        "explanations": [
          "Flow records: Summarize endpoints, timing, and traffic volume. The scenario instead calls for Dashboard: Summarizes metrics and current state.",
          "Authentication logs: Record sign-in attempts and identity events. The scenario instead calls for Dashboard: Summarizes metrics and current state.",
          "Metadata: Describes data such as timestamps, authors, or properties. The scenario instead calls for Dashboard: Summarizes metrics and current state.",
          "Dashboard: Summarizes metrics and current state. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-4.9-10",
        "phase": "pre",
        "objective": "4.9",
        "concept": "Metadata",
        "prompt": "An examiner needs a file's recorded creation time and author field rather than its document text. Which information category is this?",
        "options": [
          "Dashboard",
          "Application logs",
          "Firewall logs",
          "Metadata"
        ],
        "correct": 3,
        "explanations": [
          "Dashboard: Summarizes metrics and current state. The scenario instead calls for Metadata: Describes data such as timestamps, authors, or properties.",
          "Application logs: Record events specific to an application's behavior. The scenario instead calls for Metadata: Describes data such as timestamps, authors, or properties.",
          "Firewall logs: Record traffic allowed or denied by network policy. The scenario instead calls for Metadata: Describes data such as timestamps, authors, or properties.",
          "Metadata: Describes data such as timestamps, authors, or properties. This is the role or property required by the scenario."
        ]
      }
    ]
  },
  "5.1": {
    "bridge": "Governance sets direction, ownership, and accountability. It is distinct from the daily execution of security tasks.",
    "teach": "Policies state intent and requirements; standards define mandatory specifics; procedures give steps; guidelines recommend approaches. Data owners decide handling, custodians operate safeguards, controllers determine processing purposes and means, and processors act on their behalf. Exceptions require accountable review, scope, and duration.",
    "example": "A policy may require secure access. A standard specifies approved authentication requirements. A procedure shows how to enroll a device. An exception should document risk and an authorized decision instead of quietly becoming a permanent bypass.",
    "watch": [
      "Is the document setting direction, a mandatory detail, instructions, or advice?",
      "Who decides versus operates?",
      "Who can authorize an exception?"
    ],
    "questions": [
      {
        "id": "PRE-5.1-1",
        "phase": "pre",
        "objective": "5.1",
        "concept": "Policy",
        "prompt": "A leadership document states that access to sensitive information must be controlled and accountable. Which governance document sets that broad requirement?",
        "options": [
          "Policy",
          "Governance oversight",
          "Data controller",
          "Data owner"
        ],
        "correct": 0,
        "explanations": [
          "Policy: High-level management statement of required direction. This is the role or property required by the scenario.",
          "Governance oversight: Monitors direction, accountability, and adherence. The scenario instead calls for Policy: High-level management statement of required direction.",
          "Data controller: Determines purposes and means of personal-data processing. The scenario instead calls for Policy: High-level management statement of required direction.",
          "Data owner: Accountable business authority defines data protection requirements. The scenario instead calls for Policy: High-level management statement of required direction."
        ]
      },
      {
        "id": "PRE-5.1-2",
        "phase": "pre",
        "objective": "5.1",
        "concept": "Standard",
        "prompt": "A mandatory document specifies the exact minimum settings approved for endpoint encryption. Which governance document defines those required specifics?",
        "options": [
          "Data processor",
          "Standard",
          "Data custodian",
          "Procedure"
        ],
        "correct": 1,
        "explanations": [
          "Data processor: Processes personal data on behalf of a controller. The scenario instead calls for Standard: Specific mandatory requirements support policy.",
          "Standard: Specific mandatory requirements support policy. This is the role or property required by the scenario.",
          "Data custodian: Implements approved data handling and protection. The scenario instead calls for Standard: Specific mandatory requirements support policy.",
          "Procedure: Step-by-step instructions implement a task. The scenario instead calls for Standard: Specific mandatory requirements support policy."
        ]
      },
      {
        "id": "PRE-5.1-3",
        "phase": "pre",
        "objective": "5.1",
        "concept": "Procedure",
        "prompt": "A document gives technicians the ordered steps for enrolling an endpoint in encryption management. Which governance document is this?",
        "options": [
          "Data owner",
          "Governance oversight",
          "Data custodian",
          "Procedure"
        ],
        "correct": 3,
        "explanations": [
          "Data owner: Accountable business authority defines data protection requirements. The scenario instead calls for Procedure: Step-by-step instructions implement a task.",
          "Governance oversight: Monitors direction, accountability, and adherence. The scenario instead calls for Procedure: Step-by-step instructions implement a task.",
          "Data custodian: Implements approved data handling and protection. The scenario instead calls for Procedure: Step-by-step instructions implement a task.",
          "Procedure: Step-by-step instructions implement a task. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-5.1-4",
        "phase": "pre",
        "objective": "5.1",
        "concept": "Guideline",
        "prompt": "A document recommends optional practices for making security documentation easier to read. Which governance document is this?",
        "options": [
          "Standard",
          "Data custodian",
          "Procedure",
          "Guideline"
        ],
        "correct": 3,
        "explanations": [
          "Standard: Specific mandatory requirements support policy. The scenario instead calls for Guideline: Recommended practices allow discretion.",
          "Data custodian: Implements approved data handling and protection. The scenario instead calls for Guideline: Recommended practices allow discretion.",
          "Procedure: Step-by-step instructions implement a task. The scenario instead calls for Guideline: Recommended practices allow discretion.",
          "Guideline: Recommended practices allow discretion. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-5.1-5",
        "phase": "pre",
        "objective": "5.1",
        "concept": "Data owner",
        "prompt": "A business representative decides a dataset's classification and approves its handling requirements. Which data role fits?",
        "options": [
          "Data owner",
          "Procedure",
          "Policy",
          "Data controller"
        ],
        "correct": 0,
        "explanations": [
          "Data owner: Accountable business authority defines data protection requirements. This is the role or property required by the scenario.",
          "Procedure: Step-by-step instructions implement a task. The scenario instead calls for Data owner: Accountable business authority defines data protection requirements.",
          "Policy: High-level management statement of required direction. The scenario instead calls for Data owner: Accountable business authority defines data protection requirements.",
          "Data controller: Determines purposes and means of personal-data processing. The scenario instead calls for Data owner: Accountable business authority defines data protection requirements."
        ]
      },
      {
        "id": "PRE-5.1-6",
        "phase": "pre",
        "objective": "5.1",
        "concept": "Data custodian",
        "prompt": "A technical team implements backup, access, and maintenance arrangements according to the data owner's decisions. Which data role fits?",
        "options": [
          "Data owner",
          "Procedure",
          "Data custodian",
          "Guideline"
        ],
        "correct": 2,
        "explanations": [
          "Data owner: Accountable business authority defines data protection requirements. The scenario instead calls for Data custodian: Implements approved data handling and protection.",
          "Procedure: Step-by-step instructions implement a task. The scenario instead calls for Data custodian: Implements approved data handling and protection.",
          "Data custodian: Implements approved data handling and protection. This is the role or property required by the scenario.",
          "Guideline: Recommended practices allow discretion. The scenario instead calls for Data custodian: Implements approved data handling and protection."
        ]
      },
      {
        "id": "PRE-5.1-7",
        "phase": "pre",
        "objective": "5.1",
        "concept": "Data controller",
        "prompt": "An organization determines why and how personal information will be processed. Which privacy role fits that responsibility?",
        "options": [
          "Data owner",
          "Guideline",
          "Procedure",
          "Data controller"
        ],
        "correct": 3,
        "explanations": [
          "Data owner: Accountable business authority defines data protection requirements. The scenario instead calls for Data controller: Determines purposes and means of personal-data processing.",
          "Guideline: Recommended practices allow discretion. The scenario instead calls for Data controller: Determines purposes and means of personal-data processing.",
          "Procedure: Step-by-step instructions implement a task. The scenario instead calls for Data controller: Determines purposes and means of personal-data processing.",
          "Data controller: Determines purposes and means of personal-data processing. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-5.1-8",
        "phase": "pre",
        "objective": "5.1",
        "concept": "Data processor",
        "prompt": "A service provider processes personal information on another organization's instructions. Which privacy role fits that responsibility?",
        "options": [
          "Data custodian",
          "Data owner",
          "Data processor",
          "Governance oversight"
        ],
        "correct": 2,
        "explanations": [
          "Data custodian: Implements approved data handling and protection. The scenario instead calls for Data processor: Processes personal data on behalf of a controller.",
          "Data owner: Accountable business authority defines data protection requirements. The scenario instead calls for Data processor: Processes personal data on behalf of a controller.",
          "Data processor: Processes personal data on behalf of a controller. This is the role or property required by the scenario.",
          "Governance oversight: Monitors direction, accountability, and adherence. The scenario instead calls for Data processor: Processes personal data on behalf of a controller."
        ]
      },
      {
        "id": "PRE-5.1-9",
        "phase": "pre",
        "objective": "5.1",
        "concept": "Governance oversight",
        "prompt": "A board reviews security accountability, strategic objectives, and whether management is meeting its obligations. Which governance function is this?",
        "options": [
          "Guideline",
          "Data custodian",
          "Procedure",
          "Governance oversight"
        ],
        "correct": 3,
        "explanations": [
          "Guideline: Recommended practices allow discretion. The scenario instead calls for Governance oversight: Monitors direction, accountability, and adherence.",
          "Data custodian: Implements approved data handling and protection. The scenario instead calls for Governance oversight: Monitors direction, accountability, and adherence.",
          "Procedure: Step-by-step instructions implement a task. The scenario instead calls for Governance oversight: Monitors direction, accountability, and adherence.",
          "Governance oversight: Monitors direction, accountability, and adherence. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-5.1-10",
        "phase": "pre",
        "objective": "5.1",
        "concept": "Exception process",
        "prompt": "A team seeks a documented, authorized, time-limited deviation from a security requirement with stated risk and alternative controls. Which governance process is required?",
        "options": [
          "Data custodian",
          "Guideline",
          "Exception process",
          "Data processor"
        ],
        "correct": 2,
        "explanations": [
          "Data custodian: Implements approved data handling and protection. The scenario instead calls for Exception process: Formally records, authorizes, and reviews deviations.",
          "Guideline: Recommended practices allow discretion. The scenario instead calls for Exception process: Formally records, authorizes, and reviews deviations.",
          "Exception process: Formally records, authorizes, and reviews deviations. This is the role or property required by the scenario.",
          "Data processor: Processes personal data on behalf of a controller. The scenario instead calls for Exception process: Formally records, authorizes, and reviews deviations."
        ]
      }
    ]
  },
  "5.2": {
    "bridge": "Risk combines uncertainty with consequences. Removing every risk is generally not practical, so decisions must be explicit.",
    "teach": "Identify and register risks, assess likelihood and impact, compare with appetite and tolerance, then accept, avoid, transfer, or mitigate. SLE (Single Loss Expectancy) estimates one event’s loss. ARO (Annualized Rate of Occurrence) estimates annual frequency. ALE (Annualized Loss Expectancy) equals SLE × ARO. These estimates support judgment, not certainty.",
    "example": "For a $30,000 event expected twice in five years, ARO is 0.4 and ALE is $12,000. Insurance transfers some financial consequences but does not eliminate the event. A control may reduce likelihood or impact while leaving residual risk.",
    "watch": [
      "What is the uncertainty and impact?",
      "Does the response remove the activity, shift cost, reduce risk, or retain it?",
      "Are frequency units annual?"
    ],
    "questions": [
      {
        "id": "PRE-5.2-1",
        "phase": "pre",
        "objective": "5.2",
        "concept": "Risk register",
        "prompt": "A team needs a maintained record of identified risks, owners, responses, and status. Which management artifact fits?",
        "options": [
          "Risk acceptance",
          "Risk tolerance",
          "Risk avoidance",
          "Risk register"
        ],
        "correct": 3,
        "explanations": [
          "Risk acceptance: Acknowledges a risk and retains it by decision. The scenario instead calls for Risk register: Tracks risks, owners, ratings, and responses.",
          "Risk tolerance: Specific acceptable variation or threshold for a risk. The scenario instead calls for Risk register: Tracks risks, owners, ratings, and responses.",
          "Risk avoidance: Stops the activity that creates the risk. The scenario instead calls for Risk register: Tracks risks, owners, ratings, and responses.",
          "Risk register: Tracks risks, owners, ratings, and responses. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-5.2-2",
        "phase": "pre",
        "objective": "5.2",
        "concept": "Risk appetite",
        "prompt": "Leadership states the broad amount and type of risk the organization is willing to pursue in achieving its goals. Which concept is this?",
        "options": [
          "Single loss expectancy (SLE)",
          "Risk transfer",
          "Risk appetite",
          "Risk tolerance"
        ],
        "correct": 2,
        "explanations": [
          "Single loss expectancy (SLE): Expected financial loss from one event. The scenario instead calls for Risk appetite: Broad amount and type of risk an organization is willing to pursue or retain.",
          "Risk transfer: Shifts some financial consequences through another party. The scenario instead calls for Risk appetite: Broad amount and type of risk an organization is willing to pursue or retain.",
          "Risk appetite: Broad amount and type of risk an organization is willing to pursue or retain. This is the role or property required by the scenario.",
          "Risk tolerance: Specific acceptable variation or threshold for a risk. The scenario instead calls for Risk appetite: Broad amount and type of risk an organization is willing to pursue or retain."
        ]
      },
      {
        "id": "PRE-5.2-3",
        "phase": "pre",
        "objective": "5.2",
        "concept": "Risk tolerance",
        "prompt": "A team sets acceptable variation around a specific risk-related operating threshold. Which concept describes this limit?",
        "options": [
          "Risk acceptance",
          "Risk avoidance",
          "Annualized loss expectancy (ALE)",
          "Risk tolerance"
        ],
        "correct": 3,
        "explanations": [
          "Risk acceptance: Acknowledges a risk and retains it by decision. The scenario instead calls for Risk tolerance: Specific acceptable variation or threshold for a risk.",
          "Risk avoidance: Stops the activity that creates the risk. The scenario instead calls for Risk tolerance: Specific acceptable variation or threshold for a risk.",
          "Annualized loss expectancy (ALE): Expected annual loss equals SLE multiplied by ARO. The scenario instead calls for Risk tolerance: Specific acceptable variation or threshold for a risk.",
          "Risk tolerance: Specific acceptable variation or threshold for a risk. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-5.2-4",
        "phase": "pre",
        "objective": "5.2",
        "concept": "Risk acceptance",
        "prompt": "An authorized owner knowingly retains a documented risk without adding a treatment at this time. Which response is this?",
        "options": [
          "Risk acceptance",
          "Risk mitigation",
          "Risk transfer",
          "Risk register"
        ],
        "correct": 0,
        "explanations": [
          "Risk acceptance: Acknowledges a risk and retains it by decision. This is the role or property required by the scenario.",
          "Risk mitigation: Reduces likelihood or impact through safeguards. The scenario instead calls for Risk acceptance: Acknowledges a risk and retains it by decision.",
          "Risk transfer: Shifts some financial consequences through another party. The scenario instead calls for Risk acceptance: Acknowledges a risk and retains it by decision.",
          "Risk register: Tracks risks, owners, ratings, and responses. The scenario instead calls for Risk acceptance: Acknowledges a risk and retains it by decision."
        ]
      },
      {
        "id": "PRE-5.2-5",
        "phase": "pre",
        "objective": "5.2",
        "concept": "Risk avoidance",
        "prompt": "An organization cancels an activity so the risk arising from that activity is no longer incurred. Which response is this?",
        "options": [
          "Risk transfer",
          "Single loss expectancy (SLE)",
          "Risk avoidance",
          "Risk tolerance"
        ],
        "correct": 2,
        "explanations": [
          "Risk transfer: Shifts some financial consequences through another party. The scenario instead calls for Risk avoidance: Stops the activity that creates the risk.",
          "Single loss expectancy (SLE): Expected financial loss from one event. The scenario instead calls for Risk avoidance: Stops the activity that creates the risk.",
          "Risk avoidance: Stops the activity that creates the risk. This is the role or property required by the scenario.",
          "Risk tolerance: Specific acceptable variation or threshold for a risk. The scenario instead calls for Risk avoidance: Stops the activity that creates the risk."
        ]
      },
      {
        "id": "PRE-5.2-6",
        "phase": "pre",
        "objective": "5.2",
        "concept": "Risk transfer",
        "prompt": "A company buys insurance to shift defined financial consequences of an incident to another party. Which risk response is this?",
        "options": [
          "Risk appetite",
          "Risk acceptance",
          "Risk mitigation",
          "Risk transfer"
        ],
        "correct": 3,
        "explanations": [
          "Risk appetite: Broad amount and type of risk an organization is willing to pursue or retain. The scenario instead calls for Risk transfer: Shifts some financial consequences through another party.",
          "Risk acceptance: Acknowledges a risk and retains it by decision. The scenario instead calls for Risk transfer: Shifts some financial consequences through another party.",
          "Risk mitigation: Reduces likelihood or impact through safeguards. The scenario instead calls for Risk transfer: Shifts some financial consequences through another party.",
          "Risk transfer: Shifts some financial consequences through another party. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-5.2-7",
        "phase": "pre",
        "objective": "5.2",
        "concept": "Risk mitigation",
        "prompt": "A company introduces a control to reduce the likelihood or impact of a risk event. Which response is this?",
        "options": [
          "Risk appetite",
          "Risk avoidance",
          "Risk transfer",
          "Risk mitigation"
        ],
        "correct": 3,
        "explanations": [
          "Risk appetite: Broad amount and type of risk an organization is willing to pursue or retain. The scenario instead calls for Risk mitigation: Reduces likelihood or impact through safeguards.",
          "Risk avoidance: Stops the activity that creates the risk. The scenario instead calls for Risk mitigation: Reduces likelihood or impact through safeguards.",
          "Risk transfer: Shifts some financial consequences through another party. The scenario instead calls for Risk mitigation: Reduces likelihood or impact through safeguards.",
          "Risk mitigation: Reduces likelihood or impact through safeguards. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-5.2-8",
        "phase": "pre",
        "objective": "5.2",
        "concept": "Single loss expectancy (SLE)",
        "prompt": "An analyst estimates the monetary loss from one occurrence of a specified incident. Which quantitative measure is being calculated?",
        "options": [
          "Single loss expectancy (SLE)",
          "Annualized loss expectancy (ALE)",
          "Risk avoidance",
          "Risk appetite"
        ],
        "correct": 0,
        "explanations": [
          "Single loss expectancy (SLE): Expected financial loss from one event. This is the role or property required by the scenario.",
          "Annualized loss expectancy (ALE): Expected annual loss equals SLE multiplied by ARO. The scenario instead calls for Single loss expectancy (SLE): Expected financial loss from one event.",
          "Risk avoidance: Stops the activity that creates the risk. The scenario instead calls for Single loss expectancy (SLE): Expected financial loss from one event.",
          "Risk appetite: Broad amount and type of risk an organization is willing to pursue or retain. The scenario instead calls for Single loss expectancy (SLE): Expected financial loss from one event."
        ]
      },
      {
        "id": "PRE-5.2-9",
        "phase": "pre",
        "objective": "5.2",
        "concept": "Annualized rate of occurrence (ARO)",
        "prompt": "An analyst estimates that a specified event occurs twice in ten years and expresses its frequency as 0.2 per year. Which measure is this?",
        "options": [
          "Risk tolerance",
          "Annualized rate of occurrence (ARO)",
          "Single loss expectancy (SLE)",
          "Risk register"
        ],
        "correct": 1,
        "explanations": [
          "Risk tolerance: Specific acceptable variation or threshold for a risk. The scenario instead calls for Annualized rate of occurrence (ARO): Expected event frequency per year.",
          "Annualized rate of occurrence (ARO): Expected event frequency per year. This is the role or property required by the scenario.",
          "Single loss expectancy (SLE): Expected financial loss from one event. The scenario instead calls for Annualized rate of occurrence (ARO): Expected event frequency per year.",
          "Risk register: Tracks risks, owners, ratings, and responses. The scenario instead calls for Annualized rate of occurrence (ARO): Expected event frequency per year."
        ]
      },
      {
        "id": "PRE-5.2-10",
        "phase": "pre",
        "objective": "5.2",
        "concept": "Annualized loss expectancy (ALE)",
        "prompt": "An analyst multiplies the estimated loss per event by expected yearly frequency to estimate annual exposure. Which measure results?",
        "options": [
          "Annualized loss expectancy (ALE)",
          "Risk mitigation",
          "Risk appetite",
          "Single loss expectancy (SLE)"
        ],
        "correct": 0,
        "explanations": [
          "Annualized loss expectancy (ALE): Expected annual loss equals SLE multiplied by ARO. This is the role or property required by the scenario.",
          "Risk mitigation: Reduces likelihood or impact through safeguards. The scenario instead calls for Annualized loss expectancy (ALE): Expected annual loss equals SLE multiplied by ARO.",
          "Risk appetite: Broad amount and type of risk an organization is willing to pursue or retain. The scenario instead calls for Annualized loss expectancy (ALE): Expected annual loss equals SLE multiplied by ARO.",
          "Single loss expectancy (SLE): Expected financial loss from one event. The scenario instead calls for Annualized loss expectancy (ALE): Expected annual loss equals SLE multiplied by ARO."
        ]
      }
    ]
  },
  "5.3": {
    "bridge": "A supplier’s access, data handling, and dependencies can become your risk. Evaluate them before and during the relationship.",
    "teach": "Due diligence happens before commitment; monitoring continues afterward. Agreements serve different purposes: an SLA (Service-Level Agreement) defines service commitments, an NDA (Non-Disclosure Agreement) limits disclosure, an MSA (Master Service Agreement) establishes broad terms, and an SOW (Statement of Work) defines specific work. Audit rights support verification.",
    "example": "A camera-cloud provider may have strong availability promises but unclear data deletion or subcontractor controls. Assess the whole relationship, document responsibilities, and monitor changes rather than relying on a single certification or sales claim.",
    "watch": [
      "What obligation is missing?",
      "What evidence supports the vendor’s claim?",
      "How will changes and subcontractors be monitored?"
    ],
    "questions": [
      {
        "id": "PRE-5.3-1",
        "phase": "pre",
        "objective": "5.3",
        "concept": "Due diligence",
        "prompt": "Before selecting a supplier, a company investigates its security practices, financial stability, and ability to meet requirements. Which activity is this?",
        "options": [
          "Due diligence",
          "Service-level agreement (SLA)",
          "Right-to-audit clause",
          "Vendor monitoring"
        ],
        "correct": 0,
        "explanations": [
          "Due diligence: Investigates a third party before commitment. This is the role or property required by the scenario.",
          "Service-level agreement (SLA): Defines measurable service commitments. The scenario instead calls for Due diligence: Investigates a third party before commitment.",
          "Right-to-audit clause: Allows the customer to examine provider compliance or controls. The scenario instead calls for Due diligence: Investigates a third party before commitment.",
          "Vendor monitoring: Continually checks third-party performance and risk. The scenario instead calls for Due diligence: Investigates a third party before commitment."
        ]
      },
      {
        "id": "PRE-5.3-2",
        "phase": "pre",
        "objective": "5.3",
        "concept": "Right-to-audit clause",
        "prompt": "A customer needs contractual permission to inspect a supplier's relevant controls and evidence. Which clause should provide that permission?",
        "options": [
          "Non-disclosure agreement (NDA)",
          "Master service agreement (MSA)",
          "Vendor monitoring",
          "Right-to-audit clause"
        ],
        "correct": 3,
        "explanations": [
          "Non-disclosure agreement (NDA): Restricts disclosure of confidential information. The scenario instead calls for Right-to-audit clause: Allows the customer to examine provider compliance or controls.",
          "Master service agreement (MSA): Establishes broad terms governing multiple future engagements. The scenario instead calls for Right-to-audit clause: Allows the customer to examine provider compliance or controls.",
          "Vendor monitoring: Continually checks third-party performance and risk. The scenario instead calls for Right-to-audit clause: Allows the customer to examine provider compliance or controls.",
          "Right-to-audit clause: Allows the customer to examine provider compliance or controls. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-5.3-3",
        "phase": "pre",
        "objective": "5.3",
        "concept": "Service-level agreement (SLA)",
        "prompt": "A contract defines response times, availability targets, and remedies for missed service commitments. Which agreement fits?",
        "options": [
          "Supply chain assessment",
          "Right-to-audit clause",
          "Service-level agreement (SLA)",
          "Vendor monitoring"
        ],
        "correct": 2,
        "explanations": [
          "Supply chain assessment: Examines dependencies and supplier-related exposure. The scenario instead calls for Service-level agreement (SLA): Defines measurable service commitments.",
          "Right-to-audit clause: Allows the customer to examine provider compliance or controls. The scenario instead calls for Service-level agreement (SLA): Defines measurable service commitments.",
          "Service-level agreement (SLA): Defines measurable service commitments. This is the role or property required by the scenario.",
          "Vendor monitoring: Continually checks third-party performance and risk. The scenario instead calls for Service-level agreement (SLA): Defines measurable service commitments."
        ]
      },
      {
        "id": "PRE-5.3-4",
        "phase": "pre",
        "objective": "5.3",
        "concept": "Non-disclosure agreement (NDA)",
        "prompt": "A supplier must agree not to disclose confidential project information it receives. Which agreement most directly fits?",
        "options": [
          "Vendor monitoring",
          "Memorandum of understanding (MOU)",
          "Non-disclosure agreement (NDA)",
          "Right-to-audit clause"
        ],
        "correct": 2,
        "explanations": [
          "Vendor monitoring: Continually checks third-party performance and risk. The scenario instead calls for Non-disclosure agreement (NDA): Restricts disclosure of confidential information.",
          "Memorandum of understanding (MOU): Documents shared intent or understanding. The scenario instead calls for Non-disclosure agreement (NDA): Restricts disclosure of confidential information.",
          "Non-disclosure agreement (NDA): Restricts disclosure of confidential information. This is the role or property required by the scenario.",
          "Right-to-audit clause: Allows the customer to examine provider compliance or controls. The scenario instead calls for Non-disclosure agreement (NDA): Restricts disclosure of confidential information."
        ]
      },
      {
        "id": "PRE-5.3-5",
        "phase": "pre",
        "objective": "5.3",
        "concept": "Memorandum of understanding (MOU)",
        "prompt": "Two organizations record their shared understanding of a planned collaboration without detailing a specific service delivery package. Which document most closely fits that purpose?",
        "options": [
          "Supply chain assessment",
          "Memorandum of understanding (MOU)",
          "Memorandum of agreement (MOA)",
          "Right-to-audit clause"
        ],
        "correct": 1,
        "explanations": [
          "Supply chain assessment: Examines dependencies and supplier-related exposure. The scenario instead calls for Memorandum of understanding (MOU): Documents shared intent or understanding.",
          "Memorandum of understanding (MOU): Documents shared intent or understanding. This is the role or property required by the scenario.",
          "Memorandum of agreement (MOA): Documents agreed responsibilities and actions. The scenario instead calls for Memorandum of understanding (MOU): Documents shared intent or understanding.",
          "Right-to-audit clause: Allows the customer to examine provider compliance or controls. The scenario instead calls for Memorandum of understanding (MOU): Documents shared intent or understanding."
        ]
      },
      {
        "id": "PRE-5.3-6",
        "phase": "pre",
        "objective": "5.3",
        "concept": "Memorandum of agreement (MOA)",
        "prompt": "Two organizations document their agreed responsibilities and actions for a joint initiative. Which agreement most closely fits that purpose?",
        "options": [
          "Memorandum of agreement (MOA)",
          "Statement of work (SOW)",
          "Service-level agreement (SLA)",
          "Non-disclosure agreement (NDA)"
        ],
        "correct": 0,
        "explanations": [
          "Memorandum of agreement (MOA): Documents agreed responsibilities and actions. This is the role or property required by the scenario.",
          "Statement of work (SOW): Defines specific deliverables, scope, and work requirements. The scenario instead calls for Memorandum of agreement (MOA): Documents agreed responsibilities and actions.",
          "Service-level agreement (SLA): Defines measurable service commitments. The scenario instead calls for Memorandum of agreement (MOA): Documents agreed responsibilities and actions.",
          "Non-disclosure agreement (NDA): Restricts disclosure of confidential information. The scenario instead calls for Memorandum of agreement (MOA): Documents agreed responsibilities and actions."
        ]
      },
      {
        "id": "PRE-5.3-7",
        "phase": "pre",
        "objective": "5.3",
        "concept": "Master service agreement (MSA)",
        "prompt": "A customer and supplier establish overarching terms intended to govern multiple future engagements. Which agreement fits?",
        "options": [
          "Master service agreement (MSA)",
          "Supply chain assessment",
          "Memorandum of understanding (MOU)",
          "Vendor monitoring"
        ],
        "correct": 0,
        "explanations": [
          "Master service agreement (MSA): Establishes broad terms governing multiple future engagements. This is the role or property required by the scenario.",
          "Supply chain assessment: Examines dependencies and supplier-related exposure. The scenario instead calls for Master service agreement (MSA): Establishes broad terms governing multiple future engagements.",
          "Memorandum of understanding (MOU): Documents shared intent or understanding. The scenario instead calls for Master service agreement (MSA): Establishes broad terms governing multiple future engagements.",
          "Vendor monitoring: Continually checks third-party performance and risk. The scenario instead calls for Master service agreement (MSA): Establishes broad terms governing multiple future engagements."
        ]
      },
      {
        "id": "PRE-5.3-8",
        "phase": "pre",
        "objective": "5.3",
        "concept": "Statement of work (SOW)",
        "prompt": "A specific engagement needs documented deliverables, scope, milestones, and acceptance criteria. Which document fits?",
        "options": [
          "Memorandum of agreement (MOA)",
          "Due diligence",
          "Service-level agreement (SLA)",
          "Statement of work (SOW)"
        ],
        "correct": 3,
        "explanations": [
          "Memorandum of agreement (MOA): Documents agreed responsibilities and actions. The scenario instead calls for Statement of work (SOW): Defines specific deliverables, scope, and work requirements.",
          "Due diligence: Investigates a third party before commitment. The scenario instead calls for Statement of work (SOW): Defines specific deliverables, scope, and work requirements.",
          "Service-level agreement (SLA): Defines measurable service commitments. The scenario instead calls for Statement of work (SOW): Defines specific deliverables, scope, and work requirements.",
          "Statement of work (SOW): Defines specific deliverables, scope, and work requirements. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-5.3-9",
        "phase": "pre",
        "objective": "5.3",
        "concept": "Supply chain assessment",
        "prompt": "A buyer evaluates the security implications of a product's component suppliers and upstream dependencies. Which assessment is this?",
        "options": [
          "Statement of work (SOW)",
          "Memorandum of understanding (MOU)",
          "Supply chain assessment",
          "Non-disclosure agreement (NDA)"
        ],
        "correct": 2,
        "explanations": [
          "Statement of work (SOW): Defines specific deliverables, scope, and work requirements. The scenario instead calls for Supply chain assessment: Examines dependencies and supplier-related exposure.",
          "Memorandum of understanding (MOU): Documents shared intent or understanding. The scenario instead calls for Supply chain assessment: Examines dependencies and supplier-related exposure.",
          "Supply chain assessment: Examines dependencies and supplier-related exposure. This is the role or property required by the scenario.",
          "Non-disclosure agreement (NDA): Restricts disclosure of confidential information. The scenario instead calls for Supply chain assessment: Examines dependencies and supplier-related exposure."
        ]
      },
      {
        "id": "PRE-5.3-10",
        "phase": "pre",
        "objective": "5.3",
        "concept": "Vendor monitoring",
        "prompt": "After onboarding a provider, a company regularly reviews its performance, security changes, and emerging risks. Which ongoing activity is this?",
        "options": [
          "Due diligence",
          "Vendor monitoring",
          "Memorandum of understanding (MOU)",
          "Supply chain assessment"
        ],
        "correct": 1,
        "explanations": [
          "Due diligence: Investigates a third party before commitment. The scenario instead calls for Vendor monitoring: Continually checks third-party performance and risk.",
          "Vendor monitoring: Continually checks third-party performance and risk. This is the role or property required by the scenario.",
          "Memorandum of understanding (MOU): Documents shared intent or understanding. The scenario instead calls for Vendor monitoring: Continually checks third-party performance and risk.",
          "Supply chain assessment: Examines dependencies and supplier-related exposure. The scenario instead calls for Vendor monitoring: Continually checks third-party performance and risk."
        ]
      }
    ]
  },
  "5.4": {
    "bridge": "Compliance asks whether applicable obligations are being met and evidenced. Being compliant does not mean every risk is controlled.",
    "teach": "Distinguish law or regulation from contract terms and internal policy. Privacy requires transparency and appropriate handling of personal data, including applicable consent and rights processes. Monitoring and reporting provide ongoing evidence; an attestation is a formal assertion whose scope matters. Requirements depend on jurisdiction and context.",
    "example": "A service may meet a contractual uptime requirement while still failing a separate data-handling obligation. A privacy notice explains practices; it is not automatically consent. Keep evidence tied to the specific requirement being assessed.",
    "watch": [
      "Where does the obligation come from?",
      "What evidence demonstrates it?",
      "Does the claimed compliance cover this system and period?"
    ],
    "questions": [
      {
        "id": "PRE-5.4-1",
        "phase": "pre",
        "objective": "5.4",
        "concept": "Regulatory compliance",
        "prompt": "A business must satisfy a security requirement imposed by an applicable government rule. Which obligation category is this?",
        "options": [
          "Consent",
          "Privacy notice",
          "Sanctions and fines",
          "Regulatory compliance"
        ],
        "correct": 3,
        "explanations": [
          "Consent: An individual authorizes specified processing when that basis is applicable. The scenario instead calls for Regulatory compliance: Meets obligations imposed by applicable rules or authorities.",
          "Privacy notice: Explains personal-data collection and use. The scenario instead calls for Regulatory compliance: Meets obligations imposed by applicable rules or authorities.",
          "Sanctions and fines: Authorities may impose penalties for noncompliance. The scenario instead calls for Regulatory compliance: Meets obligations imposed by applicable rules or authorities.",
          "Regulatory compliance: Meets obligations imposed by applicable rules or authorities. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-5.4-2",
        "phase": "pre",
        "objective": "5.4",
        "concept": "Contractual compliance",
        "prompt": "A provider must satisfy a security requirement because it agreed to that term with its customer. Which obligation category is this?",
        "options": [
          "Attestation",
          "Reputational impact",
          "Compliance reporting",
          "Contractual compliance"
        ],
        "correct": 3,
        "explanations": [
          "Attestation: A formal statement asserts that requirements or conditions are met. The scenario instead calls for Contractual compliance: Meets obligations agreed with another party.",
          "Reputational impact: Trust and public perception suffer after a failure. The scenario instead calls for Contractual compliance: Meets obligations agreed with another party.",
          "Compliance reporting: Communicates adherence, evidence, and gaps. The scenario instead calls for Contractual compliance: Meets obligations agreed with another party.",
          "Contractual compliance: Meets obligations agreed with another party. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-5.4-3",
        "phase": "pre",
        "objective": "5.4",
        "concept": "Compliance monitoring",
        "prompt": "A team regularly checks control evidence against applicable requirements rather than waiting for the annual review. Which ongoing activity is this?",
        "options": [
          "Regulatory compliance",
          "Compliance monitoring",
          "Privacy notice",
          "Contractual compliance"
        ],
        "correct": 1,
        "explanations": [
          "Regulatory compliance: Meets obligations imposed by applicable rules or authorities. The scenario instead calls for Compliance monitoring: Continuously checks adherence to requirements.",
          "Compliance monitoring: Continuously checks adherence to requirements. This is the role or property required by the scenario.",
          "Privacy notice: Explains personal-data collection and use. The scenario instead calls for Compliance monitoring: Continuously checks adherence to requirements.",
          "Contractual compliance: Meets obligations agreed with another party. The scenario instead calls for Compliance monitoring: Continuously checks adherence to requirements."
        ]
      },
      {
        "id": "PRE-5.4-4",
        "phase": "pre",
        "objective": "5.4",
        "concept": "Attestation",
        "prompt": "An accountable party formally asserts that specified requirements have been met within a stated scope. What type of compliance evidence is this assertion?",
        "options": [
          "Data subject rights",
          "Attestation",
          "Privacy notice",
          "Sanctions and fines"
        ],
        "correct": 1,
        "explanations": [
          "Data subject rights: Individuals may exercise applicable rights over their personal data. The scenario instead calls for Attestation: A formal statement asserts that requirements or conditions are met.",
          "Attestation: A formal statement asserts that requirements or conditions are met. This is the role or property required by the scenario.",
          "Privacy notice: Explains personal-data collection and use. The scenario instead calls for Attestation: A formal statement asserts that requirements or conditions are met.",
          "Sanctions and fines: Authorities may impose penalties for noncompliance. The scenario instead calls for Attestation: A formal statement asserts that requirements or conditions are met."
        ]
      },
      {
        "id": "PRE-5.4-5",
        "phase": "pre",
        "objective": "5.4",
        "concept": "Privacy notice",
        "prompt": "A company explains to individuals what personal information it collects and how that information is used. Which privacy document serves this purpose?",
        "options": [
          "Contractual compliance",
          "Compliance monitoring",
          "Reputational impact",
          "Privacy notice"
        ],
        "correct": 3,
        "explanations": [
          "Contractual compliance: Meets obligations agreed with another party. The scenario instead calls for Privacy notice: Explains personal-data collection and use.",
          "Compliance monitoring: Continuously checks adherence to requirements. The scenario instead calls for Privacy notice: Explains personal-data collection and use.",
          "Reputational impact: Trust and public perception suffer after a failure. The scenario instead calls for Privacy notice: Explains personal-data collection and use.",
          "Privacy notice: Explains personal-data collection and use. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-5.4-6",
        "phase": "pre",
        "objective": "5.4",
        "concept": "Consent",
        "prompt": "A system records an individual's valid agreement to a specified optional processing activity where such agreement is required. Which privacy mechanism is this?",
        "options": [
          "Privacy notice",
          "Consent",
          "Data subject rights",
          "Compliance reporting"
        ],
        "correct": 1,
        "explanations": [
          "Privacy notice: Explains personal-data collection and use. The scenario instead calls for Consent: An individual authorizes specified processing when that basis is applicable.",
          "Consent: An individual authorizes specified processing when that basis is applicable. This is the role or property required by the scenario.",
          "Data subject rights: Individuals may exercise applicable rights over their personal data. The scenario instead calls for Consent: An individual authorizes specified processing when that basis is applicable.",
          "Compliance reporting: Communicates adherence, evidence, and gaps. The scenario instead calls for Consent: An individual authorizes specified processing when that basis is applicable."
        ]
      },
      {
        "id": "PRE-5.4-7",
        "phase": "pre",
        "objective": "5.4",
        "concept": "Data subject rights",
        "prompt": "A business establishes a process for eligible individuals to request access to or correction of their personal information. Which privacy concern is addressed?",
        "options": [
          "Sanctions and fines",
          "Compliance monitoring",
          "Data subject rights",
          "Reputational impact"
        ],
        "correct": 2,
        "explanations": [
          "Sanctions and fines: Authorities may impose penalties for noncompliance. The scenario instead calls for Data subject rights: Individuals may exercise applicable rights over their personal data.",
          "Compliance monitoring: Continuously checks adherence to requirements. The scenario instead calls for Data subject rights: Individuals may exercise applicable rights over their personal data.",
          "Data subject rights: Individuals may exercise applicable rights over their personal data. This is the role or property required by the scenario.",
          "Reputational impact: Trust and public perception suffer after a failure. The scenario instead calls for Data subject rights: Individuals may exercise applicable rights over their personal data."
        ]
      },
      {
        "id": "PRE-5.4-8",
        "phase": "pre",
        "objective": "5.4",
        "concept": "Compliance reporting",
        "prompt": "A team prepares a formal submission showing control status and supporting evidence to the relevant oversight audience. Which compliance activity is this?",
        "options": [
          "Privacy notice",
          "Compliance reporting",
          "Data subject rights",
          "Compliance monitoring"
        ],
        "correct": 1,
        "explanations": [
          "Privacy notice: Explains personal-data collection and use. The scenario instead calls for Compliance reporting: Communicates adherence, evidence, and gaps.",
          "Compliance reporting: Communicates adherence, evidence, and gaps. This is the role or property required by the scenario.",
          "Data subject rights: Individuals may exercise applicable rights over their personal data. The scenario instead calls for Compliance reporting: Communicates adherence, evidence, and gaps.",
          "Compliance monitoring: Continuously checks adherence to requirements. The scenario instead calls for Compliance reporting: Communicates adherence, evidence, and gaps."
        ]
      },
      {
        "id": "PRE-5.4-9",
        "phase": "pre",
        "objective": "5.4",
        "concept": "Sanctions and fines",
        "prompt": "A regulator imposes a monetary penalty after finding a violation. Which consequence category is this?",
        "options": [
          "Compliance reporting",
          "Privacy notice",
          "Compliance monitoring",
          "Sanctions and fines"
        ],
        "correct": 3,
        "explanations": [
          "Compliance reporting: Communicates adherence, evidence, and gaps. The scenario instead calls for Sanctions and fines: Authorities may impose penalties for noncompliance.",
          "Privacy notice: Explains personal-data collection and use. The scenario instead calls for Sanctions and fines: Authorities may impose penalties for noncompliance.",
          "Compliance monitoring: Continuously checks adherence to requirements. The scenario instead calls for Sanctions and fines: Authorities may impose penalties for noncompliance.",
          "Sanctions and fines: Authorities may impose penalties for noncompliance. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-5.4-10",
        "phase": "pre",
        "objective": "5.4",
        "concept": "Reputational impact",
        "prompt": "Customers lose confidence in a company following public disclosure of serious noncompliance. Which consequence category is this?",
        "options": [
          "Reputational impact",
          "Compliance monitoring",
          "Privacy notice",
          "Data subject rights"
        ],
        "correct": 0,
        "explanations": [
          "Reputational impact: Trust and public perception suffer after a failure. This is the role or property required by the scenario.",
          "Compliance monitoring: Continuously checks adherence to requirements. The scenario instead calls for Reputational impact: Trust and public perception suffer after a failure.",
          "Privacy notice: Explains personal-data collection and use. The scenario instead calls for Reputational impact: Trust and public perception suffer after a failure.",
          "Data subject rights: Individuals may exercise applicable rights over their personal data. The scenario instead calls for Reputational impact: Trust and public perception suffer after a failure."
        ]
      }
    ]
  },
  "5.5": {
    "bridge": "An assessment needs a defined purpose, scope, authority, and evidence standard before testing begins.",
    "teach": "Internal audits use organizational assessors; external audits use outside parties. Penetration tests attempt exploitation within authorization. Known-, partially known-, and unknown-environment tests vary the starting information. Rules of engagement define permitted methods, boundaries, timing, and contacts. Red-team exercises pursue adversary-style objectives across defenses.",
    "example": "Permission to scan one server is not permission to exploit every connected system. If a tester finds an out-of-scope weakness, use the agreed escalation and disclosure process rather than expanding testing unilaterally.",
    "watch": [
      "What was authorized?",
      "What information does the tester receive?",
      "Is the goal compliance evidence, exploitation, or broader defensive validation?"
    ],
    "questions": [
      {
        "id": "PRE-5.5-1",
        "phase": "pre",
        "objective": "5.5",
        "concept": "Internal audit",
        "prompt": "Assessors employed by the organization evaluate its own processes and controls. Which audit category is this?",
        "options": [
          "Red team exercise",
          "Responsible disclosure",
          "Partially known-environment test",
          "Internal audit"
        ],
        "correct": 3,
        "explanations": [
          "Red team exercise: Simulates adversary behavior against organizational defenses. The scenario instead calls for Internal audit: An organization's own audit function evaluates controls.",
          "Responsible disclosure: Reports vulnerabilities through an authorized coordinated process. The scenario instead calls for Internal audit: An organization's own audit function evaluates controls.",
          "Partially known-environment test: Testers receive limited information. The scenario instead calls for Internal audit: An organization's own audit function evaluates controls.",
          "Internal audit: An organization's own audit function evaluates controls. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-5.5-2",
        "phase": "pre",
        "objective": "5.5",
        "concept": "External audit",
        "prompt": "Independent assessors outside the organization evaluate its controls. Which audit category is this?",
        "options": [
          "External audit",
          "Rules of engagement",
          "Penetration testing",
          "Internal audit"
        ],
        "correct": 0,
        "explanations": [
          "External audit: Independent outsiders evaluate controls or compliance. This is the role or property required by the scenario.",
          "Rules of engagement: Defines authorization, scope, timing, and testing limits. The scenario instead calls for External audit: Independent outsiders evaluate controls or compliance.",
          "Penetration testing: Authorized active testing attempts exploitation. The scenario instead calls for External audit: Independent outsiders evaluate controls or compliance.",
          "Internal audit: An organization's own audit function evaluates controls. The scenario instead calls for External audit: Independent outsiders evaluate controls or compliance."
        ]
      },
      {
        "id": "PRE-5.5-3",
        "phase": "pre",
        "objective": "5.5",
        "concept": "Self-assessment",
        "prompt": "A department evaluates its own practices against an assessment checklist before a formal independent review. Which assessment approach is this?",
        "options": [
          "Self-assessment",
          "Unknown-environment test",
          "Partially known-environment test",
          "Red team exercise"
        ],
        "correct": 0,
        "explanations": [
          "Self-assessment: The responsible team evaluates its own controls. This is the role or property required by the scenario.",
          "Unknown-environment test: Testers begin with little or no internal knowledge. The scenario instead calls for Self-assessment: The responsible team evaluates its own controls.",
          "Partially known-environment test: Testers receive limited information. The scenario instead calls for Self-assessment: The responsible team evaluates its own controls.",
          "Red team exercise: Simulates adversary behavior against organizational defenses. The scenario instead calls for Self-assessment: The responsible team evaluates its own controls."
        ]
      },
      {
        "id": "PRE-5.5-4",
        "phase": "pre",
        "objective": "5.5",
        "concept": "Penetration testing",
        "prompt": "Authorized testers attempt to exploit weaknesses to demonstrate their impact within an agreed scope. Which assessment approach is this?",
        "options": [
          "Internal audit",
          "Penetration testing",
          "External audit",
          "Known-environment test"
        ],
        "correct": 1,
        "explanations": [
          "Internal audit: An organization's own audit function evaluates controls. The scenario instead calls for Penetration testing: Authorized active testing attempts exploitation.",
          "Penetration testing: Authorized active testing attempts exploitation. This is the role or property required by the scenario.",
          "External audit: Independent outsiders evaluate controls or compliance. The scenario instead calls for Penetration testing: Authorized active testing attempts exploitation.",
          "Known-environment test: Testers receive detailed target information. The scenario instead calls for Penetration testing: Authorized active testing attempts exploitation."
        ]
      },
      {
        "id": "PRE-5.5-5",
        "phase": "pre",
        "objective": "5.5",
        "concept": "Known-environment test",
        "prompt": "Testers receive extensive internal design information and credentials before beginning an authorized assessment. Which environment-knowledge model is this?",
        "options": [
          "Internal audit",
          "Known-environment test",
          "Self-assessment",
          "Responsible disclosure"
        ],
        "correct": 1,
        "explanations": [
          "Internal audit: An organization's own audit function evaluates controls. The scenario instead calls for Known-environment test: Testers receive detailed target information.",
          "Known-environment test: Testers receive detailed target information. This is the role or property required by the scenario.",
          "Self-assessment: The responsible team evaluates its own controls. The scenario instead calls for Known-environment test: Testers receive detailed target information.",
          "Responsible disclosure: Reports vulnerabilities through an authorized coordinated process. The scenario instead calls for Known-environment test: Testers receive detailed target information."
        ]
      },
      {
        "id": "PRE-5.5-6",
        "phase": "pre",
        "objective": "5.5",
        "concept": "Unknown-environment test",
        "prompt": "Testers begin an authorized assessment without internal architecture details or credentials. Which environment-knowledge model is this?",
        "options": [
          "Known-environment test",
          "External audit",
          "Responsible disclosure",
          "Unknown-environment test"
        ],
        "correct": 3,
        "explanations": [
          "Known-environment test: Testers receive detailed target information. The scenario instead calls for Unknown-environment test: Testers begin with little or no internal knowledge.",
          "External audit: Independent outsiders evaluate controls or compliance. The scenario instead calls for Unknown-environment test: Testers begin with little or no internal knowledge.",
          "Responsible disclosure: Reports vulnerabilities through an authorized coordinated process. The scenario instead calls for Unknown-environment test: Testers begin with little or no internal knowledge.",
          "Unknown-environment test: Testers begin with little or no internal knowledge. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-5.5-7",
        "phase": "pre",
        "objective": "5.5",
        "concept": "Partially known-environment test",
        "prompt": "Testers receive limited internal information, such as one normal user account, but not full design details. Which environment-knowledge model is this?",
        "options": [
          "Unknown-environment test",
          "Responsible disclosure",
          "Partially known-environment test",
          "Self-assessment"
        ],
        "correct": 2,
        "explanations": [
          "Unknown-environment test: Testers begin with little or no internal knowledge. The scenario instead calls for Partially known-environment test: Testers receive limited information.",
          "Responsible disclosure: Reports vulnerabilities through an authorized coordinated process. The scenario instead calls for Partially known-environment test: Testers receive limited information.",
          "Partially known-environment test: Testers receive limited information. This is the role or property required by the scenario.",
          "Self-assessment: The responsible team evaluates its own controls. The scenario instead calls for Partially known-environment test: Testers receive limited information."
        ]
      },
      {
        "id": "PRE-5.5-8",
        "phase": "pre",
        "objective": "5.5",
        "concept": "Rules of engagement",
        "prompt": "A testing agreement specifies permitted targets, prohibited actions, testing times, and emergency contacts. Which assessment document is this?",
        "options": [
          "Red team exercise",
          "Rules of engagement",
          "Unknown-environment test",
          "Responsible disclosure"
        ],
        "correct": 1,
        "explanations": [
          "Red team exercise: Simulates adversary behavior against organizational defenses. The scenario instead calls for Rules of engagement: Defines authorization, scope, timing, and testing limits.",
          "Rules of engagement: Defines authorization, scope, timing, and testing limits. This is the role or property required by the scenario.",
          "Unknown-environment test: Testers begin with little or no internal knowledge. The scenario instead calls for Rules of engagement: Defines authorization, scope, timing, and testing limits.",
          "Responsible disclosure: Reports vulnerabilities through an authorized coordinated process. The scenario instead calls for Rules of engagement: Defines authorization, scope, timing, and testing limits."
        ]
      },
      {
        "id": "PRE-5.5-9",
        "phase": "pre",
        "objective": "5.5",
        "concept": "Responsible disclosure",
        "prompt": "A researcher follows an agreed notification process that gives the affected organization an opportunity to address a discovered flaw. Which practice is this?",
        "options": [
          "Unknown-environment test",
          "External audit",
          "Red team exercise",
          "Responsible disclosure"
        ],
        "correct": 3,
        "explanations": [
          "Unknown-environment test: Testers begin with little or no internal knowledge. The scenario instead calls for Responsible disclosure: Reports vulnerabilities through an authorized coordinated process.",
          "External audit: Independent outsiders evaluate controls or compliance. The scenario instead calls for Responsible disclosure: Reports vulnerabilities through an authorized coordinated process.",
          "Red team exercise: Simulates adversary behavior against organizational defenses. The scenario instead calls for Responsible disclosure: Reports vulnerabilities through an authorized coordinated process.",
          "Responsible disclosure: Reports vulnerabilities through an authorized coordinated process. This is the role or property required by the scenario."
        ]
      },
      {
        "id": "PRE-5.5-10",
        "phase": "pre",
        "objective": "5.5",
        "concept": "Red team exercise",
        "prompt": "An authorized adversary-style exercise pursues defined objectives to test detection and response across multiple defenses. Which exercise fits?",
        "options": [
          "Unknown-environment test",
          "Partially known-environment test",
          "Self-assessment",
          "Red team exercise"
        ],
        "correct": 3,
        "explanations": [
          "Unknown-environment test: Testers begin with little or no internal knowledge. The scenario instead calls for Red team exercise: Simulates adversary behavior against organizational defenses.",
          "Partially known-environment test: Testers receive limited information. The scenario instead calls for Red team exercise: Simulates adversary behavior against organizational defenses.",
          "Self-assessment: The responsible team evaluates its own controls. The scenario instead calls for Red team exercise: Simulates adversary behavior against organizational defenses.",
          "Red team exercise: Simulates adversary behavior against organizational defenses. This is the role or property required by the scenario."
        ]
      }
    ]
  },
  "5.6": {
    "bridge": "Awareness succeeds when people act safely and report concerns—not when they merely finish a presentation.",
    "teach": "Teach recognizable actions, make reporting easy, tailor training to roles, and measure behavior. Simulations provide practice and feedback. A reporting culture encourages early reports without unnecessary blame. Metrics should reflect outcomes such as reporting speed, repeat errors, and correct responses rather than attendance alone.",
    "example": "A staff member who quickly reports a mistaken click can help responders contain harm. If punishment makes employees hide mistakes, a low report count may reflect silence rather than safety. Reinforce the specific action needed next time.",
    "watch": [
      "What behavior should change?",
      "Can people report quickly?",
      "Does the metric measure participation or actual effectiveness?"
    ],
    "questions": [
      {
        "id": "PRE-5.6-1",
        "phase": "pre",
        "objective": "5.6",
        "concept": "Phishing simulation",
        "prompt": "A training team sends controlled deceptive messages to measure how staff recognize and report them. Which exercise is this?",
        "options": [
          "Reporting culture",
          "Phishing simulation",
          "Acceptable use awareness",
          "Remote-work awareness"
        ],
        "correct": 1,
        "explanations": [
          "Reporting culture: Encourages prompt disclosure without discouraging honest reports. The scenario instead calls for Phishing simulation: Controlled messages test recognition and response.",
          "Phishing simulation: Controlled messages test recognition and response. This is the role or property required by the scenario.",
          "Acceptable use awareness: Teaches permitted and prohibited use of organizational resources. The scenario instead calls for Phishing simulation: Controlled messages test recognition and response.",
          "Remote-work awareness: Addresses risks outside normal facilities. The scenario instead calls for Phishing simulation: Controlled messages test recognition and response."
        ]
      },
      {
        "id": "PRE-5.6-2",
        "phase": "pre",
        "objective": "5.6",
        "concept": "Incident reporting",
        "prompt": "An employee notices suspicious activity and uses the designated security notification channel promptly. Which desired behavior is this?",
        "options": [
          "Incident reporting",
          "Reporting culture",
          "Remote-work awareness",
          "Social engineering awareness"
        ],
        "correct": 0,
        "explanations": [
          "Incident reporting: Provides a clear way to report suspicious events. This is the role or property required by the scenario.",
          "Reporting culture: Encourages prompt disclosure without discouraging honest reports. The scenario instead calls for Incident reporting: Provides a clear way to report suspicious events.",
          "Remote-work awareness: Addresses risks outside normal facilities. The scenario instead calls for Incident reporting: Provides a clear way to report suspicious events.",
          "Social engineering awareness: Teaches resistance to manipulation. The scenario instead calls for Incident reporting: Provides a clear way to report suspicious events."
        ]
      },
      {
        "id": "PRE-5.6-3",
        "phase": "pre",
        "objective": "5.6",
        "concept": "Role-based training",
        "prompt": "Finance staff receive payment-fraud training while administrators receive privileged-access training. Which training approach is this?",
        "options": [
          "Physical security awareness",
          "Reporting culture",
          "Role-based training",
          "Remote-work awareness"
        ],
        "correct": 2,
        "explanations": [
          "Physical security awareness: Teaches protection of facilities and physical assets. The scenario instead calls for Role-based training: Matches instruction to job responsibilities.",
          "Reporting culture: Encourages prompt disclosure without discouraging honest reports. The scenario instead calls for Role-based training: Matches instruction to job responsibilities.",
          "Role-based training: Matches instruction to job responsibilities. This is the role or property required by the scenario.",
          "Remote-work awareness: Addresses risks outside normal facilities. The scenario instead calls for Role-based training: Matches instruction to job responsibilities."
        ]
      },
      {
        "id": "PRE-5.6-4",
        "phase": "pre",
        "objective": "5.6",
        "concept": "Social engineering awareness",
        "prompt": "A lesson teaches employees to recognize manipulation through urgency, authority, and fabricated stories. Which awareness topic is this?",
        "options": [
          "Phishing simulation",
          "Social engineering awareness",
          "Password hygiene",
          "Physical security awareness"
        ],
        "correct": 1,
        "explanations": [
          "Phishing simulation: Controlled messages test recognition and response. The scenario instead calls for Social engineering awareness: Teaches resistance to manipulation.",
          "Social engineering awareness: Teaches resistance to manipulation. This is the role or property required by the scenario.",
          "Password hygiene: Promotes unique strong credentials and safe handling. The scenario instead calls for Social engineering awareness: Teaches resistance to manipulation.",
          "Physical security awareness: Teaches protection of facilities and physical assets. The scenario instead calls for Social engineering awareness: Teaches resistance to manipulation."
        ]
      },
      {
        "id": "PRE-5.6-5",
        "phase": "pre",
        "objective": "5.6",
        "concept": "Password hygiene",
        "prompt": "A lesson teaches employees to use unique credentials, approved password managers, and appropriate authentication protection. Which awareness topic is this?",
        "options": [
          "Acceptable use awareness",
          "Password hygiene",
          "Reporting culture",
          "Role-based training"
        ],
        "correct": 1,
        "explanations": [
          "Acceptable use awareness: Teaches permitted and prohibited use of organizational resources. The scenario instead calls for Password hygiene: Promotes unique strong credentials and safe handling.",
          "Password hygiene: Promotes unique strong credentials and safe handling. This is the role or property required by the scenario.",
          "Reporting culture: Encourages prompt disclosure without discouraging honest reports. The scenario instead calls for Password hygiene: Promotes unique strong credentials and safe handling.",
          "Role-based training: Matches instruction to job responsibilities. The scenario instead calls for Password hygiene: Promotes unique strong credentials and safe handling."
        ]
      },
      {
        "id": "PRE-5.6-6",
        "phase": "pre",
        "objective": "5.6",
        "concept": "Physical security awareness",
        "prompt": "A lesson teaches employees not to admit unknown visitors through controlled entrances and to secure unattended workspaces. Which awareness topic is this?",
        "options": [
          "Remote-work awareness",
          "Phishing simulation",
          "Physical security awareness",
          "Acceptable use awareness"
        ],
        "correct": 2,
        "explanations": [
          "Remote-work awareness: Addresses risks outside normal facilities. The scenario instead calls for Physical security awareness: Teaches protection of facilities and physical assets.",
          "Phishing simulation: Controlled messages test recognition and response. The scenario instead calls for Physical security awareness: Teaches protection of facilities and physical assets.",
          "Physical security awareness: Teaches protection of facilities and physical assets. This is the role or property required by the scenario.",
          "Acceptable use awareness: Teaches permitted and prohibited use of organizational resources. The scenario instead calls for Physical security awareness: Teaches protection of facilities and physical assets."
        ]
      },
      {
        "id": "PRE-5.6-7",
        "phase": "pre",
        "objective": "5.6",
        "concept": "Remote-work awareness",
        "prompt": "A lesson covers safe work on home networks, protection from household viewing, and handling business data away from the office. Which awareness topic is this?",
        "options": [
          "Acceptable use awareness",
          "Remote-work awareness",
          "Awareness metrics",
          "Phishing simulation"
        ],
        "correct": 1,
        "explanations": [
          "Acceptable use awareness: Teaches permitted and prohibited use of organizational resources. The scenario instead calls for Remote-work awareness: Addresses risks outside normal facilities.",
          "Remote-work awareness: Addresses risks outside normal facilities. This is the role or property required by the scenario.",
          "Awareness metrics: Measures learning and behavior rather than attendance alone. The scenario instead calls for Remote-work awareness: Addresses risks outside normal facilities.",
          "Phishing simulation: Controlled messages test recognition and response. The scenario instead calls for Remote-work awareness: Addresses risks outside normal facilities."
        ]
      },
      {
        "id": "PRE-5.6-8",
        "phase": "pre",
        "objective": "5.6",
        "concept": "Reporting culture",
        "prompt": "Managers encourage staff to disclose mistakes quickly without disproportionate blame so security can respond sooner. Which organizational condition are they building?",
        "options": [
          "Incident reporting",
          "Awareness metrics",
          "Reporting culture",
          "Phishing simulation"
        ],
        "correct": 2,
        "explanations": [
          "Incident reporting: Provides a clear way to report suspicious events. The scenario instead calls for Reporting culture: Encourages prompt disclosure without discouraging honest reports.",
          "Awareness metrics: Measures learning and behavior rather than attendance alone. The scenario instead calls for Reporting culture: Encourages prompt disclosure without discouraging honest reports.",
          "Reporting culture: Encourages prompt disclosure without discouraging honest reports. This is the role or property required by the scenario.",
          "Phishing simulation: Controlled messages test recognition and response. The scenario instead calls for Reporting culture: Encourages prompt disclosure without discouraging honest reports."
        ]
      },
      {
        "id": "PRE-5.6-9",
        "phase": "pre",
        "objective": "5.6",
        "concept": "Awareness metrics",
        "prompt": "A program measures reporting speed and repeat mistakes to judge whether training changes behavior. Which program component uses these measurements?",
        "options": [
          "Awareness metrics",
          "Physical security awareness",
          "Password hygiene",
          "Reporting culture"
        ],
        "correct": 0,
        "explanations": [
          "Awareness metrics: Measures learning and behavior rather than attendance alone. This is the role or property required by the scenario.",
          "Physical security awareness: Teaches protection of facilities and physical assets. The scenario instead calls for Awareness metrics: Measures learning and behavior rather than attendance alone.",
          "Password hygiene: Promotes unique strong credentials and safe handling. The scenario instead calls for Awareness metrics: Measures learning and behavior rather than attendance alone.",
          "Reporting culture: Encourages prompt disclosure without discouraging honest reports. The scenario instead calls for Awareness metrics: Measures learning and behavior rather than attendance alone."
        ]
      },
      {
        "id": "PRE-5.6-10",
        "phase": "pre",
        "objective": "5.6",
        "concept": "Acceptable use awareness",
        "prompt": "A lesson explains which activities and resources employees are permitted to use on company systems. Which awareness topic is this?",
        "options": [
          "Social engineering awareness",
          "Password hygiene",
          "Acceptable use awareness",
          "Physical security awareness"
        ],
        "correct": 2,
        "explanations": [
          "Social engineering awareness: Teaches resistance to manipulation. The scenario instead calls for Acceptable use awareness: Teaches permitted and prohibited use of organizational resources.",
          "Password hygiene: Promotes unique strong credentials and safe handling. The scenario instead calls for Acceptable use awareness: Teaches permitted and prohibited use of organizational resources.",
          "Acceptable use awareness: Teaches permitted and prohibited use of organizational resources. This is the role or property required by the scenario.",
          "Physical security awareness: Teaches protection of facilities and physical assets. The scenario instead calls for Acceptable use awareness: Teaches permitted and prohibited use of organizational resources."
        ]
      }
    ]
  }
};
