name: 🐛 Bug Report
description: Report a bug or issue with the IT Circle website
title: "[Bug]: "
labels: ["bug", "needs-triage"]
assignees: []
body:
  - type: markdown
    attributes:
      value: |
        ## 🐛 Bug Report

        Thank you for taking the time to report a bug!  
        Your detailed feedback helps us improve the IT Circle website faster and more effectively.

        ### ⚡ Before You Submit:
        - Check **[existing issues](../issues)** to avoid duplicates  
        - Reproduce the bug on the **latest version** of the site  
        - Provide **clear steps**, **expected vs actual behavior**, and any **error details**  

        ---
        
  - type: input
    id: description
    attributes:
      label: Bug Description
      description: Provide a concise summary of the issue.
      placeholder: "Example: Clicking the 'Projects' page results in a 500 error."
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: Steps to Reproduce
      description: Step-by-step instructions to reproduce the bug.
      placeholder: |
        Example:
        1. Go to 'Projects' page
        2. Click 'Load More'
        3. Observe 500 error in console
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: Expected Behavior
      description: Describe what you expected to happen.
      placeholder: "The Projects page should load additional items without errors."
    validations:
      required: true

  - type: textarea
    id: actual
    attributes:
      label: Actual Behavior
      description: Describe what actually happened.
      placeholder: "Received 500 Internal Server Error and the page didn’t load."
    validations:
      required: true

  - type: input
    id: url
    attributes:
      label: URL (if applicable)
      description: The specific page where the bug occurs.
      placeholder: "https://itcircle.khec.edu.np/projects"

  - type: dropdown
    id: browser
    attributes:
      label: Browser (if frontend issue)
      description: Which browser did you use?
      options:
        - Chrome
        - Firefox
        - Safari
        - Edge
        - Other (specify in Additional Info)
    validations:
      required: false

  - type: dropdown
    id: device
    attributes:
      label: Device Type
      description: Which device were you using?
      options:
        - Desktop
        - Laptop
        - Tablet
        - Mobile Phone
        - Other (specify in Additional Info)
    validations:
      required: false

  - type: input
    id: os
    attributes:
      label: Operating System
      description: Include your OS and version if relevant.
      placeholder: "e.g., Windows 11, macOS 14.0, Ubuntu 22.04"

  - type: textarea
    id: additional
    attributes:
      label: Additional Information
      description: Include any extra details that might help us debug.
      placeholder: |
        - Screenshots or screen recordings
        - Error messages from console
        - Network tab errors
        - Relevant logs or stack traces
        - Steps you’ve tried to troubleshoot

  - type: dropdown
    id: priority
    attributes:
      label: Priority Level
      description: How severe is the issue?
      options:
        - 🔴 Critical – Site-breaking or security vulnerability
        - 🟠 High – Major feature not working
        - 🟡 Medium – Minor feature issue
        - 🔵 Low – Cosmetic or minor inconvenience
    validations:
      required: true

  - type: checkboxes
    id: checklist
    attributes:
      label: Submission Checklist
      description: Confirm you’ve completed these steps:
      options:
        - label: I checked existing issues to avoid duplicates
          required: true
        - label: I provided clear steps to reproduce
          required: true
        - label: I included expected vs actual behavior
          required: true
        - label: I’m willing to help test/debug if needed
          required: false

  - type: markdown
    attributes:
      value: |
        ---
        ✅ **Thanks for your report!**

        Our maintainers will review your submission soon.

        ### ⏳ Review Timeframes:
        - 🔴 Critical: within **24 hours**
        - 🟠 High: within **2–3 days**
        - 🟡 Medium / 🔵 Low: within **1 week**

        🛠️ Student contributors are encouraged to pick up bug fixes — a great way to learn and contribute!  
        Comment below if you’re interested, and a maintainer will help guide you.

        ---
        📬 **Need Help?**  
        - Email: **itcircle@khec.edu.np**  
        - Faculty Advisor: _[Contact Info]_  
        - Office Hours: **Mon–Fri, 10 AM – 5 PM NPT**
