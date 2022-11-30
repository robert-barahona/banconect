import SwaggerUI from "swagger-ui-react"
import swaggerJsonObject from "../../../assets/jsons/api_doc.json"

export const ApiDocPage = () => {
  return <SwaggerUI spec={swaggerJsonObject} />
}
