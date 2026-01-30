# KawaiiPhysics Documentation Project

## Project Overview

This is the documentation site for [KawaiiPhysics](https://github.com/pafuhana1213/KawaiiPhysics), an Unreal Engine plugin for lightweight bone physics simulation. The documentation follows the "Docs as Code" approach, where AI (Claude) generates and maintains documentation based on the source code.

## Architecture

```
KawaiiPhysicsDocs/          # This repository (documentation)
├── docs/                   # Markdown documentation files
│   ├── getting-started/    # Setup and installation guides
│   ├── parameters/         # Parameter reference (auto-generated from code)
│   ├── features/           # Feature explanations
│   ├── examples/           # Usage examples and tutorials
│   └── api/               # API reference (auto-generated from code)
├── src/                    # Docusaurus custom components
├── static/                 # Images, videos, and other assets
├── scripts/                # Documentation generation scripts
└── .github/workflows/      # GitHub Actions for automation
```

## Workflow for Claude

### When Updating Documentation

1. **Source Repository**: https://github.com/pafuhana1213/KawaiiPhysics
2. **Key Files to Analyze**:
   - `Plugins/KawaiiPhysics/Source/KawaiiPhysics/Public/*.h` - Header files with UPROPERTY definitions
   - `Plugins/KawaiiPhysics/Source/KawaiiPhysics/Private/*.cpp` - Implementation details
   - `Plugins/KawaiiPhysics/Source/KawaiiPhysicsEd/` - Editor extensions

### Documentation Generation Rules

1. **Parameter Reference Pages**:
   - Extract UPROPERTY metadata from header files
   - Include Japanese comments as-is (this plugin targets Japanese users primarily)
   - Add English translations where helpful
   - Group parameters by category (Physics, Collision, Limits, etc.)

2. **Feature Pages**:
   - One page per major feature
   - Include visual diagrams where possible (request from human maintainer)
   - Provide practical examples

3. **API Reference**:
   - Auto-generate from UFUNCTION and UPROPERTY macros
   - Include parameter types, default values, and descriptions

### File Naming Conventions

- Use kebab-case for file names: `getting-started.md`, `bone-chain-setup.md`
- Prefix auto-generated files with comment: `<!-- AUTO-GENERATED: Do not edit manually -->`
- Manual pages should be marked: `<!-- MANUAL: Human-maintained content -->`

### Image and Asset Placeholders

When documentation requires visual assets:
```markdown
<!-- IMAGE_NEEDED: description of required image -->
<!-- VIDEO_NEEDED: description of required video -->
```

Human maintainers will replace these placeholders with actual assets.

## Commands

```bash
# Development
npm start          # Start dev server at localhost:3000
npm run build      # Build for production
npm run serve      # Preview production build

# Documentation sync (when implemented)
npm run sync-docs  # Fetch and parse KawaiiPhysics source code
```

## GitHub Actions Triggers

Documentation updates can be triggered by:
1. **Push to main branch** of this repository
2. **Workflow dispatch** (manual trigger)
3. **Repository dispatch** from KawaiiPhysics repository (webhook)

## Language Policy

- **Primary language**: Japanese (日本語)
- **Secondary language**: English
- Parameter names should match source code (English)
- Descriptions should be bilingual where practical

## Version Tracking

- Track KawaiiPhysics releases via Git tags
- Document version compatibility in frontmatter:
  ```yaml
  ---
  plugin_version: "1.16.1"
  ue_versions: ["5.3", "5.4", "5.5"]
  ---
  ```

## Quality Checklist for Claude

Before committing documentation changes:
- [ ] All code examples are syntactically correct
- [ ] Links to source code are valid
- [ ] Parameter names match current source code
- [ ] No placeholder text left unresolved (except IMAGE_NEEDED/VIDEO_NEEDED)
- [ ] Japanese text is grammatically correct
- [ ] Build passes without errors (`npm run build`)
