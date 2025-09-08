Create a working branch before you start:

```bash
git checkout -b ci/dart-sdk-bootstrap
```

When finished, commit and push your work, then open a PR:

```bash
git add -A
git commit -m "ci(dart): add format/analyze/test workflow with integration job"
git push -u origin ci/dart-sdk-bootstrap
```

Completion checklist:
- Update `proompts/tasks.yaml` to set `status: completed` for `setup-ci`.
- Ensure branch is pushed and PR opened.
- Link the PR in the task notes if applicable.

```yaml
task_id: setup-ci

task_reference: "tasks.yaml#phases.setup-planning.tasks.setup-ci"

context:
  background: |
    Create a GitHub Actions workflow for the Dart SDK and example. The workflow should run
    `dart format --output=none --set-exit-if-changed .`, `dart analyze`, and `dart test`.
    Prepare a job (can be initially skipped or marked as TODO) to run integration tests
    against the Python example server container from Server Starter (All Features).
  dependencies:
    - setup-repo-structure
  constraints:
    - Keep workflows fast and cache Dart dependencies
    - Work within GitHub-hosted runners initially

execution_strategy:
  approach: |
    1) Add `.github/workflows/dart-ci.yml`. 2) Set up Dart toolchain, caching, and commands
    for format/analyze/test. 3) Add a placeholder integration job with clear TODOs to run
    the Python example server container and invoke tests. 4) Ensure CI is scoped to changes
    under `sdks/community/dart/` paths to avoid running on unrelated changes.
  milestones:
    - Workflow file present with format/analyze/test steps
    - Caching configured for faster runs
    - Placeholder integration job documented
  success_criteria:
    - CI passes on a branch containing the Dart skeleton
    - PRs touching Dart dirs trigger the workflow reliably

resources:
  required_tools:
    - GitHub Actions
    - Dart SDK
    - Docker (for future integration job)
  reference_materials:
    - "https://dart.dev/guides/libraries/create-library-packages"
    - "$HOME/git/workspace1/ag-ui/typescript-sdk/integrations/server-starter-all-features/server/python/example_server/"

confidence_boosters:
  similar_successes:
    - Existing CI patterns in this monorepo for TypeScript and Python
  available_support:
    - Maintainers familiar with GitHub Actions and containerized tests
  fallback_options:
    - Ship format/analyze/test first; add integration job in a follow-up PR
```
