/* Original focused review. Regenerate: python authoring/morning/build.py */
window.MORNING_LESSONS=[
  {
    "id": "evidence",
    "title": "1. Read the evidence, then make the claim",
    "intro": "Start with the source, time, actor, action and result. Separate what a record actually shows from what you suspect.",
    "rows": [
      [
        "Authentication log",
        "Account, source, login result",
        "Investigate failed attempts followed by a success; a success alone does not prove compromise."
      ],
      [
        "Application log",
        "Application requests, transactions and errors",
        "Fields depend on configuration. An IP address is not reliable proof of physical location."
      ],
      [
        "NetFlow",
        "Endpoints, ports, time, packet and byte counts",
        "Flow summaries show communication patterns, not complete payloads. Collectors and analysts can use them to detect attacks."
      ],
      [
        "Audit trail",
        "Who performed which action, when, and with what outcome",
        "Supports accountability and compliance evidence; can include events from many logs."
      ],
      [
        "Chain of custody",
        "Who collected, possessed or transferred evidence, when and why",
        "Tracks evidence handling. A hash checks content integrity; neither alone identifies the attacker."
      ]
    ],
    "example": [
      [
        "09:02 user=lee src=198.51.100.24 result=FAIL",
        "One failed attempt; no successful access established."
      ],
      [
        "09:03 user=lee src=198.51.100.24 result=SUCCESS",
        "Correlate the account, source and time with expected activity."
      ],
      [
        "09:04 host=workstation7 dst=203.0.113.8 bytes_out=840000000",
        "Large outbound transfer warrants investigation. Flow data alone cannot identify the files."
      ],
      [
        "09:05–09:35 local records absent; collector still receiving other hosts",
        "Check collection health and remote evidence. A gap is suspicious, not automatic proof of deletion."
      ]
    ],
    "caution": "A log gap and unexplained outbound traffic both matter. Do not memorize that one always outranks the other. Read NOT/EXCEPT explicitly before choosing.",
    "source": [
      "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/netflow/configuration/15-mt/nf-15-mt-book/cfg-nflow-data-expt.html",
      "https://csrc.nist.gov/glossary/term/chain_of_custody"
    ],
    "questions": [
      {
        "id": "MOR14-01",
        "type": "mcq",
        "objective": "4.9",
        "concept": "1. Read the evidence, then make the claim",
        "prompt": "A flow record shows 600 MB sent from a workstation to an external address over TCP 443. Which conclusion requires additional evidence?",
        "options": [
          "The transfer contained payroll records",
          "The destination port was 443",
          "The workstation sent a substantial volume",
          "An external address received the traffic"
        ],
        "explanations": [
          "Flow metadata does not identify the transferred file contents.",
          "The destination port is explicitly recorded.",
          "The byte count directly supports this statement.",
          "The stated destination is external; its trustworthiness still needs investigation."
        ],
        "correct": 0,
        "revision": "morning-v14",
        "provenance": "Original practice"
      },
      {
        "id": "MOR14-02",
        "type": "mcq",
        "objective": "4.8",
        "concept": "1. Read the evidence, then make the claim",
        "prompt": "A disk image has a matching acquisition hash, but there is no record of who held it for three days. What is the unresolved concern?",
        "options": [
          "An incorrect retention classification",
          "Incomplete chain of custody",
          "Confirmed alteration of the image",
          "Missing attribution of the intruder"
        ],
        "explanations": [
          "No retention or classification requirement is specified.",
          "Matching content does not supply missing evidence-handling records.",
          "The matching hash does not establish alteration.",
          "Attribution is separate from documenting possession of evidence."
        ],
        "correct": 1,
        "revision": "morning-v14",
        "provenance": "Original practice"
      },
      {
        "id": "MOR14-03",
        "type": "mcq",
        "objective": "4.9",
        "concept": "1. Read the evidence, then make the claim",
        "prompt": "A responder must determine whether a server account successfully signed in after repeated password failures. Which source is most direct?",
        "options": [
          "The installed-update inventory",
          "A weekly storage-utilization report",
          "Authentication records with timestamps and outcomes",
          "Flow byte counts for the server"
        ],
        "explanations": [
          "Patches can affect exposure but do not record this login outcome.",
          "Disk usage does not identify successful sign-ins.",
          "These records directly identify login failures and successes.",
          "Traffic volume does not establish authentication success."
        ],
        "correct": 2,
        "revision": "morning-v14",
        "provenance": "Original practice"
      },
      {
        "id": "MOR14-04",
        "type": "mcq",
        "objective": "4.4",
        "concept": "1. Read the evidence, then make the claim",
        "prompt": "Local logs stop for twenty minutes while remote monitoring reports the host online. What is the best next investigative step?",
        "options": [
          "Classify the gap as proven attacker deletion",
          "Exclude compromise because the host stayed online",
          "Recreate the missing events from normal baselines",
          "Correlate remote records and check local logging health"
        ],
        "explanations": [
          "A gap is an indicator, not proof of its cause.",
          "An online host can still be compromised.",
          "Expected activity cannot substitute for actual evidence.",
          "This tests tampering and collection-failure explanations without assuming either."
        ],
        "correct": 3,
        "revision": "morning-v14",
        "provenance": "Original practice"
      }
    ],
    "teaching": {
      "title": "Logs vs NetFlow vs audit trails",
      "terms": [
        [
          "Authentication logs",
          "Show sign-in attempts: which account, where the attempt came from, and whether it succeeded. Use them when the question asks who logged in or whether access succeeded."
        ],
        [
          "Application logs",
          "Show what happened inside an application: requests, errors and transactions. The available details depend on what the application records."
        ],
        [
          "NetFlow",
          "Summarizes network conversations: source, destination, ports, time and traffic volume. It helps you spot patterns. It normally does not show the actual file or message contents."
        ],
        [
          "Audit trail",
          "A record of actions that lets you reconstruct who did what and when. Useful for accountability and showing that a required process happened."
        ],
        [
          "Chain of custody",
          "The record of who handled evidence, when they received or transferred it, and why. It protects the credibility of the evidence-handling process."
        ]
      ],
      "split": [
        "Login success or failure = authentication logs",
        "Application action or error = application logs",
        "Who talked to whom and how much = NetFlow",
        "Who did what = audit trail",
        "Who handled the evidence = chain of custody"
      ],
      "contrast": [
        "Audit trail asks: What actions happened in the system?",
        "Chain of custody asks: Who possessed this evidence after collection?",
        "A file hash helps detect changes to evidence. It does not replace the handling record."
      ],
      "scenario": "An administrator disables a user at 10:05. An auditor wants evidence of who performed the change. Later, an investigator copies the relevant logs to a drive and gives it to another analyst.",
      "answer": "The account-change record belongs to the audit trail. The signed handoff record belongs to the chain of custody. Both record people and times, but one tracks system activity and the other tracks possession of evidence."
    }
  },
  {
    "id": "crypto",
    "title": "2. Password attacks and cryptography",
    "intro": "Identify the operation: online login attempts, offline hash guessing, data encryption, or integrity verification.",
    "rows": [
      [
        "Password spraying",
        "A few likely passwords against many accounts",
        "Low attempts per account can avoid per-account lockout."
      ],
      [
        "Credential stuffing",
        "Previously stolen username/password pairs reused elsewhere",
        "The attacker starts with known pairs, not a list of generic guesses."
      ],
      [
        "Dictionary / brute force",
        "Word-list guesses / systematic candidate search",
        "Can occur online or against stolen password hashes."
      ],
      [
        "Rainbow tables",
        "Precomputed chains used to recover candidates from hashes",
        "Unique random salts defeat reuse of a generic precomputed table across accounts. Salts are not secret."
      ],
      [
        "AES — Advanced Encryption Standard",
        "Symmetric encryption; shared secret key",
        "Confidentiality. SHA — Secure Hash Algorithm — creates a digest, not reversible encryption."
      ],
      [
        "HMAC — Hash-based Message Authentication Code",
        "Keyed integrity and source authentication",
        "Does not encrypt. RSA — Rivest–Shamir–Adleman — uses a public/private key pair."
      ]
    ],
    "example": [
      [
        "Online route",
        "Password candidate → login service → rate limiting / multifactor checks"
      ],
      [
        "Offline route",
        "Stolen salted hash → candidate + stored salt → expensive password-hash calculation → compare"
      ],
      [
        "Data protection",
        "Encrypt to hide readable content. Hash to detect changes. Use an authenticated mechanism to establish a trusted source."
      ]
    ],
    "caution": "A salt does not make a weak password unguessable. A work factor makes each guess expensive. Encryption and hashing solve different problems.",
    "source": [
      "https://pages.nist.gov/800-63-4/sp800-63b/authenticators/"
    ],
    "questions": [
      {
        "id": "MOR14-05",
        "type": "mcq",
        "objective": "2.4",
        "concept": "2. Password attacks and cryptography",
        "prompt": "An attacker tries one seasonal password against 400 employees, then waits before trying a second password. Which technique best fits?",
        "options": [
          "Password spraying",
          "Credential stuffing",
          "Rainbow-table lookup",
          "Single-account brute force"
        ],
        "explanations": [
          "Few password candidates are spread across many accounts.",
          "No previously stolen username/password pairs are supplied.",
          "This is online authentication, not precomputed lookup against hashes.",
          "The attempts are deliberately distributed across accounts."
        ],
        "correct": 0,
        "revision": "morning-v14",
        "provenance": "Original practice"
      },
      {
        "id": "MOR14-06",
        "type": "mcq",
        "objective": "1.4",
        "concept": "2. Password attacks and cryptography",
        "prompt": "Two users choose the same password. The service adds a different random salt for each before applying a password-hashing function. What benefit does the salt provide?",
        "options": [
          "Lets administrators decrypt forgotten passwords",
          "Prevents reuse of one generic precomputed table across those accounts",
          "Makes the salt a second secret factor",
          "Makes password recovery by guessing impossible"
        ],
        "explanations": [
          "Password hashing is not designed to be reversed with a decryption key.",
          "Different salts require different computations, even for equal passwords.",
          "The salt can be stored alongside the hash and is not an authentication factor.",
          "Weak passwords can still be guessed with per-salt computation."
        ],
        "correct": 1,
        "revision": "morning-v14",
        "provenance": "Original practice"
      },
      {
        "id": "MOR14-07",
        "type": "mcq",
        "objective": "1.4",
        "concept": "2. Password attacks and cryptography",
        "prompt": "A backup must be unreadable without a secret and recoverable by an authorized restore service. Which primitive supplies the required confidentiality?",
        "options": [
          "HMAC-SHA-256",
          "A digital signature",
          "AES encryption",
          "SHA-256 hashing"
        ],
        "explanations": [
          "A keyed integrity check does not conceal backup contents.",
          "A signature can authenticate data but does not make it unreadable.",
          "A symmetric key allows authorized encryption and decryption.",
          "A digest cannot be decrypted to restore the backup."
        ],
        "correct": 2,
        "revision": "morning-v14",
        "provenance": "Original practice"
      },
      {
        "id": "MOR14-08",
        "type": "mcq",
        "objective": "2.4",
        "concept": "2. Password attacks and cryptography",
        "prompt": "Login attempts use thousands of email/password pairs from a breach of a different service. Which attack is most specific?",
        "options": [
          "Password spraying",
          "Rainbow-table recovery",
          "Online exhaustive search",
          "Credential stuffing"
        ],
        "explanations": [
          "Spraying distributes a small set of likely passwords rather than using breached pairs.",
          "No stolen target hashes or precomputed lookup are described.",
          "The attacker is reusing known pairs rather than enumerating all possibilities.",
          "Known stolen pairs are reused against another service."
        ],
        "correct": 3,
        "revision": "morning-v14",
        "provenance": "Original practice"
      }
    ],
    "teaching": {
      "title": "AES vs SHA vs RSA vs HMAC",
      "terms": [
        [
          "AES — Advanced Encryption Standard",
          "Symmetric encryption. The same secret key encrypts and decrypts. Fast. Good for bulk data, such as a backup or a large file."
        ],
        [
          "RSA — Rivest–Shamir–Adleman",
          "Asymmetric cryptography. Uses a public/private key pair. Slower than symmetric encryption. Used for encryption and digital signatures; it can also transport a secret key in schemes that support RSA key transport."
        ],
        [
          "SHA — Secure Hash Algorithm",
          "Hashing. One-way. Produces a digest used to check integrity, not to encrypt and later decrypt the original data."
        ],
        [
          "HMAC — Hash-based Message Authentication Code",
          "Hash plus a shared secret. Used for integrity and authenticity: someone with the shared secret generated the valid authentication code."
        ]
      ],
      "split": [
        "AES = symmetric encryption",
        "RSA = asymmetric cryptography",
        "SHA = hashing",
        "HMAC = hash + secret key"
      ],
      "contrast": [
        "SHA asks: Did this data change? Compare against a trusted digest.",
        "HMAC asks: Did this data change, and did it come from someone with the shared secret?",
        "HMAC does not hide the message. Either party with the shared key can generate a valid code, so it does not provide the same non-repudiation property as a digital signature."
      ],
      "scenario": "Two servers already share a secret. They must reject altered messages and messages generated by anyone without that secret. Keeping the contents unreadable is not required.",
      "answer": "HMAC fits: the requirement is integrity plus shared-secret authenticity. Plain SHA does not require a secret, so an attacker can calculate a new digest after changing the message. AES addresses confidentiality. RSA uses a key pair; this scenario specifically calls for a shared-secret mechanism.",
      "extra": {
        "title": "Password spraying vs credential stuffing vs rainbow tables",
        "terms": [
          [
            "Password spraying",
            "Try a few common passwords across many accounts. The clue is many usernames with very few guesses per account."
          ],
          [
            "Credential stuffing",
            "Reuse stolen username/password pairs on another service. The clue is credentials from an earlier breach."
          ],
          [
            "Dictionary attack",
            "Try passwords from a word list. The clue is likely words and common variations."
          ],
          [
            "Rainbow tables",
            "Use precomputed hash chains to recover candidate passwords from stolen hashes. The clue is offline hash lookup, not repeated website sign-ins."
          ],
          [
            "Salt and work factor",
            "A unique random salt makes a generic precomputed table less reusable. A password-hashing work factor makes each guess more expensive. Neither makes a weak password impossible to guess."
          ]
        ],
        "split": [
          "Few passwords, many accounts = spraying",
          "Stolen account/password pairs reused = stuffing",
          "Candidate word list = dictionary",
          "Precomputed hash lookup = rainbow tables"
        ],
        "contrast": [
          "Online attacks talk to the login service and may trigger lockouts.",
          "Offline attacks work on stolen hashes; the website cannot lock out those local calculations."
        ]
      }
    }
  },
  {
    "id": "identity",
    "title": "3. Identity, permissions and policy scope",
    "intro": "Proofing establishes a real-world identity. Authentication checks a credential. Authorization decides what that identity may do.",
    "rows": [
      [
        "Identity proofing",
        "Validate identity evidence during enrollment",
        "An identity document check is not automatically two-factor authentication."
      ],
      [
        "Passkey",
        "A public-key credential; authenticator signs a challenge",
        "The service verifies with the public key. A local PIN or biometric can unlock use of the credential."
      ],
      [
        "GPO — Group Policy Object",
        "A set of centrally managed Windows policy settings",
        "Link to a site, domain or OU; filtering and inheritance can change effective scope."
      ],
      [
        "OU — Organizational Unit",
        "A container for related directory objects",
        "A department-specific OU can scope a GPO without creating a new domain."
      ],
      [
        "EAP — Extensible Authentication Protocol",
        "Framework supporting different authentication methods",
        "Used with 802.1X network access. WPA3 secures Wi-Fi; it is not a replacement for the EAP framework."
      ]
    ],
    "example": [
      [
        "Enrollment",
        "Validate identity evidence → issue or register a credential"
      ],
      [
        "Sign-in",
        "Challenge → authenticator signs using private key → service verifies public key"
      ],
      [
        "Department policy",
        "Domain → department OU → linked GPO applies relevant settings to in-scope users/computers"
      ]
    ],
    "caution": "Passkeys can be device-bound or synced, including credentials on security keys. Do not learn that a hardware device and a passkey are mutually exclusive.",
    "source": [
      "https://fidoalliance.org/passkeys/",
      "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/group-policy/group-policy-scope"
    ],
    "questions": [
      {
        "id": "MOR14-09",
        "type": "mcq",
        "objective": "4.6",
        "concept": "3. Identity, permissions and policy scope",
        "prompt": "Before creating a contractor account, enrollment staff validate an identity document and confirm the applicant matches it. What process is this?",
        "options": [
          "Identity proofing",
          "Session authorization",
          "Credential rotation",
          "Two-factor sign-in"
        ],
        "explanations": [
          "The organization is establishing the claimed identity before issuing access.",
          "No decision about an existing session resource is described.",
          "No existing secret is being replaced.",
          "Multiple verification steps during enrollment do not by themselves describe a two-factor login."
        ],
        "correct": 0,
        "revision": "morning-v14",
        "provenance": "Original practice"
      },
      {
        "id": "MOR14-10",
        "type": "mcq",
        "objective": "4.6",
        "concept": "3. Identity, permissions and policy scope",
        "prompt": "A website stores a public key. After local device unlock, an authenticator signs the website’s challenge. What does the website receive as proof?",
        "options": [
          "A copy of the device-unlock PIN",
          "A signature verifiable with the registered public key",
          "The user’s fingerprint template",
          "The private key for comparison"
        ],
        "explanations": [
          "The local unlock secret is not sent as the website password.",
          "The authenticator proves possession of the corresponding private key.",
          "Biometric matching occurs locally; the template is not the website credential.",
          "The verifier does not need possession of the private key."
        ],
        "correct": 1,
        "revision": "morning-v14",
        "provenance": "Original practice"
      },
      {
        "id": "MOR14-11",
        "type": "mcq",
        "objective": "4.5",
        "concept": "3. Identity, permissions and policy scope",
        "prompt": "All warehouse computers occupy a dedicated OU. A new screen-lock policy must apply only to those computers. With normal inheritance and filtering, where should its GPO be linked?",
        "options": [
          "A site containing every department",
          "A newly created independent domain",
          "The warehouse computer OU",
          "The domain root without filtering"
        ],
        "explanations": [
          "That site scope is broader than the warehouse OU.",
          "An existing OU supplies the needed scope without a new domain.",
          "This targets the specified computer objects without broadening the policy to the whole domain.",
          "That scope includes other domain computers."
        ],
        "correct": 2,
        "revision": "morning-v14",
        "provenance": "Original practice"
      },
      {
        "id": "MOR14-12",
        "type": "mcq",
        "objective": "3.2",
        "concept": "3. Identity, permissions and policy scope",
        "prompt": "A design needs a framework for certificate-based authentication methods on both wired and wireless 802.1X access. Which choice fits?",
        "options": [
          "WPA3",
          "AES",
          "LDAP",
          "EAP"
        ],
        "explanations": [
          "Wi-Fi Protected Access 3 addresses wireless security, not the general wired/wireless method framework.",
          "Advanced Encryption Standard is a cipher, not an authentication-method framework.",
          "Lightweight Directory Access Protocol accesses directory information; it is not the EAP exchange.",
          "Extensible Authentication Protocol supports authentication methods in 802.1X deployments."
        ],
        "correct": 3,
        "revision": "morning-v14",
        "provenance": "Original practice"
      }
    ],
    "teaching": {
      "title": "Proofing vs authentication vs authorization",
      "terms": [
        [
          "Identity proofing",
          "Establish that you are the real person you claim to be. Usually happens during enrollment, such as checking identity documents before issuing an account."
        ],
        [
          "Authentication",
          "Prove control of an accepted credential when signing in. A password, security key or passkey can participate in this."
        ],
        [
          "Authorization",
          "Decide what an authenticated identity is allowed to access or change. Being signed in does not automatically grant every permission."
        ],
        [
          "Passkey",
          "A public-key credential. An authenticator signs a challenge; the service checks it using the registered public key. A local PIN or biometric can unlock its use. The biometric itself is not sent to the website."
        ]
      ],
      "split": [
        "Establish the person’s identity = proofing",
        "Check a credential at sign-in = authentication",
        "Decide permitted actions = authorization",
        "Sign a challenge with a public-key credential = passkey authentication"
      ],
      "contrast": [
        "Proofing asks: Who is this person before we issue access?",
        "Authentication asks: Can this person prove control of the registered credential?",
        "Authorization asks: What may this account do?"
      ],
      "scenario": "A technician’s identity documents are checked before account creation. Next week, the technician signs in with a security key but cannot edit payroll records.",
      "answer": "The initial document check is identity proofing. The security-key sign-in is authentication. The restriction on payroll editing is authorization. The question’s stage determines the answer, even though all three belong to identity and access management.",
      "extra": {
        "title": "GPO vs OU; EAP vs WPA3",
        "terms": [
          [
            "GPO — Group Policy Object",
            "The Windows policy settings you want to apply."
          ],
          [
            "OU — Organizational Unit",
            "A directory container that groups users or computers. Linking a GPO to a department OU can target its settings there; inheritance and filtering still matter."
          ],
          [
            "EAP — Extensible Authentication Protocol",
            "A framework for authentication methods. Used with 802.1X on wired and wireless networks."
          ],
          [
            "WPA3 — Wi-Fi Protected Access 3",
            "Wireless network security. It is not the general authentication-method framework for both wired and wireless access."
          ]
        ],
        "split": [
          "The settings = GPO",
          "The directory container = OU",
          "Authentication-method framework = EAP",
          "Wi-Fi security = WPA3"
        ],
        "contrast": [
          "An OU groups objects; a GPO supplies settings. They work together.",
          "EAP and WPA3 can appear in the same wireless design; they describe different roles."
        ]
      }
    }
  },
  {
    "id": "operations",
    "title": "4. Vulnerabilities, automation and industrial systems",
    "intro": "Name the component and the exact property affected before choosing a control.",
    "rows": [
      [
        "CVE — Common Vulnerabilities and Exposures",
        "Identifier for a specific publicly disclosed vulnerability",
        "CVSS — Common Vulnerability Scoring System — describes severity, not its identity."
      ],
      [
        "Secure baseline",
        "Approved configuration state",
        "Automation can enforce consistency; it can also spread an incorrect configuration quickly."
      ],
      [
        "Single point of failure",
        "One failed component can stop the service",
        "Most directly an availability concern; redundancy and tested recovery reduce it."
      ],
      [
        "HMI — Human–Machine Interface",
        "Operator display and controls in an industrial system",
        "Control who can view or change operational commands."
      ],
      [
        "PLC — Programmable Logic Controller",
        "Executes control logic against physical inputs/outputs",
        "DCS — Distributed Control System — coordinates control across a process. A historian records process data."
      ]
    ],
    "example": [
      [
        "Operator",
        "Uses the HMI to view status or issue a command"
      ],
      [
        "Controller",
        "PLC executes control logic; sensors supply inputs and actuators affect equipment"
      ],
      [
        "History",
        "A historian retains time-series process data; it is not the operator’s primary control panel"
      ]
    ],
    "caution": "A severity score alone is not business risk. Consider exposure, exploitation and asset importance. Correct CVE expansion: Common Vulnerabilities and Exposures.",
    "source": [
      "https://www.cve.org/",
      "https://nvd.nist.gov/vuln/Vulnerability-Detail-Pages"
    ],
    "questions": [
      {
        "id": "MOR14-13",
        "type": "mcq",
        "objective": "4.3",
        "concept": "4. Vulnerabilities, automation and industrial systems",
        "prompt": "Two scanners give a flaw different severity scores. Which field best establishes whether both reports refer to the same disclosed vulnerability?",
        "options": [
          "CVE identifier",
          "CVSS score",
          "Asset criticality",
          "Scan completion time"
        ],
        "explanations": [
          "The identifier names the vulnerability independently of the severity assessment.",
          "Different vulnerabilities can share a score; different assessments can score one flaw differently.",
          "This describes organizational importance, not vulnerability identity.",
          "Time does not establish which flaw was identified."
        ],
        "correct": 0,
        "revision": "morning-v14",
        "provenance": "Original practice"
      },
      {
        "id": "MOR14-14",
        "type": "mcq",
        "objective": "4.7",
        "concept": "4. Vulnerabilities, automation and industrial systems",
        "prompt": "Servers gradually acquire inconsistent settings after manual changes. Which automation task most directly addresses that problem?",
        "options": [
          "Add more storage capacity automatically",
          "Compare and enforce approved configuration baselines",
          "Rotate sign-in credentials more frequently",
          "Increase vulnerability-scan frequency only"
        ],
        "explanations": [
          "Capacity management does not address unauthorized configuration differences.",
          "This detects and corrects configuration drift.",
          "Credential rotation does not ensure the full configuration matches a baseline.",
          "Scanning identifies issues but does not itself enforce desired settings."
        ],
        "correct": 1,
        "revision": "morning-v14",
        "provenance": "Original practice"
      },
      {
        "id": "MOR14-15",
        "type": "mcq",
        "objective": "4.7",
        "concept": "4. Vulnerabilities, automation and industrial systems",
        "prompt": "A single orchestration server is required for every production deployment. Its failure stops all deployments. Which security property is most directly affected?",
        "options": [
          "Integrity",
          "Non-repudiation",
          "Availability",
          "Confidentiality"
        ],
        "explanations": [
          "No incorrect alteration is established by the outage alone.",
          "The issue is service continuity, not proof of an actor’s actions.",
          "Loss of the required service interrupts operation.",
          "No unauthorized disclosure is described."
        ],
        "correct": 2,
        "revision": "morning-v14",
        "provenance": "Original practice"
      },
      {
        "id": "MOR14-16",
        "type": "mcq",
        "objective": "4.1",
        "concept": "4. Vulnerabilities, automation and industrial systems",
        "prompt": "A plant operator changes a pump setpoint using a touchscreen console. Which component supplies this direct operator interaction?",
        "options": [
          "PLC",
          "Historian",
          "Network sensor",
          "HMI"
        ],
        "explanations": [
          "The Programmable Logic Controller executes control logic rather than naming the operator interface.",
          "The historian stores process records rather than supplying the primary control interaction.",
          "A monitoring sensor observes traffic or conditions; it is not the described console.",
          "The Human–Machine Interface is the operator-facing display and control interface."
        ],
        "correct": 3,
        "revision": "morning-v14",
        "provenance": "Original practice"
      }
    ],
    "teaching": {
      "title": "CVE vs CVSS — name vs severity",
      "terms": [
        [
          "CVE — Common Vulnerabilities and Exposures",
          "Gives a publicly disclosed vulnerability an identifier. Think of the identifier like a case or RMA number: it lets different people refer to the same item. It does not tell you how severe the item is."
        ],
        [
          "CVSS — Common Vulnerability Scoring System",
          "Describes vulnerability severity using a scoring framework. The extra S is Scoring. A score is not the vulnerability’s identity and is not your organization’s complete risk assessment."
        ],
        [
          "Secure baseline",
          "The approved configuration a system should match. Automated enforcement checks for drift and can restore required settings."
        ],
        [
          "Single point of failure",
          "One component whose failure can stop the service. The immediate concern is availability: can the service keep running?"
        ]
      ],
      "split": [
        "Which vulnerability? = CVE",
        "How severe under the scoring model? = CVSS",
        "Which settings should stay consistent? = baseline",
        "One failure stops operation = availability concern"
      ],
      "contrast": [
        "CVE names the problem. CVSS scores its severity.",
        "Two different vulnerabilities can have the same severity score.",
        "Your patch priority also depends on exposure, active exploitation and business impact."
      ],
      "scenario": "Two reports list the same CVE identifier but assign different CVSS scores. An analyst needs to determine whether the reports describe the same disclosed flaw.",
      "answer": "Use the CVE identifier. Different scoring assumptions or versions can produce different assessments of the same vulnerability. Matching severity numbers alone would not establish that two reports describe the same flaw.",
      "extra": {
        "title": "HMI vs PLC vs historian",
        "terms": [
          [
            "HMI — Human–Machine Interface",
            "The operator’s screen and controls. A person uses it to see system status or request a change."
          ],
          [
            "PLC — Programmable Logic Controller",
            "Executes control logic using sensor inputs and equipment outputs."
          ],
          [
            "Historian",
            "Stores process measurements and events over time."
          ],
          [
            "DCS — Distributed Control System",
            "Coordinates control across an industrial process using distributed components."
          ]
        ],
        "split": [
          "Operator interaction = HMI",
          "Executes equipment control logic = PLC",
          "Historical process data = historian",
          "Distributed process control = DCS"
        ],
        "contrast": [
          "Changing a setting on a screen points to the HMI.",
          "Executing the logic that controls the equipment points to the PLC."
        ]
      }
    }
  },
  {
    "id": "recovery",
    "title": "5. Recovery, network clues and evidence limits",
    "intro": "Match the recovery mechanism to the required outcome. A live copy and a recoverable historical copy are different requirements.",
    "rows": [
      [
        "Replication",
        "Continuously or frequently copies changes to another system",
        "Improves continuity but may also copy accidental deletion or corruption."
      ],
      [
        "Snapshot / backup",
        "Point-in-time state / recoverable copy",
        "Historical recovery depends on retention, independence and protection."
      ],
      [
        "Journaling",
        "Records operations for consistency or replay",
        "Not by itself a continuously usable secondary system."
      ],
      [
        "RPO — Recovery Point Objective",
        "Maximum acceptable data-loss window",
        "RTO — Recovery Time Objective — is the time target for restoring service."
      ],
      [
        "TCP 1433 / 21 / 443 / 53",
        "Common SQL Server / FTP control / HTTPS / DNS ports",
        "Ports suggest a service; validate the actual listener and permitted access. DNS also commonly uses UDP 53."
      ]
    ],
    "example": [
      [
        "Timeline",
        "09:00 recovery point → 09:10 disruption → 09:40 restored"
      ],
      [
        "Read the interval",
        "Ten minutes of potential data loss; thirty minutes of service downtime."
      ],
      [
        "Test choice",
        "Tabletop: discuss a scenario. Operational exercises: perform actions. A simulation can overlap a functional exercise depending on its design."
      ]
    ],
    "caution": "Cloud backups can be offsite. Race conditions include time-of-check/time-of-use races. Avoid treating overlapping categories as mutually exclusive merely to match a poorly constrained question.",
    "source": [
      "https://csrc.nist.gov/glossary/term/recovery_point_objective",
      "https://csrc.nist.gov/glossary/term/recovery_time_objective"
    ],
    "questions": [
      {
        "id": "MOR14-17",
        "type": "mcq",
        "objective": "3.4",
        "concept": "5. Recovery, network clues and evidence limits",
        "prompt": "A database needs a secondary server updated within seconds so it can take over rapidly. Which mechanism best supplies that current copy?",
        "options": [
          "Replication",
          "Weekly full backups",
          "A local transaction journal without any secondary transfer",
          "A one-time snapshot created at deployment"
        ],
        "explanations": [
          "Ongoing synchronization supplies a near-current secondary; historical backups are still needed.",
          "These leave a much larger potential data-loss window.",
          "Local records alone do not maintain the required secondary server.",
          "The snapshot does not keep following ongoing changes."
        ],
        "correct": 0,
        "revision": "morning-v14",
        "provenance": "Original practice"
      },
      {
        "id": "MOR14-18",
        "type": "mcq",
        "objective": "3.4",
        "concept": "5. Recovery, network clues and evidence limits",
        "prompt": "At 14:20 a service fails. The latest recoverable data is from 14:15, and service returns at 14:50. Which requirement did the recovery meet?",
        "options": [
          "An RPO of 5 minutes and RTO of 15 minutes",
          "An RPO of 5 minutes and RTO of 30 minutes",
          "An RPO of 30 minutes and RTO of 5 minutes",
          "An RPO of zero and RTO of 30 minutes"
        ],
        "explanations": [
          "Restoration occurred thirty minutes after failure, not fifteen.",
          "The data-loss window is five minutes; restoration takes thirty minutes.",
          "This reverses the loss and restoration intervals.",
          "There is a five-minute gap between recoverable data and failure."
        ],
        "correct": 1,
        "revision": "morning-v14",
        "provenance": "Original practice"
      },
      {
        "id": "MOR14-19",
        "type": "mcq",
        "objective": "2.5",
        "concept": "5. Recovery, network clues and evidence limits",
        "prompt": "A firewall permits Internet clients to reach TCP 1433 on a database host. No public database access is required. Which change best addresses the exposure?",
        "options": [
          "Rename the database while keeping public network access",
          "Permit the connection only outside office hours",
          "Restrict the database listener to authorized application sources",
          "Block TCP 21 and leave the database rule unchanged"
        ],
        "explanations": [
          "A new name is not an access restriction.",
          "A time window still permits unnecessary public database access.",
          "TCP 1433 commonly serves Microsoft SQL Server; source restriction matches the stated need.",
          "FTP control filtering does not close the described database exposure."
        ],
        "correct": 2,
        "revision": "morning-v14",
        "provenance": "Original practice"
      },
      {
        "id": "MOR14-20",
        "type": "mcq",
        "objective": "3.4",
        "concept": "5. Recovery, network clues and evidence limits",
        "prompt": "A deletion is immediately replicated to the secondary database. Which additional capability best supports recovery of yesterday’s deleted records?",
        "options": [
          "A faster replication link",
          "A second replica that applies every change immediately",
          "A shorter session timeout",
          "Protected historical backups with tested restoration"
        ],
        "explanations": [
          "Faster propagation does not preserve older data.",
          "Another current copy can receive the same deletion.",
          "Session management does not recover historical records.",
          "A retained earlier copy provides recovery beyond the current replicated state."
        ],
        "correct": 3,
        "revision": "morning-v14",
        "provenance": "Original practice"
      }
    ],
    "teaching": {
      "title": "RPO vs RTO; replication vs backups",
      "terms": [
        [
          "RPO — Recovery Point Objective",
          "How much recent data loss is acceptable, expressed as time. If you can lose at most ten minutes of transactions, the RPO is ten minutes."
        ],
        [
          "RTO — Recovery Time Objective",
          "How long restoration may take. If the service must be back within an hour, the RTO is one hour."
        ],
        [
          "Replication",
          "Keep another system updated with changes. Useful for continuity, but it may also copy deletions and corruption."
        ],
        [
          "Backup",
          "A recoverable copy. Protected historical backups help when you need data from before an accidental deletion or attack."
        ],
        [
          "Snapshot",
          "A point-in-time view of a system or volume. Its independence and recovery value depend on how it is implemented and protected."
        ],
        [
          "Journaling",
          "Record operations so they can support consistency or replay. A local journal by itself is not a ready-to-use secondary server."
        ]
      ],
      "split": [
        "Acceptable data-loss window = RPO",
        "Acceptable restoration time = RTO",
        "Maintain a current secondary = replication",
        "Recover an older retained copy = backup"
      ],
      "contrast": [
        "RPO asks: How far back can the recovered data be?",
        "RTO asks: How long can restoration take?",
        "A perfectly synchronized replica can contain the same mistake as the primary."
      ],
      "scenario": "A service fails at noon. It is restored at 12:40 using data captured at 11:55. The business permits five minutes of lost data and forty-five minutes to restore service.",
      "answer": "The data-loss window is five minutes, so the recovery meets the RPO. Restoration took forty minutes, so it also meets the forty-five-minute RTO. The intervals start and end at different points: recoverable data to failure, versus failure to restoration."
    }
  },
  {
    "id": "governance",
    "title": "6. Governance: identify the purpose",
    "intro": "Distinguish the requested business outcome from a related but narrower concern.",
    "rows": [
      [
        "MOU — Memorandum of Understanding",
        "Shared intent and understanding between organizations",
        "SLA — Service-Level Agreement — specifies measurable service commitments."
      ],
      [
        "MSA — Master Service Agreement",
        "Umbrella terms for a continuing service relationship",
        "SOW — Statement of Work — describes defined work, deliverables and scope."
      ],
      [
        "Supply-chain assessment",
        "Security dependencies throughout suppliers and their providers",
        "Compliance and finances are useful inputs, not the complete security assessment."
      ],
      [
        "Risk appetite / tolerance",
        "Broad willingness to take risk / acceptable limits or variation",
        "Use stated limits and context; vague acceptable-risk wording can be ambiguous."
      ],
      [
        "Data owner / custodian",
        "Accountable for classification and access decisions / implements handling safeguards",
        "Controller determines purposes and means of personal-data processing; processor acts on its behalf."
      ]
    ],
    "example": [
      [
        "Observed behavior",
        "Unexpected access to unrelated files plus a large external upload"
      ],
      [
        "Appropriate response",
        "Report the facts through the established process. Investigate business justification; do not assert malicious intent without evidence."
      ],
      [
        "Choice check",
        "Ask: does this answer cover the whole requested purpose, or only one piece of it?"
      ]
    ],
    "caution": "Capability and sophistication overlap in common threat-actor descriptions. Do not invent a rigid universal boundary. Likewise, agreement names do not alone determine legal enforceability.",
    "source": [
      "https://csrc.nist.gov/projects/cyber-supply-chain-risk-management"
    ],
    "questions": [
      {
        "id": "MOR14-21",
        "type": "mcq",
        "objective": "5.3",
        "concept": "6. Governance: identify the purpose",
        "prompt": "Two agencies document their shared intention to cooperate on awareness training. The document does not specify uptime targets or a purchased deliverable. Which label best fits?",
        "options": [
          "MOU",
          "SLA",
          "SOW",
          "NDA"
        ],
        "explanations": [
          "A memorandum of understanding records the parties’ shared understanding and intended cooperation.",
          "A service-level agreement focuses on measurable service commitments.",
          "A statement of work defines particular work and deliverables.",
          "A nondisclosure agreement addresses confidentiality obligations."
        ],
        "correct": 0,
        "revision": "morning-v14",
        "provenance": "Original practice"
      },
      {
        "id": "MOR14-22",
        "type": "mcq",
        "objective": "5.3",
        "concept": "6. Governance: identify the purpose",
        "prompt": "A vendor has a valid compliance certificate but builds software using unreviewed third-party packages. What should the customer assess next?",
        "options": [
          "Whether all software responsibility can be assumed absent",
          "Security risks in the vendor’s upstream dependencies",
          "Only whether the certificate has an attractive rating",
          "Only the vendor’s customer satisfaction score"
        ],
        "explanations": [
          "Using a supplier does not remove the need to assess the customer’s exposure.",
          "A certificate does not resolve all supply-chain security risks.",
          "The uncovered dependency risk needs assessment beyond the certificate.",
          "Customer ratings do not establish component security."
        ],
        "correct": 1,
        "revision": "morning-v14",
        "provenance": "Original practice"
      },
      {
        "id": "MOR14-23",
        "type": "mcq",
        "objective": "5.1",
        "concept": "6. Governance: identify the purpose",
        "prompt": "A department decides which staff may access its classified records. Another team configures backups and permissions according to that decision. Which role best describes the implementing team?",
        "options": [
          "Independent auditor",
          "Data subject",
          "Data custodian",
          "Data owner"
        ],
        "explanations": [
          "An auditor evaluates controls rather than normally implementing these operational decisions.",
          "The subject is the person the personal data concerns, not its safeguarding team.",
          "The custodian applies operational safeguards under authorized requirements.",
          "The owner is accountable for decisions such as classification and access approval."
        ],
        "correct": 2,
        "revision": "morning-v14",
        "provenance": "Original practice"
      },
      {
        "id": "MOR14-24",
        "type": "mcq",
        "objective": "5.6",
        "concept": "6. Governance: identify the purpose",
        "prompt": "An employee begins exporting unrelated department files to a personal cloud account. The business reason is unknown. What is the best response?",
        "options": [
          "Conclude the employee is malicious solely from the upload",
          "Wait until data loss is independently confirmed",
          "Access the employee’s private account without authorization",
          "Report the observed access and uploads through the security process"
        ],
        "explanations": [
          "The indicators do not establish intent on their own.",
          "Waiting can prevent timely investigation of a meaningful indicator.",
          "An anomaly does not authorize an informal investigation outside approved powers.",
          "The facts warrant assessment without assuming malicious intent."
        ],
        "correct": 3,
        "revision": "morning-v14",
        "provenance": "Original practice"
      }
    ],
    "teaching": {
      "title": "MOU vs SLA vs MSA vs SOW",
      "terms": [
        [
          "MOU — Memorandum of Understanding",
          "Records a shared understanding or intention to cooperate between organizations."
        ],
        [
          "SLA — Service-Level Agreement",
          "Defines measurable service commitments, such as availability or response times."
        ],
        [
          "MSA — Master Service Agreement",
          "Sets umbrella terms for an ongoing service relationship."
        ],
        [
          "SOW — Statement of Work",
          "Defines specific work, scope and deliverables. It can operate under the broader terms of an MSA."
        ]
      ],
      "split": [
        "Shared intention to cooperate = MOU",
        "Measurable service commitment = SLA",
        "Umbrella relationship terms = MSA",
        "Specific work and deliverables = SOW"
      ],
      "contrast": [
        "An SLA asks: What level of service is promised?",
        "A SOW asks: What work are we delivering?",
        "An agreement’s label alone does not determine whether its terms are legally enforceable."
      ],
      "scenario": "A security contractor has general commercial terms covering future jobs. A new document lists the doors, readers and installation deliverables for one building. Another specifies the response time for service calls.",
      "answer": "The umbrella terms fit an MSA. The building-specific installation scope fits a SOW. The measurable service-call response commitment fits an SLA. Focus on what each document does, not simply that all three involve the same contractor.",
      "extra": {
        "title": "Data roles and risk terms",
        "terms": [
          [
            "Data owner",
            "Accountable for decisions such as classification and who should receive access."
          ],
          [
            "Data custodian",
            "Implements handling safeguards, permissions and backups according to approved requirements."
          ],
          [
            "Data controller / processor",
            "For personal data, the controller determines purposes and means of processing; the processor processes it on the controller’s behalf."
          ],
          [
            "Risk appetite",
            "The organization’s broad willingness to take risk while pursuing its goals."
          ],
          [
            "Risk tolerance",
            "The acceptable limits or variation around risk objectives. Look for a stated boundary rather than a general attitude."
          ]
        ],
        "split": [
          "Accountable for data decisions = owner",
          "Implements data safeguards = custodian",
          "Broad willingness to take risk = appetite",
          "Acceptable risk limits = tolerance"
        ],
        "contrast": [
          "Deciding who should have access differs from configuring the approved permissions.",
          "Vague wording about acceptable risk may not distinguish appetite from tolerance; a concrete limit makes the distinction clearer."
        ]
      }
    }
  }
];
