import { NAV_BAR_WIDTH } from "../../../../constants"
import { TopBar } from "."

export const PageContainer = ({ children }: any) => {
  return (
    <div className="d-flex flex-column h-full" style={{ marginLeft: NAV_BAR_WIDTH }}>
      <div className="container py-4">
        <TopBar />
      </div>
      <hr className="m-0" />
      <div className="flex-1 overflow-auto pt-4">
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  )
}
