Create a working branch before you start:

```bash
git checkout -b docs/dart-sdk-initial
```

When finished, commit and push your work, then open a PR:

```bash
git add -A
git commit -m "docs(dart): initial README and CONTRIBUTING for Dart SDK"
git push -u origin docs/dart-sdk-initial
```

Completion checklist:
- Update `proompts/tasks.yaml` to set `status: completed` for `setup-dev-docs`.
- Ensure branch is pushed and PR opened.
- Link the PR in the task notes if applicable.

```yaml
task_id: setup-dev-docs

task_reference: "tasks.yaml#phases.setup-planning.tasks.setup-dev-docs"

context:
  background: |
    Author initial README and CONTRIBUTING docs for the Dart community SDK. Document goals,
    local development flow, how to run tests, and how to set up integration with the Python
    example server. Include publishing notes and a roadmap stub.
  dependencies:
    - setup-repo-structure
  constraints:
    - Keep docs concise and actionable for new contributors
    - Align terminology with existing AG-UI docs

execution_strategy:
  approach: |
    1) Create `sdks/community/dart/README.md` and `CONTRIBUTING.md`. 2) Document local dev
    prerequisites (Dart SDK), common commands (`dart format`, `dart analyze`, `dart test`).
    3) Outline how integration tests will run against the Python example server container.
    4) Add publishing guidelines and issue/PR conventions consistent with the monorepo.
  milestones:
    - README created with local dev instructions
    - CONTRIBUTING created with contribution process and checks
    - Reference links added to AG-UI docs and server starter example
  success_criteria:
    - A new contributor can set up the environment and run checks in <15 minutes
    - Docs link to the right reference materials and paths

resources:
  required_tools:
    - Markdown
  reference_materials:
    - "https://docs.ag-ui.com"
    - "$HOME/git/workspace1/ag-ui/typescript-sdk/apps/dojo"
    - "$HOME/git/workspace1/ag-ui/typescript-sdk/integrations/server-starter-all-features/server/python/example_server/"

confidence_boosters:
  similar_successes:
    - Existing README/CONTRIBUTING patterns in the monorepo
  available_support:
    - Project maintainers and existing SDK docs
  fallback_options:
    - Start with a minimal README and iterate after CI scaffolding lands
```
