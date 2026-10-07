"""Original short lessons and diagnostic questions; no private exam exports."""
import json
from pathlib import Path
lessons=[]
def lesson(id,title,intro,rows,example,caution,source):
 lessons.append(dict(id=id,title=title,intro=intro,rows=rows,example=example,caution=caution,source=source,questions=[]))
def q(obj,prompt,answers):
 i=sum(len(l['questions']) for l in lessons); pairs=[a.split('~',1) for a in answers]; shift=i%4;pairs=pairs[-shift:]+pairs[:-shift] if shift else pairs
 lessons[-1]['questions'].append(dict(id=f'MOR14-{i+1:02}',type='mcq',objective=obj,concept=lessons[-1]['title'],prompt=prompt,options=[x[0] for x in pairs],explanations=[x[1] for x in pairs],correct=shift,revision='morning-v14',provenance='Original practice'))
lesson('evidence','1. Read the evidence, then make the claim','Start with the source, time, actor, action and result. Separate what a record actually shows from what you suspect.',[
 ['Authentication log','Account, source, login result','Investigate failed attempts followed by a success; a success alone does not prove compromise.'],
 ['Application log','Application requests, transactions and errors','Fields depend on configuration. An IP address is not reliable proof of physical location.'],
 ['NetFlow','Endpoints, ports, time, packet and byte counts','Flow summaries show communication patterns, not complete payloads. Collectors and analysts can use them to detect attacks.'],
 ['Audit trail','Who performed which action, when, and with what outcome','Supports accountability and compliance evidence; can include events from many logs.'],
 ['Chain of custody','Who collected, possessed or transferred evidence, when and why','Tracks evidence handling. A hash checks content integrity; neither alone identifies the attacker.']],
 [('09:02 user=lee src=198.51.100.24 result=FAIL','One failed attempt; no successful access established.'),('09:03 user=lee src=198.51.100.24 result=SUCCESS','Correlate the account, source and time with expected activity.'),('09:04 host=workstation7 dst=203.0.113.8 bytes_out=840000000','Large outbound transfer warrants investigation. Flow data alone cannot identify the files.'),('09:05–09:35 local records absent; collector still receiving other hosts','Check collection health and remote evidence. A gap is suspicious, not automatic proof of deletion.')],
 'A log gap and unexplained outbound traffic both matter. Do not memorize that one always outranks the other. Read NOT/EXCEPT explicitly before choosing.',
 ['https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/netflow/configuration/15-mt/nf-15-mt-book/cfg-nflow-data-expt.html','https://csrc.nist.gov/glossary/term/chain_of_custody'])
q('4.9','A flow record shows 600 MB sent from a workstation to an external address over TCP 443. Which conclusion requires additional evidence?',[
 'The transfer contained payroll records~Flow metadata does not identify the transferred file contents.',
 'The destination port was 443~The destination port is explicitly recorded.',
 'The workstation sent a substantial volume~The byte count directly supports this statement.',
 'An external address received the traffic~The stated destination is external; its trustworthiness still needs investigation.'])
q('4.8','A disk image has a matching acquisition hash, but there is no record of who held it for three days. What is the unresolved concern?',[
 'Incomplete chain of custody~Matching content does not supply missing evidence-handling records.',
 'Confirmed alteration of the image~The matching hash does not establish alteration.',
 'Missing attribution of the intruder~Attribution is separate from documenting possession of evidence.',
 'An incorrect retention classification~No retention or classification requirement is specified.'])
q('4.9','A responder must determine whether a server account successfully signed in after repeated password failures. Which source is most direct?',[
 'Authentication records with timestamps and outcomes~These records directly identify login failures and successes.',
 'Flow byte counts for the server~Traffic volume does not establish authentication success.',
 'The installed-update inventory~Patches can affect exposure but do not record this login outcome.',
 'A weekly storage-utilization report~Disk usage does not identify successful sign-ins.'])
q('4.4','Local logs stop for twenty minutes while remote monitoring reports the host online. What is the best next investigative step?',[
 'Correlate remote records and check local logging health~This tests tampering and collection-failure explanations without assuming either.',
 'Classify the gap as proven attacker deletion~A gap is an indicator, not proof of its cause.',
 'Exclude compromise because the host stayed online~An online host can still be compromised.',
 'Recreate the missing events from normal baselines~Expected activity cannot substitute for actual evidence.'])
lesson('crypto','2. Password attacks and cryptography','Identify the operation: online login attempts, offline hash guessing, data encryption, or integrity verification.',[
 ['Password spraying','A few likely passwords against many accounts','Low attempts per account can avoid per-account lockout.'],
 ['Credential stuffing','Previously stolen username/password pairs reused elsewhere','The attacker starts with known pairs, not a list of generic guesses.'],
 ['Dictionary / brute force','Word-list guesses / systematic candidate search','Can occur online or against stolen password hashes.'],
 ['Rainbow tables','Precomputed chains used to recover candidates from hashes','Unique random salts defeat reuse of a generic precomputed table across accounts. Salts are not secret.'],
 ['AES — Advanced Encryption Standard','Symmetric encryption; shared secret key','Confidentiality. SHA — Secure Hash Algorithm — creates a digest, not reversible encryption.'],
 ['HMAC — Hash-based Message Authentication Code','Keyed integrity and source authentication','Does not encrypt. RSA — Rivest–Shamir–Adleman — uses a public/private key pair.']],
 [('Online route','Password candidate → login service → rate limiting / multifactor checks'),('Offline route','Stolen salted hash → candidate + stored salt → expensive password-hash calculation → compare'),('Data protection','Encrypt to hide readable content. Hash to detect changes. Use an authenticated mechanism to establish a trusted source.')],
 'A salt does not make a weak password unguessable. A work factor makes each guess expensive. Encryption and hashing solve different problems.',
 ['https://pages.nist.gov/800-63-4/sp800-63b/authenticators/'])
q('2.4','An attacker tries one seasonal password against 400 employees, then waits before trying a second password. Which technique best fits?',[
 'Password spraying~Few password candidates are spread across many accounts.',
 'Credential stuffing~No previously stolen username/password pairs are supplied.',
 'Rainbow-table lookup~This is online authentication, not precomputed lookup against hashes.',
 'Single-account brute force~The attempts are deliberately distributed across accounts.'])
q('1.4','Two users choose the same password. The service adds a different random salt for each before applying a password-hashing function. What benefit does the salt provide?',[
 'Prevents reuse of one generic precomputed table across those accounts~Different salts require different computations, even for equal passwords.',
 'Makes the salt a second secret factor~The salt can be stored alongside the hash and is not an authentication factor.',
 'Makes password recovery by guessing impossible~Weak passwords can still be guessed with per-salt computation.',
 'Lets administrators decrypt forgotten passwords~Password hashing is not designed to be reversed with a decryption key.'])
q('1.4','A backup must be unreadable without a secret and recoverable by an authorized restore service. Which primitive supplies the required confidentiality?',[
 'AES encryption~A symmetric key allows authorized encryption and decryption.',
 'SHA-256 hashing~A digest cannot be decrypted to restore the backup.',
 'HMAC-SHA-256~A keyed integrity check does not conceal backup contents.',
 'A digital signature~A signature can authenticate data but does not make it unreadable.'])
q('2.4','Login attempts use thousands of email/password pairs from a breach of a different service. Which attack is most specific?',[
 'Credential stuffing~Known stolen pairs are reused against another service.',
 'Password spraying~Spraying distributes a small set of likely passwords rather than using breached pairs.',
 'Rainbow-table recovery~No stolen target hashes or precomputed lookup are described.',
 'Online exhaustive search~The attacker is reusing known pairs rather than enumerating all possibilities.'])
lesson('identity','3. Identity, permissions and policy scope','Proofing establishes a real-world identity. Authentication checks a credential. Authorization decides what that identity may do.',[
 ['Identity proofing','Validate identity evidence during enrollment','An identity document check is not automatically two-factor authentication.'],
 ['Passkey','A public-key credential; authenticator signs a challenge','The service verifies with the public key. A local PIN or biometric can unlock use of the credential.'],
 ['GPO — Group Policy Object','A set of centrally managed Windows policy settings','Link to a site, domain or OU; filtering and inheritance can change effective scope.'],
 ['OU — Organizational Unit','A container for related directory objects','A department-specific OU can scope a GPO without creating a new domain.'],
 ['EAP — Extensible Authentication Protocol','Framework supporting different authentication methods','Used with 802.1X network access. WPA3 secures Wi-Fi; it is not a replacement for the EAP framework.']],
 [('Enrollment','Validate identity evidence → issue or register a credential'),('Sign-in','Challenge → authenticator signs using private key → service verifies public key'),('Department policy','Domain → department OU → linked GPO applies relevant settings to in-scope users/computers')],
 'Passkeys can be device-bound or synced, including credentials on security keys. Do not learn that a hardware device and a passkey are mutually exclusive.',
 ['https://fidoalliance.org/passkeys/','https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/group-policy/group-policy-scope'])
q('4.6','Before creating a contractor account, enrollment staff validate an identity document and confirm the applicant matches it. What process is this?',[
 'Identity proofing~The organization is establishing the claimed identity before issuing access.',
 'Session authorization~No decision about an existing session resource is described.',
 'Credential rotation~No existing secret is being replaced.',
 'Two-factor sign-in~Multiple verification steps during enrollment do not by themselves describe a two-factor login.'])
q('4.6','A website stores a public key. After local device unlock, an authenticator signs the website’s challenge. What does the website receive as proof?',[
 'A signature verifiable with the registered public key~The authenticator proves possession of the corresponding private key.',
 'The user’s fingerprint template~Biometric matching occurs locally; the template is not the website credential.',
 'The private key for comparison~The verifier does not need possession of the private key.',
 'A copy of the device-unlock PIN~The local unlock secret is not sent as the website password.'])
q('4.5','All warehouse computers occupy a dedicated OU. A new screen-lock policy must apply only to those computers. With normal inheritance and filtering, where should its GPO be linked?',[
 'The warehouse computer OU~This targets the specified computer objects without broadening the policy to the whole domain.',
 'The domain root without filtering~That scope includes other domain computers.',
 'A site containing every department~That site scope is broader than the warehouse OU.',
 'A newly created independent domain~An existing OU supplies the needed scope without a new domain.'])
q('3.2','A design needs a framework for certificate-based authentication methods on both wired and wireless 802.1X access. Which choice fits?',[
 'EAP~Extensible Authentication Protocol supports authentication methods in 802.1X deployments.',
 'WPA3~Wi-Fi Protected Access 3 addresses wireless security, not the general wired/wireless method framework.',
 'AES~Advanced Encryption Standard is a cipher, not an authentication-method framework.',
 'LDAP~Lightweight Directory Access Protocol accesses directory information; it is not the EAP exchange.'])
lesson('operations','4. Vulnerabilities, automation and industrial systems','Name the component and the exact property affected before choosing a control.',[
 ['CVE — Common Vulnerabilities and Exposures','Identifier for a specific publicly disclosed vulnerability','CVSS — Common Vulnerability Scoring System — describes severity, not its identity.'],
 ['Secure baseline','Approved configuration state','Automation can enforce consistency; it can also spread an incorrect configuration quickly.'],
 ['Single point of failure','One failed component can stop the service','Most directly an availability concern; redundancy and tested recovery reduce it.'],
 ['HMI — Human–Machine Interface','Operator display and controls in an industrial system','Control who can view or change operational commands.'],
 ['PLC — Programmable Logic Controller','Executes control logic against physical inputs/outputs','DCS — Distributed Control System — coordinates control across a process. A historian records process data.']],
 [('Operator','Uses the HMI to view status or issue a command'),('Controller','PLC executes control logic; sensors supply inputs and actuators affect equipment'),('History','A historian retains time-series process data; it is not the operator’s primary control panel')],
 'A severity score alone is not business risk. Consider exposure, exploitation and asset importance. Correct CVE expansion: Common Vulnerabilities and Exposures.',
 ['https://www.cve.org/','https://nvd.nist.gov/vuln/Vulnerability-Detail-Pages'])
q('4.3','Two scanners give a flaw different severity scores. Which field best establishes whether both reports refer to the same disclosed vulnerability?',[
 'CVE identifier~The identifier names the vulnerability independently of the severity assessment.',
 'CVSS score~Different vulnerabilities can share a score; different assessments can score one flaw differently.',
 'Asset criticality~This describes organizational importance, not vulnerability identity.',
 'Scan completion time~Time does not establish which flaw was identified.'])
q('4.7','Servers gradually acquire inconsistent settings after manual changes. Which automation task most directly addresses that problem?',[
 'Compare and enforce approved configuration baselines~This detects and corrects configuration drift.',
 'Rotate sign-in credentials more frequently~Credential rotation does not ensure the full configuration matches a baseline.',
 'Increase vulnerability-scan frequency only~Scanning identifies issues but does not itself enforce desired settings.',
 'Add more storage capacity automatically~Capacity management does not address unauthorized configuration differences.'])
q('4.7','A single orchestration server is required for every production deployment. Its failure stops all deployments. Which security property is most directly affected?',[
 'Availability~Loss of the required service interrupts operation.',
 'Confidentiality~No unauthorized disclosure is described.',
 'Integrity~No incorrect alteration is established by the outage alone.',
 'Non-repudiation~The issue is service continuity, not proof of an actor’s actions.'])
q('4.1','A plant operator changes a pump setpoint using a touchscreen console. Which component supplies this direct operator interaction?',[
 'HMI~The Human–Machine Interface is the operator-facing display and control interface.',
 'PLC~The Programmable Logic Controller executes control logic rather than naming the operator interface.',
 'Historian~The historian stores process records rather than supplying the primary control interaction.',
 'Network sensor~A monitoring sensor observes traffic or conditions; it is not the described console.'])
lesson('recovery','5. Recovery, network clues and evidence limits','Match the recovery mechanism to the required outcome. A live copy and a recoverable historical copy are different requirements.',[
 ['Replication','Continuously or frequently copies changes to another system','Improves continuity but may also copy accidental deletion or corruption.'],
 ['Snapshot / backup','Point-in-time state / recoverable copy','Historical recovery depends on retention, independence and protection.'],
 ['Journaling','Records operations for consistency or replay','Not by itself a continuously usable secondary system.'],
 ['RPO — Recovery Point Objective','Maximum acceptable data-loss window','RTO — Recovery Time Objective — is the time target for restoring service.'],
 ['TCP 1433 / 21 / 443 / 53','Common SQL Server / FTP control / HTTPS / DNS ports','Ports suggest a service; validate the actual listener and permitted access. DNS also commonly uses UDP 53.']],
 [('Timeline','09:00 recovery point → 09:10 disruption → 09:40 restored'),('Read the interval','Ten minutes of potential data loss; thirty minutes of service downtime.'),('Test choice','Tabletop: discuss a scenario. Operational exercises: perform actions. A simulation can overlap a functional exercise depending on its design.')],
 'Cloud backups can be offsite. Race conditions include time-of-check/time-of-use races. Avoid treating overlapping categories as mutually exclusive merely to match a poorly constrained question.',
 ['https://csrc.nist.gov/glossary/term/recovery_point_objective','https://csrc.nist.gov/glossary/term/recovery_time_objective'])
q('3.4','A database needs a secondary server updated within seconds so it can take over rapidly. Which mechanism best supplies that current copy?',[
 'Replication~Ongoing synchronization supplies a near-current secondary; historical backups are still needed.',
 'Weekly full backups~These leave a much larger potential data-loss window.',
 'A local transaction journal without any secondary transfer~Local records alone do not maintain the required secondary server.',
 'A one-time snapshot created at deployment~The snapshot does not keep following ongoing changes.'])
q('3.4','At 14:20 a service fails. The latest recoverable data is from 14:15, and service returns at 14:50. Which requirement did the recovery meet?',[
 'An RPO of 5 minutes and RTO of 30 minutes~The data-loss window is five minutes; restoration takes thirty minutes.',
 'An RPO of 30 minutes and RTO of 5 minutes~This reverses the loss and restoration intervals.',
 'An RPO of zero and RTO of 30 minutes~There is a five-minute gap between recoverable data and failure.',
 'An RPO of 5 minutes and RTO of 15 minutes~Restoration occurred thirty minutes after failure, not fifteen.'])
q('2.5','A firewall permits Internet clients to reach TCP 1433 on a database host. No public database access is required. Which change best addresses the exposure?',[
 'Restrict the database listener to authorized application sources~TCP 1433 commonly serves Microsoft SQL Server; source restriction matches the stated need.',
 'Block TCP 21 and leave the database rule unchanged~FTP control filtering does not close the described database exposure.',
 'Rename the database while keeping public network access~A new name is not an access restriction.',
 'Permit the connection only outside office hours~A time window still permits unnecessary public database access.'])
q('3.4','A deletion is immediately replicated to the secondary database. Which additional capability best supports recovery of yesterday’s deleted records?',[
 'Protected historical backups with tested restoration~A retained earlier copy provides recovery beyond the current replicated state.',
 'A faster replication link~Faster propagation does not preserve older data.',
 'A second replica that applies every change immediately~Another current copy can receive the same deletion.',
 'A shorter session timeout~Session management does not recover historical records.'])
lesson('governance','6. Governance: identify the purpose','Distinguish the requested business outcome from a related but narrower concern.',[
 ['MOU — Memorandum of Understanding','Shared intent and understanding between organizations','SLA — Service-Level Agreement — specifies measurable service commitments.'],
 ['MSA — Master Service Agreement','Umbrella terms for a continuing service relationship','SOW — Statement of Work — describes defined work, deliverables and scope.'],
 ['Supply-chain assessment','Security dependencies throughout suppliers and their providers','Compliance and finances are useful inputs, not the complete security assessment.'],
 ['Risk appetite / tolerance','Broad willingness to take risk / acceptable limits or variation','Use stated limits and context; vague acceptable-risk wording can be ambiguous.'],
 ['Data owner / custodian','Accountable for classification and access decisions / implements handling safeguards','Controller determines purposes and means of personal-data processing; processor acts on its behalf.']],
 [('Observed behavior','Unexpected access to unrelated files plus a large external upload'),('Appropriate response','Report the facts through the established process. Investigate business justification; do not assert malicious intent without evidence.'),('Choice check','Ask: does this answer cover the whole requested purpose, or only one piece of it?')],
 'Capability and sophistication overlap in common threat-actor descriptions. Do not invent a rigid universal boundary. Likewise, agreement names do not alone determine legal enforceability.',
 ['https://csrc.nist.gov/projects/cyber-supply-chain-risk-management'])
q('5.3','Two agencies document their shared intention to cooperate on awareness training. The document does not specify uptime targets or a purchased deliverable. Which label best fits?',[
 'MOU~A memorandum of understanding records the parties’ shared understanding and intended cooperation.',
 'SLA~A service-level agreement focuses on measurable service commitments.',
 'SOW~A statement of work defines particular work and deliverables.',
 'NDA~A nondisclosure agreement addresses confidentiality obligations.'])
q('5.3','A vendor has a valid compliance certificate but builds software using unreviewed third-party packages. What should the customer assess next?',[
 'Security risks in the vendor’s upstream dependencies~A certificate does not resolve all supply-chain security risks.',
 'Only whether the certificate has an attractive rating~The uncovered dependency risk needs assessment beyond the certificate.',
 'Only the vendor’s customer satisfaction score~Customer ratings do not establish component security.',
 'Whether all software responsibility can be assumed absent~Using a supplier does not remove the need to assess the customer’s exposure.'])
q('5.1','A department decides which staff may access its classified records. Another team configures backups and permissions according to that decision. Which role best describes the implementing team?',[
 'Data custodian~The custodian applies operational safeguards under authorized requirements.',
 'Data owner~The owner is accountable for decisions such as classification and access approval.',
 'Independent auditor~An auditor evaluates controls rather than normally implementing these operational decisions.',
 'Data subject~The subject is the person the personal data concerns, not its safeguarding team.'])
q('5.6','An employee begins exporting unrelated department files to a personal cloud account. The business reason is unknown. What is the best response?',[
 'Report the observed access and uploads through the security process~The facts warrant assessment without assuming malicious intent.',
 'Conclude the employee is malicious solely from the upload~The indicators do not establish intent on their own.',
 'Wait until data loss is independently confirmed~Waiting can prevent timely investigation of a meaningful indicator.',
 'Access the employee’s private account without authorization~An anomaly does not authorize an informal investigation outside approved powers.'])
Path('js/morning-data.js').write_text('/* Original focused review. Regenerate: python authoring/morning/build.py */\nwindow.MORNING_LESSONS='+json.dumps(lessons,ensure_ascii=False,indent=2)+';\n')
assert len(lessons)==6 and sum(len(l['questions']) for l in lessons)==24
