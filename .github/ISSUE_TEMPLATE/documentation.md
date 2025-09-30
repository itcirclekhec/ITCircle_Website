---
name: 📚 Documentation Improvement
description: Suggest improvements to documentation, guides, or help content
title: "[Docs]: "
labels: ["documentation", "needs-triage"]
assignees: []
body:
  - type: markdown
    attributes:
      value: |
        **Thank you for helping improve our documentation!** 📚

        Good documentation is crucial for helping students learn and contribute effectively. Your suggestions help make IT Circle more accessible to everyone.

        **Before submitting:**
        - Check if the documentation issue already exists
        - Be specific about what needs improvement
        - Consider if you're willing to help write the improved content

  - type: dropdown
    id: doc_type
    attributes:
      label: Documentation Type
      description: Which type of documentation needs improvement?
      options:
        - README.md (main project readme)
        - CONTRIBUTING.md (contribution guidelines)
        - API Documentation (backend API docs)
        - Setup Guides (installation instructions)
        - Architecture Docs (system design)
        - Development Guides (coding standards, workflows)
        - User Guides (how to use the website)
        - Troubleshooting (common issues and solutions)
        - Other (please specify in description)
    validations:
      required: true

  - type: textarea
    id: current_issue
    attributes:
      label: Current Issue
      description: What's wrong with the current documentation?
      placeholder: |
        "The installation guide for Windows users is missing important steps for Python setup..."
        "The API documentation doesn't explain error responses clearly..."
        "The contributing guide lacks information about testing requirements..."
    validations:
      required: true

  - type: textarea
    id: suggested_improvement
    attributes:
      label: Suggested Improvement
      description: How should the documentation be improved?
      placeholder: |
        "Add a Windows-specific installation section with screenshots..."
        "Include example error responses and troubleshooting tips..."
        "Add a testing section with examples of how to run tests..."
    validations:
      required: true

  - type: textarea
    id: why_important
    attributes:
      label: Why This Matters
      description: Why is this documentation improvement important for students and contributors?
      placeholder: |
        "Many students use Windows and struggle with the current setup instructions..."
        "Clear error documentation helps students debug issues independently..."
        "Testing guidelines help new contributors understand quality requirements..."
    validations:
      required: true

  - type: textarea
    id: examples
    attributes:
      label: Examples or References
      description: Provide examples of good documentation or reference materials
      placeholder: |
        "Similar projects with good installation guides: [link]"
        "Official documentation that does this well: [link]"
        "Screenshots or mockups of what you envision"
    validations:
      required: false

  - type: textarea
    id: proposed_content
    attributes:
      label: Proposed Content (Optional)
      description: If you have specific content you'd like to suggest, include it here
      placeholder: |
        "## Windows Installation Guide

        ### Prerequisites for Windows Users

        1. Install Python from the official website: https://python.org
        2. Install Git for Windows: https://gitforwindows.org
        3. Install Node.js: https://nodejs.org

        ### Step-by-Step Setup

        ```powershell
        # Open PowerShell or Command Prompt
        git clone https://github.com/KhEC-IT-Circle/ITCircle_Website.git
        cd ITCircle_Website

        # Backend setup
        cd backend
        python -m venv venv
        venv\Scripts\activate
        pip install -r requirements.txt
        ```"
    validations:
      required: false

  - type: checkboxes
    id: contribution
    attributes:
      label: Willing to Contribute
      description: Are you willing to help with this documentation improvement?
      options:
        - label: I can write the improved documentation myself
        - label: I can review and provide feedback on documentation changes
        - label: I can help with proofreading and editing
        - label: I just want to report the issue (no time to contribute)

  - type: checkboxes
    id: checklist
    attributes:
      label: Before Submitting
      description: Please confirm these points
      options:
        - label: I've checked existing documentation issues
          required: true
        - label: I've been specific about what needs improvement
          required: true
        - label: I've explained why this improvement matters
          required: true
        - label: I've considered the student/learner perspective
          required: true

  - type: markdown
    attributes:
      value: |
        ---

        **Thank you for your documentation suggestion!** 🙏

        Good documentation is essential for student learning and community growth. We appreciate you taking the time to help us improve.

        **Next Steps:**
        1. **Review**: Documentation team will assess the suggestion
        2. **Planning**: We'll determine the best approach for implementation
        3. **Assignment**: Contributors can volunteer to help with improvements
        4. **Review Process**: Changes go through review before merging

        **Documentation Priorities:**
        - Setup and installation guides (high priority for new students)
        - Contributing guidelines (helps new contributors get started)
        - API documentation (essential for backend development)
        - Troubleshooting guides (reduces support requests)

        **Get Involved:**
        Documentation improvements are perfect for students learning technical writing! If you're interested in helping, please comment below.

        **Questions?**
        - Email: itcircle@khec.edu.np
        - Faculty Advisor: [Contact Information]
        - Office Hours: Mon-Fri, 10 AM - 5 PM NPT
