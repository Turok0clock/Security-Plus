# Source review and reconstruction decisions

Inputs inspected: the previous Security+ prototype, Network+ Professor Lab v7, the supplied Messer SY0-701 practice-exam PDF for wording/style context, and 75 screenshots showing 13 PBQ practice formats. Commercial source PDFs and screenshots are not bundled in this repository.

The interface and generic diagrams are original. These are study simulations, not claims to reproduce live certification exam software.

## Corrections and limits

1. Attack matching: the example labels self-propagating malware as a virus. Worm is the technically supported answer. Phishing-resistant MFA replaces push-only approval as the strongest listed stolen-password mitigation.
2. Infection: origin and current infection status are separate. The example selects 192.168.10.37 as origin, while its malware is quarantined. Visible evidence does not conclusively prove origin; both the example answer and insufficient evidence are accepted. Logs are transcribed excerpts, not a complete forensic dataset.
3. Firewall I: allowing DHCP does not by itself establish internet access. The lobby statement explicitly tests DHCP permission; other networking prerequisites are stated as assumptions.
4. Firewall II: unmatched new connections use implicit deny; normal return traffic and routing are assumed.
5. Physical controls: the six control placements follow the completed example, using touch-accessible selections.
6. Rule builder: the stated DNS host is 192.168.1.10; a mismatched value in the completed example is corrected.
7. Cloud: preserves the example's redundant WAF positions and isolated application/data tiers. It is a conceptual architecture, not a provider-specific implementation.
8. VPN: preserves the supplied IKEv1 phase structure and strongest choices among the listed algorithms. It is not a recommendation to deploy a new production VPN with legacy negotiation settings.
9. Web/CSR: command typing replaces dropdown snippets as requested. Uses a generic example.com domain. A WAF is a compensating control; secure application code and session protections remain necessary.
10. Web attack: the supplied completed example selects session hijacking, but the response screenshot alone does not prove the mechanism. The request is not fabricated; insufficient evidence is also accepted. The supplied compensating-control placements are retained with explanatory limits.
11. SSH: requires generating keys, copying only the public key, and verifying passwordless login. Unsafe private-key permission or transfer choices prevent full credit until reset.
12. Scripts: conditional destructive code is a logic bomb; a shell listener is a backdoor. EICAR is a harmless antivirus test artifact, not an explanation for the backdoor.
13. DR firewall: source/destination direction for outbound traffic is corrected. Interface-style /24 labels are retained from the screenshots. Restricting management sources is identified as additional production hardening.

The source formats are implemented, but the screenshot topology and interaction sequences are adapted for responsive touch workspaces. They should not be described as exact replicas.
