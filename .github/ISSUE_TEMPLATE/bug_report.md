---
name: 🐛 Bug Report
description: Report a bug or issue with the IT Circle website
title: "[Bug]: "
labels: ["bug", "needs-triage"]
assignees: []
body:
  - type: markdown
    attributes:
      value: |
        **Thank you for reporting a bug!** 🐛

        Please fill out this form to help us understand and fix the issue. The more details you provide, the faster we can resolve it.

        **Before submitting:**
        - Check if the bug has already been reported
        - Try reproducing the issue on the latest version
        - Include steps to reproduce, expected vs actual behavior

  - type: input
    id: description
    attributes:
      label: Bug Description
      description: A clear and concise description of what the bug is
      placeholder: "When I click on the projects page, I get a 500 error..."
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: Steps to Reproduce
      description: Step-by-step instructions to reproduce the bug
      placeholder: |
        1. Go to '...'
        2. Click on '....'
        3. Scroll down to '....'
        4. See error
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: Expected Behavior
      description: What should happen when following the steps above?
      placeholder: "The projects should load and display properly without errors"
    validations:
      required: true

  - type: textarea
    id: actual
    attributes:
      label: Actual Behavior
      description: What actually happens when following the steps above?
      placeholder: "I see a 500 Internal Server Error page"
    validations:
      required: true

  - type: input
    id: url
    attributes:
      label: URL (if applicable)
      description: The specific URL where the bug occurs
      placeholder: "https://itcircle.khec.edu.np/projects"

  - type: dropdown
    id: browser
    attributes:
      label: Browser (if frontend issue)
      description: Which browser were you using?
      options:
        - Chrome
        - Firefox
        - Safari
        - Edge
        - Other (please specify in Additional Info)
    validations:
      required: false

  - type: dropdown
    id: device
    attributes:
      label: Device Type
      description: What type of device were you using?
      options:
        - Desktop
        - Laptop
        - Tablet
        - Mobile Phone
        - Other (please specify in Additional Info)
    validations:
      required: false

  - type: input
    id: os
    attributes:
      label: Operating System
      description: Your operating system and version
      placeholder: "Windows 11, macOS 14.0, Ubuntu 22.04, etc."

  - type: textarea
    id: additional
    attributes:
      label: Additional Information
      description: Any other information that might help us debug this issue
      placeholder: |
        - Screenshots (drag and drop images here)
        - Error messages from browser console
        - Network tab errors
        - Server logs if available
        - Steps you've already tried to fix it

  - type: dropdown
    id: priority
    attributes:
      label: Priority Level
      description: How severe is this bug?
      options:
        - 🔴 Critical (site-breaking, security issue)
        - 🟠 High (major feature not working)
        - 🟡 Medium (minor feature issue)
        - 🔵 Low (cosmetic or minor inconvenience)
    validations:
      required: true

  - type: checkboxes
    id: checklist
    attributes:
      label: Before Submitting
      description: Please confirm you've done these steps
      options:
        - label: I have checked existing issues to avoid duplicates
          required: true
        - label: I have provided clear steps to reproduce
          required: true
        - label: I have included expected vs actual behavior
          required: true
        - label: I am willing to help debug or test fixes if needed
          required: false

  - type: markdown
    attributes:
      value: |
        ---

        **Thank you for your bug report!** 🙏

        Our team will review this issue and get back to you as soon as possible. Student contributors are encouraged to work on bug fixes - this is a great learning opportunity!

        If you're interested in helping fix this bug, please comment below and a maintainer will guide you through the process.

        **Response Times:**
        - Critical bugs: Reviewed within 24 hours
        - High priority: Reviewed within 2-3 days
        - Medium/Low priority: Reviewed within 1 week

        **Need Help?** Contact us at:
        - Email: itcircle@khec.edu.np
        - Faculty Advisor: [Contact Information]
        - IT Circle Office Hours: Mon-Fri, 10 AM - 5 PM NPT
