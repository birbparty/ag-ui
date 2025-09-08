Create a working branch before you start:

```bash
git checkout -b feat/dart-setup-repo-structure
```

When finished, commit and push your work, then open a PR:

```bash
git add -A
git commit -m "feat(dart): scaffold sdk and example directories"
git push -u origin feat/dart-setup-repo-structure
```

Completion checklist:
- Update `proompts/tasks.yaml` to set `status: completed` for `setup-repo-structure`.
- Ensure branch is pushed and PR opened.
- Link the PR in the task notes if applicable.

```yaml
task_id: setup-repo-structure

task_reference: "tasks.yaml#phases.setup-planning.tasks.setup-repo-structure"

context:
  background: |
    Establish the Dart community SDK structure and an example app scaffold. Create
    `sdks/community/dart` for the publishable package and `sdks/community/dart/example`
    for a Tool-Based Generative UI client example. Initialize standard package layout
    (lib/, test/), minimal `pubspec.yaml` placeholders, and README stubs to unblock
    downstream tasks.
  dependencies: []
  constraints:
    - Follow `https://dart.dev/tools/pub/package-layout` folder conventions
    - Keep initial scaffolding minimal but runnable by `dart format` and `dart analyze`
    - Ensure paths align with repository layout used by CI and docs

execution_strategy:
  approach: |
    1) Create directories for the SDK and example. 2) Add minimal `pubspec.yaml` files
    with package names and SDK constraints. 3) Add initial `lib/` entry points and empty
    test suites to validate structure. 4) Add placeholder READMEs. 5) Verify the tree with
    `dart format` and `dart analyze` to ensure a clean baseline.
  milestones:
    - Directories present: `sdks/community/dart` and `sdks/community/dart/example`
    - Minimal `pubspec.yaml` files created (no external deps yet)
    - `lib/` and `test/` trees added for both package and example
    - Basic READMEs added
    - Repo builds lint-free for the new paths
  success_criteria:
    - Running `dart format --output=none --set-exit-if-changed .` passes for new dirs
    - Running `dart analyze` shows no errors for new dirs
    - The structure matches Dart package layout guidelines

resources:
  required_tools:
    - Dart SDK (>=3.x)
    - Git
  reference_materials:
    - "https://dart.dev/tools/pub/package-layout"
    - "https://docs.ag-ui.com"
    - "$HOME/git/workspace1/ag-ui/typescript-sdk/apps/dojo"
    - "$HOME/git/workspace1/ag-ui/typescript-sdk/integrations/server-starter-all-features/server/python/example_server/tool_based_generative_ui.py"

confidence_boosters:
  similar_successes:
    - The TypeScript monorepo structure (packages/, integrations/, apps/) provides a model
  available_support:
    - Internal docs at `https://docs.ag-ui.com` and maintainers in this repo
  fallback_options:
    - If Dart SDK is not available locally, stub files and CI will validate later
```
