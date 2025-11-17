# Day 1 Action Plan - Foundation Fixes

**Date:** 2025-11-18  
**Phase:** PI-0 Foundation Reset  
**Owner:** Next.js Performance Agent + Security Agent  
**Goal:** Achieve clean build and secure baseline

## Objectives

1. Fix build blocker (Google Fonts network restriction)
2. Address critical and high severity vulnerabilities
3. Clean up ESLint errors and warnings
4. Verify successful production build
5. Document build configuration

## Current State

### Build Status
- ❌ **Blocked**: Google Fonts download fails due to network restrictions
- Error: `getaddrinfo ENOTFOUND fonts.googleapis.com`
- Affects: `src/app/layout.tsx` - Geist and Geist Mono fonts

### Security Status
- ⚠️ **10 vulnerabilities** detected
  - 1 critical
  - 1 high
  - 3 moderate
  - 5 low

### Code Quality
- ✅ TypeScript: Compiling cleanly (0 errors)
- ⚠️ ESLint: 1 error, 6 warnings
  - Error: `src/components/todos/todo-list-view.tsx:25:61` - Unexpected any

## Action Items

### 1. Fix Font Loading Issue

**Problem:** Next.js trying to fetch Google Fonts at build time, blocked by network

**Solution Options:**
1. **Option A (Recommended)**: Use local font files
   - Download Geist fonts to `/public/fonts/`
   - Update font configuration to use local files
   - Faster load times, no external dependency

2. **Option B**: Use system fonts with fallback
   - Configure `next/font` with fallback fonts
   - Update to use system fonts temporarily

3. **Option C**: Disable font optimization for now
   - Use standard font loading
   - Revisit with proper CDN setup later

**Implementation Plan:**
```typescript
// Option A: Local fonts (Recommended)
// 1. Add fonts to /public/fonts/
// 2. Update src/app/layout.tsx:

import localFont from 'next/font/local'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})
```

**Decision:** Create ADR-002 for font loading strategy

### 2. Address Security Vulnerabilities

**Action:** Run `npm audit fix` to automatically resolve issues

**Steps:**
1. Run `npm audit` to see details
2. Run `npm audit fix` for automatic fixes
3. Review changes
4. For critical/high that can't be auto-fixed:
   - Check for manual updates
   - Document any remaining issues
   - Create remediation plan

**Target:** Zero critical and high vulnerabilities

### 3. Fix ESLint Issues

**Error to Fix:**
```typescript
// src/components/todos/todo-list-view.tsx:25:61
// Error: Unexpected any. Specify a different type.
```

**Action:** Replace `any` with proper TypeScript type

**Warnings to Address:**
- Unused imports: Remove or use them
- Unused variables: Clean up or prefix with `_`

**Target:** 0 errors, <3 warnings acceptable

### 4. Verify Build

**Steps:**
1. After fixes, run `npm run build`
2. Verify successful completion
3. Check bundle size output
4. Test `npm run start` locally (if possible)

**Success Criteria:**
- ✅ Build completes without errors
- ✅ No font loading errors
- ✅ Bundle generated successfully

### 5. Documentation

**Create ADR-002: Font Loading Strategy**

Document:
- Problem: Network restrictions blocking Google Fonts
- Considered options
- Decision made
- Consequences
- Implementation details

## Expected Outcomes

### By End of Day 1

- [x] Clean production build (`npm run build` succeeds)
- [x] Zero critical vulnerabilities
- [x] Zero high vulnerabilities
- [x] ESLint clean (0 errors)
- [x] ADR-002 created and committed
- [x] Build configuration documented

### Metrics to Capture

- Before/after vulnerability count
- Build time
- Bundle size (baseline for Day 2 comparison)
- TypeScript compilation time

## Next Steps (Day 2)

With clean build in place:
1. Install @next/bundle-analyzer
2. Run comprehensive Lighthouse audits
3. Measure baseline performance
4. Document baseline metrics

## Rollback Plan

If issues arise:
- Font fixes: Revert to original, use fallback fonts temporarily
- Dependencies: `git checkout package-lock.json && npm install`
- Code changes: Git revert specific commits

## Success Checklist

- [ ] Google Fonts issue resolved
- [ ] Build passes successfully
- [ ] npm audit shows 0 critical, 0 high vulnerabilities
- [ ] ESLint error fixed
- [ ] ESLint warnings reduced
- [ ] ADR-002 created
- [ ] Changes committed and pushed
- [ ] Ready for Day 2 baseline measurement

---

**Document Owner:** CRM Program Orchestrator  
**Created:** 2025-11-17  
**Status:** Ready for Execution  
**Next:** Day 2 - Baseline Metrics & Measurement Setup
