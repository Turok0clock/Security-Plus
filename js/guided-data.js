window.GUIDED_COURSES = {
  "acronyms": [
    {
      "title": "Security goals and identity",
      "objective": "1.2",
      "terms": [
        "CIA",
        "AAA",
        "IAM",
        "MFA",
        "SSO"
      ],
      "teach": "Begin with the outcome. Confidentiality limits who can read data; integrity detects unauthorized changes; availability keeps services usable. Authentication proves identity, authorization decides permission, and accounting records activity. IAM manages this lifecycle. MFA needs different factor categories; two passwords are still one category. SSO reduces repeated sign-ins, so protecting its central identity provider matters.",
      "flow": [
        "Identify the security goal",
        "Authenticate the person",
        "Authorize the action",
        "Record what happened"
      ],
      "example": "A badge reader identifies a technician, an access policy permits only the equipment room, and an event log records entry. Those are authentication, authorization, and accounting. Keeping the log unaltered protects integrity.",
      "trap": "Do not treat authentication as permission. A successfully signed-in user can still be denied access.",
      "questions": [
        {
          "prompt": "A technician signs in successfully but cannot open payroll records. Which AAA function made that decision?",
          "options": [
            "Authorization",
            "Authentication",
            "Accounting",
            "Availability"
          ],
          "correct": 0,
          "explanations": [
            "Authorization evaluates permissions for the requested resource.",
            "Authentication already succeeded; it established identity.",
            "Accounting records actions and decisions.",
            "Availability concerns whether services can be used, not individual permissions."
          ]
        },
        {
          "prompt": "A company adds a PIN after a password and calls it MFA. What is the BEST assessment?",
          "options": [
            "Both are knowledge factors",
            "The PIN is a possession factor",
            "Two prompts always provide MFA",
            "SSO makes them separate factors"
          ],
          "correct": 0,
          "explanations": [
            "Both are something you know; add a possession or inherence factor.",
            "Remembering a PIN does not require possession of a device.",
            "Factor categories, not prompt count, determine MFA.",
            "SSO changes the sign-in experience, not the factor category."
          ]
        },
        {
          "prompt": "A defender compares a downloaded file with a trusted published digest. Which CIA goal is being checked?",
          "options": [
            "Integrity",
            "Confidentiality",
            "Availability",
            "Authorization"
          ],
          "correct": 0,
          "explanations": [
            "A matching trusted digest supports that the file has not changed.",
            "A digest does not hide the file contents.",
            "This check does not keep a service online.",
            "A digest comparison does not grant access."
          ]
        }
      ]
    },
    {
      "title": "Permissions and federation",
      "objective": "4.6",
      "terms": [
        "RBAC",
        "ABAC",
        "PAM",
        "SAML",
        "OAuth",
        "OIDC",
        "FIDO"
      ],
      "teach": "RBAC grants permissions through job roles. ABAC evaluates attributes such as department, device posture, time, and data classification. PAM limits privileged access and can issue temporary credentials. SAML carries federation assertions, OAuth delegates authorization, and OIDC adds identity to OAuth. FIDO supports public-key authentication; an origin-bound security key helps resist phishing.",
      "flow": [
        "User requests access",
        "Identity assertion or authentication",
        "Role or attribute policy",
        "Time-limited privilege"
      ],
      "example": "A contractor signs in through the company identity provider. A policy checks contract status, a managed device, and work hours before allowing a privileged session. Federation handles identity; ABAC decides access; PAM controls the elevated session.",
      "trap": "OAuth alone is not a user authentication protocol. OIDC adds an identity layer.",
      "questions": [
        {
          "prompt": "Access requires a managed device, an active contract, and a daytime shift. Which model BEST represents this policy?",
          "options": [
            "ABAC",
            "RBAC",
            "SSO",
            "PAM"
          ],
          "correct": 0,
          "explanations": [
            "ABAC evaluates multiple attributes and context.",
            "RBAC bases permissions on roles; the scenario emphasizes context attributes.",
            "SSO avoids repeated authentication, not policy decisions.",
            "PAM manages elevated accounts; it does not name this policy model."
          ]
        },
        {
          "prompt": "A calendar app needs permission to read a user’s contacts without learning the password. Which framework fits?",
          "options": [
            "OAuth",
            "SAML",
            "FIDO",
            "RBAC"
          ],
          "correct": 0,
          "explanations": [
            "OAuth delegates scoped authorization using tokens.",
            "SAML commonly federates authentication assertions.",
            "FIDO authenticates users with public-key credentials.",
            "RBAC assigns permissions by role rather than delegating API access."
          ]
        },
        {
          "prompt": "Administrators should receive temporary elevated credentials with session recording. What is the BEST control?",
          "options": [
            "PAM",
            "OIDC",
            "SSO",
            "SAML"
          ],
          "correct": 0,
          "explanations": [
            "PAM manages and monitors privileged sessions and credentials.",
            "OIDC supplies identity information, not privileged-session management.",
            "SSO consolidates sign-ins but does not enforce temporary privilege.",
            "SAML exchanges assertions rather than managing administrator sessions."
          ]
        }
      ]
    },
    {
      "title": "Certificates and protected keys",
      "objective": "1.4",
      "terms": [
        "PKI",
        "CA",
        "CSR",
        "CRL",
        "OCSP",
        "TPM",
        "HSM",
        "TLS"
      ],
      "teach": "PKI binds identities to public keys using certificates and trust chains. A CA signs certificates. Generate a key pair locally, keep the private key secret, and send a CSR containing the public key. CRLs publish revocations; OCSP checks status. A TPM protects device-bound keys and measurements; an HSM performs protected key operations for a service. TLS protects network sessions when configured and validated correctly.",
      "flow": [
        "Generate key pair",
        "Send CSR, keep private key",
        "CA signs certificate",
        "Validate trust, name, time, revocation"
      ],
      "example": "A web server sends its CSR to a CA. The browser checks the resulting certificate against the requested hostname and a trusted chain. A revoked certificate can still be within its expiration dates, so expiration alone is insufficient.",
      "trap": "A CSR does not contain the private key. Encryption without authenticating the peer can still connect you to an attacker.",
      "questions": [
        {
          "prompt": "A server needs a certificate signed. Which item should leave the server for the CA?",
          "options": [
            "CSR",
            "Private key",
            "TPM recovery secret",
            "CA signing key"
          ],
          "correct": 0,
          "explanations": [
            "The CSR carries the public key and requested identity details.",
            "The private key must remain protected on the server or key device.",
            "A device recovery secret is unrelated and should not be disclosed.",
            "The CA owns its signing key; the server should never receive it."
          ]
        },
        {
          "prompt": "A client needs an online answer about whether one certificate has been revoked. Which mechanism fits?",
          "options": [
            "OCSP",
            "CSR",
            "HSM",
            "TLS"
          ],
          "correct": 0,
          "explanations": [
            "OCSP requests status for a particular certificate.",
            "A CSR requests issuance, not revocation status.",
            "An HSM protects key operations, not status queries.",
            "TLS secures sessions; certificate revocation checking is a separate validation concern."
          ]
        },
        {
          "prompt": "A signing service needs protected keys and high-volume cryptographic operations in dedicated hardware. Which is BEST?",
          "options": [
            "HSM",
            "TPM",
            "CRL",
            "CA certificate"
          ],
          "correct": 0,
          "explanations": [
            "An HSM is designed to protect keys and perform service-side cryptographic operations.",
            "A TPM is typically tied to a platform’s trust and boot measurements.",
            "A CRL is published revocation data.",
            "A CA certificate contains public information, not secure key-processing hardware."
          ]
        }
      ]
    },
    {
      "title": "Network detection and access",
      "objective": "3.2",
      "terms": [
        "IDS",
        "IPS",
        "WAF",
        "NAC",
        "802.1X",
        "RADIUS",
        "TACACS+"
      ],
      "teach": "An IDS observes and alerts; an IPS is positioned to prevent traffic. A WAF understands web requests and can filter application attacks. NAC evaluates who or what may join the network; 802.1X provides port-based authentication using an authenticator and an authentication service. RADIUS commonly supports network-access AAA. TACACS+ is commonly used for device administration with separated AAA functions.",
      "flow": [
        "Endpoint requests network access",
        "Switch relays authentication",
        "AAA service evaluates identity",
        "NAC applies access policy"
      ],
      "example": "A laptop attaches to a switch. The switch uses 802.1X and RADIUS before opening normal access. An IDS later detects unusual traffic; an inline IPS can block it. A WAF protects the web application specifically.",
      "trap": "An IDS alert does not mean traffic was blocked. A WAF is not a replacement for all network firewall rules.",
      "questions": [
        {
          "prompt": "A sensor sees an exploit and raises an alert, but traffic continues. Which device behavior is shown?",
          "options": [
            "IDS",
            "IPS enforcement",
            "NAC admission",
            "WAF blocking"
          ],
          "correct": 0,
          "explanations": [
            "IDS detects and alerts without necessarily blocking.",
            "IPS enforcement would prevent the matching traffic.",
            "NAC admission controls entry to the network.",
            "WAF blocking would reject matching web requests."
          ]
        },
        {
          "prompt": "A public website needs filtering of malicious HTTP parameters. Which is the BEST fit?",
          "options": [
            "WAF",
            "RADIUS",
            "TACACS+",
            "802.1X"
          ],
          "correct": 0,
          "explanations": [
            "A WAF inspects web application traffic and request patterns.",
            "RADIUS supplies network-access AAA.",
            "TACACS+ provides administrative AAA for devices.",
            "802.1X authenticates access at a network port."
          ]
        },
        {
          "prompt": "The security team wants switch ports to require user or device authentication before normal access. Which standard fits?",
          "options": [
            "802.1X",
            "TLS",
            "OCSP",
            "SAML"
          ],
          "correct": 0,
          "explanations": [
            "802.1X provides port-based network access authentication.",
            "TLS secures sessions but does not define switch-port admission.",
            "OCSP checks certificate revocation status.",
            "SAML supplies federation assertions for services."
          ]
        }
      ]
    },
    {
      "title": "Tunnels and cloud boundaries",
      "objective": "3.1",
      "terms": [
        "VPN",
        "IPsec",
        "ESP",
        "AH",
        "PSK",
        "CASB",
        "CSPM",
        "ZTNA",
        "SD-WAN",
        "IaC"
      ],
      "teach": "A VPN protects traffic across an untrusted path. IPsec is a suite: ESP can encrypt and authenticate, while AH provides integrity and authentication without confidentiality. A PSK is a shared secret used for authentication. CASB applies policy around cloud service use; CSPM finds cloud configuration weaknesses. ZTNA grants access to specific applications after explicit checks. SD-WAN steers WAN traffic; IaC defines infrastructure through versioned configuration.",
      "flow": [
        "Check identity and device",
        "Permit required application",
        "Protect traffic",
        "Monitor configuration drift"
      ],
      "example": "A company finds publicly exposed storage through CSPM, applies cloud-use policies through a CASB, and gives contractors access to one application through ZTNA. These products solve different problems despite all appearing in cloud architecture.",
      "trap": "AH is not encryption. A VPN connection alone should not imply permission to reach every internal system.",
      "questions": [
        {
          "prompt": "A tunnel must conceal packet payloads. Which IPsec component can provide confidentiality?",
          "options": [
            "ESP",
            "AH",
            "PSK alone",
            "SD-WAN alone"
          ],
          "correct": 0,
          "explanations": [
            "ESP supports payload encryption along with integrity services.",
            "AH authenticates and checks integrity but does not encrypt payloads.",
            "A PSK authenticates peers; it is not itself a data-protection protocol.",
            "SD-WAN steers traffic; confidentiality depends on its configured security mechanisms."
          ]
        },
        {
          "prompt": "A tool repeatedly finds public storage buckets and overly broad cloud permissions. Which capability is this?",
          "options": [
            "CSPM",
            "CASB",
            "SD-WAN",
            "AH"
          ],
          "correct": 0,
          "explanations": [
            "CSPM evaluates cloud configuration and security posture.",
            "CASB focuses on policy enforcement around cloud service access and use.",
            "SD-WAN manages WAN connectivity.",
            "AH provides IPsec integrity and authentication."
          ]
        },
        {
          "prompt": "Contractors should reach only an approved application after identity and device checks. Which model fits BEST?",
          "options": [
            "ZTNA",
            "Unrestricted VPN access",
            "AH",
            "IaC"
          ],
          "correct": 0,
          "explanations": [
            "ZTNA grants application-specific access based on explicit checks.",
            "Broad network access exceeds the required application scope.",
            "AH is a packet-protection component, not an access model.",
            "IaC describes infrastructure configuration, not this access decision."
          ]
        }
      ]
    },
    {
      "title": "Detection, response, and data loss",
      "objective": "4.4",
      "terms": [
        "SIEM",
        "SOAR",
        "EDR",
        "XDR",
        "DLP",
        "IR",
        "IoC",
        "IoA"
      ],
      "teach": "SIEM collects and correlates events. SOAR runs coordinated response workflows. EDR investigates and responds on endpoints; XDR joins signals across security layers. DLP focuses on unauthorized data movement. An IoC is evidence suggesting compromise, while an IoA describes suspicious attack behavior. Incident response uses preparation, analysis, containment, eradication, and recovery with lessons learned.",
      "flow": [
        "Collect signals",
        "Correlate and investigate",
        "Contain with authorization",
        "Recover and improve"
      ],
      "example": "A SIEM connects an unusual login with a large download. EDR isolates the laptop. DLP blocks an upload of customer data. SOAR can coordinate these actions through an approved playbook; it does not remove the need to validate evidence.",
      "trap": "Collecting logs is not the same as automating response. Select the capability the question actually requests.",
      "questions": [
        {
          "prompt": "Analysts need to correlate firewall, identity, and server logs on a common timeline. Which is BEST?",
          "options": [
            "SIEM",
            "DLP",
            "HSM",
            "PAM"
          ],
          "correct": 0,
          "explanations": [
            "SIEM aggregates and correlates security events across sources.",
            "DLP addresses unauthorized disclosure of sensitive data.",
            "HSM protects cryptographic keys and operations.",
            "PAM manages privileged access rather than general event correlation."
          ]
        },
        {
          "prompt": "An approved playbook should open a ticket, isolate a host, and block a hash across tools. Which capability fits?",
          "options": [
            "SOAR",
            "SIEM collection only",
            "CRL",
            "NAC admission only"
          ],
          "correct": 0,
          "explanations": [
            "SOAR orchestrates and automates actions across security tools.",
            "Collection and correlation alone do not execute the workflow.",
            "A CRL lists revoked certificates.",
            "NAC admission alone does not coordinate the multi-tool playbook."
          ]
        },
        {
          "prompt": "A control detects account numbers being sent to personal cloud storage and stops the transfer. What is it?",
          "options": [
            "DLP",
            "XDR correlation",
            "OCSP",
            "SAST"
          ],
          "correct": 0,
          "explanations": [
            "DLP identifies sensitive data and enforces handling restrictions.",
            "XDR connects detection across layers; the described data-handling control is DLP.",
            "OCSP checks certificate status.",
            "SAST analyzes source or compiled code without running the application."
          ]
        }
      ]
    },
    {
      "title": "Vulnerabilities and application attacks",
      "objective": "4.3",
      "terms": [
        "CVE",
        "CVSS",
        "CWE",
        "SBOM",
        "SAST",
        "DAST",
        "XSS",
        "CSRF",
        "SQLi"
      ],
      "teach": "A CVE identifies a known vulnerability; CVSS describes technical severity; CWE categorizes weakness types. An SBOM lists components so exposure can be traced. SAST inspects code without running it, while DAST probes a running application. SQL injection targets database queries, XSS executes script in a browser, and CSRF abuses an authenticated browser to send an unwanted action.",
      "flow": [
        "Inventory components",
        "Identify weaknesses",
        "Assess severity and exposure",
        "Remediate and validate"
      ],
      "example": "A dependency appears in the SBOM with a reported CVE. Its CVSS score informs prioritization, but internet exposure and business importance also matter. Testing then verifies the fix in the actual application.",
      "trap": "A high CVSS score is not a complete business-risk assessment. XSS and CSRF exploit different mechanisms.",
      "questions": [
        {
          "prompt": "A team needs the standardized identifier of one publicly disclosed flaw. Which should it record?",
          "options": [
            "CVE",
            "CVSS",
            "CWE",
            "SBOM"
          ],
          "correct": 0,
          "explanations": [
            "CVE identifies a particular disclosed vulnerability.",
            "CVSS scores technical severity.",
            "CWE categorizes weakness patterns.",
            "An SBOM inventories software components."
          ]
        },
        {
          "prompt": "A scanner sends crafted requests to a running web application without access to source code. Which test is shown?",
          "options": [
            "DAST",
            "SAST",
            "SBOM generation",
            "CVSS scoring"
          ],
          "correct": 0,
          "explanations": [
            "DAST tests behavior of a running application.",
            "SAST inspects code without executing the application.",
            "SBOM generation produces an inventory.",
            "CVSS scoring assesses severity rather than sending test requests."
          ]
        },
        {
          "prompt": "An attacker causes a logged-in browser to submit an unwanted funds-transfer request. No injected script is required. Which attack fits?",
          "options": [
            "CSRF",
            "XSS",
            "SQLi",
            "CWE"
          ],
          "correct": 0,
          "explanations": [
            "CSRF abuses the browser’s authenticated state to perform an unintended action.",
            "XSS requires execution of attacker-controlled script in the user’s browser.",
            "SQLi changes a database query through input.",
            "CWE is a weakness catalog, not the attack described."
          ]
        }
      ]
    },
    {
      "title": "Resilience and risk calculations",
      "objective": "5.2",
      "terms": [
        "RTO",
        "RPO",
        "MTTR",
        "MTBF",
        "DR",
        "BCP",
        "SLE",
        "ARO",
        "ALE"
      ],
      "teach": "RTO is a restoration-time target; RPO is the acceptable data-loss window. MTTR is measured average repair time, while MTBF measures average operation between failures. BCP maintains critical business activity; DR restores technology after disruption. SLE estimates loss per event; ARO estimates annual frequency; ALE = SLE × ARO. Targets and historical measurements are different.",
      "flow": [
        "Identify business impact",
        "Set recovery targets",
        "Design backup and recovery",
        "Test actual performance"
      ],
      "example": "A payment service must return within two hours and lose at most fifteen minutes of records: RTO is two hours, RPO is fifteen minutes. A $40,000 event expected once every four years has ARO 0.25 and ALE $10,000.",
      "trap": "RPO measures lost data in time, not how long repairs take. ARO can be less than one.",
      "questions": [
        {
          "prompt": "Backups must limit loss to the last 20 minutes of transactions. Which metric defines that requirement?",
          "options": [
            "RPO",
            "RTO",
            "MTTR",
            "MTBF"
          ],
          "correct": 0,
          "explanations": [
            "RPO is the acceptable data-loss window.",
            "RTO specifies how quickly service must be restored.",
            "MTTR is average measured repair time.",
            "MTBF is average operation between failures."
          ]
        },
        {
          "prompt": "A $60,000 loss occurs once every three years on average. What is the ALE?",
          "options": [
            "$20,000",
            "$60,000",
            "$180,000",
            "$3,000"
          ],
          "correct": 0,
          "explanations": [
            "SLE $60,000 × ARO 1/3 = $20,000 per year.",
            "$60,000 is the single-event loss.",
            "Multiplying by three reverses the annual frequency.",
            "This value does not follow SLE × ARO."
          ]
        },
        {
          "prompt": "Staff use a manual order process during an outage while IT restores the database. Which plan MOST directly covers the manual process?",
          "options": [
            "BCP",
            "DR only",
            "CRL",
            "SBOM"
          ],
          "correct": 0,
          "explanations": [
            "BCP keeps critical business functions operating during disruption.",
            "DR focuses on restoring systems; manual business continuity is broader.",
            "A CRL lists revoked certificates.",
            "An SBOM inventories software components."
          ]
        }
      ]
    },
    {
      "title": "Agreements and protected information",
      "objective": "5.1",
      "terms": [
        "SLA",
        "NDA",
        "MOU",
        "MOA",
        "BPA",
        "PII",
        "PHI",
        "PCI DSS",
        "GDPR"
      ],
      "teach": "Choose agreements by their purpose: SLA defines measurable service commitments; NDA restricts disclosure; MOU records shared understanding; MOA documents agreed actions; BPA defines a business partnership. PII identifies people and PHI concerns protected health information. PCI DSS addresses payment-card environments; GDPR concerns personal-data protection under its scope. Exact obligations depend on applicable context and agreement terms.",
      "flow": [
        "Identify data and parties",
        "Determine obligations",
        "Document responsibilities",
        "Measure and review compliance"
      ],
      "example": "A hosted access-control vendor commits to four-hour incident response in an SLA. An NDA protects building drawings. Employee identities and badge activity require appropriate privacy handling even when the system is physical security.",
      "trap": "An agreement’s title alone does not settle legal enforceability. For exam scenarios, identify its stated purpose.",
      "questions": [
        {
          "prompt": "A customer needs a written commitment to 99.9% uptime with defined service remedies. Which document fits BEST?",
          "options": [
            "SLA",
            "NDA",
            "SBOM",
            "MOU"
          ],
          "correct": 0,
          "explanations": [
            "An SLA defines measurable service levels and related terms.",
            "An NDA restricts disclosure rather than uptime.",
            "An SBOM inventories software components.",
            "An MOU records understanding but is not the specific service-level instrument."
          ]
        },
        {
          "prompt": "A supplier must keep unreleased site drawings confidential. Which agreement MOST directly addresses that goal?",
          "options": [
            "NDA",
            "SLA",
            "BPA",
            "RTO"
          ],
          "correct": 0,
          "explanations": [
            "An NDA addresses disclosure of confidential information.",
            "An SLA addresses service performance.",
            "A BPA describes the broader business relationship.",
            "RTO is a recovery target, not an agreement."
          ]
        },
        {
          "prompt": "An application stores payment-card information. Which named standard MOST directly addresses that environment?",
          "options": [
            "PCI DSS",
            "GDPR",
            "PHI",
            "PII"
          ],
          "correct": 0,
          "explanations": [
            "PCI DSS specifically addresses payment-card data security.",
            "GDPR addresses personal-data protection under its scope, not specifically payment-card security standards.",
            "PHI is a category of health information.",
            "PII is a category of identifying data, not a payment-card security standard."
          ]
        }
      ]
    },
    {
      "title": "Mobile ownership and service vocabulary",
      "objective": "4.1",
      "terms": [
        "BYOD",
        "COPE",
        "CYOD",
        "MDM",
        "MAM",
        "SSH",
        "DNS",
        "DHCP",
        "NTP",
        "RDP",
        "LDAP"
      ],
      "teach": "BYOD means a personal device is used for work. COPE means the company owns it and permits personal use; CYOD offers an approved selection. MDM manages the device; MAM manages applications and their data. For network services, connect the letters to the job: SSH administers securely, DNS resolves names, DHCP supplies addressing, NTP synchronizes time, RDP provides a remote desktop, and LDAP accesses directory data.",
      "flow": [
        "Determine ownership",
        "Set management scope",
        "Protect work data",
        "Permit only required services"
      ],
      "example": "On a personal phone, an employer may manage only the work app and remove its business data through MAM. A corporate tablet may receive device-wide settings through MDM. Deleting personal data without a defined policy is not a substitute for choosing the right management scope.",
      "trap": "Ownership and management scope are separate decisions: BYOD does not automatically mean the organization manages every part of the device.",
      "questions": [
        {
          "prompt": "Employees own their phones. The organization wants to wipe only the work app’s data. Which control fits BEST?",
          "options": [
            "MAM",
            "Full device wipe",
            "COPE",
            "CYOD"
          ],
          "correct": 0,
          "explanations": [
            "MAM targets applications and their associated work data.",
            "A full wipe exceeds the requested scope.",
            "COPE describes company ownership, unlike this scenario.",
            "CYOD describes choosing from approved devices, not application-only management."
          ]
        },
        {
          "prompt": "A company buys phones but permits employees to use them personally. Which model is this?",
          "options": [
            "COPE",
            "BYOD",
            "CYOD necessarily",
            "MAM"
          ],
          "correct": 0,
          "explanations": [
            "COPE explicitly combines corporate ownership and personal use.",
            "BYOD uses personally owned equipment.",
            "An approved choice list is not stated.",
            "MAM is an application-management capability, not an ownership model."
          ]
        },
        {
          "prompt": "Hosts reach a server by IP address but not by its name. Which service should be investigated FIRST?",
          "options": [
            "DNS",
            "NTP",
            "RDP",
            "DHCP lease renewal"
          ],
          "correct": 0,
          "explanations": [
            "DNS resolves the name, making it the direct first check.",
            "NTP handles time synchronization.",
            "RDP supplies remote desktop sessions.",
            "A working IP path makes name resolution a better initial focus than renewing addressing."
          ]
        }
      ]
    }
  ],
  "ports": [
    {
      "title": "Start with secure web and administration",
      "objective": "4.5",
      "terms": [
        "80",
        "443",
        "22",
        "23",
        "3389"
      ],
      "teach": "A port identifies a service endpoint; it does not prove what traffic is actually doing. HTTP commonly uses TCP 80; HTTPS commonly uses TCP 443 with TLS. SSH uses TCP 22 for encrypted shell access and SFTP/SCP. Telnet on TCP 23 exposes terminal traffic. RDP uses TCP/UDP 3389 for desktop access. Permit administration only from authorized management paths.",
      "flow": [
        "Identify the service",
        "Choose protected protocol",
        "Restrict source and destination",
        "Validate allowed and blocked traffic"
      ],
      "example": "For an internal Linux server, allow TCP 22 only from the management subnet. An internet-facing website normally needs inbound TCP 443. Opening 3389 from any internet source is unnecessary for either requirement.",
      "trap": "Changing a port number does not add encryption. HTTPS may also use UDP 443 with HTTP/3; the traditional TCP mapping is not the only possible transport.",
      "questions": [
        {
          "prompt": "A Linux administrator needs encrypted command-line access. Which destination should the firewall allow?",
          "options": [
            "TCP 22",
            "TCP 23",
            "TCP 443 only",
            "UDP 3389"
          ],
          "correct": 0,
          "explanations": [
            "SSH normally uses TCP 22 for encrypted shell access.",
            "Telnet on 23 is cleartext.",
            "HTTPS is web traffic and is not the requested shell service.",
            "RDP is remote desktop, not the requested SSH shell."
          ]
        },
        {
          "prompt": "A rule permits a public web service encrypted with TLS. Which traditional mapping fits?",
          "options": [
            "TCP 443",
            "TCP 80",
            "TCP 22",
            "TCP 3389"
          ],
          "correct": 0,
          "explanations": [
            "HTTPS traditionally uses TCP 443.",
            "HTTP on 80 does not itself provide TLS.",
            "22 is normally SSH.",
            "3389 is normally RDP."
          ]
        },
        {
          "prompt": "A legacy appliance is managed through Telnet. What is the BEST improvement among these options?",
          "options": [
            "Replace Telnet with SSH and restrict management sources",
            "Move Telnet to port 443",
            "Allow TCP 23 from anywhere",
            "Use HTTP for passwords"
          ],
          "correct": 0,
          "explanations": [
            "SSH encrypts the management session; restricting sources also limits exposure.",
            "A new port does not encrypt Telnet.",
            "Broadening cleartext management access increases risk.",
            "HTTP does not protect credentials in transit."
          ]
        }
      ]
    },
    {
      "title": "Names, addressing, and trustworthy time",
      "objective": "4.5",
      "terms": [
        "53",
        "67",
        "68",
        "123"
      ],
      "teach": "DNS uses UDP and TCP 53; TCP is needed for operations such as zone transfers and may also carry normal responses. DHCP uses UDP 67 at the server and UDP 68 at the client. NTP uses UDP 123. Correct time supports meaningful logs and time-sensitive authentication. Secure network design restricts these services to approved infrastructure.",
      "flow": [
        "DHCP gives configuration",
        "DNS resolves the name",
        "Client connects to service",
        "NTP keeps timestamps aligned"
      ],
      "example": "A new workstation broadcasts for DHCP configuration, queries its DNS resolver, and synchronizes its clock. Blocking all TCP 53 can break valid DNS operations even when many simple queries still work.",
      "trap": "DNS is not UDP-only. DHCP does not, by itself, prove that a host has a working route to the internet.",
      "questions": [
        {
          "prompt": "A DNS zone transfer fails after a firewall allows only UDP 53. Which additional conventional rule is required between the authorized DNS servers?",
          "options": [
            "TCP 53",
            "TCP 123",
            "UDP 68",
            "TCP 443"
          ],
          "correct": 0,
          "explanations": [
            "DNS zone transfers normally use TCP 53.",
            "NTP uses UDP 123 and does not transfer zones.",
            "UDP 68 is the DHCP client port.",
            "HTTPS is not the conventional zone-transfer transport."
          ]
        },
        {
          "prompt": "Which pair correctly maps DHCP server and client ports?",
          "options": [
            "Server UDP 67, client UDP 68",
            "Server TCP 67, client TCP 68",
            "Server UDP 68, client UDP 67",
            "Server UDP 53, client UDP 123"
          ],
          "correct": 0,
          "explanations": [
            "DHCP uses UDP 67 on servers and UDP 68 on clients.",
            "The conventional DHCP exchange uses UDP, not TCP.",
            "These server and client assignments are reversed.",
            "Those numbers identify DNS and NTP."
          ]
        },
        {
          "prompt": "Security logs from separate hosts have inconsistent times. Which service should be checked?",
          "options": [
            "NTP on UDP 123",
            "DNS on TCP 53",
            "DHCP on UDP 67",
            "SSH on TCP 22"
          ],
          "correct": 0,
          "explanations": [
            "NTP synchronizes system clocks.",
            "DNS resolves names.",
            "DHCP supplies network configuration.",
            "SSH supplies secure remote shell access."
          ]
        }
      ]
    },
    {
      "title": "Transfer files without exposing credentials",
      "objective": "4.5",
      "terms": [
        "20",
        "21",
        "22",
        "69",
        "445"
      ],
      "teach": "FTP traditionally uses TCP 21 for control and TCP 20 for active-mode data; passive data uses negotiated ports. FTP alone does not encrypt credentials. SFTP is a separate SSH-based protocol on TCP 22, not FTP with TLS. TFTP uses UDP 69 for the initial request and has no built-in authentication or encryption. SMB uses TCP 445 for file sharing; modern SMB protection depends on configuration.",
      "flow": [
        "Identify data sensitivity",
        "Select secure transfer",
        "Scope access to trusted peers",
        "Verify encryption and permissions"
      ],
      "example": "A switch needs an image from an isolated provisioning server using TFTP. Keep that limited path separate from everyday sensitive file transfer, for which SFTP is a better choice when supported.",
      "trap": "FTP data does not always use port 20. SFTP and FTPS are different protocols.",
      "questions": [
        {
          "prompt": "A job must securely transfer files over SSH. Which destination port normally fits?",
          "options": [
            "TCP 22",
            "TCP 21",
            "UDP 69",
            "TCP 20"
          ],
          "correct": 0,
          "explanations": [
            "SFTP runs over SSH, conventionally TCP 22.",
            "21 is FTP control, not SFTP.",
            "TFTP on 69 is not encrypted SSH transfer.",
            "20 is associated with FTP active data."
          ]
        },
        {
          "prompt": "An appliance uses TFTP to download a boot image. Which initial destination mapping is expected?",
          "options": [
            "UDP 69",
            "TCP 69",
            "TCP 445",
            "UDP 21"
          ],
          "correct": 0,
          "explanations": [
            "TFTP sends its initial request to UDP 69.",
            "TFTP uses UDP rather than TCP.",
            "445 is SMB.",
            "FTP control uses TCP 21, not this UDP mapping."
          ]
        },
        {
          "prompt": "A Windows file server should accept SMB only from an approved subnet. Which destination port is the main modern mapping?",
          "options": [
            "TCP 445",
            "TCP 139 only",
            "UDP 161",
            "TCP 23"
          ],
          "correct": 0,
          "explanations": [
            "Direct-hosted SMB uses TCP 445; restrict allowed sources.",
            "139 is legacy SMB over NetBIOS, not the main modern direct-hosted mapping.",
            "161 is normally SNMP monitoring.",
            "23 is Telnet."
          ]
        }
      ]
    },
    {
      "title": "Send mail versus read mail",
      "objective": "4.5",
      "terms": [
        "25",
        "465",
        "587",
        "110",
        "995",
        "143",
        "993"
      ],
      "teach": "SMTP (Simple Mail Transfer Protocol) sends mail: server relay commonly uses TCP 25; client submission commonly uses TCP 587 with STARTTLS or 465 with implicit TLS. POP3 (Post Office Protocol version 3) retrieves mail on 110, or 995 with implicit TLS. IMAP (Internet Message Access Protocol) synchronizes mailboxes on 143, or 993 with implicit TLS. STARTTLS must be negotiated and enforced where used.",
      "flow": [
        "Client submits: 587 or 465",
        "Servers relay: 25",
        "Client synchronizes: 993",
        "Validate TLS and server identity"
      ],
      "example": "A phone synchronizes folders using IMAPS on 993, while outgoing submission goes to 587 with required STARTTLS. A firewall rule for SMTP alone does not enable mailbox reading.",
      "trap": "SMTP sends; IMAP and POP3 retrieve. Port 587 does not guarantee encryption unless STARTTLS is actually required and used.",
      "questions": [
        {
          "prompt": "A client must synchronize mailbox folders using implicit TLS. Which is BEST?",
          "options": [
            "TCP 993",
            "TCP 995",
            "TCP 25",
            "TCP 110"
          ],
          "correct": 0,
          "explanations": [
            "IMAPS on 993 provides IMAP mailbox synchronization with implicit TLS.",
            "995 is POP3S, a different retrieval protocol.",
            "25 is SMTP relay.",
            "110 is conventional POP3 without implicit TLS."
          ]
        },
        {
          "prompt": "An email client submits outgoing messages with required STARTTLS. Which common port is expected?",
          "options": [
            "TCP 587",
            "TCP 143",
            "TCP 993",
            "TCP 53"
          ],
          "correct": 0,
          "explanations": [
            "587 is commonly used for authenticated submission with STARTTLS.",
            "143 is IMAP access.",
            "993 is IMAP over implicit TLS.",
            "53 is DNS, not email submission."
          ]
        },
        {
          "prompt": "A POP3 service is moving to implicit TLS. Which destination replaces its conventional port 110?",
          "options": [
            "TCP 995",
            "TCP 465",
            "TCP 993",
            "TCP 25"
          ],
          "correct": 0,
          "explanations": [
            "POP3S uses TCP 995.",
            "465 is SMTP submission with implicit TLS.",
            "993 is IMAPS.",
            "25 is SMTP relay."
          ]
        }
      ]
    },
    {
      "title": "Directories, monitoring, and logs",
      "objective": "4.5",
      "terms": [
        "389",
        "636",
        "161",
        "162",
        "514"
      ],
      "teach": "LDAP accesses directories, commonly on TCP 389; TLS may be negotiated with StartTLS. LDAPS uses TCP 636 for implicit TLS. SNMP (Simple Network Management Protocol) usually uses UDP 161 for queries and UDP 162 for notifications. Prefer SNMPv3 with appropriate authentication and privacy settings. Traditional syslog uses UDP 514; TLS-protected syslog commonly uses TCP 6514.",
      "flow": [
        "Authenticate directory access",
        "Query device health",
        "Receive event notifications",
        "Centralize protected logs"
      ],
      "example": "A monitoring server queries a switch on 161 and receives its traps on 162. A directory client uses LDAPS on 636. Sending logs over traditional UDP 514 does not provide confidentiality or reliable delivery.",
      "trap": "SNMPv3 does not automatically imply encryption: its security level must enable privacy. LDAP on 389 can use StartTLS when correctly configured.",
      "questions": [
        {
          "prompt": "A directory connection requires implicit TLS. Which mapping fits?",
          "options": [
            "TCP 636",
            "UDP 161",
            "TCP 389 without StartTLS",
            "UDP 514"
          ],
          "correct": 0,
          "explanations": [
            "LDAPS conventionally uses TCP 636.",
            "161 is SNMP queries.",
            "Without StartTLS, the stated 389 connection is not protected by TLS.",
            "514 is traditional syslog."
          ]
        },
        {
          "prompt": "A switch sends an unsolicited SNMP notification to a manager. Which destination is conventional?",
          "options": [
            "UDP 162",
            "UDP 161",
            "TCP 636",
            "TCP 389"
          ],
          "correct": 0,
          "explanations": [
            "162 is the usual SNMP trap/notification destination.",
            "161 is used for SNMP queries to an agent.",
            "636 is LDAPS.",
            "389 is LDAP."
          ]
        },
        {
          "prompt": "A design sends sensitive event logs using traditional UDP 514. What improvement BEST protects transport?",
          "options": [
            "Use authenticated TLS syslog, commonly TCP 6514",
            "Rename the collector",
            "Move UDP traffic to port 443 without TLS",
            "Use SNMPv1 community strings"
          ],
          "correct": 0,
          "explanations": [
            "TLS syslog protects the transport when peers and certificates are validated.",
            "A name change does not protect packets.",
            "Port numbers alone do not add TLS.",
            "SNMPv1 does not secure syslog transport."
          ]
        }
      ]
    },
    {
      "title": "Database, voice, and legacy exposure",
      "objective": "4.5",
      "terms": [
        "1433",
        "1521",
        "3306",
        "5060",
        "5061",
        "135",
        "137",
        "138",
        "139"
      ],
      "teach": "Database listeners commonly include Microsoft SQL Server TCP 1433, Oracle TCP 1521, and MySQL TCP 3306. Restrict them to required application hosts. SIP (Session Initiation Protocol) commonly uses TCP/UDP 5060 for voice signaling; SIPS uses TLS on TCP 5061. Media protection is separate. RPC and NetBIOS ports identify legacy or platform services; do not expose them broadly just because an application uses Windows.",
      "flow": [
        "Public client reaches front end",
        "Application reaches database",
        "Management stays restricted",
        "Deny unnecessary legacy exposure"
      ],
      "example": "A web application needs MySQL access on 3306 from its application subnet. Internet clients should reach the front end, not the database listener. TLS on SIP signaling does not automatically encrypt the voice media stream.",
      "trap": "A service’s port does not authenticate a user, guarantee encryption, or justify internet exposure.",
      "questions": [
        {
          "prompt": "Only an application server should reach its MySQL backend. Which rule fits BEST?",
          "options": [
            "Allow application host to database TCP 3306",
            "Allow internet to database TCP 3306",
            "Allow application host to TCP 1433",
            "Allow all sources to UDP 5060"
          ],
          "correct": 0,
          "explanations": [
            "This matches the service and limits source and destination.",
            "The source scope unnecessarily exposes the database.",
            "1433 is the conventional Microsoft SQL Server mapping.",
            "5060 is SIP signaling and the scope is excessive."
          ]
        },
        {
          "prompt": "A voice deployment requires SIP signaling over TLS. Which port is expected?",
          "options": [
            "TCP 5061",
            "UDP 5060",
            "TCP 1521",
            "UDP 138"
          ],
          "correct": 0,
          "explanations": [
            "SIPS conventionally uses TLS on TCP 5061.",
            "5060 is conventional SIP without implicit TLS.",
            "1521 is an Oracle listener.",
            "138 is NetBIOS datagram service."
          ]
        },
        {
          "prompt": "A scan shows TCP 139. Which service is MOST closely associated?",
          "options": [
            "NetBIOS session service",
            "Modern direct-hosted SMB on 445",
            "Oracle listener",
            "RPC endpoint mapper on 135"
          ],
          "correct": 0,
          "explanations": [
            "TCP 139 is NetBIOS session service and can carry legacy SMB.",
            "445 is a different port for direct-hosted SMB.",
            "Oracle commonly uses 1521.",
            "RPC endpoint mapping is associated with 135, not 139."
          ]
        }
      ]
    },
    {
      "title": "Authentication, VPN negotiation, and secure logs",
      "objective": "4.5",
      "terms": [
        "88",
        "49",
        "1812",
        "1813",
        "500",
        "4500",
        "6514"
      ],
      "teach": "Kerberos uses TCP/UDP 88 for ticket-based authentication. RADIUS commonly uses UDP 1812 for authentication and authorization and UDP 1813 for accounting. TACACS+ uses TCP 49 for device-administration AAA. IKE (Internet Key Exchange) uses UDP 500 to negotiate IPsec; NAT traversal commonly uses UDP 4500. TLS syslog commonly uses TCP 6514. ESP is IP protocol 50, not TCP or UDP port 50.",
      "flow": [
        "Authenticate the user or peer",
        "Authorize only required access",
        "Protect the session",
        "Send protected accounting and logs"
      ],
      "example": "A VPN gateway negotiates IKE on UDP 500. When network address translation is present, NAT traversal uses UDP 4500. Its RADIUS access requests go to 1812, and accounting records go to 1813. Each rule serves a different step.",
      "trap": "Do not confuse IP protocol numbers with port numbers. Allowing TCP port 50 does not permit ESP.",
      "questions": [
        {
          "prompt": "A gateway authenticates remote users through RADIUS and sends separate accounting records. Which destination pair is conventional?",
          "options": [
            "UDP 1812 and UDP 1813",
            "TCP 49 and TCP 88",
            "UDP 500 and UDP 4500",
            "UDP 161 and UDP 162"
          ],
          "correct": 0,
          "explanations": [
            "RADIUS access uses 1812 and accounting uses 1813.",
            "49 identifies TACACS+ and 88 identifies Kerberos.",
            "These support IKE and IPsec NAT traversal.",
            "These are SNMP queries and notifications."
          ]
        },
        {
          "prompt": "An IPsec tunnel must cross a device performing network address translation. Which port commonly carries NAT traversal traffic?",
          "options": [
            "UDP 4500",
            "TCP 50",
            "UDP 1813",
            "TCP 6514"
          ],
          "correct": 0,
          "explanations": [
            "IPsec NAT traversal commonly encapsulates traffic over UDP 4500.",
            "ESP uses IP protocol number 50; it is not TCP port 50.",
            "1813 is RADIUS accounting.",
            "6514 is TLS syslog."
          ]
        },
        {
          "prompt": "A network switch uses TACACS+ for administrator AAA. Which conventional destination should be permitted to the AAA server?",
          "options": [
            "TCP 49",
            "UDP 1812",
            "TCP 88",
            "UDP 500"
          ],
          "correct": 0,
          "explanations": [
            "TACACS+ uses TCP 49.",
            "1812 is RADIUS access, a different AAA protocol.",
            "88 is Kerberos authentication.",
            "500 is IKE negotiation."
          ]
        }
      ]
    }
  ]
};
window.PROTOCOL_NAMES = {"FTP": "File Transfer Protocol", "SFTP": "SSH File Transfer Protocol", "SCP": "Secure Copy Protocol", "HTTP": "Hypertext Transfer Protocol", "HTTPS": "Hypertext Transfer Protocol Secure", "TLS": "Transport Layer Security", "TCP": "Transmission Control Protocol", "UDP": "User Datagram Protocol", "SSH": "Secure Shell", "RDP": "Remote Desktop Protocol", "DNS": "Domain Name System", "DHCP": "Dynamic Host Configuration Protocol", "NTP": "Network Time Protocol", "TFTP": "Trivial File Transfer Protocol", "SMB": "Server Message Block", "SMTP": "Simple Mail Transfer Protocol", "POP3": "Post Office Protocol version 3", "IMAP": "Internet Message Access Protocol", "LDAP": "Lightweight Directory Access Protocol", "SNMP": "Simple Network Management Protocol", "SIP": "Session Initiation Protocol", "RPC": "Remote Procedure Call", "NetBIOS": "Network Basic Input/Output System", "FTPS": "FTP over TLS", "SIPS": "SIP over TLS", "LDAPS": "LDAP over TLS", "IMAPS": "IMAP over TLS", "POP3S": "POP3 over TLS"};
