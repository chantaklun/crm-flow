# GitHub Projects v2 Configuration

**Board Name:** CRM Production Readiness  
**Owner:** chantaklun/crm-flow  
**Purpose:** Single source of truth for all production scale initiative work

## Custom Fields Schema

### Field Definitions

```json
{
  "fields": [
    {
      "name": "Status",
      "type": "single_select",
      "description": "Current state of the work item",
      "options": [
        { "name": "Backlog", "description": "Not yet started", "color": "gray" },
        { "name": "Ready", "description": "Ready to start, DoR met", "color": "yellow" },
        { "name": "In Progress", "description": "Actively being worked", "color": "blue" },
        { "name": "In Review", "description": "PR open, awaiting review", "color": "purple" },
        { "name": "Blocked", "description": "Cannot proceed", "color": "red" },
        { "name": "Done", "description": "Completed and merged", "color": "green" },
        { "name": "Archived", "description": "Closed without merge", "color": "gray" }
      ]
    },
    {
      "name": "Epic",
      "type": "single_select",
      "description": "Epic category for the work item",
      "options": [
        { "name": "Production Readiness", "color": "blue" },
        { "name": "Azure Baseline", "color": "purple" },
        { "name": "Data/API Scale", "color": "green" },
        { "name": "Observability & Quality", "color": "orange" },
        { "name": "Security & Compliance", "color": "red" },
        { "name": "Product Enhancements", "color": "pink" },
        { "name": "Program Management", "color": "gray" }
      ]
    },
    {
      "name": "Milestone",
      "type": "single_select",
      "description": "Program Increment or milestone",
      "options": [
        { "name": "PI-0: Foundation", "color": "gray" },
        { "name": "PI-1: Hardening", "color": "blue" },
        { "name": "PI-2: Azure & Observability", "color": "purple" },
        { "name": "PI-3: Scale & Quality", "color": "green" },
        { "name": "Future", "color": "yellow" }
      ]
    },
    {
      "name": "Risk",
      "type": "single_select",
      "description": "Risk level for delivery",
      "options": [
        { "name": "Low", "description": "Standard work, low uncertainty", "color": "green" },
        { "name": "Medium", "description": "Some unknowns or dependencies", "color": "yellow" },
        { "name": "High", "description": "Significant technical or schedule risk", "color": "orange" },
        { "name": "Critical", "description": "Blocker or major risk to program", "color": "red" }
      ]
    },
    {
      "name": "SLO Impact",
      "type": "single_select",
      "description": "Impact on service level objectives",
      "options": [
        { "name": "None", "description": "No direct SLO impact", "color": "gray" },
        { "name": "Performance", "description": "Affects response time or throughput", "color": "blue" },
        { "name": "Reliability", "description": "Affects availability or error rate", "color": "purple" },
        { "name": "Security", "description": "Affects security posture", "color": "red" },
        { "name": "Cost", "description": "Affects operational costs", "color": "yellow" },
        { "name": "Multiple", "description": "Multiple SLO dimensions", "color": "orange" }
      ]
    },
    {
      "name": "Target Release",
      "type": "date",
      "description": "Target completion date"
    },
    {
      "name": "Owner",
      "type": "text",
      "description": "Primary assignee or sub-agent responsible"
    },
    {
      "name": "Estimate",
      "type": "single_select",
      "description": "Story points or t-shirt size",
      "options": [
        { "name": "XS", "description": "1-2 days", "color": "green" },
        { "name": "S", "description": "3-5 days", "color": "blue" },
        { "name": "M", "description": "1-2 weeks", "color": "yellow" },
        { "name": "L", "description": "2-3 weeks", "color": "orange" },
        { "name": "XL", "description": "3+ weeks (should be split)", "color": "red" }
      ]
    },
    {
      "name": "Module",
      "type": "single_select",
      "description": "CRM module affected",
      "options": [
        { "name": "Dashboard", "color": "blue" },
        { "name": "Customers", "color": "green" },
        { "name": "Leads", "color": "yellow" },
        { "name": "Opportunities", "color": "purple" },
        { "name": "Appointments", "color": "pink" },
        { "name": "Cases", "color": "orange" },
        { "name": "Todos", "color": "cyan" },
        { "name": "Infrastructure", "color": "gray" },
        { "name": "Cross-cutting", "color": "red" }
      ]
    },
    {
      "name": "Priority",
      "type": "number",
      "description": "Priority ranking (1=highest)"
    }
  ]
}
```

## Built-in Automations

### 1. Auto-Archive Closed Issues

```yaml
name: Auto-archive closed items
trigger: Issue closed
conditions:
  - issue.state == "closed"
actions:
  - set_field: Status = "Archived"
```

### 2. Mark In Review on PR Open

```yaml
name: Mark in review on PR
trigger: Pull request opened
conditions:
  - pull_request.state == "open"
actions:
  - set_field: Status = "In Review"
```

### 3. Mark Done on PR Merge

```yaml
name: Mark done on merge
trigger: Pull request merged
conditions:
  - pull_request.merged == true
actions:
  - set_field: Status = "Done"
```

### 4. High Risk Alert

```yaml
name: High risk alert
trigger: Field changed
conditions:
  - field.Risk == "High" OR field.Risk == "Critical"
actions:
  - add_label: "high-risk"
  - notify: "@program-lead"
```

## Saved Views

### 1. Current Sprint View

**Filter:**
- Status: "Ready", "In Progress", "In Review"
- Milestone: Current PI

**Group by:** Status  
**Sort by:** Priority (ascending)

**Columns:**
- Title
- Epic
- Owner
- Risk
- SLO Impact
- Target Release

### 2. Epic Roadmap View

**Filter:**
- Status: Not "Archived"

**Group by:** Epic  
**Sort by:** Milestone, Priority

**Columns:**
- Title
- Milestone
- Status
- Owner
- Estimate
- Target Release

### 3. Risk Register View

**Filter:**
- Risk: "High", "Critical"
- Status: Not "Done", Not "Archived"

**Group by:** Risk  
**Sort by:** Priority

**Columns:**
- Title
- Epic
- Status
- Owner
- SLO Impact
- Target Release

### 4. Module Heatmap View

**Filter:**
- Status: "In Progress", "In Review"

**Group by:** Module  
**Sort by:** Priority

**Columns:**
- Title
- Epic
- Status
- Owner
- Estimate

### 5. Quality Gates View

**Filter:**
- Epic: "Observability & Quality", "Security & Compliance"

**Group by:** Status  
**Sort by:** Priority

**Columns:**
- Title
- SLO Impact
- Risk
- Owner
- Target Release

## Manual Setup Instructions

Since Projects v2 API has limited programmatic setup support, follow these manual steps:

### Step 1: Create Project Board

1. Navigate to `https://github.com/orgs/chantaklun/projects/new` (or repository projects if org not available)
2. Click "New project"
3. Select "Board" template
4. Name: "CRM Production Readiness"
5. Description: "Single source of truth for CRM scale initiative to 10K users"

### Step 2: Add Custom Fields

For each field in the schema above:

1. Click "+ New field" in project settings
2. Configure field name, type, and options as specified
3. Save field

### Step 3: Configure Built-in Automations

1. Go to Project Settings → Workflows
2. Enable built-in workflows:
   - "Item closed" → Set status to "Archived"
   - "Pull request opened" → Set status to "In Review"
   - "Pull request merged" → Set status to "Done"

### Step 4: Create Saved Views

1. Click "New view" in project toolbar
2. Configure filters, grouping, and columns as specified above
3. Save each view with the name listed

### Step 5: Set Project Visibility

1. Go to Project Settings → Visibility
2. Set to "Private" or "Public" based on organizational policy
3. Configure access permissions for team members

## GraphQL Integration

For advanced automation via GitHub Actions, use the Projects v2 GraphQL API:

### Example: Add Issue to Project

```graphql
mutation AddIssueToProject($projectId: ID!, $contentId: ID!) {
  addProjectV2ItemById(input: {
    projectId: $projectId
    contentId: $contentId
  }) {
    item {
      id
    }
  }
}
```

### Example: Update Item Field

```graphql
mutation UpdateProjectField($projectId: ID!, $itemId: ID!, $fieldId: ID!, $value: String!) {
  updateProjectV2ItemFieldValue(input: {
    projectId: $projectId
    itemId: $itemId
    fieldId: $fieldId
    value: {
      singleSelectOptionId: $value
    }
  }) {
    projectV2Item {
      id
    }
  }
}
```

### Example: Query Project Items

```graphql
query GetProjectItems($projectId: ID!) {
  node(id: $projectId) {
    ... on ProjectV2 {
      items(first: 100) {
        nodes {
          id
          fieldValues(first: 20) {
            nodes {
              ... on ProjectV2ItemFieldSingleSelectValue {
                name
                field {
                  ... on ProjectV2SingleSelectField {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

## Project IDs Reference

After manual setup, document the following IDs for use in automation:

```bash
# Get Project ID
gh api graphql -f query='
  query {
    organization(login: "chantaklun") {
      projectV2(number: <NUMBER>) {
        id
        fields(first: 20) {
          nodes {
            ... on ProjectV2SingleSelectField {
              id
              name
              options {
                id
                name
              }
            }
          }
        }
      }
    }
  }
'
```

Store these IDs as repository secrets or in workflow environment:

- `PROJECT_ID`: Main project board ID
- `FIELD_ID_STATUS`: Status field ID
- `FIELD_ID_EPIC`: Epic field ID
- `FIELD_ID_MILESTONE`: Milestone field ID
- etc.

## Maintenance & Updates

### Weekly Tasks

- Review "Blocked" items and resolve impediments
- Validate "In Progress" items have recent activity
- Archive completed items older than 2 weeks
- Update risk ratings based on progress

### Bi-weekly Tasks

- Update milestone targets based on velocity
- Reprioritize backlog based on SLO impact
- Generate burn-down/burn-up charts
- Prepare status report from project data

### Monthly Tasks

- Review epic completion rates
- Adjust field options if needed
- Archive old PIs and create new milestones
- Audit automation rules effectiveness

## Access Control

### Roles

- **Admin:** Program orchestrator, technical lead
- **Write:** All sub-agents, developers, product owner
- **Read:** Stakeholders, executive sponsors

### Best Practices

- Only admins modify field schemas
- Sub-agents update their owned items via automation
- Manual updates for high-risk items require approval
- Use GitHub Actions for bulk operations to avoid rate limits

---

**Related Documentation:**
- [GitHub Actions Workflow](../../.github/workflows/project-automation.yml)
- [Program Charter](./CHARTER.md)
- [Epic Specifications](./EPICS.md)
