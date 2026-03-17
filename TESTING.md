# Testing Guide

## Quick Start

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

## Test Structure

The project uses three types of tests:

### 1. Unit Tests
Test individual components and functions in isolation.

**Location:** Co-located with source files using `.test.ts` or `.test.tsx` suffix

**Example:**
```typescript
import { render, screen } from '@/lib/test-utils'
import { ProgramCard } from './ProgramCard'

describe('ProgramCard', () => {
  it('should display program name', () => {
    render(<ProgramCard name="Selection Prep" />)
    expect(screen.getByText('Selection Prep')).toBeInTheDocument()
  })
})
```

### 2. Property-Based Tests
Test universal properties across many generated inputs using fast-check.

**Example:**
```typescript
import * as fc from 'fast-check'
import { runPropertyTest, emailArbitrary } from '@/lib/pbt-utils'

describe('Email validation', () => {
  it('should validate all emails contain @', () => {
    runPropertyTest(
      fc.property(emailArbitrary(), (email) => {
        return email.includes('@')
      })
    )
  })
})
```

### 3. Integration Tests
Test complete user flows and page compositions.

**Example:**
```typescript
import { render, screen } from '@/lib/test-utils'
import HomePage from '@/app/page'

describe('Home Page', () => {
  it('should render all sections', () => {
    render(<HomePage />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByText(/tactical aesthetics/i)).toBeInTheDocument()
  })
})
```

## Available Utilities

### Test Utilities (`lib/test-utils.tsx`)
- Custom `render()` function with provider wrappers
- All React Testing Library exports

### PBT Utilities (`lib/pbt-utils.ts`)
Pre-configured arbitraries for domain types:
- `programIdArbitrary()` - Program IDs
- `emailArbitrary()` - Email addresses
- `screenWidthArbitrary()` - Viewport widths
- `tacticalColorArbitrary()` - Brand colors
- `runPropertyTest()` - Helper to run property tests

### Test Helpers (`lib/test-helpers.ts`)
Common test patterns:
- `setViewportSize()` - Simulate viewport changes
- `setViewportPreset()` - Use mobile/tablet/desktop presets
- `mockIntersectionObserver()` - Mock intersection observer
- `mockMatchMedia()` - Mock media queries
- `waitForAnimations()` - Wait for animations to complete

## Configuration Files

- `jest.config.js` - Jest configuration with Next.js integration
- `jest.setup.js` - Global test setup and mocks
- `lib/__tests__/README.md` - Detailed testing documentation

## Best Practices

1. **Use semantic queries** - Prefer `getByRole`, `getByLabelText` over `getByTestId`
2. **Test behavior, not implementation** - Focus on what users see and do
3. **Write property tests for invariants** - If something should always be true, use PBT
4. **Keep tests simple** - One assertion per test when possible
5. **Use descriptive names** - Test names should explain what is being verified

## Coverage Requirements

Minimum coverage thresholds:
- Branches: 70%
- Functions: 70%
- Lines: 70%
- Statements: 70%

## Troubleshooting

### Tests are slow
Reduce property test runs:
```typescript
runPropertyTest(property, { numRuns: 50 })
```

### Animation tests failing
Use the animation helper:
```typescript
await waitForAnimations()
```

### Responsive tests not working
Set viewport explicitly:
```typescript
setViewportPreset('mobile')
```

## Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [fast-check Documentation](https://fast-check.dev/)
- [Testing Library Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
