# Podcast App Development Prompt

## Format Guidelines

- **Title**: Use a first-level heading (#) as the file title.
- **Content**: Use second-level headings (##) to separate different sections.
- **Lists**: Use unordered lists (-) or ordered lists (1. 2. 3.) to present content.
- **Code Blocks**: Wrap code blocks with three backticks (```) and specify the language.
- **Emphasis**: Use bold (**) or italic (*) to emphasize important content.
- **Source**: Include the source of the prompt or content.

## Prompt Example

**Description**: This prompt is for developing a high-fidelity prototype for a podcast app similar to Xiaoyuzhou.

**Prompt**:
> I want to develop a podcast app similar to Xiaoyuzhou. I need to output high-fidelity prototype designs for all interfaces. Please help me complete the prototype design for all interfaces through the following methods, ensuring these prototype interfaces can be directly used for development:
> 
> 1. **User Experience Analysis**: Analyze the main functions and user needs of this app, and determine the core interaction logic.
> 2. **Product Interface Planning**: As a product manager, define key interfaces to ensure a reasonable information architecture.
> 3. **High-Fidelity UI Design**: As a UI designer, design interfaces that closely follow real iOS/Android design standards, using modern UI elements for a good visual experience.
> 4. **HTML Prototype Implementation**: Use HTML + Tailwind CSS (or Bootstrap) to generate all prototype interfaces, and use FontAwesome (or other open-source UI components) to make the interfaces more beautiful and closer to real app designs. Split the code files to maintain a clear structure:
>    - Each interface should be stored as an independent HTML file, such as home.html, profile.html, settings.html, etc.
>    - index.html should be the main entry point, not directly writing all interface HTML code, but using iframe to embed these HTML fragments, and displaying all pages directly on the index page, rather than using links.
> 5. **Realism Enhancement**:
>    - Interface size should simulate iPhone 15 Pro, and the interface should be rounded to make it more like a real phone interface.
>    - Use real UI images, not placeholder images (can be selected from Unsplash, Pexels, Apple official UI resources).
>    - Add a top status bar (simulating iOS status bar) and include an app navigation bar (similar to iOS bottom Tab Bar).
> 
> Please generate complete HTML code according to the above requirements, ensuring it can be used for actual development.

**Notes**: This prompt is designed to guide the development of a podcast app prototype with a focus on user experience and high-fidelity design.

**Source**: This prompt is sourced from [Example Source](https://example.com).

---

[中文版本](podcast_app_prompt_zh.md) 