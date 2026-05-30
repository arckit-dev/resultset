# [2.0.0](https://github.com/arckit-dev/resultset/compare/v1.1.0...v2.0.0) (2026-05-30)


* feat!: replace Effect Schema branded models with native branded types ([3003d42](https://github.com/arckit-dev/resultset/commit/3003d42fc46556121a5b272661d9b2a54b0834aa))


### BREAKING CHANGES

* models are no longer Effect Schemas — the `.schema` property
and `Model.TypeOf` are removed. Construct via Page(n) as before; branded types
are now number & { __brand } / string & { __brand }.

# [1.1.0](https://github.com/arckit-dev/resultset/compare/v1.0.1...v1.1.0) (2026-05-09)


### Features

* add search type ([754bd21](https://github.com/arckit-dev/resultset/commit/754bd21dc39129d0b62c22d5578b47d695c8cb21))

## [1.0.1](https://github.com/arckit-dev/resultset/compare/v1.0.0...v1.0.1) (2026-04-19)


### Bug Fixes

* disable hash in tsdown output for stable DTS filenames ([5a8d3f7](https://github.com/arckit-dev/resultset/commit/5a8d3f79e8cde7d77d18ee18e3d1f301afce85f5))

# 1.0.0 (2026-04-19)


### Features

* add pagination, filtering and result set utilities ([15ccbe5](https://github.com/arckit-dev/resultset/commit/15ccbe59b2e84c7906a7c8de8fa62c415ee30321))
