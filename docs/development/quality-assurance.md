# Quality Assurance Configuration

## Overview

This document outlines the quality assurance tools and processes used in the IT Circle project to maintain high code quality, security, and reliability.

## 🛠 Frontend Quality Tools

### ESLint Configuration
```javascript
// .eslintrc.js
module.exports = {
  extends: [
    'next/core-web-vitals',
    '@next/eslint-config-next'
  ],
  rules: {
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  },
};
```

### Prettier Configuration
```json
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}
```

### TypeScript Configuration
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 🐍 Backend Quality Tools

### Black Configuration
```toml
# pyproject.toml
[tool.black]
line-length = 88
target-version = ['py311']
include = '\.pyi?$'
extend-exclude = '''
/(
  # directories
  \.eggs
  | \.git
  | \.hg
  | \.mypy_cache
  | \.tox
  | \.venv
  | build
  | dist
)/
'''
```

### Flake8 Configuration
```ini
# .flake8
[flake8]
max-line-length = 88
extend-ignore = E203, W503
exclude =
    .git,
    __pycache__,
    .pytest_cache,
    .tox,
    venv,
    .venv,
    migrations
```

### MyPy Configuration
```ini
# mypy.ini
[mypy]
python_version = 3.11
warn_return_any = True
warn_unused_configs = True
disallow_untyped_defs = True
disallow_incomplete_defs = True
check_untyped_defs = True
disallow_untyped_decorators = True
no_implicit_optional = True
warn_redundant_casts = True
warn_unused_ignores = True
warn_no_return = True
warn_unreachable = True
strict_equality = True

[mypy-django.*]
ignore_missing_imports = True

[mypy-rest_framework.*]
ignore_missing_imports = True
```

## 🧪 Testing Setup

### Frontend Testing
```json
// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    // Handle module aliases (this will be automatically configured for you based on your tsconfig.json paths)
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.ts',
  ],
  coverageReporters: ['text', 'lcov', 'html'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}',
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
```

### Backend Testing
```python
# backend/ITCircle_Website/settings.py
INSTALLED_APPS = [
    # ... other apps
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Third-party apps
    'rest_framework',
    'corsheaders',

    # Local apps
    'users',
    'projects',
    'events',

    # Testing
    'django.contrib.admin',
]

# Testing settings
if 'test' in sys.argv:
    DATABASES['default'] = {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': ':memory:',
    }
```

## 🔒 Security Tools

### Bandit Configuration
```ini
# .bandit.yml
exclude_dirs: ['tests', 'migrations', 'venv']
skips: ['B101', 'B601']  # Skip assert_used, shell_injection for Django
```

### Safety Configuration
```bash
# .safety-policy.yml
security-advisories:
  - GHSA-1234-5678-9012  # Example: known false positive
```

### npm audit Configuration
```bash
# .nsprc
audit-level: moderate
exclude-packages:
  - old-package-with-known-issue
```

## 📊 Code Coverage

### Coverage Goals
- **Frontend**: 80% overall coverage
- **Backend**: 85% overall coverage
- **Critical paths**: 90% coverage

### Coverage Reports
- Generated after each CI run
- Stored as artifacts for 30 days
- Published to codecov or similar service

## 🚨 CI/CD Quality Gates

### Frontend Quality Gates
- ✅ ESLint: No errors, warnings allowed in CI
- ✅ TypeScript: No type errors
- ✅ Tests: All tests pass, minimum 80% coverage
- ✅ Build: Production build succeeds
- ✅ Security: No high-severity vulnerabilities

### Backend Quality Gates
- ✅ Black: Code formatting passes
- ✅ Flake8: No linting errors
- ✅ MyPy: No type checking errors
- ✅ Tests: All tests pass, minimum 85% coverage
- ✅ Bandit: No high-severity security issues
- ✅ Safety: No known vulnerabilities in dependencies

## 🔧 Development Workflow

### Pre-commit Hooks
```yaml
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.4.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
      - id: check-added-large-files

  - repo: https://github.com/psf/black
    rev: 23.7.0
    hooks:
      - id: black
        language_version: python3.11

  - repo: https://github.com/pycqa/flake8
    rev: 6.0.0
    hooks:
      - id: flake8

  - repo: https://github.com/pre-commit/mirrors-eslint
    rev: v8.45.0
    hooks:
      - id: eslint
        files: \.(js|jsx|ts|tsx)$
        args: [--fix]
```

### VS Code Settings
```json
// .vscode/settings.json
{
  "python.defaultInterpreterPath": "./backend/venv/bin/python",
  "python.linting.enabled": true,
  "python.linting.flake8Enabled": true,
  "python.linting.blackEnabled": true,
  "python.formatting.provider": "black",
  "python.testing.pytestEnabled": true,
  "python.testing.pytestArgs": [
    "backend"
  ],
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## 📈 Monitoring and Metrics

### Code Quality Metrics
- **Cyclomatic Complexity**: Track method complexity
- **Code Duplication**: Detect repeated code patterns
- **Technical Debt**: Measure code maintainability
- **Code Churn**: Monitor frequently changing files

### Performance Metrics
- **Bundle Size**: Track JavaScript bundle sizes
- **Load Time**: Monitor page load performance
- **API Response Time**: Track backend performance
- **Error Rates**: Monitor application errors

## 🎯 Best Practices

### Code Reviews
- ✅ At least one approval required for all PRs
- ✅ Security-sensitive changes require two approvals
- ✅ All PRs must pass automated checks
- ✅ Documentation updates required for new features

### Quality Assurance Process
1. **Development**: Write tests alongside features
2. **Local Testing**: Run full test suite before pushing
3. **CI/CD**: Automated quality gates in pipeline
4. **Code Review**: Manual review by maintainers
5. **Security Scan**: Automated security checks
6. **Performance Check**: Ensure no performance regressions

## 📚 Resources

### Documentation
- [Django Testing Guide](https://docs.djangoproject.com/en/stable/topics/testing/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Black Code Style](https://black.readthedocs.io/en/stable/)

### Tools
- [Pre-commit](https://pre-commit.com/) - Git hooks framework
- [Codecov](https://codecov.io/) - Coverage reporting
- [Snyk](https://snyk.io/) - Security scanning
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) - Performance monitoring

---

*This quality assurance configuration ensures high code quality and reliability for the IT Circle project. Last updated: 2025-10-01*
