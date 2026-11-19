# Nexus Hub Corporate Website

The official public-facing corporate website for **Nexus Hub**. This application communicates the organisation's identity, services, initiatives, products and official contact pathways.

> This repository owns the corporate website experience. It is one of six application repositories in the Nexus Hub digital ecosystem; it is not the shared backend or the ecosystem portal.

## Ecosystem position

| Application | Responsibility |
|---|---|
| Corporate Website (this repository) | Public corporate identity, official information, services, initiatives, products and enquiries |
| NexusApp | Ecosystem discovery, participation and community experience |
| Corporate Workspace | Internal organisational work and coordination |
| Nexus Hub TV | Institutional insights, editorial publishing and media experiences |
| Nexus Hub Learning | Learning experiences, courses and learner progress |
| Administration Console | Privileged platform administration and technical governance |

The applications are distinct products with defined boundaries. Shared identity, backend capabilities and integrations are governed centrally rather than independently redefined by each frontend.

## Website responsibilities

- Present accurate, approved information about Nexus Hub.
- Explain services, products, initiatives and relevant opportunities.
- Provide official enquiry and contact pathways.
- Publish corporate announcements and company-owned information.
- Direct visitors to the appropriate ecosystem application or product.

Editorial reporting, news coverage and institutional media publishing belong to **Nexus Hub TV**, not the Corporate Website. Internal staff operations belong to **Corporate Workspace**. Privileged platform controls belong to the **Administration Console**.

## Technology

This repository is a Next.js application. Use the package manifest and lockfile in this repository as the source of truth for exact dependency versions and scripts.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) when the development server is running. Use the scripts declared in `package.json` for type checks, linting and production builds.

## Configuration and security

- Keep secrets and environment-specific credentials out of source control.
- Validate all external inputs and protect server-side operations.
- Do not treat frontend visibility or route handling as an authorisation boundary.
- Confirm deployment environment variables and production domains before release.

## Architecture and documentation

The central repository is the source of truth for ecosystem-level architecture, application boundaries, governance, decisions and diagrams:

- [Nexus Hub ecosystem documentation](https://github.com/hlestakovjames/nexushub-documentation)
- [Corporate Website application documentation](https://github.com/hlestakovjames/nexushub-documentation/tree/main/04-applications/corporate-website)
- [Ecosystem architecture](https://github.com/hlestakovjames/nexushub-documentation/tree/main/02-architecture)
- [Decision register](https://github.com/hlestakovjames/nexushub-documentation/blob/main/05-governance-and-decisions/decision-register.md)

## Status

This README establishes the repository's purpose and boundaries; it does not certify every documented target capability as implemented or deployed. Consult the source code, central project status and deployment evidence for current implementation state.
