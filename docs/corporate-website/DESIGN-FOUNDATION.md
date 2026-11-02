# Nexus Hub Corporate Website — Design Foundation

**Status:** Proposed foundation for implementation  
**Repository:** `hlestakovjames/nexushub-frontend`  
**Working branch:** `corporate-restructure`  
**Production branch:** `main` (unchanged)

## 1. Purpose

This document establishes the shared design and structural rules for the Nexus Hub corporate website redesign. It is the implementation baseline for the homepage, About, Projects and all new corporate pages.

The website represents Nexus Hub as an organisation working across technology, innovation and research, media and creativity, and business and enterprise. It must not read as only a digital agency, a product directory or an application dashboard.

**Official tagline:** Empowering businesses through innovative digital solutions.

## 2. Design principles

1. Corporate first: institutional identity and purpose precede service listings and product cards.
2. Clear hierarchy: each page has one primary message and a deliberate content sequence.
3. Editorial composition: vary section layouts; do not repeat the same card grid throughout.
4. Credible presentation: publish only verified facts, work, people, partnerships and outcomes.
5. Progressive disclosure: homepage summaries lead to complete dedicated pages.
6. Connected but distinct: the six applications belong to one ecosystem but have different purposes.
7. Responsive by design: mobile is a first-class layout, not a compressed desktop page.
8. Motion with purpose: animation reinforces hierarchy and interaction without delaying content.

## 3. Visual direction

### 3.1 Colour roles

Use the approved Nexus Hub logo and existing brand assets as the source of truth when finalising exact values.

| Token role | Intended use |
|---|---|
| Brand navy | Primary identity, headings, navigation details and selected dark sections |
| Brand blue/cyan | Controlled accent, links, active states and selected highlights |
| White | Main page foundation and breathing space |
| Soft neutral | Alternate section backgrounds and subtle surfaces |
| Deep neutral | Body text and high-contrast content |
| Muted neutral | Metadata, captions, dividers and secondary text |
| Semantic colours | Status, validation and alerts only |

Do not invent a new logo or use an unverified palette as final brand values. Extract and document exact colours after inspecting the approved logo and existing brand files.

### 3.2 Overall composition

- White or light-neutral foundation.
- Dark navy used intentionally, not as a background for every section.
- Strong, restrained typography.
- Generous but controlled whitespace.
- Large editorial imagery where it contributes meaning.
- Subtle borders and shadows.
- Consistent container widths and section spacing.
- Avoid excessive rounded cards, gradients and decorative effects.

### 3.3 Typography

Establish reusable styles for:
- Display / hero heading.
- Page title.
- Section heading.
- Card or item heading.
- Body copy.
- Supporting copy.
- Eyebrow / overline.
- Metadata and captions.

Use responsive sizing with readable line lengths. Avoid overly wide paragraphs and excessive all-caps text.

### 3.4 Imagery

Use real, approved Nexus Hub assets wherever available. Supporting imagery should represent:
- Technology and software development.
- Research and experimentation.
- Professional people and collaboration.
- Media and creative production.
- Business and enterprise activity.
- Corporate environments.

Avoid generic stock imagery that does not reinforce the subject. Do not use generated approximations of the official logo or imply that illustrative scenes depict actual Nexus Hub facilities, staff or projects.

## 4. Shared layout system

Create or consolidate reusable primitives for:
- Site container.
- Section wrapper.
- Section heading.
- Page introduction.
- Breadcrumbs.
- Primary and secondary buttons.
- Image frame.
- Content grid.
- Feature panel.
- Status label.
- CTA band.
- Empty state.
- Loading skeleton.
- Form field and validation message.

Suggested responsive container behaviour:
- Wide desktop: centred content with a maximum width.
- Tablet: reduced side gutters and adaptive grids.
- Mobile: single-column flow, readable type and touch-friendly controls.

Use consistent spacing tokens rather than one-off margins throughout page components.

## 5. Navigation and footer

### Navigation

The corporate navigation should be compact and understandable:
- About
- What We Do
- Our Work
- Innovation
- Insights
- Events
- Resources
- Contact

The homepage is reached through the logo. A separate, visually prominent action may link to the ecosystem entry point once its destination is verified.

Rules:
- Every visible internal link must resolve to a real page.
- Do not expose unimplemented routes as active navigation links.
- Mobile navigation must support keyboard and screen-reader use.
- Menus must not depend on hover alone.
- Show clear active and focus states.

### Footer

Organise footer links into:
- About Nexus Hub.
- What We Do.
- Our Work.
- Insights and Resources.
- Applications / Ecosystem.
- Contact and legal.

Only include verified contact details and live application destinations. Confirm telephone and WhatsApp details before publishing.

## 6. Page templates

### Corporate homepage
A narrative overview: corporate hero, introduction, areas of focus, capabilities, innovation, selected work, ecosystem, insights and engagement.

### Standard corporate page
Page introduction, contextual content sections, relevant supporting media, related links and a clear CTA.

### Listing page
Page introduction, optional category filters, featured item, structured list/grid, empty state and pagination or load-more where required.

### Detail page
Breadcrumbs, title and metadata, lead summary, main content, supporting media, status where relevant, related items and return navigation.

### Contact page
Clear enquiry paths, accessible form, verified contact information, privacy explanation and submission feedback.

## 7. Homepage narrative rules

The homepage must answer, in order:
1. What is Nexus Hub?
2. What does it stand for?
3. Where does it focus its activity?
4. What capabilities does it apply?
5. How does it approach innovation and development?
6. What work, products or initiatives can visitors explore?
7. How can visitors engage?

The homepage is a curated introduction. It must not become a complete catalogue of every service, application, article and project.

## 8. Content and status governance

Use consistent statuses only where relevant:
- Launched
- Active
- In development
- Prototype
- Concept
- Completed
- Archived

Do not label an item as launched, active or completed without confirmation. Distinguish a product from a project and an organisational initiative.

Use `[TO CONFIRM]` in internal planning documents for unknown facts. Never display that marker on the public website.

## 9. Motion, loading and interaction

Permitted patterns:
- Short hero entrance.
- Subtle scroll reveals.
- Button and link feedback.
- Image transitions.
- Controlled carousel interaction.
- Page transition feedback where it does not interfere with navigation.

Requirements:
- Respect `prefers-reduced-motion`.
- Avoid scroll hijacking and excessive parallax.
- Avoid animation that blocks reading or interaction.
- Do not introduce artificial splash-screen delays.
- Show loading skeletons only when content is genuinely loading.
- Prevent layout shifts by reserving image and content space.

## 10. Accessibility and performance

Target WCAG 2.2 AA.

Check:
- Semantic landmarks and heading order.
- Keyboard access and visible focus.
- Contrast and readable text.
- Accessible menus and dialogs.
- Form labels and errors.
- Meaningful alt text.
- Reduced-motion behaviour.
- Responsive layouts and touch targets.

Performance priorities:
- Optimised responsive images.
- Minimal client-side JavaScript.
- Avoid unnecessary dependencies.
- Stable layout dimensions.
- Efficient font loading.
- Good mobile performance.

## 11. Technical implementation rules

- Retain the existing Next.js, React, TypeScript, Tailwind CSS and Lucide React foundation unless an audit demonstrates a reason to change.
- Reuse working components where they fit the new system.
- Refactor shared components before duplicating them across pages.
- Keep content data separate from presentation where practical.
- Centralise navigation and route definitions.
- Ensure metadata and sitemap use the canonical route map.
- Do not remove existing pages or content until usage, redirects and dependencies have been checked.

## 12. Initial component inventory

Review existing components before creating replacements.

| Component area | Intended shared component |
|---|---|
| Navigation | CorporateHeader, DesktopNavigation, MobileNavigation |
| Footer | CorporateFooter |
| Page structure | PageContainer, PageIntro, Section |
| Content | SectionHeading, RichContent, FeaturePanel |
| Work | ProductCard, ProjectCard, WorkStatus |
| Editorial | ArticleCard, EventCard, ResourceCard |
| Conversion | PrimaryButton, SecondaryButton, CTASection |
| Feedback | LoadingSkeleton, EmptyState, FormFeedback |

Names are proposed; map them to existing components where suitable rather than creating duplicate implementations.

## 13. Implementation sequence

1. Audit existing layout, styles, logo assets, navigation, footer and page components.
2. Confirm exact brand colours and typography from approved assets.
3. Define design tokens and shared layout primitives.
4. Refactor navigation and footer on the working branch.
5. Rebuild the homepage using the new composition.
6. Apply the system to About and Projects.
7. Add new page templates and routes in planned phases.
8. Align metadata, sitemap, redirects and internal links.
9. Run responsive, accessibility, performance and route checks.
10. Review the staging deployment before merging to production.

## 14. Release safeguards

- Work on `corporate-restructure`.
- Keep `main` and the production deployment unchanged during redesign.
- Do not merge or deploy to production without review.
- Verify all routes and links before release.
- Verify contact details, public claims, project statuses and application URLs.
- Keep a record of removed, redirected or renamed routes.

---

**Design objective:** A coherent, credible corporate digital identity for Nexus Hub—one that communicates the organisation's wider purpose and capabilities while remaining clear, modern, accessible and grounded in what is actually established.
