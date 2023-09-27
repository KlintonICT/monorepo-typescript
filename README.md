#### Initialize package.json in each monorepo package

```bash
npm init --scope @kt-package --workspace ./packages/ui -y
npm init --scope @kt-package --workspace ./packages/utils -y
```

---

#### Installing dependencies in each package

- install moment package in ui package

```bash
npm i moment --workspace ./packages/ui
```

---

#### Installing monorepo package in another repo package

- install @kt-package/utils package in ui package

```bash
npm i @kt-package/utils --workspace ./packages/ui
```

---

#### Installing monorepo packages in root project

```bash
npm install @kt-package/utils @kt-package/ui
```
