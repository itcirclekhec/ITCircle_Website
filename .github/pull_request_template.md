---
name: 🚀 Pull Request
description: Submit a pull request for review
title: ""
labels: []
assignees: []
body:
  - type: markdown
    attributes:
      value: |
        **Thank you for your contribution!** 🚀

        Please fill out this template to help reviewers understand your changes and ensure a smooth review process.

        **Before submitting:**
        - Ensure your branch is up to date with the latest main branch
        - Run tests and linting checks locally
        - Update documentation if needed
        - Add appropriate labels to your PR

  - type: input
    id: title
    attributes:
      label: PR Title
      description: A clear, concise title for your pull request (this will be auto-filled but you can edit it)
      placeholder: "feat: add project filtering functionality"
    validations:
      required: true

  - type: dropdown
    id: type
    attributes:
      label: Type of Change
      description: What type of change are you making?
      options:
        - 🐛 Bug Fix
        - ✨ Feature
        - 📚 Documentation
        - 🎨 Style/UI
        - 🔧 Configuration
        - ♻️ Refactor
        - 🧪 Test
        - 🔒 Security
        - 🚀 Performance
        - 📦 Dependencies
    validations:
      required: true

  - type: textarea
    id: description
    attributes:
      label: Description
      description: Describe what your PR does and why it's needed
      placeholder: |
        **What does this PR do?**
        - Adds a new project filtering system to the frontend
        - Allows users to filter projects by technology stack, category, and skill level
        - Improves project discoverability for students

        **Why is this needed?**
        - Students currently have difficulty finding relevant projects
        - This addresses the feature request in issue #123
        - Improves overall user experience and engagement

        **How does it work?**
        - Adds filter state management in React
        - Updates API calls to include filter parameters
        - Implements responsive filter UI components
    validations:
      required: true

  - type: textarea
    id: changes
    attributes:
      label: Changes Made
      description: List the specific files and changes you made
      placeholder: |
        **Files Modified:**
        - `frontend/src/components/ProjectFilter.tsx` (new file)
        - `frontend/src/pages/ProjectsPage.tsx` (updated filtering logic)
        - `backend/projects/api.py` (added filter endpoints)
        - `backend/projects/models.py` (added filter fields)

        **Key Changes:**
        1. Added technology stack field to Project model
        2. Created reusable filter components
        3. Updated API to support filtering parameters
        4. Added responsive mobile filter UI
    validations:
      required: true

  - type: textarea
    id: testing
    attributes:
      label: Testing
      description: How did you test your changes? What should reviewers test?
      placeholder: |
        **Testing Performed:**
        - ✅ Manual testing on different screen sizes
        - ✅ Tested filter combinations work correctly
        - ✅ Verified API endpoints return correct filtered results
        - ✅ Ran existing test suite to ensure no regressions

        **Testing Instructions for Reviewers:**
        1. Navigate to the projects page
        2. Try different filter combinations
        3. Test on mobile and desktop
        4. Verify URL parameters update correctly
        5. Check that filtered results are accurate
    validations:
      required: true

  - type: textarea
    id: related_issues
    attributes:
      label: Related Issues
      description: Link any related issues or feature requests
      placeholder: |
        - Closes #123 (main feature request)
        - Related to #456 (similar filtering functionality)
        - Addresses feedback from issue #789
    validations:
      required: false

  - type: textarea
    id: breaking_changes
    attributes:
      label: Breaking Changes (if any)
      description: Are there any breaking changes that users should be aware of?
      placeholder: |
        **Breaking Changes:**
        - Project model now requires technology_stack field (migration needed)
        - Old project URLs without filters may need updating

        **Migration Steps:**
        1. Run `python manage.py makemigrations`
        2. Run `python manage.py migrate`
        3. Update existing projects to include technology_stack
    validations:
      required: false

  - type: textarea
    id: additional_info
    attributes:
      label: Additional Information
      description: Any other information reviewers should know?
      placeholder: |
        **Design Decisions:**
        - Used existing UI component patterns for consistency
        - Chose dropdown filters over checkboxes for mobile UX
        - Implemented debounced API calls to reduce server load

        **Future Considerations:**
        - Could add more filter options (date range, project status)
        - Might need pagination for large filtered result sets
        - Could implement saved filter preferences for users
    validations:
      required: false

  - type: checkboxes
    id: checklist
    attributes:
      label: PR Checklist
      description: Please ensure all items are completed before submitting
      options:
        - label: I have read the Contributing Guidelines
          required: true
        - label: My code follows the project's coding standards
          required: true
        - label: I have tested my changes thoroughly
          required: true
        - label: I have updated documentation as needed
          required: true
        - label: I have added tests for new functionality
          required: false
        - label: All existing tests pass
          required: true
        - label: My branch is up to date with the latest main branch
          required: true
        - label: I have requested reviews from appropriate maintainers
          required: true

  - type: markdown
    attributes:
      value: |
        ---

        **Thank you for your contribution!** 🎉

        **What happens next:**
        1. **Automated Checks**: GitHub Actions will run tests and linting
        2. **Reviewer Assignment**: Maintainers will review your PR
        3. **Feedback**: You may receive comments requesting changes
        4. **Approval**: Once approved, your PR will be merged
        5. **Celebration**: Your contribution becomes part of IT Circle!

        **Need Help?**
        - Check our [Contributing Guide](CONTRIBUTING.md) for detailed guidelines
        - Ask questions in the PR comments
        - Contact us at itcircle@khec.edu.np for additional support

        **Response Times:**
        - Initial review: 1-3 days
        - Follow-up reviews: 1-2 days
        - Complex PRs may take longer for thorough review

        **Tips for Faster Review:**
        - Keep PRs focused on a single feature or fix
        - Include clear testing instructions
        - Reference related issues in your description
        - Be responsive to reviewer feedback

        ---

        *Happy contributing! 🚀*
