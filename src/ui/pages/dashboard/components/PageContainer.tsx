import { NAV_BAR_WIDTH } from "../../../../constants"
import { TopBar } from "."

export const PageContainer = ({ children }: any) => {
  return (
    <div className="d-flex flex-column h-full" style={{ marginLeft: NAV_BAR_WIDTH }}>
      <TopBar />
      <hr />
      <div className="flex-1 overflow-auto">
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  )
}
