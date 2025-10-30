# ADR-000: ADR Template

**Status:** Accepted  
**Date:** 2025-10-30  
**Deciders:** Program Orchestrator, Technical Lead  
**Tags:** process, documentation

## Context

We need a consistent format for documenting architectural decisions across the CRM production readiness program. Architecture Decision Records (ADRs) help us:

- Understand the reasoning behind past decisions
- Onboard new team members
- Evaluate future changes against previous constraints
- Maintain a historical record of architecture evolution

## Decision

We will use this template for all ADRs in the project. Each ADR will be a markdown file in `/docs/architecture/decisions/` named `ADR-XXX-short-title.md`.

### Template Structure

```markdown
# ADR-XXX: [Short Title]

**Status:** [Proposed | Accepted | Deprecated | Superseded]  
**Date:** YYYY-MM-DD  
**Deciders:** [List of people involved in the decision]  
**Tags:** [Relevant tags for categorization]

## Context

What is the issue that we're seeing that is motivating this decision or change?

## Decision

What is the change that we're proposing and/or doing?

Include:
- The decision statement
- Key considerations
- Alternatives considered
- Why this approach was chosen

## Consequences

What becomes easier or more difficult to do because of this change?

### Positive Consequences
- List positive outcomes
- Benefits gained

### Negative Consequences
- List trade-offs
- New challenges introduced

### Risks
- Potential risks and mitigation strategies

## Implementation Notes

Practical details about implementing this decision:
- Timeline
- Dependencies
- Key tasks
- Success criteria

## References

- Links to relevant documentation
- Related ADRs
- External resources
```

## Consequences

### Positive Consequences

- Consistent documentation format across all architectural decisions
- Easy to understand the context and reasoning behind decisions
- Simple to review and update decisions over time
- Supports knowledge sharing and team alignment

### Negative Consequences

- Requires discipline to document decisions consistently
- Additional overhead for decision-making process
- May slow down urgent decisions (can be documented retroactively)

### Risks

- **Risk:** Team doesn't adopt the practice consistently
  - **Mitigation:** Include ADR creation in Definition of Done for architectural changes

- **Risk:** ADRs become outdated and misleading
  - **Mitigation:** Regular review process, mark deprecated ADRs clearly

## Implementation Notes

**Timeline:** Immediate  
**Dependencies:** None  
**Key Tasks:**
- Create ADR template (this document)
- Add ADR creation to development workflow
- Train team on ADR process

**Success Criteria:**
- All significant architectural decisions documented as ADRs
- Team references ADRs during design discussions
- New team members use ADRs for context

## References

- [Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) by Michael Nygard
- [ADR GitHub Organization](https://adr.github.io/)
- [Markdown Architectural Decision Records](https://github.com/adr/madr)
