# Project Task YAML Generation Prompt

## Agent Instructions

You are a project manager at a FAANG level company. One project away from making your next promotion and some serious compensation increases. Like 6 figure changes. So you need to crush this one.

## Project Information

### Links to Relevant Documentation
- [AG-UI Official Documentation](https://docs.ag-ui.com)
- [AG-UI Introduction](https://go.copilotkit.ai/ag-ui-introduction) 
- [AG-UI Specification](https://github.com/ag-ui-protocol/specification)
- [AG-UI GitHub Repository](https://github.com/ag-ui-protocol/ag-ui)
- [Python SDK Reference](https://github.com/ag-ui-protocol/ag-ui/tree/main/python-sdk)
- [TypeScript SDK Reference](https://github.com/ag-ui-protocol/ag-ui/tree/main/typescript-sdk)
- [Dart Project Layout Best Practices](https://dart.dev/tools/pub/package-layout)
- [Dart Design Patterns](https://dart.dev/effective-dart/design)

### Project Description
We want to create a new dart SDK with an example that is able to call the server and execute the features of the Dojo pointed at  "Server Starter (All Features)" We want to implement the "Tool Based Generative UI" example from 
Server:
/Users/punk1290/git/workspace1/ag-ui/typescript-sdk/integrations/server-starter-all-features/server/python/example_server/tool_based_generative_ui.py
Client:
/Users/punk1290/git/workspace1/ag-ui/typescript-sdk/apps/dojo

### Technical Stack
- **Language**: Dart
- **Event Streaming**: Server-Sent Events (SSE) implementation
- **Testing**: We have a container that runs /Users/punk1290/git/workspace1/ag-ui/typescript-sdk/integrations/server-starter-all-features/server/python/example_server/
- **Validation**: Custom validation for AG-UI event types
- **Examples**: Comprehensive example application demonstrating "Server Starter (All Features)"


### Specific Requirements
- We need a dart package we can publish

- the dart package needs to live in /Users/punk1290/git/workspace1/ag-ui/sdks/community/dart

- We must match the functionality in /Users/punk1290/git/ag-ui/typescript-sdk/apps/dojo/ for "Tool Based Generative UI" for our example client

- We should be implementing an AG-UI client. More about AG-UI can be found at https://docs.ag-ui.com/llms-full.txt

- The resulting example should live in /Users/punk1290/git/workspace1/ag-ui/sdks/community/dart/example/

## Your Task

Please ultrathink about this project and create a comprehensive task YAML file at `proompts/tasks.yaml` following the exact format of `$HOME/git/proompting/tasks.yaml`.

This YAML file will be executed on by a team of senior engineers. Make sure it has enough context in it for them to crush it. Remember this is the big one!

## YAML Structure Requirements

Your output must include:

1. **Metadata Section**
   - Project name
   - Comprehensive description
   - Complete tech stack listing

2. **Phases Section**
   - Logical project phases (e.g., Setup, Core Development, Testing, Deployment)
   - Each phase should have a clear name and purpose

3. **Tasks Within Each Phase**
   - Unique task IDs
   - Clear, actionable task names
   - Detailed descriptions with context
   - Priority levels (critical/high/medium/low)
   - Status (pending/in-progress/completed)
   - Dependencies between tasks

4. **Dependencies Section**
   - External project dependencies
   - Required tasks from other teams/projects

5. **Notes Section**
   - Best practices to follow
   - Important considerations
   - Technical guidelines
   - Quality standards

6. **Updates Section**
   - Space for tracking progress updates

## Key Considerations

- **Task Granularity**: Break down work into manageable chunks that can be completed in 1-3 days
- **Dependencies**: Carefully map out task dependencies to avoid blockers
- **Priority**: Mark critical path items appropriately
- **Context**: Each task should have enough detail that any senior engineer can pick it up
- **Testability**: Include testing tasks throughout, not just at the end
- **Documentation**: Include documentation tasks for each major component

## Example Task Entry

```yaml
- id: setup-authentication
  name: "Implement JWT authentication system"
  description: "Set up JWT-based authentication with refresh tokens, including middleware for route protection and token validation"
  priority: critical
  status: pending
  dependencies: [setup-api-framework, setup-database]
  references: ["$HOME/docs/jwt","https://datatracker.ietf.org/doc/html/rfc7519"]
```

## Context Documentation

Any important context, documentation, or reference materials that should be shared across AI agents working on this project should be placed in `/proompts/docs/`. This directory serves as a persistent knowledge base that all agents can reference to maintain consistency and understanding throughout the project lifecycle.

## Final Notes

Remember: This task list is your roadmap to that promotion. The clearer and more comprehensive your task breakdown, the smoother the execution will be. Think through edge cases, consider rollback strategies, and ensure every critical path item is accounted for.

Good luck - make this count! 🚀
