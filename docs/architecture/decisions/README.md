# Architecture Decision Records (ADRs)

This directory contains Architecture Decision Records for the CRM Production Readiness program.

## What is an ADR?

An Architecture Decision Record (ADR) captures an important architectural decision made along with its context and consequences.

## ADR Format

Each ADR follows this structure:

1. **Title**: Short noun phrase
2. **Status**: Proposed, Accepted, Deprecated, Superseded
3. **Context**: The issue motivating this decision
4. **Decision**: The change being proposed or decided
5. **Consequences**: The resulting context after applying the decision

## Index

| ADR | Title | Status | Date |
|-----|-------|--------|------|
| [ADR-000](./ADR-000-template.md) | ADR Template | Accepted | 2025-10-30 |
| [ADR-001](./ADR-001-program-architecture.md) | Program Architecture Overview | Accepted | 2025-10-30 |
| [ADR-002](./ADR-002-nextjs-production-strategy.md) | Next.js Production Strategy | Accepted | 2025-10-30 |
| [ADR-003](./ADR-003-azure-infrastructure.md) | Azure Infrastructure Baseline | Accepted | 2025-10-30 |
| [ADR-004](./ADR-004-data-caching-strategy.md) | Data Access and Caching Strategy | Proposed | 2025-10-30 |
| [ADR-005](./ADR-005-testing-quality-strategy.md) | Testing and Quality Strategy | Proposed | 2025-10-30 |
| [ADR-006](./ADR-006-security-architecture.md) | Security Architecture | Proposed | 2025-10-30 |

## Contributing

When creating a new ADR:

1. Copy the template (ADR-000-template.md)
2. Name the file ADR-XXX-short-title.md (increment number)
3. Fill in all sections
4. Submit for review via pull request
5. Update this index when accepted

## Review Process

- **Proposed**: Under discussion
- **Accepted**: Approved and implemented
- **Deprecated**: No longer valid but kept for historical context
- **Superseded**: Replaced by a newer ADR (link to replacement)
