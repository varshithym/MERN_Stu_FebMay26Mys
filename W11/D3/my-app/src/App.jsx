import './App.css';

import { ManagingApiState } from "./components/p1";
import { UseEffectLifeCycle } from "./components/p2";
import { AxiosLifeCycle } from "./components/p3";
import { CRUDoperation } from "./components/p4";
import { PaginationCaching } from './components/P5';
import { UploadErrorBoundary } from './components/p6';

function App() {
  return (
    <>
      {/* <ManagingApiState /> */}

      {/* <UseEffectLifeCycle /> */}
      {/* <AxiosLifeCycle/> */}
      {/* <CRUDoperation/> */}
      {/* <PaginationCaching/> */}
      <UploadErrorBoundary/>

    </>
  );
}

export default App;