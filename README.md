# ESLint Formatter Action

Automatically runs ESLint and formats your code in GitHub Actions.

## Usage

```yaml
- uses: tenderblowgu/my-lint-action@v1
  with:
    working-directory: './src'
    fix: 'true'
    token: ${{ github.token }}
```

## Inputs

| Input | Description | Required | Default |
|-------|-------------|----------|---------|
| `working-directory` | Directory to lint | No | `.` |
| `fix` | Auto-fix issues | No | `true` |
| `token` | GitHub token | No | `github.token` |
