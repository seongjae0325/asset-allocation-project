# asset-allocation-project (자산배분 백테스트 페이지)

## 프로젝트 실행 방법


### `1. yarn`
install packages

### `2. yarn start`
Runs the app in the development mode.

-----------------------------------------------------------------------------
## 사용된 라이브러리
| Name | License |
|---|---|
| [recoil](https://github.com/facebookexperimental/Recoil) | [MIT License](http://opensource.org/licenses/MIT) |
| [mui](https://github.com/mui/material-ui) | [MIT License](http://opensource.org/licenses/MIT) |
| [immer](https://github.com/immerjs/immer) | [MIT License](http://opensource.org/licenses/MIT) |
| [react-helmet-async](https://github.com/staylor/react-helmet-async) | [MIT License](http://opensource.org/licenses/MIT) |
| [react-virtualized](https://github.com/bvaughn/react-virtualized) | [MIT License](http://opensource.org/licenses/MIT) |
| [react-router-dom](https://github.com/remix-run/react-router) | [MIT License](http://opensource.org/licenses/MIT) |

-----------------------------------------------------------------------------
## 디렉토리 구조
```📦 src
 ┣ 📂 Components
 ┃ ┣ 📜 DatePicker.jsx
 ┃ ┗ 📜 Page.jsx
 ┣ 📂 layout
 ┃ ┣ 📂 Footer
 ┃ ┃ ┗ 📜 index.jsx
 ┃ ┗ 📂 Header
 ┃ ┃ ┣ 📂 NavBar
 ┃ ┃ ┃ ┣ 📜 MenuBar.jsx
 ┃ ┃ ┃ ┣ 📜 SigninBar.jsx
 ┃ ┃ ┃ ┗ 📜 index.jsx
 ┃ ┃ ┣ 📜 EventBanner.jsx
 ┃ ┃ ┣ 📜 StrategyNameBar.jsx
 ┃ ┃ ┗ 📜 index.jsx
 ┣ 📂 pages
 ┃ ┗ 📂 AssetAllocation
 ┃ ┃ ┣ 📂 Daa
 ┃ ┃ ┃ ┗ 📜 index.jsx
 ┃ ┃ ┣ 📂 Dual
 ┃ ┃ ┃ ┗ 📜 index.jsx
 ┃ ┃ ┣ 📂 Static
 ┃ ┃ ┃ ┗ 📜 index.jsx
 ┃ ┃ ┣ 📂 Vaa
 ┃ ┃ ┃ ┗ 📜 index.jsx
 ┃ ┃ ┣ 📜 AssetAllocationSelect.jsx
 ┃ ┃ ┣ 📜 BacktestRunForm.jsx
 ┃ ┃ ┗ 📜 index.jsx
 ┣ 📂 recoil
 ┃ ┗ 📜 allocationAtom.js
 ┣ 📂 routes
 ┃ ┗ 📜 index.jsx
 ┣ 📂 theme
 ┃ ┣ 📜 globalStyles.js
 ┃ ┗ 📜 index.jsx
 ┣ 📂 utils
 ┃ ┣ 📜 assetAllocationConfig.js
 ┃ ┣ 📜 formatDate.js
 ┃ ┣ 📜 layoutConfig.js
 ┃ ┗ 📜 mockData.json
 ┣ 📜 App.jsx
 ┗ 📜 index.js ```