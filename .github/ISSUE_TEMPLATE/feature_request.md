---
name: 💡 Feature Request
description: Suggest a new feature or enhancement for the IT Circle website
title: "[Feature]: "
labels: ["enhancement", "needs-triage"]
assignees: []
body:
  - type: markdown
    attributes:
      value: |
        **Thank you for suggesting a new feature!** 💡

        We love hearing ideas from our community. Feature requests help us understand what students and users need most.

        **Before submitting:**
        - Check if a similar feature has already been requested
        - Consider if this aligns with IT Circle's mission (education, community, projects)
        - Think about how this feature would benefit students and the community

  - type: textarea
    id: problem
    attributes:
      label: Problem Statement
      description: What problem does this feature solve? Why is it needed?
      placeholder: |
        "Currently, students have difficulty finding projects by technology stack. They have to scroll through all projects to find ones using React or Django, making it hard to discover relevant work."
    validations:
      required: true

  - type: textarea
    id: solution
    attributes:
      label: Proposed Solution
      description: Describe your proposed solution in detail
      placeholder: |
        "Add a filtering system on the projects page that allows users to filter by:
        - Programming languages (JavaScript, Python, Java, etc.)
        - Technology frameworks (React, Django, Flutter, etc.)
        - Project categories (Web App, Mobile App, AI/ML, etc.)
        - Skill level (Beginner, Intermediate, Advanced)
        - Academic year/semester"
    validations:
      required: true

  - type: textarea
    id: alternatives
    attributes:
      label: Alternative Solutions
      description: Have you considered other ways to solve this problem?
      placeholder: |
        "Alternative 1: Add a search bar that searches project descriptions and tech stacks
        Alternative 2: Create separate category pages for each technology
        Alternative 3: Add tags to projects that can be clicked for filtering"
    validations:
      required: false

  - type: textarea
    id: benefits
    attributes:
      label: Benefits and Impact
      description: How would this feature benefit students and the IT Circle community?
      placeholder: |
        "- Help students find projects that match their skill level and interests
        - Encourage learning by showing examples of different technologies
        - Make it easier for industry partners to find student work
        - Improve project discoverability and community engagement"
    validations:
      required: true

  - type: textarea
    id: implementation
    attributes:
      label: Implementation Ideas (Optional)
      description: If you have thoughts on how to implement this feature, share them here
      placeholder: |
        "Technical approach:
        1. Add technology fields to the Project model in Django
        2. Create API endpoints for filtering projects
        3. Build frontend filtering UI with dropdowns and checkboxes
        4. Add URL parameters for shareable filtered views

        Design considerations:
        - Use existing UI patterns for consistency
        - Make filters collapsible on mobile
        - Add a 'Clear all filters' option"
    validations:
      required: false

  - type: textarea
    id: examples
    attributes:
      label: Examples and References
      description: Links to similar features in other projects or inspiration sources
      placeholder: |
        "- GitHub's repository topics and filtering: https://github.com/topics
        - Similar project showcase sites with good filtering
        - Academic portfolio sites with technology categorization"
    validations:
      required: false

  - type: dropdown
    id: complexity
    attributes:
      label: Estimated Complexity
      description: How complex do you think this feature would be to implement?
      options:
        - 🟢 Easy (1-2 days for a student contributor)
        - 🟡 Medium (3-7 days for a student contributor)
        - 🟠 Hard (1-2 weeks for a student contributor)
        - 🔴 Very Complex (requires experienced developer, 2+ weeks)
    validations:
      required: true

  - type: checkboxes
    id: contribution
    attributes:
      label: Contribution Interest
      description: Are you interested in helping implement this feature?
      options:
        - label: I'm willing to implement this feature myself
        - label: I can help with testing and feedback
        - label: I can provide more details or mockups
        - label: I just want to suggest the idea (no time to contribute)

  - type: checkboxes
    id: checklist
    attributes:
      label: Before Submitting
      description: Please confirm you've considered these points
      options:
        - label: I've checked existing feature requests to avoid duplicates
          required: true
        - label: This feature aligns with IT Circle's educational mission
          required: true
        - label: I've provided clear problem statement and solution
          required: true
        - label: I've considered how this benefits students and the community
          required: true

  - type: markdown
    attributes:
      value: |
        ---

        **Thank you for your feature suggestion!** 🎉

        Our team will review this request and consider it for future development. Student contributors often work on features like this as part of their learning journey.

        **Next Steps:**
        1. **Review**: Maintainers will review and provide feedback
        2. **Discussion**: The community may discuss implementation approaches
        3. **Planning**: If approved, we'll add it to our project roadmap
        4. **Implementation**: Contributors can then work on the feature

        **Want to Get Involved?**
        If you're interested in implementing this feature, please comment below! Our faculty advisors and senior students provide mentorship for feature development.

        **Timeline:**
        - Feature requests are reviewed monthly
        - Simple features may be implemented within 1-2 months
        - Complex features are planned for semester projects or internships

        **Need to Discuss?** Join our discussions:
        - GitHub Discussions: [Link to discussions]
        - Email: itcircle@khec.edu.np
        - Office Hours: Mon-Fri, 10 AM - 5 PM NPT
